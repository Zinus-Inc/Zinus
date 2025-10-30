# Zinus Development Report – January-October, 2025

---

## 1. Executive Summary

A total of **381 Jira tickets** related to Zinus website development were analyzed for the period January-October 2025.  
- Ticket Types:  
  - **Tasks:** 334  
  - **Bugs:** 34  
  - **Others (e.g., Improvements):** 13  
- Completion Rate: Approximately **85%** of the tickets are in done or resolved status, including QA and Ready for QA stages.
- Key outcomes included:  
  - Extensive accessibility (ADA/WCAG) enhancements across the site, focusing on UI element markup, ARIA attributes, and color contrast improvements.  
  - Deployment and refinement of SEO-related schema and site structure for improved search engine and AI chatbot integration.  
  - Performance improvements including Shopify product schema audit, caching, and site speed optimizations.  
  - UI/UX enhancements across PDPs and collection pages, with emphasis on mobile responsiveness and interactive elements like accordions and modals.  
  - Integration and upgrade of third-party services including Bazaarvoice V2, MS Clarity analytics, and Rebuy upsell widgets.  
- Bugs centered mainly on:  
  - Visual and functional inconsistencies in product pages, cart drawer, and mobile menus.  
  - Accessibility issues such as focus management, keyboard navigation, labeling, and color contrast.  
  - Issues with modals, carousels, and tooltips that affected usability and screen reader compatibility.  
  - Multiple bugs were fixed by adjusting markup, applying ARIA roles, and correcting UI behaviors.

---

## 2. Incident Overview

### Key Bugs Identified

| Category             | Description                                                  | Impact                                         |
|----------------------|--------------------------------------------------------------|------------------------------------------------|
| Accessibility (ARIA)  | Missing or incorrect ARIA attributes causing screen reader issues | Limits accessibility compliance and usability |
| Color Contrast       | Text and graphical objects with insufficient color contrast  | Accessibility compliance risk                   |
| Modal Dialogs        | Modals missing ARIA roles, focus trapping or labeling issues | Poor keyboard navigation and screen reader support |
| Carousels            | Navigation dots and slides missing labels or logical focus order | Confuses screen reader and keyboard users      |
| Form Validation      | Required fields missing validation or error indication       | User input errors not properly communicated    |
| Cart/Checkout UI     | Issues with sticky ATC, upsell components, and cart scrolling | Checkout flow interruptions and UI glitches    |
| PDP UI and Function  | Broken image carousel, incorrect variant behavior, missing tooltips | Reduced product discoverability and UX issues  |

### Business Impact
- Improves site usability and ADA compliance, reducing legal risk and enhancing customer inclusion.
- Resolves UI inconsistencies that previously disrupted checkout and product interactions, which could affect conversion rates.
- Enhances SEO and AI/Chatbot knowledge extraction by cleaning up schema and FAQ content.
- Reduces user frustration by improving interactive element behavior, especially for keyboard and screen reader users.

---

## 3. Immediate Response & Fixes

| Focus Area        | Actions Taken                                                                                                         | Outcome                              |
|-------------------|-----------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| Accessibility ADA | Implemented ARIA roles (`aria-expanded`, `aria-controls`), labels, legends, and improved keyboard/focus management.    | ✅ Improved screen reader support    |
| Color Contrast    | Adjusted colors on text and UI elements to meet WCAG contrast ratio requirements of at least 4.5:1 or 3:1 where allowed. | ✅ Enhanced accessibility compliance |
| Modal Components  | Added missing ARIA attributes: `role=dialog`, `aria-modal`, proper focus trapping and labeling on modal dialogs.       | ✅ Improved modal navigation/labeling|
| Product Pages     | Fixed product image carousels, variant selectors, color swatches, tooltips, and Quick Buy modal behaviors.             | ✅ Restored consistent PDP functionality |
| Cart & Checkout   | Fixed sticky add-to-cart bar, upsell popups, cart scrolling and chat button interference issues.                       | ✅ Smoother checkout and cart UX    |
| FAQ & SEO         | Removed legacy schema noise, added JSON-LD FAQ structured data, enhanced FAQ content and search readiness.              | ✅ SEO and AI indexing improved     |

---

## 4. UI/UX Improvement Highlights

| Feature Area                | Before                                                                              | After                                                          |
|----------------------------|-------------------------------------------------------------------------------------|----------------------------------------------------------------|
| Product Detail Page Accordions | Font color inconsistent, broken borders, unmarked sections for screen readers       | Accordion headers restyled, standardized, with ARIA controls   |
| Carousel Navigation         | Missing navigation dots labels, illogical focus order                              | Added `aria-label` to dots, logical DOM order, and keyboard support |
| Cart Drawer UX             | Chat icon overlapping checkout button; cart popup non-scrollable                   | Chat icon repositioned, cart scroll fixed                      |
| Color Swatches             | Color swatches missing fill colors or cut off on mobile                            | Correct color fill applied; responsive visibility fixed        |
| Announcement Bar           | Only CTA button clickable                                                         | Entire bar becomes clickable with enable/disable option        |
| Hero Banner                | Old banner preload or missing                                                    | Updated hero banner preload tags for faster LCP                |

---

## 5. On-Hold Items & Action Plan

| Key                | Description                                                              | Next Step                                   | Owner           |
|--------------------|--------------------------------------------------------------------------|---------------------------------------------|-----------------|
| Helixian-ZIN-1253  | FAQ Expansion + Assembly Instruction Search Page - scope/timeline review| Await final design and approval              | Daniel Carroll  |
| Helixian-ZIN-1218  | Variant Images for Bed Frame Sizes                                        | Define metadata and finalize image selection | J Vishal        |
| Helixian-ZIN-1027  | White Glove delivery and/or installation                                 | Scope and planning                           | Daniel Carroll  |
| Helixian-ZIN-1000  | Research Upgrading Palo Alto to v7.0.0                                   | Technical evaluation and planning           | Daniel Carroll  |

---

## 6. Appendix

| Type | Key               | Summary                                                                             | Status           | Assignee        | Reporter        | Created               | Resolved              |
|------|-------------------|-------------------------------------------------------------------------------------|------------------|-----------------|-----------------|-----------------------|-----------------------|
| Task | Helixian-ZIN-1253 | Zinus Support / FAQ Expansion + Assembly Instruction Search Page                    | To Do            | Daniel Carroll  | Mason Kim       | 2025-10-29T12:24:04Z  | -                     |
| Task | Helixian-ZIN-1252 | Deployment                                                                          | Done             | Daniel Carroll  | Daniel Carroll  | 2025-10-28T09:41:58Z  | 2025-10-28T12:09:20Z  |
| Task | Helixian-ZIN-1251 | Add Color Tooltip to Quick View Modal                                             | Final Client QA  | Olivia Alvarez  | Yongwan Song    | 2025-10-22T16:09:36Z  | -                     |
| Task | Helixian-ZIN-1250 | Shopify Product Schema Audit & Validation for Zinus.com                           | In Progress      | Daniel Carroll  | Mason Kim       | 2025-10-22T14:53:47Z  | -                     |
| Bug  | Helixian-ZIN-1245 | Restock “Notify Me” form allows submission with empty/invalid email               | Done             | Olivia Alvarez  | Bobby Hudgins   | 2025-10-22T09:27:20Z  | 2025-10-27T15:55:10Z  |
| Bug  | Helixian-ZIN-1241 | Accordion Section Styling Broken on Bed Frame PDP (Mobile View)                   | Done             | Olivia Alvarez  | J Vishal       | 2025-10-16T12:11:02Z  | 2025-10-21T17:20:51Z  |
| Bug  | Helixian-ZIN-1240 | Blinking Text Caret “|” Appears Site-Wide When Clicking Anywhere                  | Done             | J Vishal        | J Vishal        | 2025-10-16T12:08:46Z  | 2025-10-17T10:11:25Z  |
| Bug  | Helixian-ZIN-1239 | Sticky Add to Cart (ATC) Bar Not Functioning Properly on Mattresses PDP's         | Done             | Olivia Alvarez  | J Vishal        | 2025-10-16T11:57:04Z  | 2025-10-22T04:13:11Z  |
| Bug  | Helixian-ZIN-1238 | Quick Buy Function Not Working Properly for Suzanne Bed Frame Products            | Done             | Olivia Alvarez  | J Vishal        | 2025-10-16T11:41:07Z  | 2025-10-21T17:20:37Z  |
| Bug  | Helixian-ZIN-1237 | Product Image Carousel Not Functional — Thumbnails Not Reflecting in Main Image   | Done             | Olivia Alvarez  | J Vishal        | 2025-10-16T11:27:49Z  | 2025-10-21T17:19:41Z  |
| Bug  | Helixian-ZIN-1236 | Color Swatches Not Visible for Suzanne Metal and Bamboo Platform Bed Frame        | Done             | J Vishal        | J Vishal        | 2025-10-16T11:15:31Z  | 2025-10-16T13:37:37Z  |
| Bug  | Helixian-ZIN-1235 | [Mobile] Color Swatches Getting Cut Off in Bed Frame Collection Page             | Done             | Olivia Alvarez  | J Vishal        | 2025-10-16T11:06:01Z  | 2025-10-21T17:18:58Z  |
| Bug  | Helixian-ZIN-1224 | PDP → “Buy Full Set” color tooltip persists after click/hover                     | Done             | Olivia Alvarez  | Bobby Hudgins   | 2025-10-14T05:24:33Z  | 2025-10-21T17:17:14Z  |
| Bug  | Helixian-ZIN-1191 | Chat Pop-up Misaligned on Desktop and Mobile                                     | Done             | Olivia Alvarez  | J Vishal        | 2025-09-22T08:49:34Z  | 2025-09-26T16:39:48Z  |

*Note: The Appendix contains all analyzed website-related tickets sorted by type and status; due to volume, only a representative selection is shown here.*

---

*End of Report*