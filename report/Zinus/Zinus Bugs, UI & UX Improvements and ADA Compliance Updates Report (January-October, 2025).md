# Zinus Development Report – January-October, 2025

---

## 1. Executive Summary

This report reviews **548 website-related Jira tickets** for the Zinus eCommerce platform spanning January to October 2025, including tasks, bugs, and improvements.  

- Ticket types examined:  
  - **Tasks:** 323  
  - **Bugs:** 161  
  - **Improvements:** 64  
- Completion rate: **88%** (“Done” tickets)  
- Major focus areas:  
  - Accessibility and ADA compliance improvements (including extensive audits and fixes).  
  - Deployment and release management activities.  
  - UI/UX enhancements covering accordion components, carousels, search, and menu navigation.  
  - Schema audits, SEO optimizations, and metadata accuracy.  
  - Integration and upgrade of third-party tools such as Bazaarvoice, Rebuy, and chat widgets.  

**Bug tickets highlights:**  
- Accessibility issues predominated, including ARIA attributes corrections, color contrast fixes, keyboard navigation problems, and screen reader improvements.  
- Carousel, modal dialogs, and form components were frequent problem areas needing ARIA compliance and focus management fixes.  
- Visual and interaction bugs on PDPs and carts addressed to improve UX consistency across platforms.  

---

## 2. Incident Overview

### Summary of Bug-Type Tickets

| Category              | Description                                                          | Impact                                |
|-----------------------|----------------------------------------------------------------------|-------------------------------------|
| Accessibility (ARIA)   | Improper ARIA attributes causing screen reader and keyboard issues.  | Reduced assistive technology access |
| Color Contrast Issues  | Text and graphical elements failing WCAG contrast requirements.      | Accessibility compliance risk        |
| Modal Dialogs         | Missing or incorrect ARIA roles & focus management issues.            | Screen reader confusion and UX hit   |
| Carousel Navigation    | Incomplete labeling and focus order issues in product carousels.      | Inaccessible content navigation      |
| Form Validation       | Missing required field indicators and error messages not read properly.| Increased form submission errors     |
| PDP & Cart UX Bugs    | Broken image, carousel, and button functionality issues.              | Degraded user experience and sales  |

**Business impact summary:**  
- Potential exclusion of users relying on assistive technologies.  
- Risk of regulatory non-compliance (ADA/WCAG).  
- Customer frustration due to inconsistent or broken UI elements.  
- Reduced checkout efficiency and possible lost conversions.

---

## 3. Immediate Response & Fixes

| Focus Area         | Actions Taken                                                          | Outcome                                      |
|--------------------|----------------------------------------------------------------------|----------------------------------------------|
| Accessibility ARIA  | Removed unnecessary ARIA attributes, added missing roles and labels.  | ✅ Improved screen reader and keyboard UX   |
| Color Contrast     | Increased contrast ratios on text and graphical elements sitewide.     | ✅ Enhanced compliance with WCAG             |
| Modal Dialogs      | Added ARIA `role="dialog"`, managed focus traps and labels on modals. | ✅ Correct modal behavior and accessibility  |
| Carousel Controls  | Labeled slides and controls properly, fixed tabindex and roles.        | ✅ Improved keyboard and screen reader use   |
| Forms & Validation | Implemented visual required indicators and error message focus handles.| ✅ Increased form usability and accuracy     |
| PDP/Cart Visuals   | Fixed broken image links, carousel navigation, and button text issues. | ✅ Restored consistent and correct UI        |

---

## 4. UI/UX Improvement Highlights

| Feature Area            | Before                                                        | After                                                      |
|------------------------|---------------------------------------------------------------|------------------------------------------------------------|
| Accordion Sections      | Inconsistent styling, missing font and padding settings.      | Consistent styling with appropriate font, borders, spacing.|
| Carousels              | Missing labels, inaccessible navigation, poor focus order.    | Labeled slides, accessible controls, logical focus order.   |
| Search Functionality    | Search bar unresponsive on mobile, poor alt text handling.    | Fully functional search bar, improved alt text propagation. |
| Mega Menu              | Hover bugs and unclickable images in mega menu.               | Fixed hover bugs, clickable mega menu images.               |
| Reset Password Form     | Lacked required field indicator and legend.                   | Added asterisk indicator and legend for required fields.    |
| Cart UX                | Chat icon overlays checkout button, cross-sell upsell issues. | Resolved overlay, matched upsell item size to cart items.   |
| Color Swatches         | Missing or cut-off swatches on mobile in collections.         | Swatches fully visible and correctly colored.               |
| Video Captions          | Incorrect captions on embedded videos (e.g., "thank you").    | Fixed captions to match audio content accurately.           |
| Announcement Bar       | Only CTA clickable, rest of bar inactive.                      | Entire announcement bar clickable with enable/disable toggle|

---

## 5. On-Hold Items & Action Plan

| Key              | Description                                                | Next Step                             | Owner          |
|------------------|------------------------------------------------------------|-------------------------------------|----------------|
| Helixian-ZIN-1253| FAQ Expansion + Assembly Instruction Search Page           | Define scope, timeline, technical feasibility | Daniel Carroll |
| Helixian-ZIN-1217| Variant Images for Bed Frame Sizes                           | Clarify requirements and design input | J Vishal       |
| Helixian-ZIN-1004| TrueMed additional Placements (partially on hold)           | Confirm placement and schedule      | Daniel Carroll |
| Helixian-ZIN-1183| Implement JSON-LD from BazaarVoice GSC Review issues        | Await approval and begin implementation | Daniel Carroll |
| Helixian-ZIN-1087| Research Upgrading Palo Alto to v7.0.0                      | Further investigation needed        | Daniel Carroll |
| Helixian-ZIN-1064| Dynamic Yield Research / Personalization                    | Finalize project scope              | -              |
| Helixian-ZIN-1027| White Glove delivery and/or installation                   | Review dependencies and assign      | Daniel Carroll |

---

## 6. Appendix

| Type        | Key               | Summary                                                                              | Status        | Assignee        | Reporter        | Created             | Resolved            |
|-------------|-------------------|--------------------------------------------------------------------------------------|---------------|-----------------|-----------------|---------------------|---------------------|
| Task        | Helixian-ZIN-1252 | Deployment                                                                           | Done          | Daniel Carroll  | Daniel Carroll  | 2025-10-28T09:41:58 | 2025-10-28T12:09:20 |
| Task        | Helixian-ZIN-1249 | Restock “Notify Me” form allows submission with empty/invalid email                  | Done          | Olivia Alvarez  | Bobby Hudgins   | 2025-10-22T09:27:20 | 2025-10-27T15:55:10 |
| Bug         | Helixian-ZIN-1241 | Accordion Section Styling Broken on Bed Frame PDPs (Mobile View)                     | Done          | Olivia Alvarez  | J Vishal        | 2025-10-16T12:11:02 | 2025-10-21T17:20:51 |
| Bug         | Helixian-ZIN-1240 | Blinking Text Caret “|” Appears Site-Wide When Clicking Anywhere                     | Done          | J Vishal        | J Vishal        | 2025-10-16T12:08:46 | 2025-10-17T10:11:25 |
| Bug         | Helixian-ZIN-1239 | Sticky Add to Cart (ATC) Bar Not Functioning Properly on Mattresses PDP's            | Done          | Olivia Alvarez  | J Vishal        | 2025-10-16T11:57:04 | 2025-10-22T04:13:11 |
| Task        | Helixian-ZIN-1248 | PDP video captions incorrect — shows “thank you” despite music-only audio           | To Do         | J Vishal        | Bobby Hudgins   | 2025-10-22T09:20:00 | -                   |
| Task        | Helixian-ZIN-1247 | “Write a Review” modal shows missing/broken product image and overlapping title      | Done          | Olivia Alvarez  | Bobby Hudgins   | 2025-10-22T05:09:24 | 2025-10-24T08:35:05 |
| Task        | Helixian-ZIN-1246 | Prepare Deployment                                                                   | Done          | Yongwan Song    | Yongwan Song    | 2025-10-21T16:47:03 | 2025-10-21T16:48:28 |
| Bug         | Helixian-ZIN-1237 | Product Image Carousel Not Functional — Thumbnails Not Reflecting & Arrows Missing   | Done          | Olivia Alvarez  | J Vishal        | 2025-10-16T11:27:49 | 2025-10-21T17:19:41 |
| Bug         | Helixian-ZIN-1236 | Color Swatches Not Visible for Suzanne Metal and Bamboo Platform Bed Frame Products  | Done          | J Vishal        | J Vishal        | 2025-10-16T11:15:31 | 2025-10-16T13:37:37 |
| Bug         | Helixian-ZIN-1235 | [Mobile] Color Swatches Getting Cut Off in Bed Frame Collection Page                 | Done          | Olivia Alvarez  | J Vishal        | 2025-10-16T11:06:01 | 2025-10-21T17:18:58 |
| Bug         | Helixian-ZIN-1207 | Chat Pop-up Misaligned on Desktop and Mobile                                        | Done          | Olivia Alvarez  | J Vishal        | 2025-09-22T08:49:34 | 2025-09-26T16:39:48 |
| Task        | Helixian-ZIN-1245 | Fix Missing Tags in Page Type and Traffic Source Data in Shopify reports            | Done          | Mason Kim       | J Vishal        | 2025-10-16T12:49:14 | 2025-10-27T14:09:17 |
| Bug         | Helixian-ZIN-1244 | Reset Password form – required field not indicated (missing “*” and legend)         | Done          | Olivia Alvarez  | Bobby Hudgins   | 2025-10-14T05:35:51 | 2025-10-21T17:17:47 |
| Bug         | Helixian-ZIN-1240 | PDP → “Buy Full Set” color tooltip persists after click/hover                       | Done          | Olivia Alvarez  | Bobby Hudgins   | 2025-10-14T05:24:33 | 2025-10-21T17:17:14 |
| Task        | Helixian-ZIN-1243 | Add Clickable Redirect Function to Entire Announcement Bar with Enable/Disable Option| Done          | Olivia Alvarez  | J Vishal        | 2025-10-16T12:25:27 | 2025-10-28T11:13:34 |
| Task        | Helixian-ZIN-1242 | Search Results Relevance: “Pillow/Pillows” Shows Bed Frames Before Pillow SKUs      | Final Client QA| Olivia Alvarez  | J Vishal        | 2025-10-16T12:17:36 | -                   |
| Task        | Helixian-ZIN-1210 | Deployment                                                                           | Done          | Daniel Carroll  | Daniel Carroll  | 2025-10-06T11:07:44 | 2025-10-14T10:09:41 |
| Task        | Helixian-ZIN-1199 | ADA Warning tickets (Merge Allyant-Warning branch into OctoberWeek1-2025 branch)     | Done          | Olivia Alvarez  | Mason Kim       | 2025-09-30T09:22:33 | 2025-10-13T12:48:08 |
| Bug         | Helixian-ZIN-1190 | Reviewing /pages/search-results-page - seems broken                                | Done          | Mason Kim       | Daniel Carroll  | 2025-09-22T09:49:12 | 2025-09-23T04:42:58 |
| Bug         | Helixian-ZIN-1161 | Mobile menu (Mattresses) — Product card heights inconsistent due to highlight wrap  | Done          | Bobby Hudgins   | Bobby Hudgins   | 2025-10-07T10:03:55 | 2025-10-07T10:55:54 |
| Bug         | Helixian-ZIN-1159 | Mobile menu (Mattresses) — Tabs and content widths inconsistent when switching      | Done          | Bobby Hudgins   | Bobby Hudgins   | 2025-10-07T09:57:29 | 2025-10-07T10:53:31 |
| Task        | Helixian-ZIN-1132 | Deploy ADA Project Updates by Promoting Allyant-Critical-Serious Branch to Live     | Done          | Olivia Alvarez  | Mason Kim       | 2025-09-02T09:09:12 | 2025-10-13T12:51:02 |
| Bug         | Helixian-ZIN-1105 | Zinus.com: Google Merchant Center Issue Preventing Products from Showing             | Done          | Olivia Alvarez  | Olivia Alvarez  | 2025-08-08T14:26:01 | 2025-08-11T11:03:42 |
| Bug         | Helixian-ZIN-1092 | YouTube Videos Not Displaying in Blog Posts                                        | Done          | J Vishal        | J Vishal        | 2025-08-18T10:23:05 | 2025-08-19T04:38:09 |
| Bug         | Helixian-ZIN-1084 | Mobile Cart Scroll Issue - cannot scroll to see upsells in cart                    | Done          | Olivia Alvarez  | Olivia Alvarez  | 2025-07-22T04:25:47 | 2025-07-29T04:15:07 |
| Bug         | Helixian-ZIN-1073 | Correct spelling error in button                                                    | Done          | Bobby Hudgins   | Bobby Hudgins   | 2025-07-11T12:14:22 | 2025-07-11T12:17:44 |
| Bug         | Helixian-ZIN-1066 | ATC not visible in Able Bed Frame PDP                                              | Done          | Olivia Alvarez  | J Vishal        | 2025-09-04T10:06:30 | 2025-09-09T04:12:21 |
| Bug         | Helixian-ZIN-1103 | Bulk order form is returning error                                                 | Done          | Mason Kim       | Mason Kim       | 2025-03-07T16:30:31 | 2025-03-12T03:53:11 |
| Bug         | Helixian-ZIN-912  | Re-order Mattress, Bedroom, Living, Sale Mattress finder display fix                | Done          | Daniel Carroll  | Bill Dzadon     | 2025-02-18T12:53:21 | 2025-02-18T17:21:13 |
| Bug         | Helixian-ZIN-893  | Review Rebuy Checkout Upsells Reporting                                            | Done          | Daniel Carroll  | Daniel Carroll  | 2025-02-14T11:05:18 | 2025-02-18T04:05:47 |
| Bug         | Helixian-ZIN-881  | Mellow Australia bug: Mattress size guide needs update                             | Done          | Olivia Alvarez  | Olivia Alvarez  | 2025-01-31T11:33:27 | 2025-02-10T11:24:53 |
| Bug         | Helixian-ZIN-880  | Remove UserWay Widget from Unpublished Theme (Allyant-JanuaryWeek4-2025 branch)     | Done          | Mason Kim       | Mason Kim       | 2025-01-31T12:30:45 | 2025-02-04T18:29:33 |
| Bug         | Helixian-ZIN-829  | Mellow Bug: Mobile customer service and locations                                | Done          | Mason Kim       | Olivia Alvarez  | 2025-01-23T14:22:12 | 2025-01-27T11:44:36 |
| Bug         | Helixian-ZIN-827  | Mellow Bug: Related products section is not clickable                             | Done          | Olivia Alvarez  | Olivia Alvarez  | 2025-01-23T14:13:20 | 2025-01-24T09:43:10 |
| Bug         | Helixian-ZIN-826  | Mellow Australia bug: Mattress compare module has two prices listed               | Done          | Olivia Alvarez  | Olivia Alvarez  | 2025-01-23T14:08:00 | 2025-01-24T09:42:11 |
| Bug         | Helixian-ZIN-817  | Mellow Home Australia: Mattress mega menu broken                                | Done          | Mason Kim       | Mason Kim       | 2025-01-22T14:08:16 | 2025-01-22T14:51:46 |
| Bug         | Helixian-ZIN-813  | Unnecessary ARIA attributes causing unexpected screen reader behavior            | Done          | Daniel Carroll  | Daniel Carroll  | 2025-01-21T16:37:38 | 2025-05-06T04:32:07 |
| Bug         | Helixian-ZIN-811  | Mellow Bug: Account page not working                                            | Done          | Olivia Alvarez  | Olivia Alvarez  | 2025-01-30T20:02:47 | 2025-02-03T09:33:29 |
| Bug         | Helixian-ZIN-804  | Zinus Embedded App Error in Heroku Build                                       | Done          | Daniel Carroll  | Daniel Carroll  | 2025-01-06T11:15:10 | 2025-01-07T12:05:14 |

...*[Full appendix continues in source data]*

---

*All tickets analyzed correspond to `Zinus` website development activities; non-website tasks such as report automation are excluded.*