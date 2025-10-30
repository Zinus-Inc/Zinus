# Zinus Development Report – January-October, 2025

---

## 1. Executive Summary

A total of **646 Jira tickets** related to the Zinus website development were analyzed for this period.  
- Ticket types:  
  - **Tasks:** 575 (89%)  
  - **Bugs:** 70 (11%)  
  - **Improvements:** None explicitly identified beyond tasks  
- Completion status:  
  - **Done:** 558 tickets (86%)  
  - **To Do/In Progress/On Hold/Others:** 88 tickets (14%)  

Key work themes included:  
- Major **accessibility compliance (ADA)** fixes and audit-driven remediations focusing on ARIA attributes, color contrast, keyboard navigation, and screen reader compatibility.  
- **UI/UX improvements** such as FAQ and support page enhancements, mega menu and mobile menu refinements, and updates to PDP elements (carousels, modals, accordions).  
- Ongoing **deployment and merging** tasks including schema audits and preparation for critical production pushes.  
- Implementation and maintenance of third-party integrations including Bazaarvoice, Rebuy upsell widgets, MS Clarity tracking, and chat support.  
- SEO and analytics improvements addressing page tagging, canonical URLs, and Google Search Console feedback.

**Bug Tickets Summary:**  
- 70 bugs were addressed, primarily focusing on UI inconsistencies such as accordion styling, tooltips behavior, video caption accuracy, cart and checkout UI issues, product image carousel malfunctions, and accessibility-related errors.  
- The bugs were resolved predominantly through frontend code fixes, style adjustments, and accessibility markup corrections ensuring improved user experience and compliance.

---

## 2. Incident Overview

| Category            | Description                                                         | Impact                                      |
|---------------------|---------------------------------------------------------------------|---------------------------------------------|
| PDP Accordions      | Broken accordion styling on bed frame PDPs (mobile view)           | Reduced mobile UX consistency                |
| Tooltip Behavior     | Color tooltip fails to dismiss after click in "Buy Full Set" section | Obstructed UI elements, user frustration    |
| Video Captions       | Incorrect auto captions shown on Product video                      | Confusing user experience                     |
| Cart UI             | Sticky Add to Cart bar malfunctioning on mattress PDPs              | Potential checkout disruption                 |
| Product Carousel     | Image carousel arrows missing, thumbnails not updating correctly    | Impaired product exploration                   |
| Cart Popup Links     | Incorrect URLs in cart popup product links                          | Potential misnavigation, cart abandonment   |
| Empty/Form Validation| "Notify Me" form allows empty or invalid email submission           | Email list data quality loss                  |
| Mobile Menu Items    | Mobile menu images not directing to PDPs on tap                    | Navigation disruption on mobile               |
| Add to Cart Button   | Missing "Add to Cart" button on certain PDPs                        | Purchase blockage                             |

### Business Impact Summary
- Mobile UX inconsistencies risked losing potential customers on mobile devices.  
- Checkout and cart UI issues increased cart abandonment risk.  
- Accessibility issues posed compliance and potential legal risks.  
- Video caption errors reduced content clarity and inclusiveness.

---

## 3. Immediate Response & Fixes

| Focus Area        | Actions Taken                                                                   | Outcome                                      |
|-------------------|--------------------------------------------------------------------------------|----------------------------------------------|
| PDP Accordion     | Fixed borders, alignment, and expanded proper ARIA attributes                  | ✅ Restored accordion functionality on mobile |
| Tooltip Handling  | Implemented dismissal of color tooltips after click or hover loss              | ✅ Improved UI clarity and interaction        |
| Video Captions    | Adjusted YouTube video caption files for accuracy                             | ✅ Enhanced caption accuracy and user experience |
| Cart UI           | Corrected sticky ATC bar rendering logic and link URLs                        | ✅ Restored consistent cart behavior          |
| Product Image Carousel | Restored thumbnail click and arrow functionality                          | ✅ Improved product image navigation           |
| Form Validation   | Added email required and format validation to "Notify Me" modal forms         | ✅ Prevented invalid submissions               |
| Mobile Navigation | Fixed mobile menu tap targets to return proper PDPs                          | ✅ Smoother mobile navigation                   |
| Add to Cart Button| Restored visibility and functionality on affected PDPs                       | ✅ Enabled purchase actions                     |

---

## 4. UI/UX Improvement Highlights

| Feature Area                      | Before                                                                                                 | After                                                                                              |
|----------------------------------|------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| FAQ Expansion & Search           | Limited support content, no dedicated assembly instructions search                                   | Planned MVP FAQ section with assembly instructions search powered by Shopify flexible templates  |
| Mega Menu                        | Avocado-like menu with hover bugs and missing links                                                  | Stable mega menu with clickable images and proper category segmentation                          |
| Mobile PDP Accordions            | Styling broken, inconsistent accordion expansion                                                    | Accordion borders and expansion fixed with ARIA compliance                                     |
| Color Tooltip in PDP             | Tooltip stuck after selection                                                                        | Tooltip hides correctly on mouse out or blur                                                    |
| Cart Sticky Add to Cart Bar      | Display issues with black bars and inconsistent versions                                            | Fixed consistent, stable sticky ATC bar behavior                                                |
| Product Image Carousel           | Thumbnails unresponsive and arrows missing                                                         | Fully functional carousel with clickable thumbnails and visible navigation arrows                |
| Mobile Menu Navigation           | Product images and names not clickable leading to PDPs                                             | All elements clickable providing smooth user flow                                              |
| Reset Password Form              | Required fields not marked clearly (missing *)                                                      | Added required field indications per ADA                                                        |
| Search Result Relevance          | Pillow searches showed bed frames first, misleading ordering                                       | Improved search ranking to show direct pillow products first                                     |
| Banner Preload                   | Old hero banner not preloaded causing slower load                                                   | Updated preload tags for hero banner images improving page speed                                |
| Chat Interface                  | Chat pop-up misaligned and oversized on mobile                                                     | Chat pop-up repositioned and resized for cross-device consistency                                |

---

## 5. On-Hold Items & Action Plan

| Key               | Description                                   | Next Step                                   | Owner          |
|-------------------|-----------------------------------------------|--------------------------------------------|----------------|
| Helixian-ZIN-1253 | FAQ Expansion + Assembly Instruction Search       | Finalize design, scope, and technical feasibility | Daniel Carroll |
| Helixian-ZIN-1233 | Add Color Tooltip to Quick View Modal              | Complete client QA and deployment          | Olivia Alvarez |
| Helixian-ZIN-1232 | Bazaarvoice Upgrade to V2                           | Await Bazaarvoice activation and QA         | Olivia Alvarez |
| Helixian-ZIN-1231 | Exit intent popup to reduce abandoned checkouts     | Develop and test coupon popup implementation | Daniel Carroll |
| Helixian-ZIN-1177 | GSC-Core Web Vitals - Affected URLs               | Investigate URLs and propose fixes          | Yongwan Song    |
| Helixian-ZIN-1142 | Implement JSON-LD for Bazaarvoice reviews          | Develop and deploy per Bazaarvoice schema   | Daniel Carroll |
| Helixian-ZIN-1064 | Dynamic Yield Research/Personalization             | Define scope and start evaluation            | N/A           |
| Helixian-ZIN-1015 | Update Reviews Page Module to Match Homepage Review | Complete design updates and deploy           | Olivia Alvarez |
| Helixian-ZIN-1001 | Additional Placements for TrueMed                   | Await specification                          | Daniel Carroll |
| Helixian-ZIN-1000 | Review Secuvy code update                           | Complete code review and update              | Daniel Carroll |
| Helixian-ZADA-637 | Accordion cleanup from previous audits             | Apply fixes from referenced PDP accordion    | -             |
| Helixian-ZADA-636 | Quick buy modal fixes                               | Apply fixes from referenced Quick Buy modal  | -             |

---

## 6. Appendix

| Type  | Key               | Summary                                                                    | Status           | Assignee         | Reporter        | Created             | Resolved            |
|-------|-------------------|-----------------------------------------------------------------------------|------------------|------------------|-----------------|---------------------|---------------------|
| Task  | Helixian-ZIN-1253 | Zinus Support / FAQ Expansion + Assembly Instruction Search Page           | To Do            | Daniel Carroll   | Mason Kim       | 2025-10-29T12:24:04 | -                   |
| Task  | Helixian-ZIN-1252 | Deployment                                                                 | Done             | Daniel Carroll   | Daniel Carroll  | 2025-10-28T09:41:58 | 2025-10-28T12:09:20 |
| Task  | Helixian-ZIN-1251 | Add Color Tooltip to Quick View Modal                                      | Final Client QA  | Olivia Alvarez   | Yongwan Song    | 2025-10-22T16:09:36 | -                   |
| Task  | Helixian-ZIN-1249 | Restock “Notify Me” form allows submission with empty/invalid email       | Done             | Olivia Alvarez   | Bobby Hudgins   | 2025-10-22T09:27:20 | 2025-10-27T15:55:10 |
| Bug   | Helixian-ZIN-1241 | Accordion Section Styling Broken on Bed Frame PDPs (Mobile View)          | Done             | Olivia Alvarez   | J Vishal        | 2025-10-16T12:11:02 | 2025-10-21T17:20:51 |
| Bug   | Helixian-ZIN-1240 | Blinking Text Caret “|” Appears Site-Wide When Clicking Anywhere          | Done             | J Vishal         | J Vishal        | 2025-10-16T12:08:46 | 2025-10-17T10:11:25 |
| Bug   | Helixian-ZIN-1239 | Sticky Add to Cart (ATC) Bar Not Functioning Properly on Mattresses PDP's | Done             | Olivia Alvarez   | J Vishal        | 2025-10-16T11:57:04 | 2025-10-22T04:13:11 |
| Bug   | Helixian-ZIN-1238 | Quick Buy Function Not Working Properly for Suzanne Bed Frame Products    | Done             | Olivia Alvarez   | J Vishal        | 2025-10-16T11:41:07 | 2025-10-21T17:20:37 |
| Bug   | Helixian-ZIN-1237 | Product Image Carousel Not Functional — Thumbnails Not Reflecting…        | Done             | Olivia Alvarez   | J Vishal        | 2025-10-16T11:27:49 | 2025-10-21T17:19:41 |
| Bug   | Helixian-ZIN-1236 | Color Swatches Not Visible for Suzanne Metal and Bamboo Platform Bed Frame… | Done             | J Vishal         | J Vishal        | 2025-10-16T11:15:31 | 2025-10-16T13:37:37 |
| Bug   | Helixian-ZIN-1235 | [Mobile] Color Swatches Getting Cut Off in Bed Frame Collection Page     | Done             | Olivia Alvarez   | J Vishal        | 2025-10-16T11:06:01 | 2025-10-21T17:18:58 |
| Task  | Helixian-ZIN-1228 | Add MS Clarity to Zinus.com                                               | Done             | Olivia Alvarez   | Olivia Alvarez  | 2025-10-14T11:15:53 | 2025-10-15T07:06:04 |
| Task  | Helixian-ZIN-1233 | Review ADA Client Info Needed tickets                                    | Done             | Olivia Alvarez   | Daniel Carroll  | 2025-10-14T11:52:24 | 2025-10-21T17:18:18 |
| Task  | Helixian-ZIN-106 | Deployment tasks                                                          | Done             | Daniel Carroll   | Daniel Carroll  | Various             | Various             |
| Task  | Helixian-ZIN-974 | Apply the code to update the jQuery version                              | Done             | Olivia Alvarez   | Mason Kim       | 2025-03-27T12:32:23 | 2025-04-08T16:52:03 |
| Task  | Helixian-ZIN-623 | Evaluate Implementation of NoFraud App for Fraud Prevention              | To Do            | Mason Kim        | Mason Kim       | 2025-10-19T11:28:18 | -                   |
| Task  | Zinus-ZIN-1250    | Define detailed requirements and scope for FAQ page build               | To Do            | Mason Kim        | Mason Kim       | 2025-10-29T09:28:41 | -                   |
| Task  | Zinus-ZIN-1252    | Fix Missing Tags in Page Type and Traffic Source Data in Shopify reports | Done             | Mason Kim        | Daniel Carroll  | 2025-10-28T11:57:51 | 2025-10-28T12:09:20 |
| Task  | Zinus-ZIN-1231    | Exit intent popup + coupon code for abandoned checkouts                  | In Progress      | Daniel Carroll   | Olivia Alvarez  | 2025-10-14T11:34:25 | -                   |
| Task  | Helixian-ZIN-1227 | Schedule Elevar discussion                                               | Done             | -                | Daniel Carroll  | 2025-10-14T11:08:26 | 2025-10-14T11:47:34 |
| Bug   | Helixian-ZIN-1205 | Zinus.com BUG: Dual ATC button issue - test paused                      | Done             | Olivia Alvarez   | Olivia Alvarez  | 2025-09-23T10:24:03  | 2025-10-13T12:49:53 |
| Task  | Helixian-ZIN-1200 | Cleanup Menus in Shopify Administration                                | Done             | Daniel Carroll   | Daniel Carroll  | 2025-09-22T09:31:51 | 2025-09-23T13:53:39 |
| ...   | ...               | ...                                                                     | ...              | ...              | ...             | ...                 | ...                 |

*(Note: Appendix table truncated for brevity; full list available in project records.)*