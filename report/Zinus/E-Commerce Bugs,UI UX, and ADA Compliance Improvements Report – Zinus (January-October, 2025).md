# Zinus Weekly Development Report – October 2025

---

## 1. Executive Summary

During the January-October 2025 period, a comprehensive review of the Zinus website-related Jira tickets was conducted.  
A total of **690 tickets** were analyzed and categorized as follows:

- **Type Distribution:**  
  - Tasks: 584 (85%)  
  - Bugs: 106 (15%)  
- **Status Distribution:**  
  - Done: 573 (83%)  
  - In Progress / To Do / On Hold / Review: 117 (17%)  

Key outcomes include:  
- Completion and deployment of multiple accessibility (ADA) enhancements and compliance fixes.  
- Resolution of critical UI/UX bugs especially impacting the product detail pages, cart functionality, and mobile responsiveness.  
- Enhanced schema validation to improve SEO and structured data use.  
- Rollout of advanced merchandising features such as upsell popups and quick-buy modals.  
- Integration improvements with third-party tools like Bazaarvoice, Rebuy, and Microsoft Advertising.  

Major themes:  
- Accessibility improvements with over 100 ADA-related issues addressed, focusing on keyboard navigation, semantic markup, ARIA attributes, color contrast, and screen reader compatibility.  
- UI/UX refinements including accordion styling, carousel behavior, and cart UX consistency.  
- Schema and SEO audit to ensure proper structured data and elimination of schema errors.  
- Bug fixes addressing modal dialogs, carousel navigation, add-to-cart button visibility, and chat bot behaviors.

**Bug tickets summary:**  
- UX and UI bugs (accordion distortions, color swatch visibility, modal overlaps) resolved by CSS and JS enhancements.  
- Accessibility bugs fixed through ARIA attributes, semantic HTML adjustments, and keyboard navigability improvements.  
- Functional bugs like add-to-cart glitches and cart drawer scroll issues addressed to restore smooth shopping experience.  

---

## 2. Incident Overview

| Category              | Description                                             | Impact                                  |
|-----------------------|---------------------------------------------------------|----------------------------------------|
| Cart & Checkout       | Multiple issues with cart drawer scroll, add-to-cart visibility, and checkout slowdowns                     | Reduced purchase flow efficiency, risk of cart abandonment        |
| Product Detail Page   | PDP modals with broken images, inconsistent variant selectors, and sticky add-to-cart bar malfunction         | Degraded user experience and potential drops in conversion       |
| Accessibility & Screen Reader  | Missing ARIA attributes, improper heading structures, inaccessible tooltips, and unlabeled controls        | Lower accessibility compliance, potential regulatory risks       |
| Carousel & Navigation | Carousel control issues, inconsistent tab ordering, and keyboard focus traps                                  | Navigation confusion and poor keyboard user experience           |
| Third-Party Integrations | Issues with Bazaarvoice reviews, Upsellit modals not fully accessible, and chat bot interfering              | Potential data loss, impaired user trust, and reduced usability   |

**Business Impact:**  
- Checkout interruption risk and cart abandonment potential.  
- Reduced mobile and screen reader usability hurting user satisfaction.  
- SEO and indexing risks due to schema and structured data issues.  

---

## 3. Immediate Response & Fixes

| Focus Area       | Actions Taken                                                                                  | Outcome                                            |
|------------------|-----------------------------------------------------------------------------------------------|---------------------------------------------------|
| Cart & Checkout  | Fixed cart drawer scroll locking on iPhone 12 Pro; repaired add-to-cart button visibility issues | ✅ Restored smooth cart and checkout interactions |
| PDP Modals       | Corrected broken product images in 'Write a Review' modal; fixed color swatch visibility        | ✅ Improved visual consistency and UX             |
| Accessibility    | Enhanced ARIA attributes, added focus management, and fixed keyboard navigability               | ✅ Achieved ADA compliance milestones              |
| Carousel Controls| Adjusted tab order, aria-labels, and keyboard focus traps in carousels                          | ✅ Improved accessibility and navigation          |
| Third-Party Apps | Coordinated corrections and communication with vendors for Bazaarvoice and Upsellit integrations | ✅ Stabilized third-party features                  |

---

## 4. UI/UX Improvement Highlights

| Feature Area                | Before                                                          | After                                                           |
|----------------------------|-----------------------------------------------------------------|-----------------------------------------------------------------|
| Cart Drawer                | Scroll lock issue on mobile; chat button overlapped checkout button | Free scrolling restored; chat button non-intrusive              |
| PDP “Write a Review” Modal | Broken product image and overlapping product title              | Product images load properly; titles render cleanly             |
| Color Swatches             | Missing or cut-off swatches on Bed Frame Collection mobile view | Swatches fully visible and aligned correctly                    |
| Accordion Sections         | Styling broken with misaligned borders and overlapping edges    | Updated accordion styles - consistent borders and padding       |
| Search Bar (Mobile)        | Unresponsive: no typing or close button functionality           | Ongoing remediation in progress                                 |
| Chat Bot                   | Mispositioned and oversized on mobile, interfering with buttons | Positioned bottom-right; size optimized for mobile              |
| Add-to-Cart Button (PDP)   | Not visible or duplicated buttons on various product modals     | Buttons visually distinct and fully functional                  |
| Carousel Navigation        | Missing arrows and unlabelled controls                           | Added arrows and improved keyboard interaction labels           |
| FAQ Section                | Lack of AI/SEO-ready FAQ with schema data                       | In development for enriched SEO and chatbot search integration  |

---

## 5. On-Hold Items & Action Plan

| Key                 | Description                                            | Next Step                                        | Owner          |
|---------------------|--------------------------------------------------------|-------------------------------------------------|----------------|
| Helixian-ZIN-1253   | FAQ Expansion & Assembly Instruction Search Scope Review | Await finalized design to finalize requirements | Daniel Carroll |
| Helixian-ZIN-1218   | Zinus: Options for exit intent popup                    | Develop implementation plan and requirements    | Daniel Carroll |
| Helixian-ZADA-482   | Tooltip behavior accessibility improvements             | QA review and deployment readiness               | Bobby Hudgins  |
| Helixian-ZADA-430   | Carousel focus order fixes in "Real homes So Chic Awards" | Ongoing remediation review & deployment          | Bobby Hudgins  |
| Helixian-ZIN-759    | Optimize Jira board                                      | Pending prioritization and resource allocation   | Daniel Carroll |
| Helixian-ZIN-1064   | Dynamic Yield Personalization Research                   | Further investigation needed                      | Unassigned     |

---

## 6. Appendix

| Type   | Key              | Summary                                                        | Status          | Assignee      | Reporter        | Created               | Resolved              |
|--------|------------------|----------------------------------------------------------------|-----------------|---------------|-----------------|-----------------------|-----------------------|
| Task   | Helixian-ZIN-1252| Deployment                                                    | Done            | Daniel Carroll| Daniel Carroll  | 2025-10-28T09:41:58  | 2025-10-28T12:09:20  |
| Task   | Helixian-ZIN-1249| Restock “Notify Me” form allows submission with invalid email | Done            | Olivia Alvarez| Bobby Hudgins   | 2025-10-22T09:27:20  | 2025-10-27T15:55:10  |
| Bug    | Helixian-ZIN-1241| Accordion Styling Broken on Bed Frame PDPs (Mobile)           | Done            | Olivia Alvarez| J Vishal       | 2025-10-16T12:11:02  | 2025-10-21T17:20:51  |
| Bug    | Helixian-ZIN-1240| Blinking Text Caret “|” Appears Site-Wide                      | Done            | J Vishal      | J Vishal       | 2025-10-16T12:08:46  | 2025-10-17T10:11:25  |
| Task   | Helixian-ZIN-1244| Fix Missing Tags in Shopify Reports                            | Done            | Mason Kim     | J Vishal       | 2025-10-16T12:49:14  | 2025-10-27T14:09:17  |
| Task   | Helixian-ZIN-1243| Add Clickable Redirect Function to Announcement Bar            | Done            | Olivia Alvarez| J Vishal       | 2025-10-16T12:25:27  | 2025-10-27T15:55:40  |
| Bug    | Helixian-ZIN-1235| Color Swatches Getting Cut Off in Bed Frame Collection Page    | Done            | Olivia Alvarez| J Vishal       | 2025-10-16T11:06:01  | 2025-10-21T17:18:58  |
| Bug    | Helixian-ZIN-1237| Product Image Carousel Not Functional                          | Done            | Olivia Alvarez| J Vishal       | 2025-10-16T11:27:49  | 2025-10-21T17:19:41  |
| Bug    | Helixian-ZIN-1248| PDP video captions incorrect                                  | To Do           | J Vishal      | Bobby Hudgins  | 2025-10-22T09:20:00  | -                     |
| Task   | Helixian-ZIN-1250| Shopify Product Schema Audit & Validation                      | In Progress     | Daniel Carroll| Mason Kim      | 2025-10-22T14:53:47  | -                     |
| Task   | Zinus-ZIN-32     | Define detailed requirements and scope for FAQ page build      | To Do           | Mason Kim     | Mason Kim      | 2025-10-29T09:28:41  | -                     |
| Task   | Zinus-ZIN-31     | Fix Missing Tags in Page Type and Traffic Source Data           | Done            | Mason Kim     | Daniel Carroll | 2025-10-28T11:57:51  | 2025-10-28T12:03:48  |
| Task   | Helixian-ZIN-1211| In deployment, turn off Rebuy Collections                        | Done            | Daniel Carroll| Daniel Carroll | 2025-10-06T11:07:14  | 2025-10-14T10:09:38  |
| Task   | Helixian-ZIN-1212| Merging Development Branches for Deployment                     | Done            | Daniel Carroll| Daniel Carroll | 2025-10-06T11:07:37  | 2025-10-07T10:02:14  |
| Bug    | Helixian-ZIN-1247| “Write a Review” modal shows missing image and overlapping title | Done            | Olivia Alvarez| Bobby Hudgins  | 2025-10-22T05:09:24  | 2025-10-24T08:35:05  |
| Bug    | Helixian-ZIN-1200| Merging Development Branches for Deployment                     | Done            | Daniel Carroll| Daniel Carroll | 2025-09-30T11:41:51  | 2025-09-30T11:42:13  |

*Note: The table above lists a representative sample of tickets focused on website development and UX, excluding unrelated tasks such as server migrations or non-website automation.*

---

*Report generated for Zinus website development activities covering January through October 2025.*