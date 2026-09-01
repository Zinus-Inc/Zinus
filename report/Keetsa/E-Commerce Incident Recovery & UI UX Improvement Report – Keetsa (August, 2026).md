# Keetsa Development Report – August 2026

## **1. Executive Summary**

During August 2026, **56 website-related Jira tickets** were analyzed: **38 Tasks, 16 Bugs, 1 Story, and 1 Epic**. **28 tickets were Done (50%)**, with major outcomes covering accessibility, cart reliability, recycling/Route fee handling, Truemed navigation, Affirm, analytics, merchandising, and storefront configuration; internal reporting, SOP, user-administration, and development-automation work was excluded.

- **Bug summary:** 12 of 16 bugs were completed; 4 remain under QA/on hold.
- **Accessibility:** Corrected contrast issues in Truemed and Affirm content.
- **Cart:** Fixed add-on counts, fee eligibility, fee parsing, and Route visibility.
- **Truemed:** Restored reliable “How It Works” anchor navigation.
- **Warranty:** Addressed missing customer-uploaded claim attachments.
- **Storefront:** Improved firmness labels, add-on matching, and step numbering.
- **Open bugs:** Route fraud checkout investigation and legacy cart issues remain.

## **2. Incident Overview**

| Category | Description | Impact |
|---|---|---|
| Cart Protection | Shipping Protection disappears without available cross-sells. | Protection option can become unavailable |
| Cart Variants | Adding another size of the same item removes the first size. | Prevents multi-size purchases |
| Fee Settings | Multi-line fee IDs can stop fee-line matching and removal. | Fees may incorrectly appear in carts |
| Accessibility | Truemed step-card body text had insufficient contrast. | WCAG AA accessibility risk |
| Truemed | Smooth scrolling prevented the “How It Works” anchor jump. | Key page CTA appeared non-functional |
| Route / Fraud | Route-only orders can enter checkout using cart permalinks. | Fraud and low-value capture risk |
| Cart Count | Cart badge showed 1 when mattress plus add-on totaled 2. | Misleading cart quantity |
| Warranty | Only 2 of 9 uploaded warranty photos reached customer service. | Claims could lack required evidence |
| Route Product | Shipping insurance was directly accessible to shoppers. | Fee-only order risk |
| Domain | Shopify Admin reported invalid DNS records. | Domain configuration warning |
| Step Cards | Step numbers could become non-sequential in mixed layouts. | Reduced content clarity |
| Accessibility | Image banner configuration could create multiple H1 headings. | Accessibility and SEO risk |
| Accessibility | Affirm divider text was below the AA contrast target. | Reduced readability |
| Accessibility | Affirm financing fine print failed AA contrast. | Accessibility risk on disclosure copy |
| Recycling Fee | Non-mattress items could incorrectly trigger recycling fees. | Incorrect customer charges |
| Cart Protection | Migrated Shipping Protection issue remains on hold. | Protection availability risk |

### Business Impact

- Improved accessibility compliance on Truemed and Affirm pages.
- Reduced incorrect cart counts and recycling-fee charges.
- Reduced risk of shoppers directly purchasing fee-only products.
- Route permalink fraud remains under client QA investigation.

## **3. Immediate Response & Fixes**

| Focus Area | Actions Taken | Outcome |
|---|---|---|
| Cart Protection | Existing cross-sell dependency remains on hold. | ⏸ Further cart logic work required |
| Cart Variants | Multi-size cart issue remains on hold. | ⏸ Multiple-size behavior still pending |
| Fee Settings | Normalized fee IDs so multi-line values continue to match. | ✅ Restored reliable fee processing |
| Truemed ADA | Removed reduced-opacity text causing insufficient contrast. | ✅ Restored WCAG AA contrast |
| Truemed Anchor | Removed conflicting global smooth-scroll behavior. | ✅ Restored anchor navigation |
| Route / Fraud | Investigating permalink checkout path and refund mechanism. | ⏳ Server-side protection under review |
| Cart Count | Refreshed cart UI from the final add-on cart state. | ✅ Cart quantity remains consistent |
| Warranty | Corrected multi-attachment handling and failure safeguards. | ✅ Improved warranty evidence delivery |
| Route Product | Restricted fee-product purchase paths and cart behavior. | ✅ Reduced fee-only storefront orders |
| Domain | Reviewed and corrected Shopify DNS configuration issue. | ✅ Admin domain issue resolved |
| Step Cards | Corrected sequence logic for visible step badges. | ✅ Sequential step numbering |
| Heading Structure | Added safeguards for image-banner heading usage. | ✅ Reduced heading hierarchy risk |
| Affirm Divider | Increased divider contrast to accessible levels. | ✅ Improved readability |
| Affirm Fine Print | Increased disclosure text contrast to AA levels. | ✅ Improved financing accessibility |
| Recycling Fee | Changed eligibility to product type/tag matching. | ✅ Prevented fees on ineligible items |
| Cart Protection | Migrated duplicate issue remains on hold. | ⏸ Resolution still pending |

## **4. UI/UX Improvement Highlights**

| Feature Area | Before | After |
|---|---|---|
| Truemed Navigation | “How It Works” could fail to scroll to its section. | ✅ Stable anchor navigation restored |
| Truemed Text | Step-card text contrast was below WCAG AA. | ✅ Text meets required contrast target |
| Cart Counter | Mattress plus add-on displayed a count of 1. | ✅ Final cart quantity displays correctly |
| Product Add-ons | Protector matching worked only at parent level. | ✅ Add-ons can match appropriate size/SKU |
| Firmness Labels | Dream and Supreme were displayed as “Soft.” | ✅ Products now display “Plush” |
| Affirm Disclosure | Financing fine print had insufficient contrast. | ✅ Disclosure text is more readable |
| Affirm Page | Financing template was not reliably reachable. | ✅ Financing page/template confirmed live |
| Step Cards | Mixed layouts could show irregular numbering. | ✅ Visible steps display sequentially |
| Recycling Fees | Generic mattress tags could trigger a fee. | ✅ Fee uses eligible product type/tag rules |
| Fee Configuration | Multi-line IDs could break cart matching. | ✅ Multi-line fee IDs are safely parsed |
| Fee Maintenance | Fee IDs relied only on schema defaults. | ✅ Intended fee IDs persisted and documented |
| Analytics | Add-on purchases reported $0 revenue in GA. | ✅ Purchase value is passed to analytics |

## **5. On-Hold Items & Action Plan**

| Key | Description | Next Step | Owner |
|---|---|---|---|
| Helixian-KEET-18 | Shipping Protection disappears without cross-sells | Decouple protection from cross-sell rendering | Daniel Carroll |
| Helixian-KEET-11 | Hero text lacks sufficient contrast | Approve and apply accessible hero styling | Bobby Hudgins |
| Helixian-KEET-8 | Different product sizes replace each other in cart | Update variant cart logic and retest | Olivia Alvarez |
| Helixian-KEET-7 | Collection pricing and discount badges | Finalize requirements and resume build | Bobby Hudgins |
| Zinus-KEET-547 | Evaluate discounted virtual Shopify bundles | Complete comparison and obtain approval | Bobby Hudgins |
| Zinus-KEET-525 | Review Secuvy cookie/script categories | Finish review and update CMP categories | Bobby Hudgins |
| Zinus-KEET-382 | Inventory and warehouse allocation issue | Correct location/allocation configuration | Mason Kim |
| Zinus-KEET-375 | Customer Accounts Upgrade | Complete migration audit and compatibility checks | Bobby Hudgins |
| Zinus-KEET-373 | Document Compare Mattress metafields | Complete merchandising field reference | J Vishal |
| Zinus-KEET-344 | Create new Compare Mattress page | Finalize mobile design and resume development | J Vishal |
| Zinus-KEET-209 | Redesign shipping configuration | Complete POS/shipping allocation solution | Bobby Hudgins |
| Zinus-KEET-208 | Shopify/SAP order modification sync | Complete status-sync and locking solution | Bobby Hudgins |
| Zinus-KEET-243 | Mattress quiz capabilities | Finalize quiz logic and restart implementation | Olivia Alvarez |
| Zinus-KEET-228 | Shipping Protection disappears without cross-sells | Resolve migrated cart protection issue | Mason Kim |
| Zinus-KEET-139 | Criteo Ads setup | Confirm tracking readiness before activation | Bobby Hudgins |
| Zinus-KEET-136 | Klaviyo setup | Resume after approved theme/integration readiness | Bobby Hudgins |
| Zinus-KEET-134 | Keetsa and Hotels GemPage conversion | Complete page build, preview, and cutover | J Vishal |

## **6. Appendix**

| Type | Key | Summary | Status | Assignee | Reporter | Created | Resolved |
|---|---|---|---|---|---|---|---|
| Bug | Zinus-KEET-526 | Update recycle fee logic to product type + recycle-fee tag | Done | Bobby Hudgins | Bobby Hudgins | 2026-07-28 | 2026-08-13 |
| Bug | Zinus-KEET-533 | Affirm payment-example fine-print contrast | Done | Bobby Hudgins | Joshua Cortez | 2026-08-04 | 2026-08-11 |
| Bug | Zinus-KEET-536 | Affirm “— OR —” divider contrast | Done | Bobby Hudgins | Joshua Cortez | 2026-08-04 | 2026-08-11 |
| Bug | Zinus-KEET-538 | Image-banner H1 option can create multiple H1s | Done | Bobby Hudgins | Joshua Cortez | 2026-08-04 | 2026-08-11 |
| Bug | Zinus-KEET-539 | Step badges can appear non-sequential | Done | Bobby Hudgins | Joshua Cortez | 2026-08-04 | 2026-08-11 |
| Bug | Zinus-KEET-542 | Shopify domain error in admin | Done | Bobby Hudgins | Olivia Alvarez | 2026-08-15 | 2026-08-20 |
| Bug | Zinus-KEET-543 | Route insurance visible for direct cart addition | Done | Bobby Hudgins | Olivia Alvarez | 2026-08-15 | 2026-08-24 |
| Bug | Zinus-KEET-545 | Warranty email delivered only 2 of 9 photos | Done | Bobby Hudgins | Bobby Hudgins | 2026-08-18 | 2026-08-24 |
| Bug | Zinus-KEET-546 | Cart icon count incorrect with PDP add-on | Done | Bobby Hudgins | Bobby Hudgins | 2026-08-20 | 2026-08-24 |
| Bug | Zinus-KEET-551 | Smooth scrolling cancels Truemed anchor jump | Done | Bobby Hudgins | Bobby Hudgins | 2026-08-25 | 2026-08-26 |
| Bug | Zinus-KEET-552 | Step-card body copy fails WCAG contrast | Done | Bobby Hudgins | Bobby Hudgins | 2026-08-25 | 2026-08-26 |
| Bug | Zinus-KEET-553 | Newlines break cart fee-product matching | Done | Bobby Hudgins | Bobby Hudgins | 2026-08-25 | 2026-08-26 |
| Bug | Helixian-KEET-18 | Shipping Protection disappears without cross-sells | On Hold | Daniel Carroll | Bobby Hudgins | 2025-10-08 | – |
| Bug | Helixian-KEET-8 | Issue adding different sizes of same product | On Hold | – | Olivia Alvarez | 2025-09-26 | – |
| Bug | Zinus-KEET-228 | Shipping Protection disappears without cross-sells | On Hold | – | Mason Kim | 2026-02-04 | – |
| Bug | Zinus-KEET-550 | Investigate Route-only fraud orders via cart permalink | First Client QA | Bobby Hudgins | Bobby Hudgins | 2026-08-24 | – |
| Epic | Zinus-KEET-46 | Theme Migration | To Do | – | Bobby Hudgins | 2025-11-04 | – |
| Story | Zinus-KEET-523 | Fix addon_purchased revenue value in Google Analytics | Done | Juhi Sagar Gupta | Juhi Sagar Gupta | 2026-07-13 | 2026-08-17 |
| Task | Zinus-KEET-124 | Hide recycling fee and Route from collections | Done | Bobby Hudgins | Bobby Hudgins | 2025-12-22 | 2026-01-23 |
| Task | Zinus-KEET-127 | GemPage Conversion — Keetsa Theater | Done | Bobby Hudgins | Bobby Hudgins | 2025-12-30 | 2026-08-03 |
| Task | Zinus-KEET-130 | GemPage Conversion — Affirm Financing | Done | Bobby Hudgins | Bobby Hudgins | 2025-12-30 | 2026-07-28 |
| Task | Zinus-KEET-131 | GemPage Conversion — Service Request Procedure | Done | Bobby Hudgins | Bobby Hudgins | 2025-12-30 | 2026-08-24 |
| Task | Zinus-KEET-337 | Institute Shopify fraud flow | Done | Bobby Hudgins | Olivia Alvarez | 2026-04-13 | 2026-05-19 |
| Task | Zinus-KEET-413 | Fraud and high/medium risk issue | Done | Bobby Hudgins | Olivia Alvarez | 2026-05-28 | 2026-06-12 |
| Task | Zinus-KEET-532 | Provide add-on product by SKU and size | Done | Bobby Hudgins | Olivia Alvarez | 2026-07-29 | 2026-08-13 |
| Task | Zinus-KEET-534 | Confirm Affirm hosts in Secuvy consent rules | Done | Bobby Hudgins | Joshua Cortez | 2026-08-04 | 2026-08-21 |
| Task | Zinus-KEET-535 | Confirm Affirm financing template is live | Done | Bobby Hudgins | Joshua Cortez | 2026-08-04 | 2026-08-11 |
| Task | Zinus-KEET-537 | Localize hardcoded English schema labels | Done | Bobby Hudgins | Joshua Cortez | 2026-08-04 | 2026-08-11 |
| Task | Zinus-KEET-540 | Repoint stale color-scheme references | Done | Bobby Hudgins | Joshua Cortez | 2026-08-04 | 2026-08-11 |
| Task | Zinus-KEET-541 | Confirm Affirm API key is publishable | Done | Bobby Hudgins | Joshua Cortez | 2026-08-04 | 2026-08-11 |
| Task | Zinus-KEET-544 | Label firmness-4 as Plush and retag mattresses | Done | Bobby Hudgins | Bobby Hudgins | 2026-08-18 | 2026-08-20 |
| Task | Zinus-KEET-548 | Fix “How It Works” button on Truemed | Done | Bobby Hudgins | Bobby Hudgins | 2026-08-21 | 2026-08-24 |
| Task | Zinus-KEET-554 | Persist and document cart fee product IDs | Done | Bobby Hudgins | Bobby Hudgins | 2026-08-25 | 2026-08-26 |
| Task | Zinus-KEET-134 | GemPage Conversion — Keetsa and Hotels | In Progress | J Vishal | Bobby Hudgins | 2025-12-30 | – |
| Task | Zinus-KEET-208 | Implement order modification sync with SAP | In Progress | Bobby Hudgins | Mason Kim | 2026-02-04 | – |
| Task | Zinus-KEET-209 | Redesign shipping configuration | In Progress | Bobby Hudgins | Mason Kim | 2026-02-04 | – |
| Task | Zinus-KEET-525 | Review Secuvy cookie/script categories | In Progress | Bobby Hudgins | Bobby Hudgins | 2026-07-27 | – |
| Task | Zinus-KEET-547 | Evaluate discounted virtual bundles | In Progress | Bobby Hudgins | Bobby Hudgins | 2026-08-21 | – |
| Task | Helixian-KEET-7 | Collection page pricing and badges | On Hold | Bobby Hudgins | Daniel Carroll | 2025-09-23 | – |
| Task | Helixian-KEET-11 | Home hero text contrast/readability | On Hold | Bobby Hudgins | Bobby Hudgins | 2025-10-07 | – |
| Task | Zinus-KEET-136 | Apps Setup — Klaviyo | On Hold | – | Bobby Hudgins | 2026-01-02 | – |
| Task | Zinus-KEET-139 | Apps Setup — Criteo Ads | On Hold | – | Bobby Hudgins | 2026-01-02 | – |
| Task | Zinus-KEET-243 | Mattress quiz capabilities | On Hold | Olivia Alvarez | Olivia Alvarez | 2026-02-10 | – |
| Task | Zinus-KEET-344 | Create New Compare Mattress Page | On Hold | J Vishal | J Vishal | 2026-04-23 | – |
| Task | Zinus-KEET-373 | Document Compare Mattress metafield mapping | On Hold | J Vishal | Bobby Hudgins | 2026-05-07 | – |
| Task | Zinus-KEET-375 | Customer Accounts Upgrade | On Hold | Bobby Hudgins | Bobby Hudgins | 2026-05-07 | – |
| Task | Zinus-KEET-382 | Inventory and warehouse allocation issue | On Hold | Mason Kim | Olivia Alvarez | 2026-05-19 | – |
| Task | Helixian-KEET-26 | Keetsa Patrol ADA Review | To Do | – | Bill Dzadon | 2026-01-15 | – |
| Task | Zinus-KEET-19 | Migrate keetsa.com domain to Cloudflare | To Do | – | Mason Kim | 2025-10-19 | – |
| Task | Zinus-KEET-137 | Apps Setup — Metafields Guru | To Do | – | Bobby Hudgins | 2026-01-02 | – |
| Task | Zinus-KEET-199 | SAP-Shopify integration gap analysis | To Do | Mason Kim | Mason Kim | 2026-02-02 | – |
| Task | Zinus-KEET-203 | Missing shipping rules — Shopify configuration | To Do | Mason Kim | Mason Kim | 2026-02-02 | – |
| Task | Zinus-KEET-226 | Keetsa Patrol ADA Review | To Do | – | Mason Kim | 2026-02-04 | – |
| Task | Zinus-KEET-264 | Build storefront checkout/anomaly monitoring app | To Do | – | Mason Kim | 2026-02-20 | – |
| Task | Zinus-KEET-518 | Update Connecticut recycling fee to $19.50 | To Do | Bobby Hudgins | Mason Kim | 2026-07-06 | – |
