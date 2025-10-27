# Keetsa Development Report – September-October 2025

---

## 1. Executive Summary

This reporting period covers **42 Jira tickets** related to the Keetsa website development:
- **32 Tasks**
- **9 Bugs**
- **1 Task In Progress**
- **3 On Hold tickets**

The completion rate for website-related tickets is **76% done** (32 of 42).  
Key outcomes include:
- Multiple UI/UX improvements enhancing product page responsiveness and footer usability.
- Critical bug fixes on cart popup, mobile PDP, and privacy policy popups.
- Implementation of new merchandising badges and MS Clarity analytics integration.
- Several items remain on hold for further investigation or dependency resolution.

Major themes focus on **frontend visual consistency, mobile responsiveness, merchandising enhancements, and cart experience stabilization**.

---

## 2. Incident Overview

### Key Bugs Identified

| Category        | Description                                            | Impact                                     |
|-----------------|--------------------------------------------------------|--------------------------------------------|
| Cart Popup      | Shipping “?” tooltip misaligned from trigger           | Confusing pricing info in cart             |
| Cart Popup      | Product links point to wrong URL (current page used)   | Navigation errors and user confusion       |
| Cart Popup      | “Shipping Protection” disappears if cross-sell missing | Reduced protection upsell, lost revenue    |
| PDP             | Extra empty "Product Specs" section on product pages   | Visual clutter, reduced user clarity       |
| PDP             | Financing notice misaligned on large desktop screens   | Reduced clarity on financing availability  |
| Mobile PDP      | Variant selector borders inconsistent and truncated names | Poor UX and variant identification         |
| Reviews Filter  | “All ratings” filter input shows blank                  | Confusing filter behavior                    |
| Privacy Popup   | Privacy Policy popup shows duplicated website text      | Confusing legal info presentation           |
| Mobile Footer   | “Follow Us” icons spacing inconsistent across devices  | Inconsistent mobile UI layout                |

### Business Impact
- Risk of reduced clarity and trust in pricing and financing information.
- Navigation errors potentially causing lost conversions.
- Confusing user experience on mobile and checkout flow.
- Minor visual clutter impacting perceived site quality.

---

## 3. Immediate Response & Fixes

| Focus Area     | Actions Taken                                             | Outcome                                        |
|----------------|----------------------------------------------------------|------------------------------------------------|
| Cart Popup     | Fixed tooltip alignment and corrected product link URLs   | ✅ Restored clear pricing info and navigation  |
| Cart Popup     | Investigated “Shipping Protection” disappearance (on hold) | ⏸ Partial, pending further action              |
| PDP            | Removed extra empty specs section                          | ✅ Reduced visual noise                          |
| PDP            | Realigned financing notice for ≥1500px screens           | ✅ Improved pricing and financing clarity       |
| Mobile PDP     | Standardized variant selector borders and names           | ✅ Consistent variant display and UX            |
| Reviews Filter | Corrected filter to show “All ratings” label properly     | ✅ Clear filter input                            |
| Privacy Popup  | Fixed duplicated URL in policy popup                       | ✅ Clean and accurate legal content             |
| Mobile Footer  | Adjusted icon spacing for consistent layout across devices | ✅ Uniform UI experience on mobile               |

---

## 4. UI/UX Improvement Highlights

| Feature Area            | Before                                                       | After                                                      |
|------------------------|--------------------------------------------------------------|------------------------------------------------------------|
| Collection Badging      | No toggle for sale badges on collections                      | Added theme variable to enable/disable badges              |
| Badge Copy             | Limited badge copy on pricing variations                       | Added additional copy for better consumer visibility       |
| “We Make It Easy” Icons | Icon-to-text spacing collapsed on 480–767px breakpoints       | Consistent spacing restored for two-row layouts             |
| Footer Links           | Link labels broke mid-phrase causing confusion                | Links wrap per whole label preserving readability           |
| Home Page Hero Text    | Low contrast caused legibility issues over banner image       | On hold – planned redesign for better contrast              |
| Side Cart Messaging     | No merchandising area for promotions                           | Added configurable area for promotional messaging           |
| MS Clarity Analytics   | Not installed                                                  | Integrated Microsoft Clarity for user behavior tracking      |
| Upsell Features        | Limited cross-sell/upsell on PDP and cart                      | Added cross-sell and upsell areas with mobile-first design  |

---

## 5. On-Hold Items & Action Plan

| Key               | Description                                               | Next Step                          | Owner          |
|-------------------|-----------------------------------------------------------|-----------------------------------|----------------|
| Helixian-KEET-18  | Cart popup “Shipping Protection” disappears when cross-sell missing | Update cross-sell logic to retain protection | Daniel Carroll |
| Helixian-KEET-8   | Issue adding different sizes of same product to cart      | Expand variant test cases          | QA / Dev Team  |
| Helixian-KEET-7   | Collection page pricing & badges positioning               | Prepare A/B test plan              | Bobby Hudgins  |
| Helixian-KEET-11  | Home page hero text contrast/readability                   | Redesign overlay or background    | Bobby Hudgins  |

---

## 6. Appendix

| Type  | Key               | Summary                                                  | Status    | Assignee       | Reporter        | Created              | Resolved             |
|-------|-------------------|----------------------------------------------------------|-----------|----------------|-----------------|----------------------|----------------------|
| Task  | Helixian-KEET-25  | Keetsa Badging: Please add up to copy                     | Done      | Daniel Carroll | Olivia Alvarez  | 2025-10-14T11:09:17Z | 2025-10-17T13:48:31Z |
| Task  | Helixian-KEET-24  | Add theme variable for turning on and off collection badges | Done    | Mason Kim      | Daniel Carroll  | 2025-10-13T13:40:40Z | 2025-10-14T11:10:37Z |
| Bug   | Helixian-KEET-23  | PDP (≥1500px width) — Financing notice misaligned         | Done      | Olivia Alvarez | Bobby Hudgins  | 2025-10-08T12:49:41Z | 2025-10-14T11:10:17Z |
| Bug   | Helixian-KEET-22  | Privacy Policy popup shows duplicated website text         | Done      | Olivia Alvarez | Bobby Hudgins  | 2025-10-08T12:23:30Z | 2025-10-14T11:10:11Z |
| Bug   | Helixian-KEET-21  | Keetsa Theater videos don’t fit device width on mobile     | Done      | Olivia Alvarez | Bobby Hudgins  | 2025-10-08T11:31:57Z | 2025-10-14T11:10:00Z |
| Bug   | Helixian-KEET-20  | Reviews filter input shows blank when “All ratings” selected | Done    | Olivia Alvarez | Bobby Hudgins  | 2025-10-08T11:24:10Z | 2025-10-14T11:09:52Z |
| Bug   | Helixian-KEET-19  | Mobile footer – “Follow Us” icon spacing inconsistent       | Done      | Olivia Alvarez | Bobby Hudgins  | 2025-10-08T11:04:19Z | 2025-10-14T11:09:44Z |
| Bug   | Helixian-KEET-18  | Cart popup — “Shipping Protection” option disappears        | On Hold   | Daniel Carroll | Bobby Hudgins  | 2025-10-08T08:48:40Z | -                    |
| Bug   | Helixian-KEET-17  | Mobile PDP – variant selector has inconsistent borders and truncated names | Done | Olivia Alvarez | Bobby Hudgins | 2025-10-08T08:16:36Z | 2025-10-14T11:09:36Z |
| Bug   | Helixian-KEET-16  | Cart popup product links point to wrong URL                 | Done      | Olivia Alvarez | Bobby Hudgins  | 2025-10-07T15:24:21Z | 2025-10-13T12:55:12Z |
| Bug   | Helixian-KEET-15  | PDP shows an extra empty “Product Specs” section            | Done      | Olivia Alvarez | Bobby Hudgins  | 2025-10-07T12:48:40Z | 2025-10-13T12:55:03Z |
| Task  | Helixian-KEET-14  | Footer links wrap by word instead of per-link                | Done      | Olivia Alvarez | Bobby Hudgins  | 2025-10-07T12:43:15Z | 2025-10-13T12:54:51Z |
| Task  | Helixian-KEET-13  | 480–767px: “We make it easy” icons lose spacing to labels    | Done      | Olivia Alvarez | Bobby Hudgins  | 2025-10-07T11:57:22Z | 2025-10-13T12:54:39Z |
| Task  | Helixian-KEET-12  | “Thoughtfully Designed” card link returns 404                 | Done      | Olivia Alvarez | Bobby Hudgins  | 2025-10-07T11:35:00Z | 2025-10-13T12:54:33Z |
| Task  | Helixian-KEET-11  | Home page hero text lacks sufficient contrast                | On Hold   | Bobby Hudgins  | Bobby Hudgins  | 2025-10-07T11:24:22Z | -                    |
| Bug   | Helixian-KEET-10  | Cart popup – Shipping “?” tooltip misaligned                  | Done      | Olivia Alvarez | Bobby Hudgins  | 2025-10-07T11:19:33Z | 2025-10-13T12:54:28Z |
| Bug   | Helixian-KEET-9   | Keetsa BUG: email pop up causes site to freeze                | Done      | Olivia Alvarez | Olivia Alvarez | 2025-09-29T10:20:10Z | 2025-09-30T04:50:38Z |
| Bug   | Helixian-KEET-8   | Issue when adding different sizes of same product to cart     | On Hold   | -              | Olivia Alvarez | 2025-09-26T15:32:51Z | -                    |
| Task  | Helixian-KEET-7   | Collection Page Pricing & Badges                              | On Hold   | Bobby Hudgins  | Daniel Carroll | 2025-09-23T13:00:47Z | -                    |
| Task  | Helixian-KEET-6   | Review compare at pricing in Keetsa                           | Done      | Olivia Alvarez | Daniel Carroll | 2025-09-23T12:59:42Z | 2025-10-13T15:52:33Z |
| Task  | Helixian-KEET-5   | Keetsa: Upsells in cart                                       | Done      | Olivia Alvarez | Olivia Alvarez | 2025-09-16T12:29:36Z | 2025-10-13T12:52:19Z |
| Task  | Helixian-KEET-4   | Keetsa: Upsells/Cross Sells on PDP                            | Done      | Olivia Alvarez | Olivia Alvarez | 2025-09-16T12:28:33Z | 2025-10-13T12:52:03Z |
| Task  | Helixian-KEET-3   | Keetsa: Side cart merchandising area for promotional messaging | Done     | Olivia Alvarez | Olivia Alvarez | 2025-09-16T12:24:55Z | 2025-09-29T17:24:11Z |
| Task  | Helixian-KEET-2   | Keetsa: Merchandising of prices                               | Done      | Olivia Alvarez | Olivia Alvarez | 2025-09-16T12:19:41Z | 2025-10-13T12:53:22Z |
| Task  | Helixian-KEET-1   | Keetsa: Add MS Clarity                                        | Done      | Olivia Alvarez | Olivia Alvarez | 2025-09-16T12:06:35Z | 2025-09-26T15:10:54Z |
| Task  | Zinus-KEET-18     | Integrate Keetsa Shopify Orders with SAP via API             | Done      | Mason Kim      | Mason Kim      | 2025-10-19T18:02:13Z | 2025-10-21T09:58:44Z |
| Task  | Zinus-KEET-1      | Project setup & baseline audit                                | In Progress | Bobby Hudgins | Mason Kim      | 2025-10-19T10:18:36Z | -                    |
| Task  | Zinus-KEET-30     | Register “Keetsa Theme Migration Project” on Zinus Tech Blog | To Do     | Mason Kim      | Mason Kim      | 2025-10-19T18:57:18Z | -                    |
| Task  | Zinus-KEET-19     | Migrate keetsa.com Domain to Cloudflare                       | To Do     | -              | Mason Kim      | 2025-10-19T18:44:59Z | -                    |
| Task  | Zinus-KEET-11     | QA, Launch, Monitoring                                        | To Do     | -              | Mason Kim      | 2025-10-19T10:20:38Z | -                    |
| Task  | Zinus-KEET-10     | Accessibility & Performance                                   | To Do     | -              | Mason Kim      | 2025-10-19T10:20:30Z | -                    |
| Task  | Zinus-KEET-9      | SEO/JSON-LD standardization                                   | To Do     | -              | Mason Kim      | 2025-10-19T10:20:18Z | -                    |
| Task  | Zinus-KEET-8      | Checkout Extensibility & Cart Transform                       | To Do     | -              | Mason Kim      | 2025-10-19T10:20:12Z | -                    |
| Task  | Zinus-KEET-7      | Apps to App Blocks & GTM consolidation                        | To Do     | -              | Mason Kim      | 2025-10-19T10:20:06Z | -                    |
| Task  | Zinus-KEET-6      | Cart drawer migration                                         | To Do     | -              | Mason Kim      | 2025-10-19T10:19:57Z | -                    |
| Task  | Zinus-KEET-5      | PDP & metafields (keetsa.)                                   | To Do     | -              | Mason Kim      | 2025-10-19T10:19:50Z | -                    |
| Task  | Zinus-KEET-4      | Home (marketing) sections                                    | To Do     | -              | Mason Kim      | 2025-10-19T10:19:38Z | -                    |
| Task  | Zinus-KEET-3      | Header/Footer/Top Banner                                     | To Do     | -              | Mason Kim      | 2025-10-19T10:19:14Z | -                    |
| Task  | Zinus-KEET-2      | Dawn base theme & branding                                  | To Do     | -              | Mason Kim      | 2025-10-19T10:18:43Z | -                    |

---

*End of Keetsa Development Report – September-October 2025*