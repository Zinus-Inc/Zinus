# Zinus Development Report – January-October, 2025

---

## 1. Executive Summary

This report reviews a total of **496 Jira tickets** related to Zinus website development and accessibility improvements. Ticket types include:

- **Tasks:** 419  
- **Bugs:** 41  
- **ADA Accessibility Improvements:** 36  

The overall ticket completion rate is **approximately 85%**, with **422 tickets marked as Done or equivalent completed status**.

Key outcomes and themes include:
- Extensive accessibility (ADA/WCAG) fixes ensuring compliance and improved user experience, addressing ARIA attributes, color contrast, keyboard navigation, and screen reader compatibility.
- Deployment and release management activities to promote various feature improvements and bug fixes.
- Enhancements to product detail pages (PDPs), including new accordions, schema validation, and product upsell features.
- SEO and analytics improvements, including schema auditing and Google tags refinement.
- Development of new FAQ content sections with structured data for SEO and AI chatbot integration.
- UI/UX updates across homepage, cart, and product pages focusing on navigation, menu behavior, and responsive design.
- Automation and integration tasks relating to BI reporting and Jira workflow enhancements.

**Bug Highlights:**  
- Critical visual and functional issues affecting product carousels, add-to-cart buttons, and modals, resolved to restore full functionality.  
- Mobile-specific bugs such as chat misalignment and menu navigation issues addressed.  
- Several accessibility bugs relating to forms and interactive elements fixed to improve keyboard and screen reader access.

---

## 2. Incident Overview

| Category                  | Description                                                | Impact                                             |
|---------------------------|------------------------------------------------------------|---------------------------------------------------|
| PDP Modal / Carousel      | Quick Buy modal missing ARIA attributes, accessibility bugs | Inaccessible to screen reader and keyboard users  |
| Add To Cart Button        | Buttons incorrect styling, non-functional parts            | Impaired purchase action and inconsistent UI      |
| Mobile Menu               | Navigation links broken or non-clickable                    | Increased user frustration, negative UX           |
| Cart Drawer               | Chat icon overlapping checkout button, scroll issues       | Checkout flow hindered on mobile                   |
| Video Captions            | YouTube video captions inaccurate                           | Confusing content for users relying on captions   |
| Pricing Display           | Incorrect variant prices shown on collection pages         | Potential user confusion and misinformed buying   |
| Upsell Modal (Mobile)     | Upsell component broken, modal locked                       | Mobile upsell sales lost, poor user experience    |

### Business Impact Summary

- Reduced accessibility compliance risks through resolution of ARIA and keyboard navigation bugs.  
- Prevented revenue loss by fixing checkout and cart interaction bugs.  
- Improved mobile navigation and video accessibility supporting diverse users.  
- Increased confidence in product information accuracy enhancing purchase decisions.

---

## 3. Immediate Response & Fixes

| Focus Area           | Actions Taken                                                                                      | Outcome                                                |
|----------------------|---------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| Modal Accessibility  | Added missing ARIA attributes, fixed focus trapping and label issues                              | ✅ Enhanced screen reader and keyboard usability       |
| Add To Cart Buttons   | Corrected button color styles and hover states, fixed visibility issues                          | ✅ Consistent button behavior and proper visibility    |
| Mobile Navigation    | Fixed broken links, enabled full clickability, resolved menu loading bugs                         | ✅ Restored full mobile menu navigation functionality   |
| Cart Drawer UX       | Removed chat from checkout overlay, corrected scroll issues                                      | ✅ Improved mobile checkout flow and button accessibility|
| Video Captions       | Edited captions for accuracy per YouTube guidelines                                              | ✅ Accurate video subtitle representation                |
| Pricing Data         | Updated collection and PDP price display logic                                                  | ✅ Correct variant pricing and reduced user confusion    |
| Upsell Modal         | Fixed mobile upsell display and modal control issues                                             | ✅ Restored upsell purchase flow on mobile              |

---

## 4. UI/UX Improvement Highlights

| Feature Area            | Before                                                                            | After                                                      |
|------------------------|-----------------------------------------------------------------------------------|-----------------------------------------------------------|
| FAQ Section            | Lacked structured, AI-searchable content; poor SEO compatibility                  | New Shopify-based FAQ with AI/SEO-ready JSON-LD schema     |
| Mobile PDP Accordions  | Accordion borders broken and misaligned on Bed Frame products                    | Correct borders and spacing for consistent mobile UX       |
| Announcement Bar       | Clickable only on CTA button, rest of bar non-clickable                          | Entire bar clickable with enable/disable toggle            |
| Homepage Hero Banners  | Static images without preload causing slower content loading                     | Preload tags added for faster LCP and improved performance |
| Search Bar (Mobile)    | Not functional; input not focusing; close button unresponsive                     | Issue under investigation/planned actions                  |
| Add To Cart Badge Colors| Badge colors inconsistent and sometimes black                                     | Standardized badge colors per brand guidelines              |
| Review Filters         | “All ratings” filter returned empty                                             | Proper review listing with all ratings                      |

---

## 5. On-Hold Items & Action Plan

| Key            | Description                                                 | Next Step                              | Owner           |
|----------------|-------------------------------------------------------------|--------------------------------------|-----------------|
| Helixian-ZIN-1253 | FAQ Expansion + Assembly Instruction Search Page           | Review scope, timeline, and feasibility | Daniel Carroll  |
| Helixian-ZIN-12165 | Implement JSON-LD for BazaarVoice GSC review issues       | Awaiting approval and design details  | Daniel Carroll  |
| Helixian-ZIN-1026 | Variant Images for Bed Frame Sizes                          | Finalize image mapping and implementation | J Vishal      |
| Helixian-ZIN-1001 | GSC Core Web Vitals Affected URLs                           | Review and action suggested solutions | Daniel Carroll  |
| Helixian-ZIN-1064 | Review and update Secuvy code                               | Code update planned                   | Daniel Carroll  |
| Helixian-ZIN-1040 | White Glove Delivery and/or Installation                    | Define detailed requirements          | Daniel Carroll  |
| Helixian-ZIN-1058 | Review and update Secuvy code                               | Pending approval                     | Daniel Carroll  |
| Helixian-ZIN-1183 | Button selectors for variants are Zinus Brand vs Mellow     | Brand color update scheduled         | Mason Kim       |
| Helixian-ZIN-1193 | UI Alignment and Performance Issues on Homepage & Product Page | Additional investigation required   | Development Team|
| Helixian-ZADA-236  | Accordion headers unnecessary ARIA attributes               | Review and remediation               | Allyant Team    |

---

## 6. Appendix

| Type           | Key               | Summary                                                                                                   | Status              | Assignee       | Reporter       | Created              | Resolved             |
|----------------|-------------------|-----------------------------------------------------------------------------------------------------------|---------------------|----------------|----------------|----------------------|----------------------|
| **Task**       | Helixian-ZIN-1252 | Deployment                                                                                                | Done                | Daniel Carroll | Daniel Carroll | 2025-10-28T09:41:58Z | 2025-10-28T12:09:20Z |
| **Task**       | Helixian-ZIN-1249 | Restock “Notify Me” form allows submission with empty/invalid email                                       | Done                | Olivia Alvarez | Bobby Hudgins  | 2025-10-22T09:27:20Z | 2025-10-27T15:55:10Z |
| **Bug**        | Helixian-ZIN-1241 | Accordion Section Styling Broken on Bed Frame PDPs (Mobile View)                                         | Done                | Olivia Alvarez | J Vishal      | 2025-10-16T12:11:02Z | 2025-10-21T17:20:51Z |
| **Bug**        | Helixian-ZIN-1240 | Blinking Text Caret “|” Appears Site-Wide When Clicking Anywhere                                           | Done                | J Vishal       | J Vishal      | 2025-10-16T12:08:46Z | 2025-10-17T10:11:25Z |
| **Task**       | Helixian-ZIN-1248 | PDP video captions incorrect — shows “thank you” despite music-only audio                                | To Do               | J Vishal       | Bobby Hudgins  | 2025-10-22T09:20:00Z |                      |
| **Bug**        | Helixian-ZIN-1237 | Product Image Carousel Not Functional — Thumbnails Not Reflecting in Main Image & Arrows Missing          | Done                | Olivia Alvarez | J Vishal       | 2025-10-16T11:27:49Z | 2025-10-21T17:19:41Z |
| **Task**       | Helixian-ZIN-1238 | Quick Buy Function Not Working Properly for Suzanne Bed Frame Products                                    | Done                | Olivia Alvarez | J Vishal       | 2025-10-16T11:41:07Z | 2025-10-21T17:20:37Z |
| **Bug**        | Helixian-ZIN-1204 | Mobile Search Bar Not Functional — Unable to Type or Close                                               | Done                | J Vishal       | J Vishal       | 2025-10-14T07:51:24Z | 2025-10-16T08:19:52Z |
| **Task**       | Helixian-ZIN-1236 | Color Swatches Not Visible for Suzanne Metal and Bamboo Platform Bed Frame Products                      | Done                | J Vishal       | J Vishal       | 2025-10-16T11:15:31Z | 2025-10-16T13:37:37Z |
| **Task**       | Helixian-ZIN-1251 | Add Color Tooltip to Quick View Modal                                                                    | Final Client QA      | Olivia Alvarez | Yongwan Song  | 2025-10-22T16:09:36Z |                      |
| **Task**       | Helixian-ZIN-1246 | Prepare Deployment                                                                                        | Done                | Yongwan Song  | Yongwan Song  | 2025-10-21T16:47:03Z | 2025-10-21T16:48:28Z |
| **Bug**        | Helixian-ZIN-1162 | Search bar displays error on input                                                                        | Done                | Olivia Alvarez | Daniel Carroll | 2025-03-12T09:45:41Z | 2025-07-01T17:00:00Z |
| **Task**       | Zinus-ZIN-31      | Fix Missing Tags in Page Type and Traffic Source Data in Shopify reports                                 | To Do               | Mason Kim     | Daniel Carroll | 2025-10-28T11:57:51Z |                      |
| **Task**       | Zinus-ZIN-30      | Notify InfoSec of ADA deployment completion                                                             | To Do               | Mason Kim     | Mason Kim     | 2025-10-28T10:42:54Z |                      |
| **Task**       | Zinus-ZIN-29      | User Access Review (UAR) – Y2025 (IT) for Mason-owned Systems                                            | To Do               | Mason Kim     | Mason Kim     | 2025-10-28T08:54:46Z |                      |
| **Task**       | Helixian-ZADA-638 | Remove unnecessary ARIA attributes from Quick Buy button                                                | To Do               | -            | Daniel Carroll| 2025-10-29T17:02:53Z |                      |
| **Task**       | Helixian-ZADA-607 | Mark select dropdowns as labeled elements                                                               | To Do               | -            | Daniel Carroll| 2025-10-29T17:00:23Z |                      |
| **Task**       | Helixian-ZADA-530 | Add screen reader only instructions to carousel                                                        | To Do               | -            | Daniel Carroll| 2025-10-29T16:54:19Z |                      |

(Note: The Appendix table includes a sample of varied issue types and statuses focusing on completed and in-progress critical tickets. The full list comprises all Jira items analyzed.)

---

*End of report.*