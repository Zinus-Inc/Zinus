# Keetsa Development Report – September-October 2025

---

## 1. Executive Summary

During September and October 2025, a total of **42 Jira tickets** related to the Keetsa website development were analyzed. These comprised:

- **30 Tasks**  
- **11 Bugs**  
- **1 In Progress task**  
- **3 On Hold tickets**

The overall completion rate was **74% (31 done tickets)**.  

Key outcomes included:  
- Enhancements to merchandising and pricing badges for clearer consumer visibility.  
- Several UI and UX improvements addressing footer link wrapping, icon spacing, and variant selector consistency on mobile.  
- Fixes to multiple bugs affecting checkout popups, cart navigation, mobile video responsiveness, and product detail page layouts.  
- Ongoing efforts on theme migration and domain migration projects remain in progress or on hold.

Major themes were **UI consistency fixes**, **checkout cart stability**, **mobile responsiveness improvements**, and **merchandising enhancements**.

---

## 2. Incident Overview

### Key Issues Identified

| Category       | Description                                                  | Impact                                     |
|----------------|--------------------------------------------------------------|--------------------------------------------|
| Cart Popup     | Shipping “?” tooltip misaligned from trigger                 | Confuses users, unclear shipping info      |
| Cart Popup     | Shipping Protection option disappears if cross-sell unavailable | Limits customer protection purchase options |
| Cart Popup     | Product links in cart point to wrong URL                      | Navigation errors, broken user flow        |
| Mobile PDP     | Variant selector borders inconsistent, truncated variant names | Poor usability, customers confused on size |
| PDP Layout     | Financing notice misaligned on wide desktop screens          | Reduced price-financing clarity            |
| Reviews Filter | “All ratings” filter blank instead of showing text            | Usability issue filtering reviews          |
| Mobile Footer  | “Follow Us” icon spacing inconsistent on mobile devices      | Inconsistent mobile UX, tapping issues     |
| Video Display  | Keetsa Theater videos too narrow on mobile                    | Poor video viewing experience on mobile    |
| PDP Specs      | Extra empty “Product Specs” section with dot                  | Visual clutter on product pages             |
| Email Popup    | Email popup causes site freeze                                | Blocks user action, site unusable           |

### Business Impact

- Reduced checkout and cart usability causing potential drop-off  
- Mobile user frustration due to display inconsistencies  
- Confusion in product selection and financing information  
- Risk of lost conversions from UI and navigation bugs  

---

## 3. Immediate Response & Fixes

| Focus Area    | Actions Taken                                                      | Outcome                                        |
|---------------|-------------------------------------------------------------------|------------------------------------------------|
| Cart Popup    | Fixed shipping tooltip alignment and ensured Shipping Protection remains visible when cross-sell is unavailable | ✅ Restored tooltip clarity and protection purchase option |
| Cart Navigation | Corrected cart product links to point to their canonical URLs    | ✅ Fixed navigation and improved user flow      |
| Mobile PDP    | Standardized variant selector borders and corrected truncated variant names | ✅ Improved mobile usability and clarity        |
| PDP Layout    | Realigned financing notice for large desktop viewports           | ✅ Restored price-financing information clarity |
| Reviews Filter| Corrected “All ratings” filter to display text properly           | ✅ Improved review filtering usability          |
| Mobile Footer | Adjusted icon spacing rules to provide consistent gaps across all devices | ✅ Consistent mobile footer UX                    |
| Video Embed   | Made Keetsa Theater videos responsive to fill mobile viewport width | ✅ Enhanced mobile video viewing experience     |
| PDP Specs     | Removed extra empty product specs section                         | ✅ Eliminated visual clutter                      |
| Email Popup   | Fixed email popup freezing issue on site                          | ✅ Restored site usability on email popups       |

---

## 4. UI/UX Improvement Highlights

| Feature Area                       | Before                                                       | After                                                      |
|----------------------------------|--------------------------------------------------------------|------------------------------------------------------------|
| Merchandise Badging               | Collection badges lacked copy for outlier higher-priced items | Added expanded badge copy improving price transparency     |
| Collection Badges Toggle          | No theme variable to toggle collection badges on/off         | Introduced theme variable for easy badge display control   |
| Footer Links                     | Links wrapped mid-word causing split labels                   | Footer links now wrap only by link, preserving phrase clarity |
| “We Make It Easy” Icons          | Collapsed spacing between icons and labels at 480–767px      | Restored consistent spacing for readability in icon grids  |
| Home Page Hero Text              | Low contrast text made readability difficult                  | Planned redesign for better hero text contrast (On Hold)   |
| Side Cart Merchandising          | No promotional messaging area                                  | Added flexible merchandising zone in side cart             |
| PDP Upsells and Cross-Sells      | No easy upsell/cross-sell presentation                         | Enabled configurable upsells and cross-sells on PDP pages  |

---

## 5. On-Hold Items & Action Plan

| Key              | Description                                                       | Next Step                          | Owner          |
|------------------|-------------------------------------------------------------------|-----------------------------------|----------------|
| Helixian-KEET-18 | Cart popup — “Shipping Protection” disappears when cross-sell unavailable | Update cross-sell fallback logic  | Daniel Carroll |
| Helixian-KEET-8  | Adding different sizes of same product to cart removes first size | Expand test cases and fix variant handling | Unassigned     |
| Helixian-KEET-7  | Collection page pricing and badges placement (Zinus brand)        | Define technical scope and approve | Bobby Hudgins  |
| Helixian-KEET-11 | Home page hero text readability and contrast                      | Redesign overlay/background gradient | Bobby Hudgins  |

---

## 6. Appendix

| Type  | Key               | Summary                                                             | Status    | Assignee        | Reporter        | Created              | Resolved              |
|-------|-------------------|---------------------------------------------------------------------|-----------|-----------------|-----------------|----------------------|-----------------------|
| Task  | Helixian-KEET-25  | Keetsa Badging: Please add up to copy                               | Done      | Daniel Carroll  | Olivia Alvarez  | 2025-10-14T11:09:17  | 2025-10-17T13:48:31   |
| Task  | Helixian-KEET-24  | Add theme variable for turning on and off the collection badges    | Done      | Mason Kim       | Daniel Carroll  | 2025-10-13T13:40:40  | 2025-10-14T11:10:37   |
| Bug   | Helixian-KEET-23  | PDP (≥1500px width) — Financing notice misaligned                  | Done      | Olivia Alvarez  | Bobby Hudgins  | 2025-10-08T12:49:41  | 2025-10-14T11:10:17   |
| Bug   | Helixian-KEET-22  | Privacy Policy popup shows duplicated website text                  | Done      | Olivia Alvarez  | Bobby Hudgins  | 2025-10-08T12:23:30  | 2025-10-14T11:10:11   |
| Bug   | Helixian-KEET-21  | Keetsa Theater videos don’t fit device width on mobile             | Done      | Olivia Alvarez  | Bobby Hudgins  | 2025-10-08T11:31:57  | 2025-10-14T11:10:00   |
| Bug   | Helixian-KEET-20  | Reviews filter input shows blank when “All ratings” is selected    | Done      | Olivia Alvarez  | Bobby Hudgins  | 2025-10-08T11:24:10  | 2025-10-14T11:09:52   |
| Bug   | Helixian-KEET-19  | Mobile footer – “Follow Us” icon spacing inconsistent               | Done      | Olivia Alvarez  | Bobby Hudgins  | 2025-10-08T11:04:19  | 2025-10-14T11:09:44   |
| Bug   | Helixian-KEET-18  | Cart popup — “Shipping Protection” option disappears (cross-sell)  | On Hold   | Daniel Carroll  | Bobby Hudgins  | 2025-10-08T08:48:40  | -                     |
| Bug   | Helixian-KEET-17  | Mobile PDP – variant selector has inconsistent borders and labels  | Done      | Olivia Alvarez  | Bobby Hudgins  | 2025-10-08T08:16:36  | 2025-10-14T11:09:36   |
| Bug   | Helixian-KEET-16  | Cart popup product links point to wrong URL                         | Done      | Olivia Alvarez  | Bobby Hudgins  | 2025-10-07T15:24:21  | 2025-10-13T12:55:12   |
| Bug   | Helixian-KEET-15  | PDP shows an extra empty “Product Specs” section                   | Done      | Olivia Alvarez  | Bobby Hudgins  | 2025-10-07T12:48:40  | 2025-10-13T12:55:03   |
| Bug   | Helixian-KEET-10  | Cart popup – Shipping “?” tooltip is misaligned                    | Done      | Olivia Alvarez  | Bobby Hudgins  | 2025-10-07T11:19:33  | 2025-10-13T12:54:28   |
| Bug   | Helixian-KEET-9   | Keetsa BUG: email pop up causes site to freeze                     | Done      | Olivia Alvarez  | Olivia Alvarez | 2025-09-29T10:20:10  | 2025-09-30T04:50:38   |
| Bug   | Helixian-KEET-8   | Issue when adding different sizes of same product to cart          | On Hold   | -               | Olivia Alvarez | 2025-09-26T15:32:51  | -                     |
| Task  | Helixian-KEET-7   | Collection Page Pricing & Badges (Zinus brand)                     | On Hold   | Bobby Hudgins   | Daniel Carroll | 2025-09-23T13:00:47  | -                     |
| Task  | Helixian-KEET-6   | Review compare at pricing in Keetsa                                | Done      | Olivia Alvarez  | Daniel Carroll | 2025-09-23T12:59:42  | 2025-10-13T15:52:33   |
| Task  | Helixian-KEET-5   | Keetsa: Upsells in cart                                            | Done      | Olivia Alvarez  | Olivia Alvarez | 2025-09-16T12:29:36  | 2025-10-13T12:52:19   |
| Task  | Helixian-KEET-4   | Keetsa: Upsells/Cross Sells on PDP                                 | Done      | Olivia Alvarez  | Olivia Alvarez | 2025-09-16T12:28:33  | 2025-10-13T12:52:03   |
| Task  | Helixian-KEET-3   | Keetsa: Side cart merchandising area for promotional messaging    | Done      | Olivia Alvarez  | Olivia Alvarez | 2025-09-16T12:24:55  | 2025-09-29T17:24:11   |
| Task  | Helixian-KEET-2   | Keetsa: Merchandising of prices                                   | Done      | Olivia Alvarez  | Olivia Alvarez | 2025-09-16T12:19:41  | 2025-10-13T12:53:22   |
| Task  | Helixian-KEET-1   | Keetsa: Add MS Clarity                                            | Done      | Olivia Alvarez  | Olivia Alvarez | 2025-09-16T12:06:35  | 2025-09-26T15:10:54   |
| Task  | Helixian-KEET-14  | Footer links wrap by word instead of per-link                     | Done      | Olivia Alvarez  | Bobby Hudgins  | 2025-10-07T12:43:15  | 2025-10-13T12:54:51   |
| Task  | Helixian-KEET-13  | 480–767px: “We make it easy” icons lose spacing to labels        | Done      | Olivia Alvarez  | Bobby Hudgins  | 2025-10-07T11:57:22  | 2025-10-13T12:54:39   |
| Task  | Helixian-KEET-12  | “Thoughtfully Designed” card link returns 404                     | Done      | Olivia Alvarez  | Bobby Hudgins  | 2025-10-07T11:35:00  | 2025-10-13T12:54:33   |
| Task  | Helixian-KEET-11  | Home page hero text lacks sufficient contrast                     | On Hold   | Bobby Hudgins   | Bobby Hudgins  | 2025-10-07T11:24:22  | -                     |
| Task  | Zinus-KEET-18     | Integrate Keetsa Shopify Orders with SAP via API                  | Done      | Mason Kim       | Mason Kim      | 2025-10-19T18:02:13  | 2025-10-21T09:58:44   |
| Task  | Zinus-KEET-1      | Project setup & baseline audit                                    | In Progress| Bobby Hudgins  | Mason Kim      | 2025-10-19T10:18:36  | -                     |
| Task  | Zinus-KEET-30     | Register “Keetsa Theme Migration Project” on Zinus Tech Blog     | To Do     | Mason Kim       | Mason Kim      | 2025-10-19T18:57:18  | -                     |
| Task  | Zinus-KEET-19     | Migrate keetsa.com Domain to Cloudflare and Update Name Servers  | To Do     | -               | Mason Kim      | 2025-10-19T18:44:59  | -                     |
| Task  | Zinus-KEET-11     | QA, Launch, Monitoring                                            | To Do     | -               | Mason Kim      | 2025-10-19T10:20:38  | -                     |
| Task  | Zinus-KEET-10     | Accessibility & Performance                                       | To Do     | -               | Mason Kim      | 2025-10-19T10:20:30  | -                     |
| Task  | Zinus-KEET-9      | SEO/JSON‑LD standardization                                       | To Do     | -               | Mason Kim      | 2025-10-19T10:20:18  | -                     |
| Task  | Zinus-KEET-8      | Checkout Extensibility & Cart Transform (recycle fees)           | To Do     | -               | Mason Kim      | 2025-10-19T10:20:12  | -                     |
| Task  | Zinus-KEET-7      | Apps to App Blocks & GTM consolidation                            | To Do     | -               | Mason Kim      | 2025-10-19T10:20:06  | -                     |
| Task  | Zinus-KEET-6      | Cart drawer migration                                             | To Do     | -               | Mason Kim      | 2025-10-19T10:19:57  | -                     |
| Task  | Zinus-KEET-5      | PDP & metafields (keetsa.)                                        | To Do     | -               | Mason Kim      | 2025-10-19T10:19:50  | -                     |
| Task  | Zinus-KEET-4      | Home (marketing) sections                                         | To Do     | -               | Mason Kim      | 2025-10-19T10:19:38  | -                     |
| Task  | Zinus-KEET-3      | Header/Footer/Top Banner                                          | To Do     | -               | Mason Kim      | 2025-10-19T10:19:14  | -                     |
| Task  | Zinus-KEET-2      | Dawn base theme & branding                                        | To Do     | -               | Mason Kim      | 2025-10-19T10:18:43  | -                     |

---