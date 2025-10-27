# Keetsa Development Report – September-October 2025

---

## 1. Executive Summary

During September-October 2025, a total of **38 Jira tickets** related to the Keetsa website development were analyzed:
- **27 Tasks**
- **10 Bugs**
- **1 Task In Progress**
- **3 On Hold (including 2 bugs and 1 task)**

The overall **completion rate** for website-related tickets was **71% Done**.

Key outcomes include:
- Resolution of multiple frontend bugs impacting the Product Detail Page (PDP), cart popup, and mobile layouts.
- Enhancements to merchandising with new badge toggling and expanded badge copy.
- Improvements to responsive layouts such as icon spacing and footer link wrapping.
- Introduction of Microsoft Clarity analytics for behavioral data collection.
- Preparation and auditing efforts for the upcoming Keetsa theme migration project.
- Several on-hold items pending further investigation or design input.

Major themes for this period centered on **UI/UX consistency fixes**, **cart and PDP stability**, and **merchandising enhancements**.

---

## 2. Incident Overview

### Key Bug Issues

| Category      | Description                                                       | Impact                             |
|---------------|-------------------------------------------------------------------|----------------------------------|
| Cart Popup    | Shipping “?” tooltip misaligned from trigger                      | Confusing tooltip placement       |
| Cart Popup    | Product links point to wrong URL (current page URL used)          | Navigation disruptions            |
| Cart Popup    | “Shipping Protection” option disappears with no cross-sell        | Lost upsell opportunity           |
| Mobile PDP    | Variant selector has inconsistent borders and truncated names     | Reduced clarity and UX consistency|
| PDP           | Extra empty “Product Specs” section with a dot                    | Unnecessary visual clutter       |
| Reviews       | Filter input shows blank when “All ratings” selected              | Confusing filter feedback         |
| Footer        | “Follow Us” icons spacing inconsistent across mobile devices     | UX inconsistency on mobile        |
| Mobile Video  | Keetsa Theater videos do not fill mobile device width             | Suboptimal media responsiveness   |
| Privacy Popup | Privacy policy popup duplicates linked website text               | Confusing legal content display   |
| PDP           | Financing notice misaligned on large screens (≥1500px)            | Reduced price/financing clarity   |

### Business Impact Summary
- Reduced mobile UX consistency and clarity.
- Potential checkout flow interruptions and lost cross-sell engagement.
- Accessibility and visual coherence issues affecting trust.
- Temporary confusion in reviews filtering and legal information presentation.

---

## 3. Immediate Response & Fixes

| Focus Area   | Actions Taken                                                                 | Outcome                                     |
|--------------|-------------------------------------------------------------------------------|--------------------------------------------|
| Cart Popup   | Fixed tooltip alignment and corrected product link URLs                      | ✅ Restored intuitive tooltip and correct navigation |
| Cart Popup   | Investigated “Shipping Protection” disappearance; work on hold pending further review | ⏸ Issue on hold; requires cross-sell logic update        |
| Mobile PDP   | Standardized variant selector borders and updated variant labels for clarity | ✅ Improved mobile variant selection experience|
| PDP          | Removed extra empty “Product Specs” section                                 | ✅ Eliminated visual clutter on product pages|
| Reviews      | Corrected reviews filter input to display “All ratings” when selected       | ✅ Enhanced user filter feedback clarity  |
| Footer       | Adjusted “Follow Us” icon spacing for device consistency                    | ✅ Consistent social icon layout on mobile |
| Mobile Video | Made embedded videos responsive to fill mobile viewport                     | ✅ Improved media display on mobile devices|
| Privacy Popup| Fixed duplicated website text in Privacy Policy modal                       | ✅ Clarified legal text for users          |
| PDP          | Repositioned financing notice near price on wide screens                    | ✅ Improved pricing and financing clarity |

---

## 4. UI/UX Improvement Highlights

| Feature Area              | Before                                                     | After                                                      |
|--------------------------|------------------------------------------------------------|------------------------------------------------------------|
| Collection Badges        | No toggle for collection badges visibility                  | Added theme variable to enable/disable badges (KEET-24)    |
| Badge Copy               | Limited badge copy on collections                            | Added expanded copy to badges for clearer price messaging (KEET-25) |
| Icon-Text Spacing        | 480–767px “We make it easy” icons crowd labels              | Restored consistent vertical spacing between icons and text|
| Footer Links             | Multi-word footer links wrap mid-phrase, splitting labels   | Improved link wrapping to keep labels intact               |
| Review Filter Input      | Filter input blank when “All ratings” selected               | Input now shows “All ratings” correctly                     |
| Keetsa Theater Videos   | Videos fixed width and guttered on mobile                     | Videos resize responsively to fill viewport width          |

---

## 5. On-Hold Items & Action Plan

| Key            | Description                                             | Next Step                                              | Owner           |
|----------------|---------------------------------------------------------|--------------------------------------------------------|-----------------|
| Helixian-KEET-18 | Cart popup “Shipping Protection” hides without cross-sell | Update cross-sell fallback logic to keep protection visible | Daniel Carroll  |
| Helixian-KEET-8  | Issue adding multiple sizes of same product to cart    | Expand variant add-to-cart logic and test thoroughly  | -               |
| Helixian-KEET-7  | Collection Page Pricing & Badges positioning            | Coordinate design review and A/B test                   | Bobby Hudgins   |
| Helixian-KEET-11 | Home page hero text lacks contrast/readability         | Redesign overlay or adjust background for contrast     | Bobby Hudgins   |

---

## 6. Appendix

| Type   | Key           | Summary                                                    | Status    | Assignee       | Reporter        | Created             | Resolved            |
|--------|---------------|------------------------------------------------------------|-----------|----------------|-----------------|---------------------|---------------------|
| Task   | Helixian-KEET-25 | Keetsa Badging: Please add up to copy                      | Done      | Daniel Carroll | Olivia Alvarez  | 2025-10-14T11:09:17 | 2025-10-17T13:48:31 |
| Task   | Helixian-KEET-24 | Add theme variable for turning on/off collection badges   | Done      | Mason Kim      | Daniel Carroll  | 2025-10-13T13:40:40 | 2025-10-14T11:10:37 |
| Bug    | Helixian-KEET-23 | PDP (≥1500px) — Financing notice misaligned               | Done      | Olivia Alvarez | Bobby Hudgins  | 2025-10-08T12:49:41 | 2025-10-14T11:10:17 |
| Bug    | Helixian-KEET-22 | Privacy Policy popup shows duplicated text                 | Done      | Olivia Alvarez | Bobby Hudgins  | 2025-10-08T12:23:30 | 2025-10-14T11:10:11 |
| Bug    | Helixian-KEET-21 | Keetsa Theater videos don’t fit device width on mobile    | Done      | Olivia Alvarez | Bobby Hudgins  | 2025-10-08T11:31:57 | 2025-10-14T11:10:00 |
| Bug    | Helixian-KEET-20 | Reviews filter input shows blank when “All ratings” selected | Done      | Olivia Alvarez | Bobby Hudgins  | 2025-10-08T11:24:10 | 2025-10-14T11:09:52 |
| Bug    | Helixian-KEET-19 | Mobile footer – “Follow Us” icon spacing inconsistent      | Done      | Olivia Alvarez | Bobby Hudgins  | 2025-10-08T11:04:19 | 2025-10-14T11:09:44 |
| Bug    | Helixian-KEET-18 | Cart popup — “Shipping Protection” disappears when cross-sell unavailable | On Hold   | Daniel Carroll | Bobby Hudgins  | 2025-10-08T08:48:40 | -                   |
| Bug    | Helixian-KEET-17 | Mobile PDP – variant selector inconsistent borders, truncated labels | Done      | Olivia Alvarez | Bobby Hudgins  | 2025-10-08T08:16:36 | 2025-10-14T11:09:36 |
| Bug    | Helixian-KEET-16 | Cart popup product links point to wrong URL                | Done      | Olivia Alvarez | Bobby Hudgins  | 2025-10-07T15:24:21 | 2025-10-13T12:55:12 |
| Bug    | Helixian-KEET-15 | PDP shows extra empty “Product Specs” section              | Done      | Olivia Alvarez | Bobby Hudgins  | 2025-10-07T12:48:40 | 2025-10-13T12:55:03 |
| Task   | Helixian-KEET-14 | Footer links wrap by word causing split labels             | Done      | Olivia Alvarez | Bobby Hudgins  | 2025-10-07T12:43:15 | 2025-10-13T12:54:51 |
| Task   | Helixian-KEET-13 | 480–767px: “We make it easy” icons lose spacing            | Done      | Olivia Alvarez | Bobby Hudgins  | 2025-10-07T11:57:22 | 2025-10-13T12:54:39 |
| Task   | Helixian-KEET-12 | “Thoughtfully Designed” card link returns 404               | Done      | Olivia Alvarez | Bobby Hudgins  | 2025-10-07T11:35:00 | 2025-10-13T12:54:33 |
| Task   | Helixian-KEET-11 | Home page hero text lacks contrast                          | On Hold   | Bobby Hudgins  | Bobby Hudgins  | 2025-10-07T11:24:22 | -                   |
| Bug    | Helixian-KEET-10 | Cart popup – Shipping “?” tooltip is misaligned             | Done      | Olivia Alvarez | Bobby Hudgins  | 2025-10-07T11:19:33 | 2025-10-13T12:54:28 |
| Bug    | Helixian-KEET-9  | Email pop up causes site to freeze                           | Done      | Olivia Alvarez | Olivia Alvarez | 2025-09-29T10:20:10 | 2025-09-30T04:50:38 |
| Bug    | Helixian-KEET-8  | Issue adding different sizes of same product to cart        | On Hold   | -              | Olivia Alvarez | 2025-09-26T15:32:51 | -                   |
| Task   | Helixian-KEET-7  | Collection Page Pricing & Badges                             | On Hold   | Bobby Hudgins  | Daniel Carroll | 2025-09-23T13:00:47 | -                   |
| Task   | Helixian-KEET-6  | Review compare at pricing                                    | Done      | Olivia Alvarez | Daniel Carroll | 2025-09-23T12:59:42 | 2025-10-13T15:52:33 |
| Task   | Helixian-KEET-5  | Keetsa: Upsells in cart                                     | Done      | Olivia Alvarez | Olivia Alvarez | 2025-09-16T12:29:36 | 2025-10-13T12:52:19 |
| Task   | Helixian-KEET-4  | Keetsa: Upsells/Cross Sells on PDP                          | Done      | Olivia Alvarez | Olivia Alvarez | 2025-09-16T12:28:33 | 2025-10-13T12:52:03 |
| Task   | Helixian-KEET-3  | Keetsa: Side cart merchandising area for promotional messaging | Done      | Olivia Alvarez | Olivia Alvarez | 2025-09-16T12:24:55 | 2025-09-29T17:24:11 |
| Task   | Helixian-KEET-2  | Keetsa: Merchandising of prices                             | Done      | Olivia Alvarez | Olivia Alvarez | 2025-09-16T12:19:41 | 2025-10-13T12:53:22 |
| Task   | Helixian-KEET-1  | Keetsa: Add MS Clarity                                     | Done      | Olivia Alvarez | Olivia Alvarez | 2025-09-16T12:06:35 | 2025-09-26T15:10:54 |
| Task   | Zinus-KEET-18    | Integrate Keetsa Shopify Orders with SAP via API           | Done      | Mason Kim      | Mason Kim      | 2025-10-19T18:02:13 | 2025-10-21T09:58:44 |
| Task   | Zinus-KEET-1     | Project setup & baseline audit                              | In Progress | Bobby Hudgins  | Mason Kim      | 2025-10-19T10:18:36 | -                   |
| Task   | Zinus-KEET-30    | Register “Keetsa Theme Migration Project” on Zinus Tech Blog| To Do     | Mason Kim      | Mason Kim      | 2025-10-19T18:57:18 | -                   |
| Task   | Zinus-KEET-19    | Migrate keetsa.com Domain to Cloudflare and Update Name Servers | To Do   | -              | Mason Kim      | 2025-10-19T18:44:59 | -                   |
| Task   | Zinus-KEET-11    | QA, Launch, Monitoring                                     | To Do     | -              | Mason Kim      | 2025-10-19T10:20:38 | -                   |
| Task   | Zinus-KEET-10    | Accessibility & Performance                                | To Do     | -              | Mason Kim      | 2025-10-19T10:20:30 | -                   |
| Task   | Zinus-KEET-9     | SEO/JSON‑LD standardization                                | To Do     | -              | Mason Kim      | 2025-10-19T10:20:18 | -                   |
| Task   | Zinus-KEET-8     | Checkout Extensibility & Cart Transform (recycle fees)    | To Do     | -              | Mason Kim      | 2025-10-19T10:20:12 | -                   |
| Task   | Zinus-KEET-7     | Apps to App Blocks & GTM consolidation                     | To Do     | -              | Mason Kim      | 2025-10-19T10:20:06 | -                   |
| Task   | Zinus-KEET-6     | Cart drawer migration                                     | To Do     | -              | Mason Kim      | 2025-10-19T10:19:57 | -                   |
| Task   | Zinus-KEET-5     | PDP & metafields (keetsa.)                                 | To Do     | -              | Mason Kim      | 2025-10-19T10:19:50 | -                   |
| Task   | Zinus-KEET-4     | Home (marketing) sections                                  | To Do     | -              | Mason Kim      | 2025-10-19T10:19:38 | -                   |
| Task   | Zinus-KEET-3     | Header/Footer/Top Banner                                   | To Do     | -              | Mason Kim      | 2025-10-19T10:19:14 | -                   |
| Task   | Zinus-KEET-2     | Dawn base theme & branding                                | To Do     | -              | Mason Kim      | 2025-10-19T10:18:43 | -                   |

---