# Zinus Development Report – October, 2025 (4th week)

---

## 1. Executive Summary

This report reviews **137 Jira tickets** related to the Zinus website development for October 2025 (4th week), focusing exclusively on web platform and customer-facing improvements.

- Ticket types analyzed:
  - **Tasks:** 106
  - **Bugs:** 14
  - **Other types (e.g., ADA-related tasks):** 17
- Completion rate: Approximately **41% Done (56 tickets completed)**
- Key outcomes:
  - Resolved multiple **accessibility (ADA) compliance issues** across various site components.
  - Fixed critical UX bugs affecting PDP (Product Detail Pages) such as sticky Add to Cart bar and Quick Buy modal defects.
  - Advanced support for **Bazaarvoice V2 upgrade** and **Shopify schema audits**.
  - Initiated foundational work on a **dedicated FAQ section** and expanded support pages.
  - Improved traffic source and page type data tagging in Shopify Reports.
- Major themes:
  - Comprehensive **accessibility enhancements** addressing ARIA roles, focus management, color contrast, keyboard navigation, and scan-ability.
  - **PDP and cart functionality fixes** improving variant selection, image carousels, and sticky shopping features.
  - **Schema and analytics data validation**, including product schema and sales attribution.
  - Preparations for enhanced **customer support content** and **site infrastructure** optimizations.
  
### Bug Tickets Summary
- Addressed **UI rendering issues** such as styling breakages and carousel arrow visibility.
- Fixed **functionality errors** with quick buy modals redirecting incorrectly and sticky add-to-cart failures.
- Resolved **tooltip and color swatch bugs**, improving responsiveness and mobile usability.
- All bugs marked "Done" showed improvements in usability and bug-free user experience after fixes.

---

## 2. Incident Overview

| Category          | Description                                                     | Impact                                    |
|-------------------|-----------------------------------------------------------------|-------------------------------------------|
| PDP UX            | Accordion styling broken on Bed Frame PDPs (mobile view)       | Distorted accordions reduce UX clarity   |
| PDP Sticky Bar    | Sticky Add to Cart bar malfunction on mattresses PDPs           | Inconsistent purchase flow, user confusion|
| Quick Buy Modal   | Quick Buy choices redirect to PDP instead of updating modal     | Disrupts smooth variant selection process |
| Product Carousel  | Image carousel thumbnails not updating main image, arrows missing| Reduced product visual navigation         |
| Color Swatches    | Mobile color swatches cut off on Bed Frame collection page      | Poor product color visualization          |
| Tooltip Behavior  | Persistent tooltips not hiding on interaction in "Buy Full Set" | Obstructive UI causing customer confusion |

### Business Impact
- Frustration in variant selection reduces conversion potential.
- Visual inconsistencies on mobile degrade customer experience.
- Interruptions in add-to-cart flow risk lost sales.
- Tooltip persistence could diminish trust and ease of use.

---

## 3. Immediate Response & Fixes

| Focus Area         | Actions Taken                                                                                  | Outcome                                      |
|--------------------|-----------------------------------------------------------------------------------------------|----------------------------------------------|
| Accordion Styling   | Fixed accordion borders and alignment on mobile for Bed Frame PDPs                            | ✅ Restored visual integrity on mobile views |
| Sticky ATC Bar     | Resolved inconsistencies causing old or black bars to show intermittently                      | ✅ Sticky bar now functions consistently      |
| Quick Buy Modal     | Corrected variant selection logic to prevent redirect, enable modal updates                   | ✅ Quick Buy modal variant selection fixed    |
| Image Carousel     | Re-enabled thumbnail-to-main-image updates and added missing navigation arrows                | ✅ Improved product image navigation          |
| Mobile Swatches    | Adjusted responsive CSS to fully display color swatches on smaller screens                    | ✅ Enhanced mobile color swatch visibility    |
| Tooltip UX         | Fixed tooltip behavior in "Buy Full Set" so tooltips dismiss correctly on mouseout and click  | ✅ Improved UI clarity and interaction        |

---

## 4. UI/UX Improvement Highlights

| Feature Area               | Before                                                           | After                                                         |
|---------------------------|------------------------------------------------------------------|---------------------------------------------------------------|
| Support / FAQ Section      | No centralized FAQ; limited support accessibility                | Planned unified FAQ hub with AI/SEO enhancements               |
| Shopify Product Schema     | Mixed namespaces & partial SEO coverage                          | Ongoing audit and validation to standardize data              |
| Bazaarvoice V2 Upgrade     | V1 aging, potential syndication issues                           | Staging ready for V2 with activation pending                   |
| Shopify Reporting Tags     | Missing Page Type & Traffic Source tags in reports               | Identification and mapping planned to increase data accuracy  |
| Domain & DNS              | Domain not migrated to Cloudflare                                | Planned migration for performance & security improvements      |
| Cart & Checkout UX        | Temporary AWS outage message displayed                            | Outage message removed, website restored to normal UI         |

---

## 5. On-Hold Items & Action Plan

| Key              | Description                                             | Next Step                                  | Owner           |
|------------------|---------------------------------------------------------|--------------------------------------------|-----------------|
| Helixian-ZIN-1253| Support / FAQ Expansion + Assembly Instruction Search    | Define final design and feasibility review | Daniel Carroll  |
| Helixian-ZIN-1181| Implement JSON-LD from BazaarVoice for GSC reviews      | Awaiting further prioritization            | Daniel Carroll  |
| Helixian-ZIN-1072| Slow loading and lag in Checkout Shipping Protection     | Performance optimization planning           | Daniel Carroll  |
| Helixian-ZIN-1027| White Glove delivery and/or installation options         | Define requirements and scope next          | Daniel Carroll  |
| Helixian-ZIN-1026| Variant Images for Bed Frame Sizes                        | Define specifications and UI requirements  | J Vishal        |
| Helixian-ZIN-959 | UI Alignment and performance issues on homepage & PDPs   | Pending high priority fix                    | Yongwan Song    |
| Zinus-ZIN-4      | Jira Task Board Subscription and Implementation Approval  | Approval & license purchase                  | Derek Choi      |
| Helixian-ZADA-638| ARIA attribute fixes and accessibility enhancements       | Issue by issue remediation                   | Accessibility Team|

---

## 6. Appendix

| Type | Key               | Summary                                                                        | Status           | Assignee       | Reporter        | Created             | Resolved            |
|------|-------------------|--------------------------------------------------------------------------------|------------------|----------------|-----------------|---------------------|---------------------|
| Task | Helixian-ZIN-1255 | Discrepancy Between Shopify Sales Reports and Paid Media Data                   | To Do            | Mason Kim      | J Vishal        | 2025-10-31 11:26:43 | -                   |
| Task | Helixian-ZIN-1253 | Zinus Support / FAQ Expansion + Assembly Instruction Search Page                | In Progress      | Daniel Carroll | Mason Kim       | 2025-10-29 12:24:04 | -                   |
| Task | Helixian-ZIN-1251 | Add Color Tooltip to Quick View Modal                                          | Final Client QA  | Olivia Alvarez | Yongwan Song    | 2025-10-22 16:09:36 | -                   |
| Task | Helixian-ZIN-1250 | Shopify Product Schema Audit & Validation for Zinus.com                        | In Progress      | Daniel Carroll | Mason Kim       | 2025-10-22 14:53:47 | -                   |
| Task | Helixian-ZIN-1248 | PDP video captions incorrect — shows “thank you” despite music-only audio      | To Do           | J Vishal       | Bobby Hudgins   | 2025-10-22 09:20:00 | -                   |
| Task | Helixian-ZIN-1245 | Bazaarvoice V2 Activation and Syndication Impact Verification                   | Final Client QA  | Olivia Alvarez | Mason Kim       | 2025-10-21 12:36:43 | -                   |
| Task | Helixian-ZIN-1242 | Reset Password form – required field not indicated                              | Done             | Olivia Alvarez | Bobby Hudgins   | 2025-10-14 05:35:51 | 2025-10-21 17:17:47  |
| Bug  | Helixian-ZIN-1241 | Accordion Section Styling Broken on Bed Frame PDPs (Mobile View)               | Done             | Olivia Alvarez | J Vishal        | 2025-10-16 12:11:02 | 2025-10-21 17:20:51  |
| Bug  | Helixian-ZIN-1239 | Sticky Add to Cart (ATC) Bar Not Functioning Properly on Mattresses PDP's      | Done             | Olivia Alvarez | J Vishal        | 2025-10-16 11:57:04 | 2025-10-22 04:13:11  |
| Bug  | Helixian-ZIN-1238 | Quick Buy Function Not Working Properly for Suzanne Bed Frame Products          | Done             | Olivia Alvarez | J Vishal        | 2025-10-16 11:41:07 | 2025-10-21 17:20:37  |
| Bug  | Helixian-ZIN-1237 | Product Image Carousel Not Functional — Thumbnails and Arrows Missing          | Done             | Olivia Alvarez | J Vishal        | 2025-10-16 11:27:49 | 2025-10-21 17:19:41  |
| Bug  | Helixian-ZIN-1235 | [Mobile] Color Swatches Getting Cut Off in Bed Frame Collection Page           | Done             | Olivia Alvarez | J Vishal        | 2025-10-16 11:06:01 | 2025-10-21 17:18:58  |
| Bug  | Helixian-ZIN-1224 | PDP → “Buy Full Set” color tooltip persists after click/hover                  | Done             | Olivia Alvarez | Bobby Hudgins   | 2025-10-14 05:24:33 | 2025-10-21 17:17:14  |
| Task | Zinus-ZIN-28      | Extraction of All Zinus Project Tickets from Helixian Task Board and Migration | To Do            | Bobby Hudgins | Mason Kim       | 2025-10-27 15:14:33 | -                   |
| Task | Zinus-ZIN-23      | Create n8n workflow for automated Zinus Weekly Development Report generation    | In Progress      | Bobby Hudgins | Bobby Hudgins   | 2025-10-27 12:43:39 | -                   |
| Task | Zinus-ZIN-18      | Share Invoices to Nhu                                                          | Done             | Mason Kim     | Mason Kim       | 2025-10-22 11:30:11 | 2025-10-23 09:23:51  |
| Task | Zinus-ZIN-17      | Replit invoice investigations and payment method update                        | Done             | Mason Kim     | Mason Kim       | 2025-10-22 11:29:49 | 2025-10-23 09:23:48  |
| Task | Zinus-ZIN-16      | Helixian add access to Shipping and Delivery settings                          | Done             | Mason Kim     | Mason Kim       | 2025-10-21 10:22:45 | 2025-10-21 10:24:42  |
| Task | Zinus-ZIN-15      | Remove Temporary AWS Outage Notice from Website                               | Done             | Mason Kim     | Mason Kim       | 2025-10-21 09:54:26 | 2025-10-21 09:56:58  |
| Task | Zinus-ZIN-14      | Review and Verify Zinus.com Schema Attributes (per Matt’s feedback)            | Done             | Mason Kim     | Mason Kim       | 2025-10-21 09:41:30 | 2025-10-21 09:55:08  |
| Task | Helixian-ZADA-638 | Unnecessary ARIA attributes can cause unexpected behavior for screen readers.   | To Do            | -            | Daniel Carroll  | 2025-10-29 17:02:53 | -                   |

*(Note: The appendix contains all tickets analyzed sorted by type and status; only a sample is shown here due to volume.)*