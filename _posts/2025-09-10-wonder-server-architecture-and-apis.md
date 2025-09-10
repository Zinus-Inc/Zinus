---
layout: post
title: "Wonder-Server: Public API gateway powering pickups, feeds, and growth"
date: 2025-09-10
tags: [shopify, api, nodejs, graphql, infrastructure, integrations]
authors:
  - name: Zinus Engineering
    role: Commerce Platform
    url: https://www.zinus.com
---

Zinus Wonder-Server (WAPI) is our public-facing API layer that brokers trusted access between external systems and our Shopify stores. It centralizes cross-cutting concerns like HTTPS enforcement, CORS, rate limiting, authentication/authorization, and integrates with external providers for email, growth, and compliance workflows.

### Highlights
- Enforces HTTPS, CORS allowlist per domain, and rate limiting in production
- JWT-protected private routes with scope-based authorization
- Shopify Admin GraphQL integration for order reads/writes
- LoadUp GraphQL integration for California mattress/box-spring pickups
- Growth utilities: Klaviyo subscription and back-in-stock proxy
- Operational utilities: product feed, eBay integration, email relay

### Architecture

```mermaid
flowchart LR
  subgraph Clients
    A[Shopify Webhooks] -->|Order events| WAPI
    B[Storefront & Shogun] -->|AJAX| WAPI
    C[Ops tools] -->|Batch/Manual| WAPI
  end

  WAPI[Wonder-Server\nExpress (Node 14)] -->|JWT scopes| Auth[Auth & Scopes]
  WAPI --> CORS[CORS Allowlist]
  WAPI --> RL[Rate limit]
  WAPI -->|/api/pickup| LoadUp[LoadUp GraphQL]
  WAPI -->|Shopify Order attrs\nreads/writes| Shopify[Shopify Admin GraphQL]
  WAPI -->|/api/klaviyo| Klaviyo[Klaviyo APIs]
  WAPI -->|/api/product-feed| Feed[JSON Feed]
  WAPI --> Email[Nodemailer]
```

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

- Pickup scheduling and refunds (California compliance)
  - Parse Shopify order payloads to count mattresses/box-springs and detect combos
  - Create/cancel LoadUp pickups; persist pickup IDs on the Shopify order as a custom attribute
  - On refund, cancel prior pickup and schedule a new one if needed

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

```28:74:c:/Zinus/Zinus/Wonder-Server/routes/components/pickup/index.js
exports.generatePickupRequests = async (options) => {
  const pickupIDs = [];
  if (options.comboCount) { /* createPricedScheduleRequest for combo */ }
  if (options.mattressCount || options.boxSpringCount) { /* createPricedScheduleRequest */ }
  return pickupIDs;
};
```

- Shopify Admin GraphQL helpers

```10:31:c:/Zinus/Zinus/Wonder-Server/routes/components/shopify/index.js
exports.addPickupAttrToOrder = async (options) => {
  const existingOrder = await this.getShopifyOrderInfo(options.orderID);
  const preExistingAttributes = existingOrder.order.customAttributes.filter((a) => a.key !== loadupAttrKey);
  await shopifyGQLclient.request(mutateOrder, { input: { id: `gid://shopify/Order/${options.orderID}`, customAttributes: [ { key: loadupAttrKey, value: options.pickupIDs }, ...preExistingAttributes ] } });
};
```

- Klaviyo subscription proxy (latest APIs, list-specific)

```23:66:c:/Zinus/Zinus/Wonder-Server/routes/klaviyo.js
router.post('/subscribe', async (req, res) => {
  const { listId } = req.query;
  const { email } = req.body.profiles[0];
  const headers = { Authorization: `Klaviyo-API-Key ${getKlaviyoKey()}`, revision: '2024-02-15' };
  const data = {/* bulk create job with consent */};
  const response = await axios.post('https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs/', data, { headers });
  return res.json(response.data);
});
```

- Product feed generator (paginated)

```6:20:c:/Zinus/Zinus/Wonder-Server/routes/product-feed.js
router.get('/', async (req, res) => {
  const authUrl = `https://${process.env.SHOPIFY_USERNAME}:${process.env.SHOPIFY_PASSWORD}@zinususa.myshopify.com`;
  let requestURL = `${authUrl}/admin/api/2022-01/products.json?status=ACTIVE&selectedView=all`;
  while (morePages) { const response = await axios.get(requestURL); /* build feed */ }
  return res.json(productFeed);
});
```

### Operational learnings
- Keep allowlists current across markets and staging domains
- Use JWT scopes for least-privilege integrations
- Persist third-party IDs back to Shopify for observability and idempotency
- Cap rate limits above storefront AJAX bursts but below abuse thresholds

If you’d like a deeper dive into any module, ping the team in Slack.


