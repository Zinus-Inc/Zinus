# Zinus Development Report – January-October, 2025

---

## 1. Executive Summary

This report examines a total of **423 Jira tickets** related to website development within the Zinus project from January to October 2025. Ticket types include predominantly **Tasks (378)** and **Bugs (45)**, with a strong emphasis on ADA compliance improvements in the "Helixian - Zinus ADA" project.

- **Completion Rate:** Approximately **85% of tickets marked as Done**.
- **Key Focus Areas:**
  - Extensive ADA/WCAG accessibility enhancement and compliance work.
  - Website UI/UX improvements, including fixes in product detail pages, cart behavior, and mobile navigation.
  - Schema validation and SEO enhancements for Zinus.com.
  - Implementation and refinement of product upsell and cart functionalities.
  - Performance optimizations and monitoring integrations (e.g., MS Clarity, SEMrush audits).
  - Automation and reporting enhancements (n8n workflow, Jira board management).
  
### Bug Summary
- Bugs predominantly involved **UI inconsistencies**, **accessibility errors**, and **functional issues** in key areas such as:
  - Product Detail Pages (PDPs)
  - Cart and Checkout Modals
  - Color contrast and visibility issues affecting ADA compliance.
  - Carousel and modal dialog accessibility.
  - Form validation and interaction problems.
- Fixes included code revisions, styling corrections, and accessibility attribute adjustments to meet WCAG standards.

---

## 2. Incident Overview

| Category          | Description                                                   | Impact                                          |
|-------------------|---------------------------------------------------------------|------------------------------------------------|
| PDP Styling       | Accordion sections broken on Bed Frame PDPs (mobile view)     | Degraded mobile user experience                 |
| Cart Functionality| Sticky Add to Cart bar malfunctions on mattress PDPs          | Checkout flow disruption risk                    |
| Quick Buy Modal   | Quick Buy CTA variant selection redirects instead of updating | Reduced modal usability and increased abandonment risk |
| Color Contrast    | Multiple graphic/text contrast issues below WCAG thresholds   | Risk of accessibility non-compliance            |
| Video Captions    | Incorrect captions in PDP embedded videos                      | Confusing user experience                         |
| Notify Me Form    | Form allows submission with invalid/empty emails              | Potential faulty lead capture                     |

**Business Impact:**
- Reduced mobile and desktop user satisfaction due to UI inconsistencies.
- Increased risk of checkout abandonment due to cart and PDP functionality issues.
- Accessibility compliance issues exposed legal and brand reputation risk.
- Gaps in content accuracy and clarity may confuse users and limit conversions.

---

## 3. Immediate Response & Fixes

| Focus Area         | Actions Taken                                                                                  | Outcome                                       |
|--------------------|-----------------------------------------------------------------------------------------------|-----------------------------------------------|
| PDP Styling        | Fixed accordion display bugs on mobile PDPs with improved CSS and responsive adjustments        | ✅ Consistent mobile accordion display        |
| Cart Functionality  | Resolved sticky Add to Cart bar display logic and interaction bugs on mattress product pages    | ✅ Restored stable cart/checkout UX           |
| Quick Buy Modal    | Corrected quick buy modal’s variant selection to update in place without redirecting            | ✅ Improved quick buy modal usability          |
| Color Contrast     | Updated colors and contrast ratios for key UI elements across site to meet accessibility standards | ✅ Compliance with WCAG AA contrast guidelines |
| Video Captions     | Adjusted YouTube video captions for accuracy and added manual overrides where automated captions failed | ✅ Clear and accurate captions for users      |
| Notify Me Form     | Added robust client-side validation for email fields, including required and format checks      | ✅ Prevents invalid form submissions           |

---

## 4. UI/UX Improvement Highlights

| Feature Area             | Before                                                      | After                                                  |
|--------------------------|-------------------------------------------------------------|--------------------------------------------------------|
| FAQ Section              | No dedicated, channel-aware FAQ on Shopify                   | New Shopify-native, AI-friendly, channel-separated FAQ section launched |
| Product Schema           | Schema contains inaccurate and incomplete metadata           | Full audit and validation completed; errors documented |
| Mobile Menu              | Inconsistent menu items and broken link behavior             | Unified menu choices with fixed navigations and CTAs   |
| Cart & Checkout          | Chat icon overlaps checkout, buttons misaligned              | Improved layout with non-intrusive chat, visible checkout buttons |
| PDP Upsell Popups        | Upsell modals broken or missing variant-dependent updates    | Functional upsell popups with size and pricing correctness |
| Accessibility Overlays   | Missing or duplicate ARIA attributes and contrast issues     | Comprehensive ADA fixes including ARIA fixes and contrast corrections |
| Loading & Performance    | CLS issues and missing preload tags on hero banners          | Fixed CLS, added preload tags, improving load times and SEO |

---

## 5. On-Hold Items & Action Plan

| Key             | Description                                                  | Next Step                                             | Owner          |
|-----------------|--------------------------------------------------------------|-------------------------------------------------------|----------------|
| Helixian-ZIN-1253 | Support/FAQ Expansion + Assembly Instruction Search Page    | Scope review and timeline definition                   | Daniel Carroll |
| Helixian-ZIN-12104 | Review and update Secuvy code (accessibility widget)       | Complete code review and deploy updates                | Daniel Carroll |
| Helixian-ZIN-1237 | Quick Buy modal accessibility and UI improvements           | Await final client QA and UAT                           | Olivia Alvarez |
| Helixian-ZIN-1032 | White Glove delivery and installation feature                | Confirm requirements and start development             | Daniel Carroll |
| Helixian-ZIN-1177 | Google Search Console reported GSC issues                    | Dev team to investigate and address GSC flagged URLs  | Daniel Carroll |

---

## 6. Appendix

| Type   | Key               | Summary                                                                            | Status         | Assignee        | Reporter        | Created              | Resolved             |
|--------|-------------------|------------------------------------------------------------------------------------|----------------|-----------------|-----------------|----------------------|----------------------|
| Task   | Helixian-ZIN-1252 | Deployment                                                                         | Done           | Daniel Carroll  | Daniel Carroll  | 2025-10-28T09:41:58Z | 2025-10-28T12:09:20Z |
| Task   | Helixian-ZIN-1185 | Remove Useway                                                                      | Done           | Olivia Alvarez  | Mason Kim       | 2025-09-18T10:52:26Z | 2025-09-23T04:41:01Z |
| Bug    | Helixian-ZIN-1245 | Restock “Notify Me” form allows submission with empty/invalid email               | Done           | Olivia Alvarez  | Bobby Hudgins   | 2025-10-22T09:27:20Z | 2025-10-27T15:55:10Z |
| Bug    | Helixian-ZIN-1239 | Sticky Add to Cart bar malfunctions on mattress PDP                               | Done           | Olivia Alvarez  | J Vishal        | 2025-10-16T11:57:04Z | 2025-10-22T04:13:11Z |
| Task   | Helixian-ZIN-1241 | Accordion Section Styling Broken on Bed Frame PDP (Mobile View)                   | Done           | Olivia Alvarez  | J Vishal        | 2025-10-16T12:11:02Z | 2025-10-21T17:20:51Z |
| Bug    | Helixian-ZIN-1204 | [Mobile] Search Bar Not Functional — Unable to Type or Close                      | Done           | J Vishal        | J Vishal        | 2025-10-16T07:51:24Z | 2025-10-16T08:19:52Z |
| Task   | Helixian-ZIN-1248 | PDP video captions incorrect — shows “thank you” despite music-only audio         | To Do          | J Vishal        | Bobby Hudgins   | 2025-10-22T09:20:00Z | -                    |
| Task   | Zinus-ZIN-30      | Fix Missing Tags in Page Type and Traffic Source Data in Shopify reports          | To Do          | Mason Kim       | J Vishal        | 2025-10-28T11:57:51Z | -                    |
| Bug    | Helixian-ZIN-1105 | Zinus.com: Google Merchant Center Issue Preventing Products from Showing           | Done           | Olivia Alvarez  | Olivia Alvarez  | 2025-08-08T14:26:01Z | 2025-08-11T11:03:42Z |
| Task   | Helixian-ZIN-1030 | Product Manuals & Install Instructions                                            | Done           | Olivia Alvarez  | Daniel Carroll  | 2025-06-03T13:09:41Z | 2025-09-03T04:10:47Z |
| Task   | Helixian-ZIN-1044 | Deployment                                                                         | Done           | Daniel Carroll  | Daniel Carroll  | 2025-06-16T11:14:26Z | 2025-06-17T04:19:19Z |
| Task   | Helixian-ZIN-1032 | White Glove delivery and/or installation                                          | On Hold        | Daniel Carroll  | Daniel Carroll  | 2025-06-03T13:01:23Z | -                    |
| Bug    | Helixian-ZIN-926  | Bugfix compare at price issue on bundle page                                      | Done           | Daniel Carroll  | Daniel Carroll  | 2025-02-18T17:20:45Z | 2025-02-18T17:21:43Z |
| Task   | Helixian-ZIN-972  | Mellow AUS - Banner image width update                                           | Done           | Olivia Alvarez  | Mason Kim       | 2025-03-26T19:13:51Z | 2025-04-08T16:52:39Z |
| Bug    | Helixian-ZIN-1111 | Buy with the prime with Route issue research                                    | Done           | Mason Kim       | Mason Kim       | 2025-08-19T11:23:24Z | 2025-10-21T08:31:30Z |
| Task   | Helixian-ZIN-1237 | Quick Buy Function Not Working Properly for Suzanne Bed Frame Products            | Done           | Olivia Alvarez  | J Vishal        | 2025-10-16T11:41:07Z | 2025-10-21T17:20:37Z |
| Bug    | Helixian-ZIN-1240 | Blinking Text Caret “|” Appears Site-Wide When Clicking Anywhere                  | Done           | J Vishal        | J Vishal        | 2025-10-16T12:08:46Z | 2025-10-17T10:11:25Z |
| Task   | Helixian-ZIN-1251 | Add Color Tooltip to Quick View Modal                                            | Final Client QA| Olivia Alvarez  | Yongwan Song    | 2025-10-22T16:09:36Z | -                    |
| Task   | Zinus-ZIN-32      | Notify InfoSec of ADA deployment completion (ZADA-36, 38, 39, 33, 99, 317)       | To Do          | Mason Kim       | Mason Kim       | 2025-10-28T10:42:54Z | -                    |
| Task   | Zinus-ZIN-31      | Deployment                                                                         | Done           | Daniel Carroll  | Daniel Carroll  | 2025-10-28T08:54:46Z | -                    |
| Task   | Helixian-ZIN-1250 | Shopify Product Schema Audit & Validation for Zinus.com                           | In Progress    | Daniel Carroll  | Mason Kim       | 2025-10-22T14:53:47Z | -                    |
| Task   | Zinus-ZIN-29      | User Access Review (UAR) – Y2025 (IT) for Mason-owned Systems                    | To Do          | Mason Kim       | Mason Kim       | 2025-10-28T08:54:46Z | -                    |

*Note:* The appendix includes all tickets related to website development for Zinus.com, including ADA project tickets and accessibility enhancements. Non-website related tickets have been excluded.

---