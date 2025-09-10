---
layout: post
title: "Wonder-Server: Public API gateway powering pickups, feeds, and growth"
date: 2025-09-10
tags: [shopify, api, nodejs, graphql, infrastructure, integrations]
authors:
  - name: "Gabe (Gabriel) Nuñez"
    role: "Lead Developer (2019–2021)"
    url: https://www.linkedin.com/in/gabenunez/
  - name: "Yong Wan Song"
    role: "Software Engineer (2021–present)"
    url: https://github.com/yongwansong
  - name: "Daniel Carroll"
    role: "Software Engineer (2021–present)"
    url: https://github.com/DCarrollUSMC
  - name: "Junkuk (Mason) Kim"
    role: "DevOps Engineer, Zinus"
    url: https://www.linkedin.com/in/junkukkim/
---

Zinus Wonder-Server (WAPI) is our public-facing API layer that brokers trusted access between external systems and our Shopify stores. It centralizes cross-cutting concerns like HTTPS enforcement, CORS, rate limiting, authentication/authorization, and integrates with external providers for email, growth, and compliance workflows.

### Highlights
- Enforces HTTPS, CORS allowlist per domain, and rate limiting in production
- JWT-protected private routes with scope-based authorization
- Shopify Admin GraphQL integration for order reads/writes
- LoadUp GraphQL integration for California mattress/box-spring pickups
- Growth utilities: Klaviyo subscription and back-in-stock proxy
- Operational utilities: product feed, eBay integration, email relay

### History & ownership
- Oct 2019 → Oct 2021: Initial build and maintenance by Gabe (Gabriel) Nuñez.
- Since Oct 2021: Maintenance and enhancements by Yong Wan Song and Daniel Carroll.
- DevOps: Junkuk (Mason) Kim manages infrastructure and operations.

### Architecture

<div class="mermaid">
flowchart LR
  A[Storefront/Shogun] --> B[Ingress HTTP]
  C[Shopify Webhooks] --> B
  D[Ops tools] --> B

  B --> E[CORS allowlist]
  E --> F[Rate limit 15m 300IP]
  F --> G[Public routes]
  F --> H[Private routes]
  H --> I[express-jwt]
  I --> J[checkScopeAccess]

  G --> G1[GET /api/product-feed]
  G --> G2[POST /api/klaviyo/back-in-stock]
  G --> G3[POST /api/klaviyo/subscribe]
  G --> G4[POST /api/cj-track]
  G --> G5[POST /api/rebuy-proxy]
  G --> G6[POST /api/email]
  G --> G7[GET /]
  G --> G8[GET /api/ebay]

  J --> H1[POST /api/pickup/schedule]
  J --> H2[POST /api/pickup/cancel]
  J --> H3[POST /api/pickup/refund]

  H1 --> L[LoadUp GraphQL]
  H2 --> L
  H3 --> L
  H1 --> S[Shopify Admin GraphQL]
  H3 --> S
  G1 --> S
  G2 --> K[Klaviyo API]
  G3 --> K
  G4 --> CJ[CJ Affiliate]
  G5 --> R[Rebuy API]
  G6 --> M[Nodemailer]
  G8 --> EBY[eBay API]
</div>

### Pickup flow (sequence)

<div class="mermaid">
sequenceDiagram
  participant SF as Storefront/Shogun
  participant WAPI as Wonder-Server
  participant LoadUp as LoadUp GraphQL
  participant Shopify as Shopify Admin GraphQL

  SF->>WAPI: POST /api/pickup/schedule (order payload)
  WAPI->>WAPI: Count mattress/box-spring items
  alt Pickup required (CA + attribute)
    WAPI->>LoadUp: createPricedScheduleRequest (1..n)
    LoadUp-->>WAPI: scheduleRequest IDs
    WAPI->>Shopify: orderUpdate(customAttributes += LoadUp IDs)
    Shopify-->>WAPI: OK
    WAPI-->>SF: 201 Created (Pickup request generated)
  else Not required
    WAPI-->>SF: 202 Accepted (No pickup required)
  end
</div>

### Request pipeline (production)
1) Trust proxy and force HTTPS
2) Global rate limiting (15m window, 300 req/IP)
3) CORS validation against allowlist (`*.zinus.*`, Shogun, Mellow, etc.)
4) JWT validation for private routes, then scope-check middleware

```12:33:c:/Zinus/Zinus/Wonder-Server/server.js
if (isProduction) {
  app.enable('trust proxy');
  app.use(function (req, res, next) {
    if (req.secure) { return next(); } else { return res.redirect('https://' + req.headers.host + req.url); }
  });
  const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 300 });
  app.use(limiter);
}
```

### Security model
- Public endpoints: health, product feed, some growth endpoints
- Private endpoints: protected by `express-jwt` and `checkScopeAccess([...])`

```1:20:c:/Zinus/Zinus/Wonder-Server/middleware/auth.js
exports.checkScopeAccess = (requiredScopes) => {
  return (req, res, next) => {
    if (isProduction) {
      const token = req.user;
      token.scopes.forEach((scope) => {
        if (requiredScopes.find((requiredScope) => requiredScope === scope)) {
          return next();
        } else {
          return res.status(401).json({ code: '401', error: 'Insufficient permissions' });
        }
      });
    } else { return next(); }
  };
};
```

### Key capabilities

#### 1) California pickup orchestration (LoadUp + Shopify)
- Robust item classifier detects mattresses, box springs, and paired combos, transforming Shopify webhooks into actionable pickup requests.
```12:69:c:/Zinus/Zinus/Wonder-Server/routes/pickup.js
const countPickupItems = (lineItems, quantityKey) => {
  let mattressCount = 0; let boxSpringCount = 0; let mattressBoxCombo = 0;
  lineItems.forEach((item) => {
    const titleIncludes = (text) => item.title.toLowerCase().includes(text);
    if (titleIncludes('box spring')) { boxSpringCount += item[quantityKey]; }
    else if (titleIncludes('mattress') && !titleIncludes('topper') && !titleIncludes('cover') && !titleIncludes('pad')) {
      mattressCount += item[quantityKey];
    }
  });
  if (mattressCount && boxSpringCount) { /* normalize into combos when counts align */ }
  return { mattresses: mattressCount, boxSprings: boxSpringCount, comboCount: mattressBoxCombo, totalCount: mattressCount + boxSpringCount + mattressBoxCombo };
};
```
- Schedule flow: gate by state and order attribute; persist LoadUp IDs back to Shopify for traceability/idempotency.
```71:106:c:/Zinus/Zinus/Wonder-Server/routes/pickup.js
router.post('/schedule', async (req, res) => {
  const { note_attributes, shipping_address, line_items, email, id } = req.body;
  const pickupAttribute = note_attributes.find((a) => a.name === 'Pickup Requested');
  const pickupRequired = pickupAttribute && pickupAttribute.value.toLowerCase() === 'true';
  if ((shipping_address.province === 'California' || shipping_address.province_code === 'CA') && pickupRequired) {
    const pickupItemCount = countPickupItems(line_items, 'quantity');
    const pickupIDs = await generatePickupRequests({ /* address & counts */ });
    await addPickupAttrToOrder({ orderID: id, pickupIDs: pickupIDs.join(',') });
    return res.status(201).json({ code: '201', response: 'Pickup request generated.' });
  } else { return res.status(202).json({ code: '202', response: 'No pickup required.' }); }
});
```
- Refund flow: cancel existing pickups and reschedule with the net quantities.
```180:247:c:/Zinus/Zinus/Wonder-Server/routes/pickup.js
router.post('/refund', async (req, res) => {
  const { refund_line_items: refundedLineItems, order_id: orderID } = req.body;
  if (refundedLineItems.length) {
    const shopifyOrder = await getShopifyOrderInfo(orderID);
    /* derive counts, cancelLoadup, regenerate, update order attr */
    return res.status(201).json({ code: '201', response: 'Cancelled pickup and made new one.' });
  } else {
    return res.status(202).json({ code: '202', response: 'No item refunded.' });
  }
});
```
- LoadUp + Shopify GraphQL clients and mutations.
```7:15:c:/Zinus/Zinus/Wonder-Server/routes/components/pickup/gql.js
exports.loadupGQLclient = (() => {
  const gqlURL = isProduction ? this.loadupProdURL : this.loadupDevURL;
  return new GraphQLClient(gqlURL, { headers: { 'X-Access-Token': process.env.LOADUP_ACCESS_TOKEN } });
})();
```
```17:36:c:/Zinus/Zinus/Wonder-Server/routes/components/pickup/gql.js
exports.createPickupRequest = gql`mutation createPricedScheduleRequest($inputs: CreatePricedScheduleRequestInputs!){ createPricedScheduleRequest(inputs:$inputs){ scheduleRequest{ id total } errorCode } }`;
exports.cancelPickupRequest = gql`mutation cancelScheduleRequest($inputs: CancelScheduleRequestInputs!){ cancelScheduleRequest(inputs:$inputs){ errorCode } }`;
```
```7:15:c:/Zinus/Zinus/Wonder-Server/routes/components/shopify/gql.js
exports.shopifyGQLclient = (() => { /* Admin GraphQL with X-Shopify-Access-Token */ })();
```
```17:29:c:/Zinus/Zinus/Wonder-Server/routes/components/shopify/gql.js
exports.mutateOrder = gql`mutation orderUpdate($input: OrderInput!){ orderUpdate(input:$input){ order{ id } userErrors{ field message } } }`;
```
```31:62:c:/Zinus/Zinus/Wonder-Server/routes/components/shopify/gql.js
exports.orderDetails = gql`query order($id: ID!){ order(id:$id){ name customAttributes{ key value } email fulfillable shippingAddress{ firstName lastName phone address1 address2 city province provinceCode zip } lineItems(first:50){ edges{ node{ title fulfillableQuantity } } } } }`;
```

#### 2) Growth and personalization
- Klaviyo back-in-stock: transparent proxy to the Onsite component API.
```5:12:c:/Zinus/Zinus/Wonder-Server/routes/klaviyo.js
router.post('/back-in-stock', async (req, res) => {
  const response = await axios.post('https://a.klaviyo.com/onsite/components/back-in-stock/subscribe', req.body.data ? req.body.data : new URLSearchParams(req.body).toString());
  return res.json(response.data);
});
```
- Klaviyo marketing consent (bulk create job) with region-aware API key selection (EU vs US) inferred from Origin/Referrer.
```27:56:c:/Zinus/Zinus/Wonder-Server/routes/klaviyo.js
const getKlaviyoKey = () => { /* parse Origin/Referrer; map domain to KLAVIYO_EU_KEY or KLAVIYO_KEY */ };
```
```58:86:c:/Zinus/Zinus/Wonder-Server/routes/klaviyo.js
const headers = { accept:'application/json', revision:'2024-02-15', 'content-type':'application/json', Authorization:`Klaviyo-API-Key ${getKlaviyoKey()}` };
const data = { data: { type:'profile-subscription-bulk-create-job', attributes:{ custom_source:'Web Signup', profiles:{ data:[{ type:'profile', attributes:{ email, subscriptions:{ email:{ marketing:{ consent:'SUBSCRIBED' } } } } }] } }, relationships:{ list:{ data:{ type:'list', id:listId } } } } };
```
- Rebuy personalization proxy: server-side fetch with API key and passthrough, enabling storefront widgets without exposing secrets.
```5:12:c:/Zinus/Zinus/Wonder-Server/routes/rebuy-prox.js
router.get('/', async (req, res) => { const { data_id, product_ids, variant_ids } = req.query; const key = process.env.REBUY_API_KEY; const url = `https://rebuyengine.com/api/v1/custom/id/${data_id}?key=${key}&shopify_product_ids=${product_ids}&shopify_variant_ids=${variant_ids}&metafields=yes`; const response = await axios.get(url); return res.json(response.data); });
```
- CJ Affiliate tracking: 13‑month cookie on the apex domain for cross-subdomain attribution.
```14:21:c:/Zinus/Zinus/Wonder-Server/routes/cj-track.js
res.cookie('cje', cjeventID, { domain: isProduction && '.zinus.com', maxAge: thirteenMonths, httpOnly: false, secure: isProduction ? true : false });
```

#### 3) Product feed generator (Shopify Admin REST)
- Paginates via Link headers, filters non-sellable product types, and materializes variant-level rows with canonical image selection.
```16:56:c:/Zinus/Zinus/Wonder-Server/routes/product-feed.js
for (product of response.data.products) {
  const { body_html, title: productTitle, handle, images, variants, product_type, id: productId } = product;
  if (product_type === 'Protection Plan' || product_type === 'Insurance') { continue; }
  if (variants.length > 1) {
    variants.forEach((variant) => {
      let variantImageId = variant.image_id; let variantImage = null;
      if (variantImageId) { const variantImageObj = images.find((image) => image.id === variantImageId); variantImage = variantImageObj?.src; }
      else if (!variantImageId && images.length > 0) { variantImage = images[0]?.src; }
      productFeed.push({ title: productId !== 7269091967039 ? `${productTitle} - ${variant.title}` : `${variant.title}`, id: variant.id, inventory_quantity: variant.inventory_quantity, description: convert(body_html), price: parseFloat(variant.price), link: `https://www.zinus.com/${product_type}/${handle}?variant=${variant.id}`, inventory_policy: 1, categories: [product_type], image_link: variantImage });
    });
  } else {
    productFeed.push({ title: productTitle, id: variants[0].id, description: convert(body_html), inventory_quantity: variants[0].inventory_quantity, price: parseFloat(variants[0].price), link: `https://www.zinus.com/${product_type}/${handle}`, inventory_policy: 1, categories: [product_type], image_link: (images.length > 0 && images[0].src) || null });
  }
}
```

#### 4) Secure email relay with hCaptcha + locale routing
- Validates `hcaptcha` token, routes to country-specific support inboxes, handles attachments via Multer, and sets Reply-To to the customer email.
```18:25:c:/Zinus/Zinus/Wonder-Server/routes/email.js
await axios.post('https://hcaptcha.com/siteverify', { secret: process.env.HCAPTCHA_SECRET, response: captchaToken });
```
```27:62:c:/Zinus/Zinus/Wonder-Server/routes/email.js
const originStoreUrl = req.header('Origin').split('www.')[1];
switch (originStoreUrl) { case 'zinus.jp': toEmail = 'customerservice-jp@zinus.com'; break; case 'zinus.com.au': toEmail = 'australianorders@zinus.com'; break; case 'zinus.fr': case 'zinus.com.de': case 'zinus.co.uk': toEmail = 'eusupport@zinus.com'; break; }
```
```68:79:c:/Zinus/Zinus/Wonder-Server/routes/email.js
const attachments = req.files && req.files.file && req.files.file.length && req.files.file.map((item) => ({ filename: item.originalname, content: item.buffer }));
```
```86:93:c:/Zinus/Zinus/Wonder-Server/routes/email.js
await sendHTMLEmail({ toEmail, replyToEmail: customerEmail, emailSubject: `${emailSubject} - ${originStoreUrl}`, html: bodyLines.join('<br />'), attachments });
```
```4:11:c:/Zinus/Zinus/Wonder-Server/utils/email/index.js
const transporter = nodemailer.createTransport({ host: 'smtp.gmail.com', port: 465, auth: { user: 'web-notifications@zinusinc.com', pass: process.env.GMAIL_PASSWORD } });
```
```22:31:c:/Zinus/Zinus/Wonder-Server/utils/email/index.js
exports.sendHTMLEmail = async (options) => { const info = await transporter.sendMail({ from: '"Zinus Robot 🤖" <noreply@zinusinc.com>', replyTo: options.replyToEmail, to: options.toEmail, subject: options.emailSubject, html: options.attachACat ? options.html + (await this.getCatImage()) : options.html, attachments: options.attachments || [] }); return info.messageId; };
```

#### 5) Security and resilience middleware (production)
- Request timeout, HTTPS redirect, CORS allowlist, rate limiting, JWT validation, and scoped authorization.
```34:41:c:/Zinus/Zinus/Wonder-Server/server.js
app.use(timeout('20s'));
app.use(express.json());
const upload = multer();
app.get('/', (req, res) => { return res.status(200).send(welcomeMessage); });
```
```42:83:c:/Zinus/Zinus/Wonder-Server/server.js
const whitelist = [ 'https://www.zinus.com', /* ...regional domains... */ 'https://mellow-home.com.au' ];
const corsOptions = { origin: function (origin, callback) { if (whitelist.indexOf(origin) !== -1 || !origin) { callback(null, true); } else { callback(new Error('Not allowed by CORS')); } } };
```
```96:99:c:/Zinus/Zinus/Wonder-Server/server.js
const cpUpload = upload.fields([{ name: 'file', maxCount: 5 }]);
app.use('/api/email', [cors(isProduction && corsOptions), cpUpload], require('./routes/email'));
```
```104:121:c:/Zinus/Zinus/Wonder-Server/server.js
app.use(jwt({ secret: process.env.JWT_SECRET, algorithms: ['HS256'], credentialsRequired: true, getToken: function fromHeaderOrQuerystring(req){ if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') { return req.headers.authorization.split(' ')[1]; } if (req.query && req.query.token) { return req.query.token; } return null; } }));
```
```122:128:c:/Zinus/Zinus/Wonder-Server/server.js
app.use((err, req, res, next) => { if (err.name === 'UnauthorizedError') { return res.status(401).json({ code: '401', error: err.message }); } });
```
```132:135:c:/Zinus/Zinus/Wonder-Server/server.js
app.use((req, res) => { return res.status(404).json({ code: '404', error: 'Whoops, that path does not exist :o' }); });
```

### Operational learnings
- Keep allowlists current across markets and staging domains
- Use JWT scopes for least-privilege integrations
- Persist third-party IDs back to Shopify for observability and idempotency
- Cap rate limits above storefront AJAX bursts but below abuse thresholds

If you’d like a deeper dive into any module, ping the team in Slack.


