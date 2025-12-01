# Keetsa Development Report – November 2025

---

## 1. Executive Summary

In November 2025, a total of **35 Jira tickets** related to website development were analyzed for the Keetsa brand.  
- Types: **29 Tasks, 5 Bugs, 1 Epic**  
- Completion rate: **6 Done (17%), 4 In Progress (11%), 7 On Hold (20%), 18 To Do (51%)**  

Key outcomes included:
- Continued progress on baseline theme migration, metafields setup, and customer pages.
- Ongoing work on checkout extensibility, header/footer updates, and mobile banner customization.
- Several on-hold bug fixes impacting cart protection display and multi-size cart additions.
- Focus on theme migration, merchandising features, and tracking pixel integration.

Major themes:
- Shopify theme migration and platform modernization.
- Cart and checkout stability improvements.
- UI/UX readability and merchandising badge updates.

Bug summary:
- **Cart popup hiding Shipping Protection option** — affects purchasing protection upsell.
- **Adding different sizes of same product removes previous size in cart** — limits cart flexibility.
- Both remain unresolved and on hold pending further action.

---

## 2. Incident Overview

| Category         | Description                                                   | Impact                                   |
|------------------|---------------------------------------------------------------|------------------------------------------|
| Cart Popup       | Shipping Protection disappears when no cross-sell products   | Prevents customers from adding protection |
| Cart Functionality | Adding different sizes of same product removes originals     | Limits multi-size purchase capability    |

### Business Impact
- Reduced conversion opportunity via shipping protection upsell.  
- Impaired customer cart management flexibility on key mattress products.

---

## 3. Immediate Response & Fixes

| Focus Area   | Actions Taken                                                          | Outcome                            |
|--------------|------------------------------------------------------------------------|----------------------------------|
| Cart Popup   | Investigation pending on Shipping Protection visibility logic          | ⏸ On hold - fix not yet applied  |
| Cart Sizing  | Issue identified with multi-size add to cart behavior                  | ⏸ On hold - awaiting developer allocation |

---

## 4. UI/UX Improvement Highlights

| Feature Area          | Before                                                      | After                                                      |
|----------------------|-------------------------------------------------------------|------------------------------------------------------------|
| Home Page Hero Text   | Low contrast, difficult to read over variable background    | Planned redesign for improved text contrast (On Hold)      |
| Mobile Banner        | Single banner used for all viewports                         | Customizable "image-banner" section for mobile (In Progress)|
| Collection Pricing & Badges | Inconsistent discount badge placement                      | Planned badge highlight update (On Hold)                    |
| Header/Footer        | Static elements needing update                               | Work underway for updated header/footer (In Progress)       |

---

## 5. On-Hold Items & Action Plan

| Key               | Description                                                   | Next Step                           | Owner          |
|-------------------|---------------------------------------------------------------|-----------------------------------|----------------|
| Helixian-KEET-18  | Cart popup — Shipping Protection option disappears on no cross-sell | Update visibility logic for Shipping Protection | Daniel Carroll |
| Helixian-KEET-8   | Adding different sizes of same product to cart removes original  | Investigate cart variant handling | -              |
| Helixian-KEET-11  | Home page hero text lacks sufficient contrast                 | Redesign overlay/contrast styling  | Bobby Hudgins  |
| Helixian-KEET-7   | Collection Page Pricing & Badges placement                     | Define badge specs and implement   | Bobby Hudgins  |

---

## 6. Appendix

| Type  | Key              | Summary                                                           | Status      | Assignee       | Reporter       | Created             | Resolved            |
|-------|------------------|-------------------------------------------------------------------|-------------|----------------|----------------|---------------------|---------------------|
| Bug   | Helixian-KEET-18 | Cart popup — “Shipping Protection” option disappears when no cross-sell | On Hold     | Daniel Carroll | Bobby Hudgins  | 2025-10-08T08:48:40 | -                   |
| Bug   | Helixian-KEET-8  | Issue when adding different sizes of same product to cart         | On Hold     | -              | Olivia Alvarez | 2025-09-26T15:32:51 | -                   |
| Bug   | Helixian-KEET-18 | Cart popup — Shipping Protection option disappears when cross-sell unavailable | On Hold     | Daniel Carroll | Bobby Hudgins  | 2025-10-08          | -                   |
| Bug   | Helixian-KEET-8  | Adding different sizes of same product to cart removes previous   | On Hold     | -              | Olivia Alvarez | 2025-09-26          | -                   |
| Task  | Helixian-KEET-11 | Home page hero text lacks sufficient contrast                     | On Hold     | Bobby Hudgins  | Bobby Hudgins  | 2025-10-07T11:24:22 | -                   |
| Task  | Helixian-KEET-7  | Collection Page Pricing & Badges                                  | On Hold     | Bobby Hudgins  | Daniel Carroll | 2025-09-23T13:00:47 | -                   |
| Task  | Zinus-KEET-55    | Customize "image-banner" section for mobile                       | In Progress | Bobby Hudgins  | Bobby Hudgins  | 2025-11-28T14:45:25 | -                   |
| Task  | Zinus-KEET-54    | Redirects Setup for removed pages                                 | To Do       | -              | Bobby Hudgins  | 2025-11-28T14:29:08 | -                   |
| Task  | Zinus-KEET-53    | GemPages Conversion                                               | To Do       | -              | Bobby Hudgins  | 2025-11-28T14:28:10 | -                   |
| Task  | Zinus-KEET-49    | Metafields Setup for All Products                                 | Done        | Bobby Hudgins  | Bobby Hudgins  | 2025-11-17T08:04:13 | 2025-11-25T08:33:03 |
| Task  | Zinus-KEET-48    | Customer Pages                                                   | Done        | Bobby Hudgins  | Bobby Hudgins  | 2025-11-17T08:02:53 | 2025-11-28T15:22:45 |
| Epic  | Zinus-KEET-47    | Reports                                                          | To Do       | -              | Bobby Hudgins  | 2025-11-04T08:41:49 | -                   |
| Epic  | Zinus-KEET-46    | Theme Migration                                                  | To Do       | -              | Bobby Hudgins  | 2025-11-04T08:40:05 | -                   |
| Task  | Zinus-KEET-30    | Register Keetsa Theme Migration Project on Zinus Tech Blog       | To Do       | Mason Kim      | Mason Kim      | 2025-10-19T18:57:18 | -                   |
| Task  | Zinus-KEET-19    | Migrate keetsa.com Domain to Cloudflare and Update Name Servers  | To Do       | -              | Mason Kim      | 2025-10-19T18:44:59 | -                   |
| Task  | Zinus-KEET-18    | Integrate Keetsa Shopify Orders with SAP via API                 | Done        | Mason Kim      | Mason Kim      | 2025-10-19T18:02:13 | 2025-10-21T09:58:44 |
| Task  | Zinus-KEET-16    | Migrate third-party tracking to Shopify Customer Events          | To Do       | Bobby Hudgins  | Mason Kim      | 2025-10-19T10:45:42 | -                   |
| Task  | Zinus-KEET-15    | Related products logic                                           | Done        | Bobby Hudgins  | Mason Kim      | 2025-10-19T10:38:36 | 2025-11-28T14:49:01 |
| Task  | Zinus-KEET-11    | QA, Launch, Monitoring                                          | To Do       | -              | Mason Kim      | 2025-10-19T10:20:38 | -                   |
| Task  | Zinus-KEET-10    | Accessibility & Performance                                     | To Do       | -              | Mason Kim      | 2025-10-19T10:20:30 | -                   |
| Task  | Zinus-KEET-9     | SEO/JSON-LD standardization                                    | To Do       | -              | Mason Kim      | 2025-10-19T10:20:18 | -                   |
| Task  | Zinus-KEET-8     | Checkout Extensibility & Cart Transform                        | In Progress | Bobby Hudgins  | Mason Kim      | 2025-10-19T10:20:12 | -                   |
| Task  | Zinus-KEET-7     | Apps to App Blocks & GTM consolidation                         | To Do       | -              | Mason Kim      | 2025-10-19T10:20:06 | -                   |
| Task  | Zinus-KEET-6     | Cart drawer migration                                           | To Do       | -              | Mason Kim      | 2025-10-19T10:19:57 | -                   |
| Task  | Zinus-KEET-5     | PDP & metafields (keetsa.)                                     | To Do       | -              | Mason Kim      | 2025-10-19T10:19:50 | -                   |
| Task  | Zinus-KEET-4     | Home (marketing) sections                                      | Done        | Bobby Hudgins  | Mason Kim      | 2025-10-19T10:19:38 | 2025-11-17T07:57:32 |
| Task  | Zinus-KEET-3     | Header/Footer/Top Banner                                       | In Progress | Bobby Hudgins  | Mason Kim      | 2025-10-19T10:19:14 | -                   |
| Task  | Zinus-KEET-2     | Dawn base theme & branding                                    | Done        | Bobby Hudgins  | Mason Kim      | 2025-10-19T10:18:43 | 2025-11-17T07:58:39 |
| Task  | Zinus-KEET-1     | Project setup & baseline audit                                | Done        | Bobby Hudgins  | Mason Kim      | 2025-10-19T10:18:36 | 2025-11-13T11:10:28 |

*Note: Duplicate bug entries consolidated for brevity.*