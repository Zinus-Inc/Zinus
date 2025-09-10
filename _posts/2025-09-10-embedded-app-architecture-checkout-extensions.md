---
layout: post
title: "Zinus Embedded App: Remix + Shopify Functions powering checkout experiences"
date: 2025-09-10
tags: [shopify, remix, polaris, prisma, checkout, extensions]
authors:
  - name: Zinus Engineering
    role: Commerce Platform
    url: https://www.zinus.com
---

Our Embedded App is a Remix-based Shopify application that centralizes admin UX, data, and a suite of checkout extensions for compliance and conversion. It ships with Polaris UI, Prisma session storage, and multiple UI Extensions that run natively in Shopify Checkout.

### Stack
- Remix + Vite (Node ≥16)
- `@shopify/shopify-app-remix` for auth, webhooks, session
- Polaris for admin UI
- Prisma (session storage via `PrismaSessionStorage`)
- App/Checkout UI Extensions (React runtime)

```1:21:c:/Zinus/Zinus/ZinusEmbeddedApp/app/shopify.server.js
const shopify = shopifyApp({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET || "",
  apiVersion: ApiVersion.April24,
  scopes: process.env.SCOPES?.split(","),
  sessionStorage: new PrismaSessionStorage(prisma),
  webhooks: { APP_UNINSTALLED: { deliveryMethod: DeliveryMethod.Http, callbackUrl: "/webhooks" } },
  hooks: { afterAuth: async ({ session }) => { shopify.registerWebhooks({ session }); } },
});
```

### Architecture

```mermaid
flowchart LR
  Admin[Shopify Admin] -->|Embedded| RemixApp
  RemixApp[Remix app\nPolaris UI + Prisma] --> Shopify[Shopify APIs]
  subgraph Checkout
    CE1[Contiguous states restriction]
    CE2[Recycle fee auto-line]
    CE3[Countdown banner]
    CE4[Delivery info/metafields]
  end
  Checkout ===> Shopify
```

### Checkout extensions

1) Contiguous states restriction
   - Blocks the buyer journey if the address is a non-contiguous US location

```12:21:c:/Zinus/Zinus/ZinusEmbeddedApp/extensions/contiguous-states-restriction/src/Checkout.jsx
useBuyerJourneyIntercept(() => {
  return shippingAddress?.provinceCode && restrictedLocations.includes(shippingAddress?.provinceCode)
    ? { behavior: 'block', reason: 'We currently do not ship to your location.', errors: [{ message: 'We ship to the 48 contiguous states...', target: '$.cart.deliveryGroups[0].deliveryAddress.provinceCode' }] }
    : { behavior: 'allow' };
});
```

2) Recycling fee automation
   - Detects mattresses/box-springs and auto-syncs the correct fee variant per state

```34:58:c:/Zinus/Zinus/ZinusEmbeddedApp/extensions/recycle-fee/src/Checkout.jsx
function checkForRecycleFee() {
  const provinceCode = shippingAddress?.provinceCode;
  if (feeLocations.includes(provinceCode)) {
    // match fee variant for province, reconcile quantity vs. cart contents
    if (feeInCart && feeInCart.merchandise.selectedOptions[0].value !== provinceCode) {
      handleRemoveFromCart(feeInCart.id, feeInCart.quantity);
      handleAddToCart(feeId, feeInCart.quantity);
    }
    if (feeNeeded > feeFound) { handleAddToCart(feeId, difference); }
  } else { /* remove any fee lines */ }
}
```

3) Checkout countdown banner
   - Configurable content via extension settings; shows time remaining

```12:26:c:/Zinus/Zinus/ZinusEmbeddedApp/extensions/zinus-checkout-countdown/src/Checkout.jsx
const [timeLeft, setTimeLeft] = useState(600);
useEffect(() => { if (!timeLeft) return; const id = setInterval(() => setTimeLeft(timeLeft - 1), 1000); return () => clearInterval(id); }, [timeLeft]);
```

4) Delivery/misc checkout enrichments
   - Reads product metafields and surfaces data in checkout context

```27:41:c:/Zinus/Zinus/ZinusEmbeddedApp/extensions/zinus-checkout-delivery/src/Checkout.jsx
const productId = cartLineTarget?.merchandise?.product?.id;
query(`query { product(id: "${productId}") { variants(first: 25) { edges { node { metafield(namespace: "custom", key: "mattress_height") { value } } } } } }`) ...
```

### Operational notes
- Use `login`/`authenticate` helpers exclusively for embedded navigation and API calls
- Keep `ApiVersion` aligned with current Admin API; update `restResources` accordingly
- Prisma session DB must be shared across instances (SQLite only OK for single instance)
- Extensions should fail “closed” (block or remove lines) to protect compliance

### Why this matters
By pairing an embedded admin app with checkout-native extensions, we deliver merchant control and strict checkout enforcement without slowing down the storefront. Compliance flows (like recycling fees and shipping restrictions) run client-side within Shopify’s secure runtime; data-heavy or cross-system tasks stay server-side in the app.


