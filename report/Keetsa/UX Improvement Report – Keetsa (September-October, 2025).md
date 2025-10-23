# Keetsa Development Report – September-October 2025

---

## 1. Executive Summary

During September and October 2025, **40 Jira tickets** related to Keetsa website development were analyzed. The distribution includes:
- **24 Tasks**
- **13 Bugs**
- **3 On Hold tickets**
- **Completion rate: 74%** (29 Done tickets)

Key outcomes:
- Resolved multiple UX and layout bugs on product detail pages (PDP) and cart popup.
- Enhanced merchandising with new badge features and upsell integrations on PDP and cart.
- Improved mobile responsiveness of media and UI elements.
- Initiated a large-scale theme migration project with baseline audits ongoing.

Major themes included **UI/UX adjustments, cart and PDP stability fixes, merchandising improvements,** and foundational work on the **theme migration**.

---

## 2. Incident Overview

### Bugs Affecting Website UX and Functionality

| Category       | Description                                                    | Impact                                   |
|----------------|----------------------------------------------------------------|-----------------------------------------|
| Cart Popup     | Shipping “?” tooltip misaligned from trigger                   | Confusing UX on shipping info           |
| Cart Popup     | Product links in sidecart point to current page (wrong URL)   | Navigation errors, user confusion       |
| Cart Popup     | “Shipping Protection” option disappears without cross-sell    | Loss of protection upsell opportunity   |
| Mobile PDP     | Variant selector has inconsistent borders and truncated names | Reduced clarity in product options      |
| Privacy Popup  | Privacy Policy duplicates website URL text                     | Confusing, unprofessional display       |
| Mobile Video   | Keetsa Theater videos not full width on mobile                 | Poor media presentation on small devices|
| Reviews Filter | Filter input blank when “All ratings” selected                 | User uncertainty selecting filters      |
| Mobile Footer  | “Follow Us” icon spacing inconsistent on devices              | Uneven mobile UI, inconsistent tap areas|
| PDP Layout     | Extra empty “Product Specs” section with single dot            | Visual noise and layout inconsistency   |
| PDP Layout     | Financing notice misaligned on wide screens                    | Pricing clarity and trust impact        |
| Email Popup    | Email pop-up causes site freeze                                | Site unusable, blocks user interaction  |

### Business Impact Summary
- Checkout and cart usability risks impacting conversion.
- Mobile user experience degraded via UI and media issues.
- Clarity and trust weakened by legal and pricing display bugs.
- Critical popup freeze causing user abandonments.

---

## 3. Immediate Response & Fixes

| Focus Area        | Actions Taken                                                                               | Outcome                                      |
|-------------------|-------------------------------------------------------------------------------------------|----------------------------------------------|
| Cart Popup        | Fixed tooltip positioning; corrected product link URLs in cart items                      | ✅ Improved cart usability and navigation    |
| Cart Protection   | Identified shipping protection disappearing due to cross-sell logic (work paused)        | ⏸ On hold – requires logic update            |
| Mobile PDP        | Standardized variant selector borders; full variant names displayed on mobile             | ✅ Consistent, clear product options on mobile|
| Privacy Popup     | Removed duplicated URLs; ensured all links properly formatted                            | ✅ Clear, professional legal text display    |
| Mobile Media      | Made embedded Keetsa Theater videos responsive to viewport widths                         | ✅ Improved mobile media experience           |
| Reviews Filter    | Corrected filter input display for “All ratings” selection                               | ✅ Intuitive filter experience restored      |
| Mobile Footer     | Adjusted icon spacing logic for uniform gaps across devices                              | ✅ Consistent and accessible footer layout    |
| PDP Layout        | Removed empty specs section and realigned financing notice for large desktop screens     | ✅ Cleaner layout and improved pricing clarity|
| Email Popup       | Fixed site freeze caused by email popup activation                                       | ✅ Restored site responsiveness               |

---

## 4. UI/UX Improvement Highlights

| Feature Area             | Before                                                      | After                                                       |
|-------------------------|-------------------------------------------------------------|-------------------------------------------------------------|
| Collection Badges       | No toggle for collection badges                              | Theme variable added to toggle badges on/off                 |
| Badge Copy              | Basic badge copy without price comparison                    | Enhanced badge copy accounts for higher-priced items         |
| Footer Links            | Footer links wrapped mid-phrase, splitting phrases visually | Link labels now wrap as whole phrases                        |
| “We make it easy” Icons | Icon/text spacing collapsed at 480–767px widths             | Proper spacing restored between icons and labels             |
| Upsells on PDP          | No upsells or cross-sells featured                           | Added mobile-friendly upsell and cross-sell sections         |
| Side Cart Messaging     | No dedicated area for promotional messaging                  | Side cart merchandising area implemented                     |
| Cart Upsells            | No upsell or cross-sell features in cart                     | Upsells implemented and tested                               |

---

## 5. Performance & Quality Metrics (Planned Tracking)

| KPI                         | Baseline | After Fix | Improvement | Data Source            |
|-----------------------------|----------|-----------|-------------|------------------------|
| Checkout Conversion Rate     | TBD      | TBD       | TBD         | GA4 / Shopify logs     |
| Mobile PDP Bounce Rate       | TBD      | TBD       | TBD         | GA4                    |
| Cart Error Frequency         | TBD      | TBD       | TBD         | Shopify / GA4          |
| Page Load Speed (PDP)        | TBD      | TBD       | TBD         | Lighthouse Report      |

> KPI data to be validated after tracking schema finalization.

---

## 6. Lessons Learned & Preventive Measures

- Strengthened QA to include viewport-specific UI tests (mobile and desktop).
- Enhanced audit trails through MS Clarity installation for behavioral insights.
- Improved code standards for variant rendering and responsive media components.
- Early identification of cart logic conflicts prevents upsell and protection feature regressions.
- Legal text management centralized to avoid duplicate or malformed content display.

---

## 7. On-Hold Items & Action Plan

| Key      | Description                                                             | Next Step                           | Owner           |
|----------|-------------------------------------------------------------------------|------------------------------------|-----------------|
| KEET-18  | Cart popup — “Shipping Protection” disappears without cross-sell        | Update cart cross-sell logic        | Daniel Carroll  |
| KEET-8   | Issue adding different sizes of same product to cart                    | Expand variant add-to-cart handling | -               |
| KEET-11  | Home page hero text lacks sufficient contrast over banner image         | Redesign overlay or text treatment  | Bobby Hudgins   |
| KEET-7   | Collection page pricing & badges (discount highlight consistency)        | Define and implement A/B testing    | Bobby Hudgins   |

---

## 8. Appendix

| Type   | Key      | Summary                                                               | Status    | Assignee       | Reporter         | Created             | Resolved            |
|--------|----------|-----------------------------------------------------------------------|-----------|----------------|------------------|---------------------|---------------------|
| Task   | KEET-25  | Keetsa Badging: Please add up to copy                                | Done      | Daniel Carroll | Olivia Alvarez   | 2025-10-14 11:09:17 | 2025-10-17 13:48:31 |
| Task   | KEET-24  | Add theme variable for turning on and off collection badges         | Done      | Mason Kim      | Daniel Carroll   | 2025-10-13 13:40:40 | 2025-10-14 11:10:37 |
| Bug    | KEET-23  | PDP (≥1500px) — Financing notice misaligned/too far from price      | Done      | Olivia Alvarez | Bobby Hudgins   | 2025-10-08 12:49:41 | 2025-10-14 11:10:17 |
| Bug    | KEET-22  | Privacy Policy popup shows duplicated website text                   | Done      | Olivia Alvarez | Bobby Hudgins   | 2025-10-08 12:23:30 | 2025-10-14 11:10:11 |
| Bug    | KEET-21  | Keetsa Theater videos don’t fit device width on mobile              | Done      | Olivia Alvarez | Bobby Hudgins   | 2025-10-08 11:31:57 | 2025-10-14 11:10:00 |
| Bug    | KEET-20  | Reviews filter input shows blank when “All ratings” selected        | Done      | Olivia Alvarez | Bobby Hudgins   | 2025-10-08 11:24:10 | 2025-10-14 11:09:52 |
| Bug    | KEET-19  | Mobile footer – “Follow Us” icon spacing inconsistent               | Done      | Olivia Alvarez | Bobby Hudgins   | 2025-10-08 11:04:19 | 2025-10-14 11:09:44 |
| Bug    | KEET-10  | Cart popup – Shipping “?” tooltip is misaligned                     | Done      | Olivia Alvarez | Bobby Hudgins   | 2025-10-07 11:19:33 | 2025-10-13 12:54:28 |
| Bug    | KEET-9   | Keetsa BUG: email pop up causes site to freeze                      | Done      | Olivia Alvarez | Olivia Alvarez  | 2025-09-29 10:20:10 | 2025-09-30 04:50:38 |
| Bug    | KEET-17  | Mobile PDP – variant selector has inconsistent borders and truncated names | Done  | Olivia Alvarez | Bobby Hudgins   | 2025-10-08 08:16:36 | 2025-10-14 11:09:36 |
| Bug    | KEET-16  | Cart popup product links point to the current page (wrong URL)      | Done      | Olivia Alvarez | Bobby Hudgins   | 2025-10-07 15:24:21 | 2025-10-13 12:55:12 |
| Bug    | KEET-15  | PDP shows an extra empty “Product Specs” section with a single dot  | Done      | Olivia Alvarez | Bobby Hudgins   | 2025-10-07 12:48:40 | 2025-10-13 12:55:03 |
| Task   | KEET-14  | Footer links wrap by word instead of per-link, causing split labels | Done      | Olivia Alvarez | Bobby Hudgins   | 2025-10-07 12:43:15 | 2025-10-13 12:54:51 |
| Task   | KEET-13  | 480–767px: “We make it easy” icons lose spacing to labels           | Done      | Olivia Alvarez | Bobby Hudgins   | 2025-10-07 11:57:22 | 2025-10-13 12:54:39 |
| Task   | KEET-12  | “Thoughtfully Designed” card link returns 404                       | Done      | Olivia Alvarez | Bobby Hudgins   | 2025-10-07 11:35:00 | 2025-10-13 12:54:33 |
| Task   | KEET-6   | Review compare at pricing in Keetsa                                 | Done      | Olivia Alvarez | Daniel Carroll  | 2025-09-23 12:59:42 | 2025-10-13 15:52:33 |
| Task   | KEET-5   | Keetsa: Upsells in cart                                             | Done      | Olivia Alvarez | Olivia Alvarez  | 2025-09-16 12:29:36 | 2025-10-13 12:52:19 |
| Task   | KEET-4   | Keetsa: Upsells/Cross Sells on PDP                                  | Done      | Olivia Alvarez | Olivia Alvarez  | 2025-09-16 12:28:33 | 2025-10-13 12:52:03 |
| Task   | KEET-3   | Keetsa: Side cart merchandising area for promotional messaging     | Done      | Olivia Alvarez | Olivia Alvarez  | 2025-09-16 12:24:55 | 2025-09-29 17:24:11 |
| Task   | KEET-2   | Keetsa: Merchandising of prices                                    | Done      | Olivia Alvarez | Olivia Alvarez  | 2025-09-16 12:19:41 | 2025-10-13 12:53:22 |
| Task   | KEET-1   | Keetsa: Add MS Clarity                                              | Done      | Olivia Alvarez | Olivia Alvarez  | 2025-09-16 12:06:35 | 2025-09-26 15:10:54 |
| Task   | KEET-18  | Integrate Keetsa Shopify Orders with SAP via API                   | Done      | Mason Kim      | Mason Kim       | 2025-10-19 18:02:13 | 2025-10-21 09:58:44 |
| Task   | KEET-11  | Home page hero text lacks sufficient contrast (On Hold)           | On Hold   | Bobby Hudgins | Bobby Hudgins   | 2025-10-07 11:24:22 | -                   |
| Bug    | KEET-8   | Issue adding different sizes of same product to cart (On Hold)    | On Hold   | -              | Olivia Alvarez  | 2025-09-26 15:32:51 | -                   |
| Task   | KEET-7   | Collection Page Pricing & Badges (On Hold)                         | On Hold   | Bobby Hudgins | Daniel Carroll  | 2025-09-23 13:00:47 | -                   |
| Task   | KEET-30  | Register “Keetsa Theme Migration Project” on Zinus Tech Blog       | To Do     | Mason Kim      | Mason Kim       | 2025-10-19 18:57:18 | -                   |
| Task   | KEET-19  | Migrate keetsa.com Domain to Cloudflare                            | To Do     | -              | Mason Kim       | 2025-10-19 18:44:59 | -                   |
| Task   | KEET-31+ | Multiple tasks for theme migration (Project setup, SEO, checkout, etc.) | In Progress / To Do                | Various        | Mason Kim       | Various             | -                   |

*Note:* Tasks unrelated to website development (e.g., blog post, domain migration) were excluded from detailed summary but listed for transparency.

---
