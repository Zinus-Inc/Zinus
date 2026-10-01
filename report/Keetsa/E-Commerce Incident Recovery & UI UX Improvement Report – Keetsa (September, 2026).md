# Keetsa Development Report – September 2026

## **1. Executive Summary**

A total of **84 Jira tickets** were analyzed: **66 Tasks, 13 Bugs, 4 Epics, and 1 Story**. **31 tickets are Done (36.9%)**; September delivery focused on accessibility, cart/PDP reliability, merchandising, performance, structured data, and bundle readiness, while several older operational and non-storefront items remain open.

- **Completed bugs:** 11 of 13 bug tickets are Done; 2 remain On Hold.
- **Cart accuracy:** Fixed stale visual and screen-reader cart counts.
- **PDP merchandising:** Fixed Rebuy size sync and visible `null` output.
- **Accessibility:** Fixed contrast regressions and several ADA compliance issues.
- **Cart fee handling:** Corrected multiline fee-ID parsing and related display issues.
- **Truemed:** Removed smooth-scroll behavior that blocked the “How it works” anchor.
- **Open cart bugs:** Multi-size cart replacement and Shipping Protection remain On Hold.
- **September focus:** ADA remediation, bundles, PDP/cart UX, SEO and performance.

## **2. Incident Overview**

| Category | Description | Impact |
|-----------|-------------|--------|
| Cart Protection | Shipping Protection disappears without available cross-sells. | Protection option can become unavailable |
| Cart Variants | Adding another size of the same product removes the first size. | Prevents valid multi-size purchases |
| PDP Bundles | FBT initially used Twin instead of the selected mattress size. | Risk of mismatched bundle purchases |
| Accessibility | Affirm disclaimer contrast was below WCAG requirements. | Reduced readability and ADA compliance |
| Cart Count | Rebuy additions left the header cart count stale. | Customers saw an incorrect cart quantity |
| Rebuy FBT | Single-variant products displayed literal `null` text. | Reduced PDP visual quality |
| Accessibility | Screen readers announced an outdated cart quantity. | Incorrect information for assistive users |
| Reviews | Star ratings lacked sufficient contrast on a dark background. | Reduced rating visibility |
| Cart Fees | Multiline fee IDs stopped some fee lines matching correctly. | Fee lines could appear incorrectly |
| Accessibility | Step-card body text failed minimum contrast. | WCAG readability failure |
| Truemed | Smooth scrolling prevented the “How it works” anchor jump. | CTA appeared unresponsive |
| Fee Checkout | Route-only orders bypassed theme cart protections. | Exposed fee-only checkout path |
| Cart Protection | Migrated Shipping Protection issue remains unresolved. | Protection availability remains inconsistent |

**Business Impact**

- Reduced checkout and cart inconsistency across key purchase flows.
- Improved accessibility for visual and screen-reader users.
- Reduced risk of incorrect bundle sizes and misleading cart state.
- Two legacy cart issues remain On Hold.

## **3. Immediate Response & Fixes**

| Focus Area | Actions Taken | Outcome |
|-------------|---------------|---------|
| Cart Protection | Issue retained On Hold pending decoupling from cross-sells. | Pending resolution |
| Cart Variants | Multi-size cart behavior remains On Hold for further work. | Pending resolution |
| PDP Bundles | Re-applied selected size after Rebuy product refreshes. | ✅ Prevented load-time size mismatch |
| Affirm | Increased disclaimer contrast on light-grey schemes. | ✅ Restored WCAG-compliant contrast |
| Header Cart | Refreshed cart count after non-theme Rebuy updates. | ✅ Restored accurate visible count |
| Rebuy FBT | Omitted empty variant controls instead of rendering `null`. | ✅ Improved PDP presentation |
| Cart Accessibility | Made accessible cart count update with live cart changes. | ✅ Correct screen-reader cart count |
| Reviews | Used scheme-aware star color on the Reviews page. | ✅ Improved rating contrast |
| Fee IDs | Normalized multiline fee-ID values before matching. | ✅ Restored fee-line handling |
| Step Cards | Removed reduced-opacity body text. | ✅ Restored compliant text contrast |
| Truemed | Removed global smooth-scroll behavior from the section. | ✅ Restored anchor navigation |
| Fee Checkout | Investigated permalink bypass and server-side protection. | ✅ Root cause and mitigation identified |
| Cart Protection | Migrated issue remains On Hold. | Pending resolution |

## **4. UI/UX Improvement Highlights**

| Feature Area | Before | After |
|---------------|--------|-------|
| PDP Add-On | Protector module flashed with an incorrect initial variant. | Module appears only after a valid size match |
| Pillow Add-On | Matching protectors did not appear on pillow PDPs. | Correct protector can be offered by mapped size |
| Yotpo Reviews | Typography varied across review controls and content. | Review typography follows Keetsa brand styles |
| Keetsa Theater | Three unavailable videos showed grey placeholders. | Unavailable video content removed or restored |
| Header Cart | Rebuy additions could leave the count outdated. | Count updates without a page reload |
| Review Ratings | Stars were difficult to see on dark backgrounds. | Stars use a higher-contrast scheme color |
| Truemed | “How it works” CTA failed to move to its section. | Anchor navigation works correctly |
| Accessibility | Several text, SVG and iframe elements failed ADA checks. | September ADA batches improved site compliance |
| PDP Performance | Unused bundle JavaScript loaded on every PDP. | Script loads only where bundle behavior is used |
| Structured Data | Merchant offers lacked `validFrom`. | Product offer structured data was enhanced |
| Cart Fees | Invalid fee settings could silently affect cart display. | Fee parsing and editor guidance were improved |
| Mattress PDP | New layer artwork lacks numbered arrow overlays. | CSS overlay design is in Client QA |

## **5. On-Hold Items & Action Plan**

| Key | Description | Next Step | Owner |
|-----|-------------|-----------|-------|
| Helixian-KEET-18 | Shipping Protection disappears without cross-sells | Decouple protection rendering from cross-sell state | Daniel Carroll |
| Helixian-KEET-11 | Home hero text has insufficient contrast | Finalize accessible hero treatment | Bobby Hudgins |
| Helixian-KEET-8 | Different sizes replace each other in cart | Correct cart variant handling and retest | Olivia Alvarez |
| Helixian-KEET-7 | Collection pricing and badges | Confirm requirements and resume implementation | Bobby Hudgins |
| Zinus-KEET-593 | Sticky ATC variant names are truncated | Adjust mobile width/padding and verify devices | Bobby Hudgins |
| Zinus-KEET-591 | October Week 1 ADA remediation | Complete remediation and production verification | Bobby Hudgins |
| Zinus-KEET-590 | Cart heading hierarchy ADA issue | Add hidden H2 and verify heading order | Bobby Hudgins |
| Zinus-KEET-585 | GemPages template cleanup | Finish native assignments and redirect cleanup | Bobby Hudgins |
| Zinus-KEET-577 | Accessories advertise invalid discounts | Correct discount entitlement sync and stale data | Bobby Hudgins |
| Zinus-KEET-521 | Improve Ship-Later email format | Resume SAP-friendly email formatting work | Bobby Hudgins |
| Zinus-KEET-510 | CA non-Shopify orders missing MRC fee | Confirm order channels and responsible process | Bobby Hudgins |
| Zinus-KEET-486 | Follow up on Elevar evaluation | Obtain stakeholder decision on evaluation | Olivia Alvarez |
| Zinus-KEET-382 | Incorrect warehouse allocation | Correct inventory/location allocation rules | Mason Kim |
| Zinus-KEET-375 | Customer Accounts Upgrade | Complete discovery and migration planning | Bobby Hudgins |
| Zinus-KEET-373 | Compare Mattress metafield documentation | Document page-to-metafield mapping | J Vishal |
| Zinus-KEET-344 | New Compare Mattress page | Resume responsive comparison-page build | J Vishal |
| Zinus-KEET-305 | Shopify sale update automation | Complete feasibility and implementation planning | Joshua Cortez |
| Zinus-KEET-261 | Review Shopify user permissions | Complete permission review | Olivia Alvarez |
| Zinus-KEET-243 | Mattress quiz capabilities | Finalize quiz rules and restart implementation | Olivia Alvarez |
| Zinus-KEET-228 | Shipping Protection disappears without cross-sells | Resolve migrated cart dependency issue | Mason Kim |
| Zinus-KEET-209 | Shipping configuration redesign | Complete shipping and allocation design | Bobby Hudgins |
| Zinus-KEET-208 | Shopify/SAP order modification sync | Complete locking and status-sync work | Bobby Hudgins |
| Zinus-KEET-139 | Criteo Ads setup | Confirm readiness before enabling tracking | Bobby Hudgins |
| Zinus-KEET-136 | Klaviyo setup | Resume installation/integration when approved | Bobby Hudgins |

## **6. Appendix**

| Type | Key | Summary | Status | Assignee | Reporter | Created | Resolved |
|------|-----|---------|--------|----------|----------|---------|----------|
| Bug | Zinus-KEET-570 | Rebuy FBT widget renders `null` on PDP | Done | Bobby Hudgins | Bobby Hudgins | 2026-09-14 | 2026-09-28 |
| Bug | Zinus-KEET-578 | Header cart count stale after Rebuy add | Done | Bobby Hudgins | Bobby Hudgins | 2026-09-22 | 2026-09-28 |
| Bug | Zinus-KEET-580 | Affirm disclaimer contrast fails WCAG | Done | Bobby Hudgins | Bobby Hudgins | 2026-09-22 | 2026-09-25 |
| Bug | Zinus-KEET-583 | FBT ignores selected size on page load | Done | Bobby Hudgins | Bobby Hudgins | 2026-09-22 | 2026-09-28 |
| Bug | Zinus-KEET-562 | Reviews star-rating contrast regression | Done | Bobby Hudgins | Bobby Hudgins | 2026-09-08 | 2026-09-14 |
| Bug | Zinus-KEET-563 | Screen readers announce wrong cart count | Done | Bobby Hudgins | Bobby Hudgins | 2026-09-08 | 2026-09-14 |
| Bug | Zinus-KEET-550 | Investigate Route-only fraud orders | Done | Bobby Hudgins | Bobby Hudgins | 2026-08-24 | 2026-09-14 |
| Bug | Zinus-KEET-551 | Truemed anchor jump fails | Done | Bobby Hudgins | Bobby Hudgins | 2026-08-25 | 2026-08-26 |
| Bug | Zinus-KEET-552 | Step-card text contrast failure | Done | Bobby Hudgins | Bobby Hudgins | 2026-08-25 | 2026-08-26 |
| Bug | Zinus-KEET-553 | Newlines break cart fee-ID matching | Done | Bobby Hudgins | Bobby Hudgins | 2026-08-25 | 2026-08-26 |
| Bug | Helixian-KEET-18 | Shipping Protection disappears without cross-sell | On Hold | Daniel Carroll | Bobby Hudgins | 2025-10-08 | – |
| Bug | Helixian-KEET-8 | Different sizes of same product conflict in cart | On Hold | – | Olivia Alvarez | 2025-09-26 | – |
| Bug | Zinus-KEET-228 | Shipping Protection disappears without cross-sell | On Hold | – | Mason Kim | 2026-02-04 | – |
| Epic | Zinus-KEET-47 | Reports | To Do | – | Bobby Hudgins | 2025-11-04 | – |
| Epic | Zinus-KEET-46 | Theme Migration | To Do | – | Bobby Hudgins | 2025-11-04 | – |
| Epic | Zinus-KEET-247 | Keetsa Business SOP Documentation | To Do | Mason Kim | Mason Kim | 2026-02-16 | – |
| Epic | Zinus-KEET-566 | Shopify Bundles | To Do | – | Bobby Hudgins | 2026-09-10 | – |
| Story | Zinus-KEET-593 | Fix Variant Name Cut-Off in Sticky Add to Cart | In Progress | Bobby Hudgins | Juhi Sagar Gupta | 2026-09-30 | – |
| Task | Zinus-KEET-547 | Evaluate discounted virtual bundle options | Done | Bobby Hudgins | Bobby Hudgins | 2026-08-21 | 2026-09-10 |
| Task | Zinus-KEET-554 | Persist and document cart fee IDs | Done | Bobby Hudgins | Bobby Hudgins | 2026-08-25 | 2026-08-26 |
| Task | Zinus-KEET-555 | Build server-side fee-only cart validation | Done | Bobby Hudgins | Bobby Hudgins | 2026-08-25 | 2026-08-31 |
| Task | Zinus-KEET-556 | September Week 1 ADA remediation | Done | Bobby Hudgins | Bobby Hudgins | 2026-08-26 | 2026-09-01 |
| Task | Zinus-KEET-557 | September Week 2 ADA remediation | Done | Bobby Hudgins | Bobby Hudgins | 2026-09-01 | 2026-09-14 |
| Task | Zinus-KEET-558 | Surface cart fee-ID warning in theme editor | Done | Bobby Hudgins | Bobby Hudgins | 2026-09-01 | 2026-09-14 |
| Task | Zinus-KEET-564 | Bundle price-drift alerts | Done | Bobby Hudgins | Bobby Hudgins | 2026-09-08 | 2026-09-16 |
| Task | Zinus-KEET-565 | September Week 3 ADA remediation | Done | Bobby Hudgins | Bobby Hudgins | 2026-09-08 | 2026-09-14 |
| Task | Zinus-KEET-568 | PDP add-on appears then disappears | Done | Bobby Hudgins | Bobby Hudgins | 2026-09-10 | 2026-09-15 |
| Task | Zinus-KEET-569 | Pillow protector add-on missing | Done | Bobby Hudgins | Bobby Hudgins | 2026-09-10 | 2026-09-15 |
| Task | Zinus-KEET-571 | Draft-order ship-later hold | Done | Bobby Hudgins | Bobby Hudgins | 2026-09-14 | 2026-09-28 |
| Task | Zinus-KEET-572 | September Week 4 ADA remediation | Done | Bobby Hudgins | Bobby Hudgins | 2026-09-15 | 2026-09-21 |
| Task | Zinus-KEET-573 | Remove unused PDP bundle script load | Done | Bobby Hudgins | Bobby Hudgins | 2026-09-15 | 2026-09-21 |
| Task | Zinus-KEET-574 | Accessible name for Google widget iframe | Done | Bobby Hudgins | Bobby Hudgins | 2026-09-15 | 2026-09-21 |
| Task | Zinus-KEET-575 | Header logo SVG accessibility | Done | Bobby Hudgins | Bobby Hudgins | 2026-09-15 | 2026-09-21 |
| Task | Zinus-KEET-576 | Fix `waitForElm` observer leak | Done | Bobby Hudgins | Bobby Hudgins | 2026-09-17 | 2026-09-21 |
| Task | Zinus-KEET-579 | Remove unused test templates | Done | Bobby Hudgins | Bobby Hudgins | 2026-09-22 | 2026-09-25 |
| Task | Zinus-KEET-581 | Align Yotpo typography with brand spec | Done | Bobby Hudgins | Bobby Hudgins | 2026-09-22 | 2026-09-28 |
| Task | Zinus-KEET-582 | Add validFrom to Product offers JSON-LD | Done | Bobby Hudgins | Bobby Hudgins | 2026-09-22 | 2026-09-28 |
| Task | Zinus-KEET-584 | Remove unavailable Keetsa Theater videos | Done | Bobby Hudgins | Bobby Hudgins | 2026-09-23 | 2026-09-28 |
| Task | Zinus-KEET-586 | September final-week ADA remediation | Done | Bobby Hudgins | Bobby Hudgins | 2026-09-24 | 2026-09-28 |
| Task | Zinus-KEET-577 | Incorrect accessory discount advertising | In Progress | Bobby Hudgins | Bobby Hudgins | 2026-09-21 | – |
| Task | Zinus-KEET-585 | Clean remaining GemPages templates | In Progress | Bobby Hudgins | Bobby Hudgins | 2026-09-23 | – |
| Task | Zinus-KEET-590 | ADA cart heading hierarchy | In Progress | Bobby Hudgins | Bobby Hudgins | 2026-09-29 | – |
| Task | Zinus-KEET-591 | October Week 1 ADA remediation | In Progress | Bobby Hudgins | Bobby Hudgins | 2026-09-29 | – |
| Task | Zinus-KEET-510 | CA non-Shopify orders missing recycling fee | In Progress | Bobby Hudgins | Mason Kim | 2026-06-29 | – |
| Task | Zinus-KEET-305 | Shopify sale update automation | In Progress | Joshua Cortez | J Vishal | 2026-03-16 | – |
| Task | Zinus-KEET-261 | Review Shopify users and permissions | In Progress | Olivia Alvarez | Olivia Alvarez | 2026-02-19 | – |
| Task | Zinus-KEET-209 | Redesign shipping configuration | In Progress | Bobby Hudgins | Mason Kim | 2026-02-04 | – |
| Task | Zinus-KEET-208 | Shopify/SAP order modification sync | In Progress | Bobby Hudgins | Mason Kim | 2026-02-04 | – |
| Task | Zinus-KEET-592 | Mattress Collection Template Update | First Client QA | Bobby Hudgins | J Vishal | 2026-09-30 | – |
| Task | Zinus-KEET-589 | ADA icon/text caption contrast | First Client QA | Bobby Hudgins | Bobby Hudgins | 2026-09-29 | – |
| Task | Zinus-KEET-588 | Cart drawer loses keyboard focus | First Client QA | Bobby Hudgins | Bobby Hudgins | 2026-09-29 | – |
| Task | Zinus-KEET-587 | Mattress layer CSS numbering/arrows | First Client QA | Bobby Hudgins | J Vishal | 2026-09-29 | – |
| Task | Zinus-KEET-567 | Confirm Yotpo attribution for bundles | First Client QA | Bobby Hudgins | Bobby Hudgins | 2026-09-10 | – |
| Task | Zinus-KEET-561 | Validate SAP bundle-order ingestion | First Client QA | Bobby Hudgins | Bobby Hudgins | 2026-09-02 | – |
| Task | Zinus-KEET-560 | Recycle fee for bundle components | First Client QA | Bobby Hudgins | Bobby Hudgins | 2026-09-02 | – |
| Task | Zinus-KEET-559 | Bundle PDP single size selector | First Client QA | Bobby Hudgins | Bobby Hudgins | 2026-09-02 | – |
| Task | Zinus-KEET-525 | Review Secuvy cookie/script categories | Final Client QA | Olivia Alvarez | Bobby Hudgins | 2026-07-27 | – |
| Task | Zinus-KEET-518 | CT recycling fee update to $19.50 | Final Client QA | Olivia Alvarez | Mason Kim | 2026-07-06 | – |
| Task | Zinus-KEET-212 | Research AI QA/testing services | For Revision | Joshua Cortez | Mason Kim | 2026-02-04 | – |
| Task | Helixian-KEET-11 | Home hero text lacks sufficient contrast | On Hold | Bobby Hudgins | Bobby Hudgins | 2025-10-07 | – |
| Task | Helixian-KEET-7 | Collection pricing and badges | On Hold | Bobby Hudgins | Daniel Carroll | 2025-09-23 | – |
| Task | Zinus-KEET-521 | Improve Ship-Later email format | On Hold | Bobby Hudgins | Mason Kim | 2026-07-09 | – |
| Task | Zinus-KEET-486 | Elevar evaluation follow-up | On Hold | Olivia Alvarez | Bobby Hudgins | 2026-06-18 | – |
| Task | Zinus-KEET-382 | Inventory and warehouse allocation | On Hold | Mason Kim | Olivia Alvarez | 2026-05-19 | – |
| Task | Zinus-KEET-375 | Customer Accounts Upgrade | On Hold | Bobby Hudgins | Bobby Hudgins | 2026-05-07 | – |
| Task | Zinus-KEET-373 | Compare Mattress metafield documentation | On Hold | J Vishal | Bobby Hudgins | 2026-05-07 | – |
| Task | Zinus-KEET-344 | Create New Compare Mattress Page | On Hold | J Vishal | J Vishal | 2026-04-23 | – |
| Task | Zinus-KEET-243 | Mattress quiz capabilities | On Hold | Olivia Alvarez | Olivia Alvarez | 2026-02-10 | – |
| Task | Zinus-KEET-139 | Apps Setup — Criteo Ads | On Hold | – | Bobby Hudgins | 2026-01-02 | – |
| Task | Zinus-KEET-136 | Apps Setup — Klaviyo | On Hold | – | Bobby Hudgins | 2026-01-02 | – |
| Task | Helixian-KEET-26 | Keetsa Patrol ADA Review | To Do | – | Bill Dzadon | 2026-01-15 | – |
| Task | Zinus-KEET-265 | Refactor Claude Code review commands | To Do | Mason Kim | Mason Kim | 2026-02-23 | – |
| Task | Zinus-KEET-264 | Build storefront monitoring app | To Do | – | Mason Kim | 2026-02-20 | – |
| Task | Zinus-KEET-226 | Keetsa Patrol ADA Review | To Do | – | Mason Kim | 2026-02-04 | – |
| Task | Zinus-KEET-205 | Process ownership and SOP documentation | To Do | Mason Kim | Mason Kim | 2026-02-02 | – |
| Task | Zinus-KEET-204 | Finance, tax and fee rules | To Do | Mason Kim | Mason Kim | 2026-02-02 | – |
| Task | Zinus-KEET-203 | Missing Shopify shipping rules | To Do | Mason Kim | Mason Kim | 2026-02-02 | – |
| Task | Zinus-KEET-202 | FOC/replacement SOP alignment | To Do | Mason Kim | Mason Kim | 2026-02-02 | – |
| Task | Zinus-KEET-201 | Order change/cancellation rules | To Do | Mason Kim | Mason Kim | 2026-02-02 | – |
| Task | Zinus-KEET-200 | Inventory/plant/location rules | To Do | Mason Kim | Mason Kim | 2026-02-02 | – |
| Task | Zinus-KEET-199 | SAP-Shopify integration gap analysis | To Do | Mason Kim | Mason Kim | 2026-02-02 | – |
| Task | Zinus-KEET-198 | Shipping/carrier process standardization | To Do | Mason Kim | Mason Kim | 2026-02-02 | – |
| Task | Zinus-KEET-137 | Apps Setup — Metafields Guru | To Do | – | Bobby Hudgins | 2026-01-02 | – |
| Task | Zinus-KEET-134 | GemPage Conversion — Keetsa and Hotels | To Do | J Vishal | Bobby Hudgins | 2025-12-30 | – |
| Task | Zinus-KEET-19 | Migrate keetsa.com domain to Cloudflare | To Do | – | Mason Kim | 2025-10-19 | – |