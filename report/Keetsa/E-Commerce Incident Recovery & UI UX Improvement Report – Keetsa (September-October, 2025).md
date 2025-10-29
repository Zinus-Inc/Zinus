# Keetsa Development Report – September-October 2025

---

## 1. Executive Summary

During September-October 2025, **39 Jira tickets** related to the Keetsa website were reviewed:
- **29 Tasks**
- **9 Bugs**
- **1 Task In Progress**
- **3 On Hold tickets (2 Tasks, 1 Bug)**

The completion rate of resolved tickets is **79%** (31 done out of 39).

Key outcomes included:
- Enhancements to merchandising and pricing badges to improve consumer pricing visibility.
- Multiple bug fixes focused on improving mobile responsiveness, footer spacing, cart functionality, and checkout policy text.
- Introduction of upsell/cross-sell features on product detail and cart pages.
- UI improvements for footer links, hero text contrast, and video responsiveness.

Bug type tickets largely involved UI anomalies affecting pricing notice alignment, video scaling on mobile, filter inputs, link misrouting, and cart pop-up behaviors. These were handled primarily through CSS adjustments, URL corrections, and conditional display logic.

Major themes:
- UI/UX consistency fixes on product and cart pages.
- Mobile responsiveness and layout corrections.
- Merchandising enhancements including badge toggles and copy additions.
- Technical groundwork for theme migration and analytics integration.

### Bug Ticket Summary
- Misaligned financing notice on wide desktop views fixed for clarity.
- Privacy Policy popup corrected to remove duplicated URLs.
- Mobile video embeds made responsive to avoid side gutters.
- Filter input updated to correctly display "All ratings".
- Cart popup product links corrected to avoid incorrect redirections.
- Cart popup tooltip repositioned for improved accessibility.
- Mobile PDP variant selectors reworked for uniform borders and full names.
- Footer icon spacing standardized across devices.
- Cart popup shipping protection display issue remains on hold.

---

## 2. Incident Overview

| Category        | Description                                                            | Impact                                  |
|-----------------|------------------------------------------------------------------------|-----------------------------------------|
| PDP Financing   | Financing notice misaligned at ≥1500px width on desktop                | Visual confusion reducing price clarity |
| Privacy Popup   | Privacy Policy modal shows duplicated, concatenated URLs               | Confuses users with incorrect legal text|
| Keetsa Theater  | Embedded videos not responsive on mobile, leaving gaps                 | Poor mobile viewing experience           |
| Reviews Filter  | “All ratings” filter shows blank instead of label                      | Confusing filter state for users         |
| Cart Links      | Cart popup product links redirect to current page, not product page    | Navigation errors leading to user frustration |
| Cart Tooltip    | Shipping “?” tooltip misaligned from trigger                           | Tooltip usability issues                  |
| Mobile PDP      | Variant selector borders inconsistent; labels truncated                | Reduces clarity and selection accuracy   |
| Mobile Footer   | “Follow Us” icon spacing inconsistent across devices                   | Poor and inconsistent mobile UI          |
| Cart Popup      | Shipping Protection disappears when cross-sell unavailable (On Hold)   | Reduced ability to add protection at checkout |

### Business Impact
- Impaired user clarity and trust in pricing and checkout details.
- Reduced mobile user experience consistency.
- Potential navigation errors leading to drop-off or cart abandonment risk.
- Minor interruptions in checkout flow due to UI inconsistencies.

---

## 3. Immediate Response & Fixes

| Focus Area   | Actions Taken                                                                    | Outcome                                        |
|--------------|---------------------------------------------------------------------------------|------------------------------------------------|
| PDP Layout   | Adjusted financing notice alignment and spacing on large desktop screens       | ✅ Improved price and financing clarity        |
| Privacy UI   | Fixed duplication and concatenation of URLs in Privacy Policy popup             | ✅ Clear and correct legal copy                  |
| Mobile Video | Made Keetsa Theater embedded videos responsive to viewport width                | ✅ Responsive video fills on mobile devices      |
| Reviews     | Corrected reviews filter to show “All ratings” when selected                    | ✅ Clear filter state displayed                   |
| Cart Links   | Fixed cart popup product links to point to correct product pages                | ✅ Correct navigation on cart item links         |
| Cart Tooltip | Repositioned shipping “?” tooltip to anchor beside trigger                      | ✅ Tooltip usability and clarity restored        |
| Mobile PDP   | Standardized variant selector borders and ensured full variant names            | ✅ Consistent mobile PDP variant display          |
| Footer Icons | Adjusted CSS for consistent spacing of “Follow Us” icons across devices        | ✅ Uniform icon layout on mobile                   |

---

## 4. UI/UX Improvement Highlights

| Feature Area                 | Before                                               | After                                                |
|-----------------------------|-----------------------------------------------------|-----------------------------------------------------|
| Keetsa Badging              | Badges lacked copy to clarify pricing outliers       | Added copy to badges for improved consumer visibility|
| Collection Badges           | No toggle option to enable/disable badges             | Theme variable added for flexible badge display      |
| Footer Link Wrapping        | Footer links wrapped mid-phrase causing confusion     | Footer links preserved as whole to improve clarity   |
| Hero Text Contrast          | Hero text difficult to read over varying banner images| Contrast issue identified, under review (On Hold)    |
| “We Make It Easy” Icons     | 480–767px viewport icons had no spacing to labels     | Spacing between icons and labels restored             |
| Upsells/Cross-Sells on PDP  | No merchandising upsell on PDP pages                   | Added cross-sell/upsell features                      |
| Upsells in Cart             | No upsell merchandising in cart                        | Implemented upsell suggestions in cart page           |
| MS Clarity Integration      | Absent                                                | Added Microsoft Clarity for user behavior analytics  |

---

## 5. On-Hold Items & Action Plan

| Key              | Description                                                       | Next Step                                   | Owner           |
|------------------|-------------------------------------------------------------------|---------------------------------------------|-----------------|
| Helixian-KEET-18 | Cart popup “Shipping Protection” disappears without cross-sell   | Update logic to show Shipping Protection independent of cross-sell | Daniel Carroll  |
| Helixian-KEET-8  | Issue adding different sizes of same product to cart             | Expand and finalize test cases for variant add logic                  | -               |
| Helixian-KEET-11 | Home page hero text contrast insufficient for readability        | Redesign overlay or adjust background gradient                        | Bobby Hudgins   |
| Helixian-KEET-7  | Collection page pricing and discount badge display               | Coordinate A/B testing and finalize badge style                        | Bobby Hudgins   |

---

## 6. Appendix

| Type     | Key               | Summary                                                                      | Status    | Assignee         | Reporter          | Created               | Resolved              |
|----------|-------------------|------------------------------------------------------------------------------|-----------|------------------|-------------------|-----------------------|-----------------------|
| Bug      | Helixian-KEET-23  | PDP (≥1500px width) — Financing notice misaligned/too far from price         | Done      | Olivia Alvarez   | Bobby Hudgins     | 2025-10-08T12:49:41   | 2025-10-14T11:10:17   |
| Bug      | Helixian-KEET-22  | Privacy Policy popup shows duplicated website text                           | Done      | Olivia Alvarez   | Bobby Hudgins     | 2025-10-08T12:23:30   | 2025-10-14T11:10:11   |
| Bug      | Helixian-KEET-21  | Keetsa Theater videos don’t fit device width on mobile                       | Done      | Olivia Alvarez   | Bobby Hudgins     | 2025-10-08T11:31:57   | 2025-10-14T11:10:00   |
| Bug      | Helixian-KEET-20  | Reviews filter input shows blank when “All ratings” is selected              | Done      | Olivia Alvarez   | Bobby Hudgins     | 2025-10-08T11:24:10   | 2025-10-14T11:09:52   |
| Bug      | Helixian-KEET-19  | Mobile footer – “Follow Us” icon spacing inconsistent                         | Done      | Olivia Alvarez   | Bobby Hudgins     | 2025-10-08T11:04:19   | 2025-10-14T11:09:44   |
| Bug      | Helixian-KEET-18  | Cart popup — “Shipping Protection” option disappears when cross-sell unavailable| On Hold   | Daniel Carroll   | Bobby Hudgins     | 2025-10-08T08:48:40   | -                     |
| Bug      | Helixian-KEET-17  | Mobile PDP – variant selector inconsistent borders and truncated names       | Done      | Olivia Alvarez   | Bobby Hudgins     | 2025-10-08T08:16:36   | 2025-10-14T11:09:36   |
| Bug      | Helixian-KEET-16  | Cart popup product links point to the current page (wrong URL)               | Done      | Olivia Alvarez   | Bobby Hudgins     | 2025-10-07T15:24:21   | 2025-10-13T12:55:12   |
| Bug      | Helixian-KEET-15  | PDP shows extra empty “Product Specs” section with a single dot              | Done      | Olivia Alvarez   | Bobby Hudgins     | 2025-10-07T12:48:40   | 2025-10-13T12:55:03   |
| Bug      | Helixian-KEET-10  | Cart popup – Shipping “?” tooltip is misaligned from trigger                  | Done      | Olivia Alvarez   | Bobby Hudgins     | 2025-10-07T11:19:33   | 2025-10-13T12:54:28   |
| Bug      | Helixian-KEET-9   | Keetsa BUG: email pop up causes site to freeze                               | Done      | Olivia Alvarez   | Olivia Alvarez    | 2025-09-29T10:20:10   | 2025-09-30T04:50:38   |
| Bug      | Helixian-KEET-8   | Issue when adding different sizes of same product to cart                    | On Hold   | -                | Olivia Alvarez    | 2025-09-26T15:32:51   | -                     |
| Task     | Helixian-KEET-25  | Keetsa Badging: Please add up to copy                                        | Done      | Daniel Carroll   | Olivia Alvarez    | 2025-10-14T11:09:17   | 2025-10-17T13:48:31   |
| Task     | Helixian-KEET-24  | Add theme variable for turning on and off the collection badges             | Done      | Mason Kim       | Daniel Carroll    | 2025-10-13T13:40:40   | 2025-10-14T11:10:37   |
| Task     | Helixian-KEET-14  | Footer links wrap by word instead of per-link, causing split/cut labels     | Done      | Olivia Alvarez   | Bobby Hudgins     | 2025-10-07T12:43:15   | 2025-10-13T12:54:51   |
| Task     | Helixian-KEET-13  | 480–767px: “We make it easy” icons lose spacing to labels (two-row layout)  | Done      | Olivia Alvarez   | Bobby Hudgins     | 2025-10-07T11:57:22   | 2025-10-13T12:54:39   |
| Task     | Helixian-KEET-12  | “Thoughtfully Designed” card link returns 404                               | Done      | Olivia Alvarez   | Bobby Hudgins     | 2025-10-07T11:35:00   | 2025-10-13T12:54:33   |
| Task     | Helixian-KEET-5   | Keetsa: Upsells in cart                                                     | Done      | Olivia Alvarez   | Olivia Alvarez    | 2025-09-16T12:29:36   | 2025-10-13T12:52:19   |
| Task     | Helixian-KEET-4   | Keetsa: Upsells/Cross Sells on PDP                                         | Done      | Olivia Alvarez   | Olivia Alvarez    | 2025-09-16T12:28:33   | 2025-10-13T12:52:03   |
| Task     | Helixian-KEET-3   | Keetsa: Side cart merchandising area for promotional messaging             | Done      | Olivia Alvarez   | Olivia Alvarez    | 2025-09-16T12:24:55   | 2025-09-29T17:24:11   |
| Task     | Helixian-KEET-2   | Keetsa: Merchandising of prices                                            | Done      | Olivia Alvarez   | Olivia Alvarez    | 2025-09-16T12:19:41   | 2025-10-13T12:53:22   |
| Task     | Helixian-KEET-1   | Keetsa: Add MS Clarity                                                     | Done      | Olivia Alvarez   | Olivia Alvarez    | 2025-09-16T12:06:35   | 2025-09-26T15:10:54   |
| Task     | Helixian-KEET-6   | Review compare at pricing in Keetsa                                       | Done      | Olivia Alvarez   | Daniel Carroll    | 2025-09-23T12:59:42   | 2025-10-13T15:52:33   |
| Task     | Helixian-KEET-7   | Collection Page Pricing & Badges (top left corner discount highlight)      | On Hold   | Bobby Hudgins    | Daniel Carroll    | 2025-09-23T13:00:47   | -                     |
| Task     | Helixian-KEET-11  | Home page hero text lacks sufficient contrast/readability over banner image| On Hold   | Bobby Hudgins    | Bobby Hudgins     | 2025-10-07T11:24:22   | -                     |
| Task     | Zinus-KEET-18     | Integrate Keetsa Shopify Orders with SAP via API                           | Done      | Mason Kim       | Mason Kim         | 2025-10-19T18:02:13   | 2025-10-21T09:58:44   |
| Task     | Zinus-KEET-1      | Project setup & baseline audit                                             | In Progress | Bobby Hudgins  | Mason Kim         | 2025-10-19T10:18:36   | -                     |
| Task     | Zinus-KEET-19     | Migrate keetsa.com Domain to Cloudflare                                   | To Do     | -                | Mason Kim         | 2025-10-19T18:44:59   | -                     |
| Task     | Zinus-KEET-30     | Register “Keetsa Theme Migration Project” on Zinus Tech Blog              | To Do     | Mason Kim       | Mason Kim         | 2025-10-19T18:57:18   | -                     |
| Task     | Zinus-KEET-10     | Accessibility & Performance                                               | To Do     | -                | Mason Kim         | 2025-10-19T10:20:30   | -                     |
| Task     | Zinus-KEET-9      | SEO/JSON‑LD standardization                                              | To Do     | -                | Mason Kim         | 2025-10-19T10:20:18   | -                     |
| Task     | Zinus-KEET-8      | Checkout Extensibility & Cart Transform (recycle fees)                   | To Do     | -                | Mason Kim         | 2025-10-19T10:20:12   | -                     |
| Task     | Zinus-KEET-7      | Apps to App Blocks & GTM consolidation                                  | To Do     | -                | Mason Kim         | 2025-10-19T10:20:06   | -                     |
| Task     | Zinus-KEET-6      | Cart drawer migration                                                    | To Do     | -                | Mason Kim         | 2025-10-19T10:19:57   | -                     |
| Task     | Zinus-KEET-5      | PDP & metafields (keetsa.)                                              | To Do     | -                | Mason Kim         | 2025-10-19T10:19:50   | -                     |
| Task     | Zinus-KEET-4      | Home (marketing) sections                                               | To Do     | -                | Mason Kim         | 2025-10-19T10:19:38   | -                     |
| Task     | Zinus-KEET-3      | Header/Footer/Top Banner                                               | To Do     | -                | Mason Kim         | 2025-10-19T10:19:14   | -                     |
| Task     | Zinus-KEET-2      | Dawn base theme & branding                                              | To Do     | -                | Mason Kim         | 2025-10-19T10:18:43   | -                     |

---

*End of report.*