# Zinus Development Report – October 2025

---

## 1. Executive Summary

This report reviews **173 Jira tickets** related to the Zinus website development project from January through October 2025.  
- **Types:** 158 Tasks, 15 Bugs  
- **Completion rate:** 131 tickets marked Done (76%)  
- **Key outcomes include:**  
  - Major UI/UX fixes on product detail pages (PDP), mobile menus, and collection pages.  
  - Accessibility (ADA/WCAG) compliance upgrades covering color contrast, keyboard focus, and screen reader enhancements.  
  - Schema/data audits and preparations for SEO improvements.  
  - Deployment and release management for various feature rollouts.  
  - Integration planning for MS Clarity analytics and Bazaarvoice upgrades.  
- **Major themes:**  
  - Accessibility improvements across site components (modals, buttons, navigation).  
  - Product page stabilizations: image carousels, variant selectors, color swatches.  
  - Mobile responsiveness refinements to menus and modals.  
  - Enhanced data reporting accuracy via Shopify tagging fixes.  
- **Bug ticket summary:**  
  - Accordion styling faults on mobile PDPs fixed by border and alignment adjustment.  
  - Color tooltip stickiness and quick buy modal variant update bugs resolved to restore user interactions.  
  - Image carousel and sticky Add to Cart bar behaviors corrected for functionality and responsiveness.  
  - Chat pop-up position corrected for consistent desktop and mobile experience.  

---

## 2. Incident Overview

| Category           | Description                                                       | Impact                                   |
|--------------------|------------------------------------------------------------------|-----------------------------------------|
| PDP Accordion      | Accordion borders broken and misaligned on mobile                | Reduced UI consistency on mobile PDPs   |
| Buy Full Set Tooltip| Color tooltip remains visible after click/hover                  | Obstructs UI and misleads customers     |
| Quick Buy Modal    | Variant selection redirects instead of updating in modal          | Disrupts purchase process                |
| Color Swatches     | Swatches not visible or cut off on collection/multiple PDPs       | Confuses product selection               |
| Sticky ATC Bar     | Sticky Add to Cart bar shows old version or black background bar  | Visual inconsistency, possible confusion|
| Chat Pop-up        | Chat bubble misaligned on mobile                                  | Degraded UX due to inconsistent positioning|
| Search Bar (Mobile)| Search bar not accepting input or closing improperly              | Breaks product discovery mobile UX      |

### Business Impact Summary
- Reduced mobile user satisfaction from UI inconsistencies.  
- Potential purchase flow interruptions impacting conversion rates.  
- Lower engagement due to UI and chat accessibility issues.  

---

## 3. Immediate Response & Fixes

| Focus Area        | Actions Taken                                                       | Outcome                                  |
|-------------------|--------------------------------------------------------------------|------------------------------------------|
| PDP Accordion     | Adjusted accordion styling for correct borders and spacing         | ✅ Restored mobile PDP visual integrity  |
| Buy Full Set Tooltip| Fixed tooltip dismissal logic to hide on mouseout and blur        | ✅ Eliminated stuck tooltips obstructing UI |
| Quick Buy Modal   | Corrected variant option behavior to update selection without redirect | ✅ Smooth variant selection in modal     |
| Color Swatches    | Fixed display logic and layout for swatches on PDP and collections | ✅ Clear, consistent product options      |
| Sticky ATC Bar    | Updated sticky Add to Cart to latest version, removed black bar bug | ✅ Consistent visibility across devices  |
| Chat Pop-up       | Corrected chat popup position to bottom-right on mobile            | ✅ Uniform chat UI for desktop and mobile |
| Mobile Search Bar | Investigated and addressed input and close button responsiveness   | ✅ Functional mobile search input and closure|

---

## 4. UI/UX Improvement Highlights

| Feature Area                | Before                                                      | After                                                        |
|----------------------------|-------------------------------------------------------------|--------------------------------------------------------------|
| Mobile PDP Accordion        | Distorted accordion borders with overlapping edges         | Clean, consistent accordion sections with proper alignment   |
| PDP Quick View Modal        | No color tooltip for quick product preview                  | Added color tooltip improving variant choice clarity         |
| Product Image Carousel      | Thumbnails not updating main image; missing navigation arrows| Fully functional carousel with visible arrows and thumbnail updates |
| Collection Color Swatches   | Color swatches cut off or missing on mobile                  | Swatches fully visible, aligned properly on all devices      |
| Announcement Bar            | Clickable only on CTA button portion                         | Entire bar clickable with toggle option in theme settings    |
| Sticky Add to Cart (ATC) Bar| Outdated style and black bar showing inconsistently          | Updated styling with stable and clear sticky cart UI         |
| Mobile Menu (Mattresses)    | Uneven product card heights; shifting tab widths on toggle   | Equalized heights and fixed stable tab/content panel widths  |
| Search Results Ordering     | Irrelevant bed frames appearing before pillows on pillow search| Results reordered prioritizing exact pillow SKUs             |

---

## 5. On-Hold Items & Action Plan

| Key                   | Description                                                      | Next Step                               | Owner          |
|-----------------------|-----------------------------------------------------------------|----------------------------------------|----------------|
| Helixian-ZIN-1253     | FAQ Expansion & Assembly Instruction Search Page                | Define final design and scope          | Daniel Carroll |
| Helixian-ZIN-1181     | Implement JSON-LD for BazaarVoice GSC Review Issues             | Plan development and deployment        | Daniel Carroll |
| Helixian-ZIN-1183     | Dual buttons on PDPs (Add to Cart and Buy Now)                   | Confirm test parameters and implementation| Olivia Alvarez |
| Helixian-ZIN-1191     | Homepage Banner Alignment Inconsistent Across Devices           | Design review and responsive fix       | Olivia Alvarez |
| Helixian-ZIN-1179     | Schedule Elevar Discussion                                       | Arrange meeting and assign next actions| -              |

---

## 6. Appendix

| Type   | Key                | Summary                                                                  | Status         | Assignee         | Reporter         | Created               | Resolved               |
|--------|--------------------|--------------------------------------------------------------------------|----------------|------------------|------------------|-----------------------|------------------------|
| Task   | Helixian-ZIN-1252  | Deployment                                                               | Done           | Daniel Carroll   | Daniel Carroll   | 2025-10-28T09:41:58Z  | 2025-10-28T12:09:20Z   |
| Task   | Helixian-ZIN-1249  | Restock “Notify Me” form allows submission with empty/invalid email     | Done           | Olivia Alvarez   | Bobby Hudgins    | 2025-10-22T09:27:20Z  | 2025-10-27T15:55:10Z   |
| Bug    | Helixian-ZIN-1241  | Accordion Section Styling Broken on Bed Frame PDPs (Mobile View)         | Done           | Olivia Alvarez   | J Vishal         | 2025-10-16T12:11:02Z  | 2025-10-21T17:20:51Z   |
| Bug    | Helixian-ZIN-1237  | Product Image Carousel Not Functional — Thumbnails Not Reflecting & Arrows Missing | Done       | Olivia Alvarez   | J Vishal         | 2025-10-16T11:27:49Z  | 2025-10-21T17:19:41Z   |
| Bug    | Helixian-ZIN-1240  | Blinking Text Caret “|” Appears Site-Wide When Clicking Anywhere        | Done           | J Vishal         | J Vishal         | 2025-10-16T12:08:46Z  | 2025-10-17T10:11:25Z   |
| Bug    | Helixian-ZIN-1248  | PDP video captions incorrect — shows “thank you” despite music-only audio| To Do          | J Vishal         | Bobby Hudgins    | 2025-10-22T09:20:00Z  | -                      |
| Task   | Helixian-ZIN-1244  | Reset Password form – required field not indicated                       | Done           | Mason Kim        | Bobby Hudgins    | 2025-10-14T05:35:51Z  | 2025-10-21T17:17:47Z   |
| Bug    | Helixian-ZIN-1247  | PDP → “Buy Full Set” color tooltip persists after click/hover            | Done           | Olivia Alvarez   | Bobby Hudgins    | 2025-10-14T05:24:33Z  | 2025-10-21T17:17:14Z   |
| Bug    | Helixian-ZIN-1238  | Quick Buy Function Not Working Properly for Suzanne Bed Frame Products   | Done           | Olivia Alvarez   | J Vishal         | 2025-10-16T11:41:07Z  | 2025-10-21T17:20:37Z   |
| Bug    | Helixian-ZIN-1235  | [Mobile] Color Swatches Getting Cut Off in Bed Frame Collection Page     | Done           | Olivia Alvarez   | J Vishal         | 2025-10-16T11:06:01Z  | 2025-10-21T17:18:58Z   |
| Task   | Helixian-ZIN-1250  | Shopify Product Schema Audit & Validation for Zinus.com                  | In Progress    | Daniel Carroll   | Mason Kim        | 2025-10-22T14:53:47Z  | -                      |
| Task   | Helixian-ZIN-1253  | Zinus Support / FAQ Expansion + Assembly Instruction Search Page         | To Do          | Daniel Carroll   | Mason Kim        | 2025-10-29T12:24:04Z  | -                      |
| Task   | Zinus-ZIN-1228     | Add MS Clarity to Zinus.com                                              | Done           | Olivia Alvarez   | Olivia Alvarez   | 2025-10-14T11:15:53Z  | 2025-10-15T07:06:04Z   |
| Task   | Zinus-ZIN-124      | Remove Temporary AWS Outage Notice from Website                         | Done           | Mason Kim        | Mason Kim        | 2025-10-21T09:54:26Z  | 2025-10-21T09:56:58Z   |
| Task   | Zinus-ZIN-1231     | Follow-Up on VWO SmartCode Placement Issue                              | Done           | Mason Kim        | Mason Kim        | 2025-10-21T09:30:47Z  | 2025-10-21T09:35:23Z   |
| Bug    | Helixian-ZIN-1187  | Chat Pop-up Misaligned on Desktop and Mobile                            | Done           | Olivia Alvarez   | J Vishal         | 2025-09-22T08:49:34Z  | 2025-09-26T16:39:48Z   |
| Task   | Helixian-ZIN-1204  | [Mobile] Search Bar Not Functional — Unable to Type or Close           | Done           | J Vishal         | J Vishal         | 2025-10-16T07:51:24Z  | 2025-10-16T08:19:52Z   |
| Task   | Zinus-ZIN-21       | New data extraction system development: RPA replaced by API integration | Done           | Mason Kim        | Mason Kim        | 2025-10-19T18:24:41Z  | 2025-10-28T08:18:29Z   |

*Note: Full appendix is available on project Confluence and Jira.*

---