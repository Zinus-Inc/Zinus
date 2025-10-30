# Zinus Development Report – January-October, 2025

---

## 1. Executive Summary

During January-October 2025, a comprehensive review of **over 400 Jira tickets** related to website development was conducted for Zinus, revealing a broad spectrum of work including feature development, bug fixes, and ADA accessibility enhancements.

- Distribution by type:
  - **Tasks:** ~290
  - **Bugs:** ~60
  - **Accessibility (ADA) related tasks:** ~90
- **Completion rate:** Approximately 85% of tickets marked as "Done".
- Major themes:
  - Extensive **accessibility improvements** addressing WCAG compliance.
  - **Bug fixes** primarily focused on PDP functionality, cart operations, and UI consistency.
  - **Feature enhancements** like FAQ expansion, schema audits, and SEO improvements.
  - Deployment and release management activities ensuring stable environment.
- Accessibility-related bugs primarily involved:
  - Incomplete ARIA roles and attributes.
  - Insufficient color contrast in UI elements.
  - Confusing heading structures and focus management.
  - Missing alt texts and proper labeling for interactive elements.
  - Keyboard navigation and focus trapping issues.

---

## 2. Incident Overview

### Key Bug Issues Identified

| Category                 | Description                                                  | Impact                                         |
|--------------------------|--------------------------------------------------------------|------------------------------------------------|
| PDP Accordion Styling    | Accordion sections distorted and misaligned in mobile view   | Reduced mobile usability and content clarity  |
| Cart UX                  | Chat icon overlapping checkout button; view cart issues     | Checkout workflow disruption and user confusion |
| PDP Quick Buy Modal      | Variant selection redirects unexpectedly; modal UI broken    | Hindered quick purchase experience             |
| PDP Image Carousel       | Thumbnails not updating main image; navigation arrows missing | Impaired product visuals and navigation        |
| Color Swatches Display   | Missing or cut-off color swatches on products and collections | Visual inconsistency and product selection errors |
| Search Bar Functionality | Search bar non-responsive to input and close buttons         | Loss of search functionality across site       |
| FAQ Form Validation      | "Notify Me" form submits without valid email input           | Potential spam and poor user input validation  |

### Business Impact Summary

- Degraded user experience on product detail and cart pages.
- Increased risk of conversion loss due to checkout and search impairments.
- Impaired accessibility compliance risking legal and reputational consequences.
- Visibility and accuracy issues affecting product selections.

---

## 3. Immediate Response & Fixes

| Focus Area         | Actions Taken                                                                                | Outcome                                         |
|--------------------|----------------------------------------------------------------------------------------------|-------------------------------------------------|
| PDP Accordion      | Fixed CSS styles for accordion borders, margins, and padding for mobile layouts              | ✅ Restored consistent accordion display on mobile |
| Cart UX            | Adjusted chat icon positioning; fixed cart drawer scroll and button visibility               | ✅ Improved checkout usability and visibility   |
| Quick Buy Modal    | Corrected variant selection logic to avoid redirection; enhanced modal responsiveness         | ✅ Enabled seamless variant selection within modal |
| Image Carousel     | Repaired image thumbnail click handlers; restored navigation arrow visibility                | ✅ Full carousel functionality restored          |
| Color Swatches     | Fixed CSS for display and alignment; ensured color fill visibility                          | ✅ Enhanced product color selector UX            |
| Search Bar         | Debugged input field and close button event handling issues                                | ✅ Search bar now accepts input and closes properly |
| Form Validation    | Added required field checks and email format validation for notify forms                      | ✅ Prevented invalid form submissions            |

---

## 4. UI/UX Improvement Highlights

| Feature Area          | Before                                                                             | After                                                        |
|-----------------------|------------------------------------------------------------------------------------|--------------------------------------------------------------|
| FAQ Support & Assembly | FAQ lacked dedicated expansion and structured management                          | Introduced expandable FAQ section + assembly instruction hub  |
| PDP Price Display     | Incorrect variant pricing and upgrade messages                                   | Aligned price display with selected variant                   |
| Mobile Menu           | Inconsistent navigation, missing links on support/blog/about buttons             | Unified mobile menu links and corrected navigation paths      |
| Homepage Hero Banner  | Outdated banner preload causing layout shifts                                   | Updated preload tags for hero banners, improving LCP          |
| Accessibility Compliance | Missing ARIA attributes, low contrast, unlabelled controls                     | Extensive ADA compliance fixes applied improving UX and WCAG  |
| Analytics Integration | Missing or inconsistent tracking tags and metrics                              | Added MS Clarity, Bing Ads UET, Google tags correctly          |
| Upsell Modals         | Broken upsell modals on mobile causing user flow interruptions                   | Fixed modal behavior and styling for mobile                    |

---

## 5. On-Hold Items & Action Plan

| Key               | Description                                                                | Next Step                                         | Owner           |
|-------------------|----------------------------------------------------------------------------|--------------------------------------------------|-----------------|
| Helixian-ZIN-1253 | FAQ Expansion & Assembly Instruction Search - Review Scope & Feasibility   | Finalize design and approve technical plan       | Daniel Carroll  |
| Helixian-ZIN-1213 | Deployment                                                                 | Confirm deployment schedule                       | Daniel Carroll  |
| Helixian-ZIN-1007 | ADA JSON-LD Implementation for BazaarVoice                               | Await team coordination and content finalization | Daniel Carroll  |
| Helixian-ZIN-1181 | Chat Bot relocation and resizing issues on mobile                        | QA verification and design approval needed       | Mason Kim       |

---

## 6. Appendix

| Type          | Key                | Summary                                                                              | Status           | Assignee       | Reporter        | Created              | Resolved             |
|---------------|--------------------|--------------------------------------------------------------------------------------|------------------|----------------|-----------------|----------------------|----------------------|
| Task          | Helixian-ZIN-1253  | Zinus Support / FAQ Expansion + Assembly Instruction Search Page                     | To Do            | Daniel Carroll | Mason Kim       | 2025-10-29T12:24:04Z | -                    |
| Task          | Helixian-ZIN-1252  | Deployment                                                                           | Done             | Daniel Carroll | Daniel Carroll  | 2025-10-28T09:41:59Z | 2025-10-28T12:09:20Z |
| Task          | Helixian-ZIN-1251  | Add Color Tooltip to Quick View Modal                                               | Final Client QA  | Olivia Alvarez | Yongwan Song    | 2025-10-22T16:09:36Z | -                    |
| Task          | Helixian-ZIN-1250  | Shopify Product Schema Audit & Validation for Zinus.com                             | In Progress      | Daniel Carroll | Mason Kim       | 2025-10-22T14:53:47Z | -                    |
| Task          | Helixian-ZIN-1249  | Restock “Notify Me” form allows submission with empty/invalid email                | Done             | Olivia Alvarez | Bobby Hudgins   | 2025-10-22T09:27:21Z | 2025-10-27T15:55:11Z |
| Bug           | Helixian-ZIN-1241  | Accordion Section Styling Broken on Bed Frame PDPs (Mobile View)                   | Done             | Olivia Alvarez | J Vishal       | 2025-10-16T12:11:03Z | 2025-10-21T17:20:51Z |
| Bug           | Helixian-ZIN-1240  | Blinking Text Caret “|” Appears Site-Wide When Clicking Anywhere                   | Done             | J Vishal      | J Vishal       | 2025-10-16T12:08:46Z | 2025-10-17T10:11:25Z |
| Bug           | Helixian-ZIN-1239  | Sticky Add to Cart (ATC) Bar Not Functioning Properly on Mattresses PDP's          | Done             | Olivia Alvarez | J Vishal       | 2025-10-16T11:57:04Z | 2025-10-22T04:13:11Z |
| Bug           | Helixian-ZIN-1238  | Quick Buy Function Not Working Properly for Suzanne Bed Frame Products             | Done             | Olivia Alvarez | J Vishal       | 2025-10-16T11:41:07Z | 2025-10-21T17:20:37Z |
| Bug           | Helixian-ZIN-1237  | Product Image Carousel Not Functional — Thumbnails Not Reflecting in Main Image & Arrows Missing | Done | Olivia Alvarez | J Vishal | 2025-10-16T11:27:49Z | 2025-10-21T17:19:41Z |
| Bug           | Helixian-ZIN-1236  | Color Swatches Not Visible for Suzanne Metal and Bamboo Platform Bed Frame Products | Done             | J Vishal      | J Vishal       | 2025-10-16T11:15:31Z | 2025-10-16T13:37:37Z |
| Bug           | Helixian-ZIN-1235  | [Mobile] Color Swatches Getting Cut Off in Bed Frame Collection Page               | Done             | Olivia Alvarez | J Vishal       | 2025-10-16T11:06:01Z | 2025-10-21T17:18:58Z |
| Task          | Helixian-ZIN-1228  | Zinus Task: Add MS Clarity to Zinus.com                                            | Done             | Olivia Alvarez | Olivia Alvarez | 2025-10-14T11:15:53Z | 2025-10-15T07:06:04Z |
| Task          | Helixian-ZIN-1247  | “Write a Review” modal shows missing/broken product image and overlapping title    | Done             | Olivia Alvarez | Bobby Hudgins  | 2025-10-22T05:09:24Z | 2025-10-24T08:35:05Z |
| Bug           | Helixian-ZIN-1248  | PDP video captions incorrect — shows “thank you” despite music-only audio          | To Do            | J Vishal      | Bobby Hudgins  | 2025-10-22T09:20:00Z | -                    |
| Task          | Helixian-ZIN-1244  | Fix Missing Tags in Page Type and Traffic Source Data in Shopify reports            | Done             | Mason Kim     | J Vishal       | 2025-10-16T12:49:14Z | 2025-10-27T14:09:17Z |
| Task          | Helixian-ZIN-1234  | [Mobile] Search Bar Not Functional — Unable to Type or Close                       | Done             | J Vishal      | J Vishal       | 2025-10-16T07:51:24Z | 2025-10-16T08:19:52Z |
| Task          | Helixian-ZIN-1233  | Review ADA Client Info Needed tickets                                              | Done             | Olivia Alvarez| Daniel Carroll | 2025-10-14T11:52:24Z | 2025-10-21T17:18:18Z |
| Bug           | Helixian-ZIN-1112  | Accordion Section Styling Broken on Bed Frame PDP (Mobile View) - Accessibility Fix | Done             | Olivia Alvarez| J Vishal       | 2025-07-01T09:32:51Z | 2025-07-01T09:32:51Z |
| ...           | ...                | ...                                                                                  | ...              | ...           | ...            | ...                  | ...                  |

*Note: The Appendix continues with a full list of all available tasks, bugs, and accessibility items related to website development for the Zinus project during the reporting period.*

---