# Zinus Development Report – October 2025

---

## 1. Executive Summary

A total of **588 Jira tickets** related to website development were analyzed for the period January to October 2025:
- **Types:**  
  - Tasks: 523  
  - Bugs: 59  
  - Epics: 6  
- **Completion:**  
  - Done: 80% (470 tickets)  
  - In Progress or To Do: 19%  
  - On Hold: 1%  
- **Key outcomes:**  
  - Deployment of multiple accessibility improvements impacting modals, carousels, forms, and navigation menus for better compliance with ADA/WCAG standards.  
  - Resolution of several UI/UX bugs affecting cart functionality, image displays, and mobile responsiveness.  
  - Enhancement of search relevance and FAQ structures on Zinus.com.  
  - Integration and audit of Shopify data schemas and marketing scripts.  
- **Major themes:**  
  - Accessibility enhancements (focus management, ARIA roles, color contrast).  
  - Bug fixes for front-end usability, especially on mobile and cart interactions.  
  - SEO and structured data validation.  
  - Improved QA and deployment processes.  

**Bug Summary:**  
Most bug tickets addressed accessibility issues (ARIA attributes, focus order), UI misalignments, cart interaction errors, and mobile responsiveness. Fixes involved code corrections for widget behavior, modal interactions, and visual adjustments to comply with accessibility standards.

---

## 2. Incident Overview

| Category           | Description                                                  | Impact                             |
|--------------------|--------------------------------------------------------------|----------------------------------|
| Cart Functionality  | Sticky Add to Cart bar malfunctions on Mattress PDPs         | Risk of cart abandonment          |
| Modal Dialogs      | Modal dialogs remain visible to screen readers after closing | Accessibility confusion           |
| Image Galleries    | Product image carousel not functional, thumbnails not linked | Reduced product presentation      |
| Mobile Menu        | Mobile menu PDP links non-functional or inconsistent         | Navigation disruption             |
| Color Contrast     | Multiple UI elements failing WCAG contrast ratio             | Accessibility compliance risk     |
| Search Results     | Search ranking issues, irrelevant ordering of products       | Poor user experience and discovery|
| Email Submission   | “Notify Me” form submission allowed without valid emails     | Data quality and UX issues        |
| Tooltip Behavior   | Persistent tooltips not dismissing on hover or click         | UI obstruction and confusion      |

**Business Impact Summary:**
- Checkout interruptions risking lost sales.
- Accessibility and compliance vulnerabilities.
- Customer frustration on mobile and desktop due to inconsistent UI elements.
- Diminished product visibility and search effectiveness.

---

## 3. Immediate Response & Fixes

| Focus Area         | Actions Taken                                                                 | Outcome                                 |
|--------------------|-------------------------------------------------------------------------------|----------------------------------------|
| Cart Interaction   | Fixed sticky Add to Cart bar rendering and ensured consistent behavior        | ✅ Restored expected cart functionality |
| Modal Accessibility | Updated modal dialogs to hide from screen readers after close                  | ✅ Compliant modal behavior; improved screen reader experience |
| Image Carousels    | Fixed product image carousel navigation and thumbnail linking                  | ✅ Restored full image gallery function |
| Mobile Menu Links  | Corrected mobile menu navigation and PDP links                                | ✅ Improved mobile navigation stability |
| Color Contrast     | Adjusted UI colors to meet contrast standards                                | ✅ Enhanced accessibility compliance   |
| Search Relevance   | Improved search ranking logic for better relevance and accurate filters       | ✅ Enhanced user search experience      |
| Form Validation    | Enforced required fields and email validation for “Notify Me” modal           | ✅ Improved form data integrity         |
| Tooltip UX         | Fixed persistent tooltip behavior on mouseout/blur                           | ✅ Improved UI clarity and responsiveness |

---

## 4. UI/UX Improvement Highlights

| Feature Area                | Before                                                            | After                                                            |
|----------------------------|-------------------------------------------------------------------|-----------------------------------------------------------------|
| Product Image Carousel      | Thumbnails not updating main image; missing carousel arrows       | Fully functional carousel with navigation and swipe support     |
| Modal Focus Management      | Modals remained visible to screen readers after closing          | Modals properly hidden; focus managed for screen reader users   |
| Mobile Search Bar           | Search bar blocked input; close ‘X’ button unresponsive          | Search bar input functional; close button responsive            |
| FAQ & Support Section       | Poor SEO and AI readiness; scattered issues                       | New Shopify-native FAQ hub with AI/SEO-ready templates          |
| Cart Upsell Presentation    | Upsell sizes mismatched with cart sizes                           | Upsells match product sizes; enhanced add/remove flow           |
| Color Contrast & Accessibility | Multiple color contrast and ARIA issues                        | WCAG compliant colors and ARIA attributes site-wide             |
| Tooltip Behavior            | Tooltips persistent after interaction                             | Tooltips dismiss properly on pointer exit and blur              |
| Mobile Navigation Menu      | Broken links and layout inconsistencies                           | Clean menu structure matching desktop version; stable links    |

---

## 5. On-Hold Items & Action Plan

| Key             | Description                                               | Next Step                                  | Owner         |
|-----------------|-----------------------------------------------------------|--------------------------------------------|---------------|
| Helixian-ZIN-1253 | FAQ Expansion + Assembly Instruction Search Page       | Scope review and design finalization       | Daniel Carroll|
| Helixian-ZIN-1181 | Implement JSON-LD from BazaarVoice for GSC              | Await development and deployment            | Daniel Carroll|
| Helixian-ZIN-1027 | White Glove Delivery and/or Installation                 | Define feature requirements and approval   | Daniel Carroll|
| Helixian-ZIN-1185 | Remove Useway Widget from Site                            | Verify widget removal and test              | Olivia Alvarez|
| Helixian-ZIN-1087 | Palo Alto Firewall Upgrade Research                      | Assess upgrade timeline and impact          | Daniel Carroll|

---

## 6. Appendix

| Type       | Key                 | Summary                                                                                   | Status           | Assignee       | Reporter        | Created              | Resolved              |
|------------|---------------------|-------------------------------------------------------------------------------------------|------------------|----------------|-----------------|----------------------|-----------------------|
| Task       | Helixian-ZIN-1252   | Deployment                                                                                | Done             | Daniel Carroll | Daniel Carroll  | 2025-10-28T09:41:58  | 2025-10-28T12:09:20   |
| Bug        | Helixian-ZIN-1250   | Add Color Tooltip to Quick View Modal (In Progress)                                     | Final Client QA  | Olivia Alvarez | Yongwan Song    | 2025-10-22T16:09:36  | -                     |
| Bug        | Helixian-ZIN-1245   | Restock “Notify Me” form allows submission without email                                | Done             | Olivia Alvarez | Bobby Hudgins   | 2025-10-22T09:27:20  | 2025-10-27T15:55:10   |
| Bug        | Helixian-ZIN-1237   | Product Image Carousel Not Functional                                                   | Done             | Olivia Alvarez | J Vishal       | 2025-10-16T11:27:49  | 2025-10-21T17:19:41   |
| Task       | Helixian-ZIN-1247   | “Write a Review” modal shows missing/broken image and overlapping title                 | Done             | Olivia Alvarez | Bobby Hudgins  | 2025-10-22T05:09:24  | 2025-10-24T08:35:05   |
| Bug        | Helixian-ZIN-1202   | Rebuy Collection Pages Review                                                           | Done             | Olivia Alvarez | J Vishal       | 2025-09-30T14:06:42  | 2025-10-13T12:47:48   |
| Bug        | Helixian-ZIN-1193   | Zinus.com : Dual ATC button issue - test paused                                        | Done             | -              | Olivia Alvarez | 2025-09-23T10:24:03  | 2025-10-13T12:49:53   |
| Task       | Helixian-ZIN-1186   | CLONE - Main page - Sign up section issue                                              | Done             | Olivia Alvarez | Mason Kim      | 2025-09-18T11:14:16  | 2025-09-30T04:19:08   |
| Bug        | Helixian-ZIN-1187   | Chat Pop-up Misaligned on Desktop and Mobile                                           | Done             | Olivia Alvarez | J Vishal       | 2025-09-22T08:49:34  | 2025-09-26T16:39:48   |
| Bug        | Helixian-ZIN-1161   | FAQ Updates Needed                                                                     | Done             | Olivia Alvarez | Yongwan Song   | 2025-07-16T09:17:42  | 2025-07-16T14:04:09   |
| Task       | Helixian-ZIN-1155   | Main page - Review function is not clickable (Find your perfect mattress section)      | Done             | Olivia Alvarez | Mason Kim      | 2025-09-08T22:40:22  | 2025-10-13T15:54:54   |
| Bug        | Helixian-ZIN-1084   | Mobile Cart Scroll Issue- cannot scroll to see upsells in cart                        | Done             | Olivia Alvarez | Bobby Hudgins  | 2025-07-22T04:25:47  | 2025-07-29T04:15:07   |
| Task       | Helixian-ZIN-1040   | Replace BV rating with Amazon section for Abel Bedframe                              | Done             | Olivia Alvarez | Daniel Carroll | 2025-06-10T12:31:06  | 2025-06-24T04:12:49   |
| Bug        | Helixian-ZIN-1023   | Bugfix compare at price issue on bundle page                                         | Done             | Daniel Carroll | Yongwan Song   | 2025-02-18T17:20:45  | 2025-02-18T17:21:43   |
| Task       | Helixian-ZIN-982    | Request for Asset Sizes & Mobile Responsiveness for Product Layout Design             | Done             | Olivia Alvarez | Daniel Carroll | 2025-04-08T13:48:08  | 2025-04-14T16:44:46   |
| Task       | Helixian-ZIN-964    | Bazaarvoice App Refactor                                                             | Done             | Olivia Alvarez | Daniel Carroll | 2025-03-20T09:19:50  | 2025-05-06T03:57:07   |
| Bug        | Helixian-ZIN-960    | Zinus Avocado Menu Link Issues                                                       | Done             | Daniel Carroll | Olivia Alvarez | 2025-03-18T04:28:15  | 2025-03-18T07:53:29   |
| Bug        | Helixian-ZIN-924    | Add to Cart button color issue on Ultra Cooling Green Tea Memory Foam Mattress        | Done             | Mason Kim      | Mason Kim      | 2025-08-11T08:59:18  | 2025-08-12T12:35:34   |
| Bug        | Helixian-ZIN-910    | Add to cart button shows sold out for bundle template                                | Done             | Olivia Alvarez | Daniel Carroll | 2025-02-18T12:51:26  | 2025-03-04T04:05:21   |
| Task       | Zinus-ZIN-1252      | Notify InfoSec of ADA deployment completion                                         | To Do            | Mason Kim     | Mason Kim      | 2025-10-28T10:42:54  | -                     |
| Task       | Zinus-ZIN-1250      | Define detailed requirements and scope for FAQ page build                           | To Do            | Mason Kim     | Mason Kim      | 2025-10-29T09:28:41  | -                     |
| Task       | Zinus-ZIN-31        | Fix Missing Tags in Page Type and Traffic Source Data in Shopify reports            | Done             | Mason Kim     | Daniel Carroll | 2025-10-28T11:57:51  | 2025-10-28T12:09:20   |
| Task       | Zinus-ZIN-30        | Notify InfoSec of ADA deployment completion                                         | To Do            | Mason Kim     | Mason Kim      | 2025-10-28T10:42:54  | -                     |

*(Only a representative sample of full ticket list is displayed here for brevity. Full detailed ticket data is maintained separately.)*