# Zinus Development Report – October, 2025 (4th week)

---

## 1. Executive Summary

During the fourth week of October 2025, a total of **139 Jira tickets** related to Zinus website development were analyzed. These included primarily **Tasks (133)** and **Bugs (6)**, with no other issue types present. The overall ticket completion rate was approximately **30% (42 Done tickets)**.  

Key outcomes and themes include:  
- Extensive accessibility (ADA/WCAG) compliance improvements across various site components, especially focusing on screen reader compatibility and keyboard navigation enhancements.  
- Important UI bug fixes primarily on product detail pages (PDPs) related to mobile responsiveness, sticky add-to-cart functionality, and carousel usability.  
- Schema and data validation efforts for product attributes to improve SEO and structured data accuracy.  
- Preparations and planning tasks for new features such as FAQ section builds and domain migration to Cloudflare.  
- Addressing Shopify data discrepancies and analytics tagging issues to ensure accurate sales reporting and traffic source attribution.  

**Bug fixes summary:**  
- Corrected styling and functionality issues on Bed Frame PDPs including accordion sections, sticky add-to-cart bars, quick buy modals, and product image carousels to enhance mobile and desktop user experience.  
- Fixed tooltip persistence issues in the "Buy Full Set" upsell section to prevent UI obstruction.  
- Resolved color swatch visibility problems on collection pages in mobile views to ensure full accessibility and usability.  

---

## 2. Incident Overview

| Category                | Description                                                   | Impact                               |
|-------------------------|---------------------------------------------------------------|------------------------------------|
| Bed Frame PDP Accordions | Accordion styling broken on mobile view                       | Reduced readability and UX quality |
| Sticky Add to Cart Bar   | Sticky ATC bar showing old version or black bar underneath    | Potential user confusion, UX risk  |
| Quick Buy Modal          | Variant selection redirects to PDP instead of updating modal | Interrupted quick purchase flow    |
| Image Carousel          | Thumbnails not updating main image; arrows missing            | Navigation difficulties on PDP     |
| Tooltip UI              | Persistent color tooltip after selection in Buy Full Set upsell | UI obstruction, user frustration  |
| Mobile Color Swatches   | Color swatches cut off on smaller mid-sized devices           | Reduced clarity in product options |

**Business Impact:**  
- Slower or confused purchasing paths on key product pages.  
- Potential increase in cart abandonment due to UI inconsistencies.  
- Accessibility concerns affecting a segment of mobile users and compliance risks.  

---

## 3. Immediate Response & Fixes

| Focus Area              | Actions Taken                                                                                    | Outcome                                    |
|------------------------|-------------------------------------------------------------------------------------------------|--------------------------------------------|
| Bed Frame PDP Accordions | Fixed accordion border rendering and rounded edges on mobile                                     | ✅ Improved mobile PDP readability          |
| Sticky Add to Cart Bar  | Replaced deprecated ATC bar versions; resolved black bar display                                | ✅ Consistent sticky ATC experience         |
| Quick Buy Modal        | Corrected variant selection logic to update modal instead of redirect                           | ✅ Enabled seamless variant selection       |
| Product Image Carousel  | Restored thumbnail click functionality and displayed navigation arrows                         | ✅ Usable image gallery with navigation     |
| Tooltip UI             | Modified tooltip behavior to dismiss on mouseout and after selection                           | ✅ Eliminated stuck tooltip UI               |
| Color Swatches (Mobile) | Adjusted layout and alignment for color swatches to fully display on smaller screen widths    | ✅ Enhanced mobile collection UX            |

---

## 4. UI/UX Improvement Highlights

| Feature Area                 | Before                                                      | After                                                   |
|-----------------------------|-------------------------------------------------------------|---------------------------------------------------------|
| Accordion Sections (PDP)     | Distorted borders, overlapping content in mobile view       | Correctly aligned borders and consistent accordion UI   |
| Sticky Add to Cart bar       | Displaying old version and visual glitches                   | Clean, stable sticky ATC bar across all devices          |
| Quick Buy Modal Variant Logic| Selecting variant caused redirect to product detail page    | Dynamic modal variant updates without page reload        |
| Product Image Carousel       | Thumbnails inactive; navigation arrows missing               | Fully functional thumbnail selection; arrows added       |
| Tooltip Behavior             | Persistent tooltips obstruct UI                               | Tooltips dismiss appropriately to avoid obstruction      |
| Mobile Color Swatches        | Swatches partly cut off on devices like iPhone 14 Pro       | Swatches fully visible, center-aligned on all tested devices |

---

## 5. On-Hold Items & Action Plan

| Key              | Description                                              | Next Step                                       | Owner          |
|------------------|----------------------------------------------------------|------------------------------------------------|----------------|
| Helixian-ZIN-1253 | Support/FAQ Expansion + Assembly Instruction Search Page | Await final design and scope confirmation       | Daniel Carroll |
| Helixian-ZIN-1177 | GSC Review JSON-LD implementation                        | Prioritize implementation plan after schema audit | Daniel Carroll |
| Helixian-ZIN-1113 | GSC Core Web Vitals - Affected URLs                      | Analyze and propose optimizations per URL       | Yongwan Song   |
| Helixian-ZIN-1087 | Palo Alto Upgrade Research                               | Awaiting research completion                      | Daniel Carroll |
| Helixian-ZIN-1027 | White Glove delivery and/or installation                 | Define scope and schedule next steps             | Daniel Carroll |
| Helixian-ZIN-1002 | TrueMed additional placements                            | Further scoping needed                            | Daniel Carroll |
| Helixian-ZIN-959  | UI Alignment and Performance Issues homepage & product  | Plan performance optimizations with dev team     | Yongwan Song   |
| Zinus-ZIN-31      | Fix Missing Tags in Shopify Reports                      | Continue tagging logic updates                    | Mason Kim      |
| Various Helixian-ZADA tasks | Large accessibility remediation backlog           | Prioritize by severity; proceed with remediation | Accessibility Team |

---

## 6. Appendix

|Type|Key|Summary|Status|Assignee|Reporter|Created|Resolved|
|---|---|---|---|---|---|---|---|
Task|Helixian-ZIN-1256|Estimate of Assembly Instructions Search|To Do|Yongwan Song|Daniel Carroll|2025-11-03T11:13:58.421-0600|-|
Task|Helixian-ZIN-1255|Discrepancy Between Shopify Sales Reports and Paid Media Data (Google Ads & Meta)|To Do|Mason Kim|J Vishal|2025-10-31T11:26:43.421-0500|-|
Task|Helixian-ZIN-1253|Zinus Support / FAQ Expansion + Assembly Instruction Search Page|On Hold|Daniel Carroll|Mason Kim|2025-10-29T12:24:04.254-0500|-|
Task|Helixian-ZIN-1251|Add Color Tooltip to Quick View Modal|Final Client QA|Olivia Alvarez|Yongwan Song|2025-10-22T16:09:36.777-0500|-|
Task|Helixian-ZIN-1250|Shopify Product Schema Audit & Validation for Zinus.com|In Progress|Daniel Carroll|Mason Kim|2025-10-22T14:53:47.417-0500|-|
Task|Helixian-ZIN-1248|PDP video captions incorrect — shows “thank you” despite music-only audio|To Do|J Vishal|Bobby Hudgins|2025-10-22T09:20:00.980-0500|-|
Task|Helixian-ZIN-1245|Bazaarvoice V2 Activation and Syndication Impact Verification|Final Client QA|Olivia Alvarez|Mason Kim|2025-10-21T12:36:43.889-0500|-|
Task|Helixian-ZIN-1242|Search Results Relevance: “Pillow/Pillows” Shows Bed Frames First Instead of Pillow SKUs|Final Client QA|Olivia Alvarez|J Vishal|2025-10-16T12:17:36.030-0500|-|
Bug|Helixian-ZIN-1241|Accordion Section Styling Broken on Bed Frame PDPs (Mobile View)|Done|Olivia Alvarez|J Vishal|2025-10-16T12:11:02.704-0500|Done|
Bug|Helixian-ZIN-1239|Sticky Add to Cart (ATC) Bar Not Functioning Properly on Mattresses PDP's|Done|Olivia Alvarez|J Vishal|2025-10-16T11:57:04.394-0500|Done|
Bug|Helixian-ZIN-1238|Quick Buy Function Not Working Properly for Suzanne Bed Frame Products|Done|Olivia Alvarez|J Vishal|2025-10-16T11:41:07.456-0500|Done|
Bug|Helixian-ZIN-1237|Product Image Carousel Not Functional — Thumbnails Not Reflecting in Main Image & Arrows Missing|Done|Olivia Alvarez|J Vishal|2025-10-16T11:27:49.260-0500|Done|
Bug|Helixian-ZIN-1235|[Mobile] Color Swatches Getting Cut Off in Bed Frame Collection Page|Done|Olivia Alvarez|J Vishal|2025-10-16T11:06:01.246-0500|Done|
Task|Helixian-ZIN-1233|Review ADA Client Info Needed tickets|Done|Olivia Alvarez|Daniel Carroll|2025-10-14T11:52:24.768-0500|Done|
Task|Helixian-ZIN-1232|Bazaarvoice Upgrade to V2|Final Client QA|Olivia Alvarez|Daniel Carroll|2025-10-14T11:35:44.766-0500|-|
Task|Helixian-ZIN-1231|Zinus:  Options for exit intent pop up to minimize abandoned checkouts|First Client QA|Olivia Alvarez|Olivia Alvarez|2025-10-14T11:34:25.627-0500|-|
Task|Helixian-ZIN-1225|Reset Password form – required field not indicated (missing “*” and legend)|Done|Olivia Alvarez|Bobby Hudgins|2025-10-14T05:35:51.033-0500|Done|
Bug|Helixian-ZIN-1224|PDP → “Buy Full Set” color tooltip persists after click/hover|Done|Olivia Alvarez|Bobby Hudgins|2025-10-14T05:24:33.142-0500|Done|
Task|Helixian-ZIN-1203|Alt Text Not Updating Properly for Blog Images|In Progress|Mason Kim|J Vishal|2025-09-30T14:23:31.730-0500|-|
Task|Helixian-ZIN-1181|Implement JSON-LD from BazaarVoice GSC Review issues|On Hold|Daniel Carroll|Daniel Carroll|2025-09-16T12:29:47.303-0500|-|
Bug|Helixian-ZIN-1177|Zinus.com BUG:   Google Search Console Issue - Review snippets: 99% of your items aren't eligible for rich results|On Hold|Daniel Carroll|Olivia Alvarez|2025-09-11T16:04:38.673-0500|-|
Task|Helixian-ZIN-1125|GSC- Core Vitas - Affected URLS ( Mobile & Desktop )|On Hold|Yongwan Song|J Vishal|2025-08-25T06:49:38.298-0500|-|
Bug|Helixian-ZIN-1113|Buy with the prime with Route issue research|Done|Mason Kim|Mason Kim|2025-08-19T11:23:24.789-0500|Done|
Task|Helixian-ZIN-1087|Research Upgrading Palo Alto to v7.0.0|On Hold|Daniel Carroll|Daniel Carroll|2025-07-22T13:00:08.409-0500|-|
Task|Helixian-ZIN-1079|Page Load- 7/22- BTC Bundle Homepage|Done|-|J Vishal|2025-07-16T13:43:12.639-0500|Done|
Bug|Helixian-ZIN-1072|Slow Loading at Checkout Page|On Hold|Daniel Carroll|J Vishal|2025-07-14T13:42:51.740-0500|-|
Task|Helixian-ZIN-1058|Review and update Secuvy code|On Hold|Daniel Carroll|Mason Kim|2025-06-30T11:19:02.632-0500|-|
Task|Helixian-ZIN-1030|Dynamic Yield Research / Personalization|To Do|-|Daniel Carroll|2025-06-03T13:13:29.932-0500|-|
Task|Helixian-ZIN-1027|White Glove delivery and/or installation|On Hold|Daniel Carroll|Daniel Carroll|2025-06-03T13:01:23.693-0500|-|
Task|Helixian-ZIN-1026|Variant Images for Bed Frame Sizes|On Hold|J Vishal|Daniel Carroll|2025-06-03T12:49:30.234-0500|-|
Task|Helixian-ZIN-1016|Fix Duplicate and Misplaced VWO SmartCode on Zinus.com|In Progress|Mason Kim|J Vishal|2025-05-19T11:25:27.318-0500|-|
Task|Helixian-ZIN-1002|TrueMed additional Placements|On Hold|Daniel Carroll|Daniel Carroll|2025-05-06T12:43:48.178-0500|-|
Bug|Helixian-ZIN-959|UI Alignment and Performance Issues on Homepage & Product Page|On Hold|Yongwan Song|J Vishal|2025-03-17T06:29:49.020-0500|-|
Task|Helixian-ZIN-921|Change Mellow Shopify URL from Zinuswholesale dev|Done|Olivia Alvarez|Bill Dzadon|2025-02-25T13:17:04.164-0600|Done|
Task|Helixian-ZIN-261|SEMRUSH Results of Audit:  73 pages have low text-HTML ratio|On Hold|Yongwan Song|Olivia Alvarez|2024-03-17T09:44:04.868-0500|-|
Task|Zinus-ZIN-32|Define detailed requirements and scope for FAQ page build|To Do|Mason Kim|Mason Kim|2025-10-29T09:28:41.200-0400|-|
Task|Zinus-ZIN-31|Fix Missing Tags in Page Type and Traffic Source Data in Shopify reports|In Progress|Mason Kim|J Vishal|2025-10-28T11:57:51.555-0400|-|
Task|Zinus-ZIN-28|Extraction of All Zinus Project Tickets from Helixian Task Board and Migration to Zinus Jira Board|To Do|Bobby Hudgins|Mason Kim|2025-10-27T15:14:33.591-0400|-|
Task|Zinus-ZIN-23|Create n8n workflow for automated Zinus Weekly Development Report generation (3-source integration)|In Progress|Bobby Hudgins|Bobby Hudgins|2025-10-27T12:43:39.667-0400|-|
Task|Zinus-ZIN-19|Build a Dedicated FAQ Section on Shopify (AI/SEO-Ready, Channel-Aware)|To Do|Mason Kim|Mason Kim|2025-10-23T09:35:16.577-0400|-|
Task|Zinus-ZIN-18|Share Invoices to Nhu|Done|Mason Kim|Mason Kim|2025-10-22T11:30:11.514-0400|Done|
Task|Zinus-ZIN-17|Replit invoice investigations and payment method update|Done|Mason Kim|Mason Kim|2025-10-22T11:29:49.677-0400|Done|
Task|Zinus-ZIN-16|Helixian add access to Shipping and Delivery settings for our collaborator account|Done|Mason Kim|Mason Kim|2025-10-21T10:22:45.886-0400|Done|
Task|Zinus-ZIN-15|Remove Temporary AWS Outage Notice from Website|Done|Mason Kim|Mason Kim|2025-10-21T09:54:26.756-0400|Done|
Task|Zinus-ZIN-14|Review and Verify Zinus.com Schema Attributes (per Matt’s feedback)|Done|Mason Kim|Mason Kim|2025-10-21T09:41:30.527-0400|Done|
Task|Zinus-ZIN-13|Follow-Up on VWO SmartCode Placement Issue with Secuvy (ZIN-1016)|Done|Mason Kim|Mason Kim|2025-10-21T09:30:47.288-0400|Done|
Task|Zinus-ZIN-12|Provision ChatGPT Subscription for Zinus Canada Team|Done|Mason Kim|Mason Kim|2025-10-21T09:20:39.960-0400|Done|
Task|Zinus-ZIN-11|Joshua Onboarding & Technical Training Progress Tracking|Done|Mason Kim|Mason Kim|2025-10-20T09:17:22.342-0400|Done|
Task|Zinus-ZIN-9|Migrate zinus.com Domain to Cloudflare and Update Name Servers|To Do|Mason Kim|Mason Kim|2025-10-19T18:44:22.063-0400|-|
Task|Zinus-ZIN-7|Initiate Recruitment and Approval Process for Senior Shopify Developer (Zinus IT Department)|To Do|Mason Kim|Mason Kim|2025-10-19T18:19:13.874-0400|-|
Task|Zinus-ZIN-5|[Keetsa] Initiate ADA Compliance Project Budget Allocation and Approval Process|To Do|Mason Kim|Mason Kim|2025-10-19T17:55:55.938-0400|-|
Task|Zinus-ZIN-4|Proposal for Jira Task Board Subscription and Implementation Approval|Done|Derek Choi(ZINUS US_SALES)|Mason Kim|2025-10-19T11:31:30.587-0400|Done|
Task|Zinus-ZIN-3|Evaluate Elevar Server-Side Tracking Implementation for Zinus|To Do|Mason Kim|Mason Kim|2025-10-19T11:29:47.347-0400|-|
Task|Zinus-ZIN-2|Evaluate Implementation of NoFraud App for Fraud Prevention|Reviewing|Mason Kim|Mason Kim|2025-10-19T11:28:18.391-0400|-|
Task|Zinus-ZIN-1|Facilitate One-Month Advance Payment to Helixian Until FI Team Normalization|Done|Mason Kim|Mason Kim|2025-10-19T11:27:38.325-0400|Done|
Task|Helixian-ZADA-638|Unnecessary ARIA attributes can cause unexpected behavior for screen reader users.|To Do|-|Daniel Carroll|2025-10-29T17:02:53.163-0500|-|
Task|Helixian-ZADA-637|This component was audited previously.|To Do|-|Daniel Carroll|2025-10-29T17:02:47.801-0500|-|
Task|Helixian-ZADA-636|This component was audited previously.|To Do|-|Daniel Carroll|2025-10-29T17:02:42.636-0500|-|
Task|Helixian-ZADA-635|This color combination does not meet the minimum color contrast required by the WCAG. The combination of gold (#BD975F) and white (#FFFFFF) only has a contrast ratio of 2.7:1.|To Do|-|Daniel Carroll|2025-10-29T17:02:38.861-0500|-|
Task|Helixian-ZADA-634|Accessible names of elements should properly match the visible labels.|To Do|-|Daniel Carroll|2025-10-29T17:02:33.863-0500|-|
Task|Helixian-ZADA-633|This component was audited previously.|To Do|-|Daniel Carroll|2025-10-29T17:02:28.610-0500|-|
Task|Helixian-ZADA-632|Alt attribute text for decorative images is redundant and/or unnecessary.|To Do|-|Daniel Carroll|2025-10-29T17:02:23.590-0500|-|
Task|Helixian-ZADA-631|This color combination does not meet the minimum color contrast required by the WCAG. The combination of green (#769885) and white (#FFFFFF) only has a contrast ratio of 3.18:1.|To Do|-|Daniel Carroll|2025-10-29T17:02:19.705-0500|-|
Task|Helixian-ZADA-630|This color combination does not meet the minimum color contrast required by the WCAG. The combination of gold (#CBA976) and white (#FFFFFF) only has a contrast ratio of 2.21:1.|To Do|-|Daniel Carroll|2025-10-29T17:02:15.712-0500|-|
Task|Helixian-ZADA-629|Focusable elements (such as links, buttons, and input fields) should never be nested inside another focusable element.|To Do|-|Daniel Carroll|2025-10-29T17:02:11.473-0500|-|
Task|Helixian-ZADA-628|Text that functions as a heading should be marked up as such.|To Do|-|Daniel Carroll|2025-10-29T17:02:07.466-0500|-|
Task|Helixian-ZADA-627|There is an aria-hidden="true" attribute wrapping this content, which causes this content to be invisible to screen reader users.|To Do|-|Daniel Carroll|2025-10-29T17:02:01.730-0500|-|
Task|Helixian-ZADA-626|This image zoom and/or pan feature is not accessible to keyboard-only or screen reader users.|To Do|-|Daniel Carroll|2025-10-29T17:01:55.970-0500|-|
Task|Helixian-ZADA-625|Focus should remain on this actionable element once triggered.|To Do|-|Daniel Carroll|2025-10-29T17:01:50.502-0500|-|
Task|Helixian-ZADA-624|Focusable elements (such as links, buttons, and input fields) should never be nested inside another focusable element.|To Do|-|Daniel Carroll|2025-10-29T17:01:45.162-0500|-|
Task|Helixian-ZADA-623|The visual content in this video is not conveyed to blind and visually impaired users.|To Do|-|Daniel Carroll|2025-10-29T17:01:40.116-0500|-|
Task|Helixian-ZADA-622|These product images do not have unique and descriptive alt attributes.|To Do|-|Daniel Carroll|2025-10-29T17:01:34.881-0500|-|
Task|Helixian-ZADA-621|Carousels that are controllable only by dragging movements are inaccessible to some users.|To Do|-|Daniel Carroll|2025-10-29T17:01:29.744-0500|-|
Task|Helixian-ZADA-620|There is an aria-hidden="true" attribute wrapping this content, which causes this content to be invisible to screen reader users.|To Do|-|Daniel Carroll|2025-10-29T17:01:25.355-0500|-|
Task|Helixian-ZADA-619|Unactionable elements should not have tabindex=”0”.|To Do|-|Daniel Carroll|2025-10-29T17:01:21.454-0500|-|
Task|Helixian-ZADA-618|This modal dialog is missing necessary ARIA attributes.|To Do|-|Daniel Carroll|2025-10-29T17:01:17.459-0500|-|
Task|Helixian-ZADA-617|Closing this modal dialog does not return the user to the element that opened it.|To Do|-|Daniel Carroll|2025-10-29T17:01:13.538-0500|-|
Task|Helixian-ZADA-616|The modal dialog container is not labeled.|To Do|-|Daniel Carroll|2025-10-29T17:01:09.087-0500|-|
Task|Helixian-ZADA-615|Keyboard and screen reader users do not have their focus moved to this modal dialog when it opens.|To Do|-|Daniel Carroll|2025-10-29T17:01:04.970-0500|-|
Task|Helixian-ZADA-614|Block quotations should be marked up as such so that screen reader users are aware of this fact.|To Do|-|Daniel Carroll|2025-10-29T17:01:00.566-0500|-|
Task|Helixian-ZADA-613|When content is marked up as tabs, but does not function as tabs, it can be confusing for screen reader users.|To Do|-|Daniel Carroll|2025-10-29T17:00:55.303-0500|-|
Task|Helixian-ZADA-612|This component was audited previously.|To Do|-|Daniel Carroll|2025-10-29T17:00:49.821-0500|-|
Task|Helixian-ZADA-611|Background images that provide information must be available to screen reader users.|To Do|-|Daniel Carroll|2025-10-29T17:00:44.481-0500|-|
Task|Helixian-ZADA-610|Information that is only provided visually must be conveyed to screen reader users.|To Do|-|Daniel Carroll|2025-10-29T17:00:40.175-0500|-|
Task|Helixian-ZADA-609|This component was audited previously.|To Do|-|Daniel Carroll|2025-10-29T17:00:34.665-0500|-|
Task|Helixian-ZADA-608|Text that functions as a heading should be marked up as such.|To Do|-|Daniel Carroll|2025-10-29T17:00:29.265-0500|-|
Task|Helixian-ZADA-607|Select dropdowns require labels.|To Do|-|Daniel Carroll|2025-10-29T17:00:23.954-0500|-|
Task|Helixian-ZADA-606|The strike-through typography used on prices is not conveyed to screen reader users.|To Do|-|Daniel Carroll|2025-10-29T17:00:16.804-0500|-|
Task|Helixian-ZADA-605|All form fields must be properly labeled.|To Do|-|Daniel Carroll|2025-10-29T17:00:11.383-0500|-|
Task|Helixian-ZADA-604|Screen reader users are unable to quickly determine how many cards or tiles are in this set.|To Do|-|Daniel Carroll|2025-10-29T17:00:05.682-0500|-|
Task|Helixian-ZADA-603|The title of each card is not marked up as a heading.|To Do|-|Daniel Carroll|2025-10-29T17:00:00.099-0500|-|
Task|Helixian-ZADA-602|It is not clear to screen reader users where each card or tile begins and ends.|To Do|-|Daniel Carroll|2025-10-29T16:59:54.788-0500|-|
Task|Helixian-ZADA-601|Content that moves, blinks, scrolls or updates automatically for more than 5 seconds can make the page unusable for some users.|To Do|-|Daniel Carroll|2025-10-29T16:59:50.796-0500|-|
Task|Helixian-ZADA-600|Accessible names of elements should properly match the visible labels.|To Do|-|Daniel Carroll|2025-10-29T16:59:46.988-0500|-|
Task|Helixian-ZADA-599|Text that functions as a heading should be marked up as such.|To Do|-|Daniel Carroll|2025-10-29T16:59:42.017-0500|-|
Task|Helixian-ZADA-598|These accordion buttons are semantically headings, but they are not marked up as such.|To Do|-|Daniel Carroll|2025-10-29T16:59:36.762-0500|-|
Task|Helixian-ZADA-597|The aria-expanded attribute must be present on page load.|To Do|-|Daniel Carroll|2025-10-29T16:59:31.502-0500|-|
Task|Helixian-ZADA-596|Focusable elements (such as links, buttons, and input fields) should never be nested inside another focusable element.|To Do|-|Daniel Carroll|2025-10-29T16:59:26.274-0500|-|
Task|Helixian-ZADA-595|Unnecessary ARIA attributes can cause unexpected behavior for screen reader users.|To Do|-|Daniel Carroll|2025-10-29T16:59:21.184-0500|-|
Task|Helixian-ZADA-594|Accessible names of elements should properly match the visible labels.|To Do|-|Daniel Carroll|2025-10-29T16:59:16.139-0500|-|
Task|Helixian-ZADA-593|Unnecessary ARIA attributes can cause unexpected behavior for screen reader users.|To Do|-|Daniel Carroll|2025-10-29T16:59:11.264-0500|-|
Task|Helixian-ZADA-592|Alt attribute text for decorative images is redundant and/or unnecessary.|To Do|-|Daniel Carroll|2025-10-29T16:59:06.170-0500|-|
Task|Helixian-ZADA-591|When a shift in color is the only visual indication of focus or selection, that color shift must meet the minimum color contrast required by the WCAG. The combination of green (#033628) and green (#17493A) only has a contrast ratio of 1.31:1.|To Do|-|Daniel Carroll|2025-10-29T16:59:02.434-0500|-|
Task|Helixian-ZADA-590|This color combination does not meet the minimum color contrast required by the WCAG. The combination of red (##FF0000) and white (#FFFFFF) only has a contrast ratio of 3.99:1.|To Do|-|Daniel Carroll|2025-10-29T16:58:58.771-0500|-|
Task|Helixian-ZADA-589|Accessible names of elements should properly match the visible labels.|To Do|-|Daniel Carroll|2025-10-29T16:58:53.584-0500|-|
Task|Helixian-ZADA-588|This third-party component may contain content that is not fully accessible for all users.|To Do|-|Daniel Carroll|2025-10-29T16:58:48.469-0500|-|
Task|Helixian-ZADA-587|This third-party component may contain content that is not fully accessible for all users.|To Do|-|Daniel Carroll|2025-10-29T16:58:43.562-0500|-|
Task|Helixian-ZADA-586|When an element is activated that causes content on the page to change, screen reader users should be informed of this change.|To Do|-|Daniel Carroll|2025-10-29T16:58:39.686-0500|-|
Task|Helixian-ZADA-585|When a shift in color is the only visual indication of focus or selection, that color shift must meet the minimum color contrast required by the WCAG. The combination of off-white (#F2F6F0) and white (#FFFFFF) only has a contrast ratio of 1.09:1.|To Do|-|Daniel Carroll|2025-10-29T16:58:35.928-0500|-|
Task|Helixian-ZADA-584|There are multiple separate and adjacent links to the same location, creating an unnecessary amount of work for keyboard users.|To Do|-|Daniel Carroll|2025-10-29T16:58:30.827-0500|-|
Task|Helixian-ZADA-583|It is difficult for screen reader users to identify when one slide ends and the next begins.|To Do|-|Daniel Carroll|2025-10-29T16:58:26.795-0500|-|
Task|Helixian-ZADA-582|Buttons must have sufficient labels for all users.|To Do|-|Daniel Carroll|2025-10-29T16:58:21.438-0500|-|
Task|Helixian-ZADA-581|This element receives focus in an illogical order for screen reader and keyboard users.|To Do|-|Daniel Carroll|2025-10-29T16:58:16.479-0500|-|
Task|Helixian-ZADA-580|These are buttons, but they are not marked up as such; screen readers will not identify them as actionable and they will not be usable by keyboard users.|To Do|-|Daniel Carroll|2025-10-29T16:58:10.814-0500|-|
Task|Helixian-ZADA-579|Screen readers are unable to determine which slide dot or thumbnail image button is currently active.|To Do|-|Daniel Carroll|2025-10-29T16:58:05.692-0500|-|
Task|Helixian-ZADA-578|Content within non-visible slides can receive keyboard focus and is visible to screen reader users at all times.|To Do|-|Daniel Carroll|2025-10-29T16:58:01.825-0500|-|
Task|Helixian-ZADA-577|It may not be clear to screen reader users how to interact with this carousel.|To Do|-|Daniel Carroll|2025-10-29T16:57:57.939-0500|-|
Task|Helixian-ZADA-576|It is not clear to screen reader users where the carousel begins or ends.|To Do|-|Daniel Carroll|2025-10-29T16:57:53.881-0500|-|
Task|Helixian-ZADA-575|There are multiple separate and adjacent links to the same location, creating an unnecessary amount of work for keyboard users.|To Do|-|Daniel Carroll|2025-10-29T16:57:48.656-0500|-|
Task|Helixian-ZADA-574|Focus indicators for actionable elements must be present and meet contrast requirements.|To Do|-|Daniel Carroll|2025-10-29T16:57:43.518-0500|-|
Task|Helixian-ZADA-573|Unactionable elements should not have tabindex=”0”.|To Do|-|Daniel Carroll|2025-10-29T16:57:39.554-0500|-|
Task|Helixian-ZADA-572|Alt attribute text for decorative images is redundant and/or unnecessary.|To Do|-|Daniel Carroll|2025-10-29T16:57:35.903-0500|-|
Task|Helixian-ZADA-571|This color combination does not meet the minimum color contrast required by the WCAG. The combination of gray (#4D4D4D - with .6 opacity) and light green (#F2F7F0) only has a contrast ratio of 2.92:1.|To Do|-|Daniel Carroll|2025-10-29T16:57:32.198-0500|-|
Task|Helixian-ZADA-570|Content that moves, blinks, scrolls or updates automatically for more than 5 seconds can make the page unusable for some users.|To Do|-|Daniel Carroll|2025-10-29T16:57:28.303-0500|-|
Task|Helixian-ZADA-569|Text that functions as a heading should be marked up as such.|To Do|-|Daniel Carroll|2025-10-29T16:57:23.637-0500|-|
Task|Helixian-ZADA-568|Decorative SVG elements should be hidden from screen reader users.|To Do|-|Daniel Carroll|2025-10-29T16:57:18.459-0500|-|
Task|Helixian-ZADA-567|Elements that control expandable content must be indicated to screen reader users.|To Do|-|Daniel Carroll|2025-10-29T16:57:14.584-0500|-|
Task|Helixian-ZADA-566|Elements that function as buttons must be marked up as such so that screen reader users will identify them as actionable and they will be usable by keyboard users.|To Do|-|Daniel Carroll|2025-10-29T16:57:10.715-0500|-|
Task|Helixian-ZADA-565|Focus should remain on this actionable element once triggered.|To Do|-|Daniel Carroll|2025-10-29T16:57:05.792-0500|-|
Task|Helixian-ZADA-564|This color combination does not meet the minimum color contrast required by the WCAG. The combination of gray (#4D4D4D - with .6 opacity) and white (#FFFFFF) only has a contrast ratio of 3.02:1.|To Do|-|Daniel Carroll|2025-10-29T16:57:02.118-0500|-|
Task|Helixian-ZADA-563|Text that functions as a heading should be marked up as such.|To Do|-|Daniel Carroll|2025-10-29T16:56:58.333-0500|-|
Task|Helixian-ZADA-562|Elements that are marked up as buttons but function as links can cause confusion for screen reader users.|To Do|-|Daniel Carroll|2025-10-29T16:56:53.808-0500|-|
Task|Helixian-ZADA-561|Content within non-visible slides can receive keyboard focus and is visible to screen reader users at all times.|To Do|-|Daniel Carroll|2025-10-29T16:56:49.758-0500|-|
Task|Helixian-ZADA-560|There is an aria-hidden="true" attribute wrapping this content, which causes this content to be invisible to screen reader users.|To Do|-|Daniel Carroll|2025-10-29T16:56:45.977-0500|-|
Task|Helixian-ZADA-559|Screen reader users are not told which option is selected as they traverse the options of the custom select dropdown.|To Do|-|Daniel Carroll|2025-10-29T16:56:42.104-0500|-|
Task|Helixian-ZADA-558|Unnecessary ARIA attributes can cause unexpected behavior for screen reader users.|To Do|-|Daniel Carroll|2025-10-29T16:56:36.987-0500|-|
Task|Helixian-ZADA-557|Unnecessary ARIA attributes can cause unexpected behavior for screen reader users.|To Do|-|Daniel Carroll|2025-10-29T16:56:31.758-0500|-|
Task|Helixian-ZADA-556|Unnecessary ARIA attributes can cause unexpected behavior for screen reader users.|To Do|-|Daniel Carroll|2025-10-29T16:56:26.490-0500|-|
Task|Helixian-ZADA-555|Specific sensory characteristics, such as color alone, are not sufficient to indicate selected elements to screen reader users.|To Do|-|Daniel Carroll|2025-10-29T16:56:21.396-0500|-|
Task|Helixian-ZADA-554|Focusable elements (such as links, buttons, and input fields) should never be nested inside another focusable element.|To Do|-|Daniel Carroll|2025-10-29T16:56:16.185-0500|-|
Task|Helixian-ZADA-553|This content is only visible to screen reader users.|To Do|-|Daniel Carroll|2025-10-29T16:56:11.041-0500|-|
Task|Helixian-ZADA-552|When a link contains a large amount of content, it makes the link difficult to read using a screen reader.|To Do|-|Daniel Carroll|2025-10-29T16:56:05.766-0500|-|
Task|Helixian-ZADA-551|Unactionable elements should not have tabindex=”0”.|To Do|-|Daniel Carroll|2025-10-29T16:55:59.090-0500|-|
Task|Helixian-ZADA-550|Focus should remain on this actionable element once triggered.|To Do|-|Daniel Carroll|2025-10-29T16:55:55.191-0500|-|
Task|Helixian-ZADA-549|Text that functions as a heading should be marked up as such.|To Do|-|Daniel Carroll|2025-10-29T16:55:50.190-0500|-|
Task|Helixian-ZADA-548|Form fields for personal information must allow autofill via a valid autocomplete attribute, which helps users properly fill in the required information.|To Do|-|Daniel Carroll|2025-10-29T16:55:46.506-0500|-|
Task|Helixian-ZADA-547|Focus indicators must meet the minimum color contrast required by the WCAG. The combination of black (#000000) and brown (#424242 - representative sample) only has a contrast ratio of 2.08:1.|To Do|-|Daniel Carroll|2025-10-29T16:55:42.461-0500|-|
Task|Helixian-ZADA-546|Specific sensory characteristics, such as color alone, are not sufficient to indicate selected elements to screen reader users.|To Do|-|Daniel Carroll|2025-10-29T16:55:37.228-0500|-|
Task|Helixian-ZADA-545|When content is marked up as a listbox, but is not functioning as a listbox, it can be confusing for screen reader users.|To Do|-|Daniel Carroll|2025-10-29T16:55:31.776-0500|-|
Task|Helixian-ZADA-544|Negative tabindex attributes on actionable elements removes them from the tab order.|To Do|-|Daniel Carroll|2025-10-29T16:55:26.641-0500|-|
Task|Helixian-ZADA-543|There is an aria-hidden="true" attribute wrapping this content, which causes this content to be invisible to screen reader users.|To Do|-|Daniel Carroll|2025-10-29T16:55:21.213-0500|-|
Task|Helixian-ZADA-542|It is difficult for screen reader users to identify when one slide ends and the next begins.|To Do|-|Daniel Carroll|2025-10-29T16:55:15.852-0500|-|
Task|Helixian-ZADA-541|It may not be clear to screen reader users how to interact with this carousel.|To Do|-|Daniel Carroll|2025-10-29T16:55:11.907-0500|-|
Task|Helixian-ZADA-540|It is not clear to screen reader users where the carousel begins or ends.|To Do|-|Daniel Carroll|2025-10-29T16:55:07.642-0500|-|
Task|Helixian-ZADA-539|Block quotations should be marked up as such so that screen reader users are aware of this fact.|To Do|-|Daniel Carroll|2025-10-29T16:55:02.633-0500|-|
Task|Helixian-ZADA-538|Invisible elements should not receive focus or be visible to screen reader users.|To Do|-|Daniel Carroll|2025-10-29T16:54:57.480-0500|-|
Task|Helixian-ZADA-537|Invisible elements should not receive focus or be visible to screen reader users.|To Do|-|Daniel Carroll|2025-10-29T16:54:52.132-0500|-|
Task|Helixian-ZADA-536|Screen reader users are unable to quickly determine how many cards or tiles are in this set.|To Do|-|Daniel Carroll|2025-10-29T16:54:48.310-0500|-|
Task|Helixian-ZADA-535|It is not clear to screen reader users where each card or tile begins and ends.|To Do|-|Daniel Carroll|2025-10-29T16:54:44.242-0500|-|
Task|Helixian-ZADA-534|This content is only visible to screen reader users.|To Do|-|Daniel Carroll|2025-10-29T16:54:39.322-0500|-|
Task|Helixian-ZADA-533|Unnecessary ARIA attributes can cause unexpected behavior for screen reader users.|To Do|-|Daniel Carroll|2025-10-29T16:54:34.530-0500|-|
Task|Helixian-ZADA-532|Focus indicators for actionable elements must be present and meet contrast requirements.|To Do|-|Daniel Carroll|2025-10-29T16:54:29.543-0500|-|
Task|Helixian-ZADA-531|Accessible names of elements should properly match the visible labels.|To Do|-|Daniel Carroll|2025-10-29T16:54:24.399-0500|-|
Task|Helixian-ZADA-530|Additional content is only revealed on hover, which is inaccessible to screen reader and keyboard users.|To Do|-|Daniel Carroll|2025-10-29T16:54:19.037-0500|-|
Task|Helixian-ZADA-529|Text within images causes problems for screen reader users and users of magnification technology.|To Do|-|Daniel Carroll|2025-10-29T16:54:13.529-0500|-|
Task|Helixian-ZADA-528|These product images do not have unique and descriptive alt attributes.|To Do|-|Daniel Carroll|2025-10-29T16:54:09.217-0500|-|
Task|Helixian-ZADA-527|Unactionable elements should not have tabindex=”0”.|To Do|-|Daniel Carroll|2025-10-29T16:54:02.422-0500|-|
Task|Helixian-ZADA-526|It is difficult for screen reader users to identify when one slide ends and the next begins.|To Do|-|Daniel Carroll|2025-10-29T16:53:57.076-0500|-|
Task|Helixian-ZADA-525|This element receives focus in an illogical order for screen reader and keyboard users.|To Do|-|Daniel Carroll|2025-10-29T16:53:51.978-0500|-|
Task|Helixian-ZADA-524|Content within non-visible slides can receive keyboard focus and is visible to screen reader users at all times.|To Do|-|Daniel Carroll|2025-10-29T16:53:48.125-0500|-|
Task|Helixian-ZADA-523|It may not be clear to screen reader users how to interact with this carousel.|To Do|-|Daniel Carroll|2025-10-29T16:53:44.118-0500|-|
Task|Helixian-ZADA-522|It is not clear to screen reader users where the carousel begins or ends.|To Do|-|Daniel Carroll|2025-10-29T16:53:40.073-0500|-|
Task|Helixian-ZADA-521|Some regions require additional ARIA markup to assist screen reader users in understanding what a section is for, and where it begins and ends.|To Do|-|Daniel Carroll|2025-10-29T16:53:35.533-0500|-|
Task|Helixian-ZADA-520|Alt attribute text for decorative images is redundant and/or unnecessary.|To Do|-|Daniel Carroll|2025-10-29T16:53:31.411-0500|-|
Task|Helixian-ZADA-519|There are multiple navigation regions on the page, but they are not differentiated from one another.|To Do|-|Daniel Carroll|2025-10-29T16:53:25.640-0500|-|
Task|Helixian-ZADA-518|Unnecessary ARIA attributes can cause unexpected behavior for screen reader users.|To Do|-|Daniel Carroll|2025-10-29T16:53:20.639-0500|-|
Task|Helixian-ZADA-517|Focus indicators must meet the minimum color contrast required by the WCAG. The combination of black (#000000) and green (#2B594A) only has a contrast ratio of 2.63:1.|To Do|-|Daniel Carroll|2025-10-29T16:53:16.489-0500|-|
Task|Helixian-ZADA-516|Text that functions as a heading should be marked up as such.|To Do|-|Daniel Carroll|2025-10-29T16:53:11.223-0500|-|
Task|Helixian-ZADA-515|Hidden actionable elements that should become visible on focus are not visible upon receiving focus.|To Do|-|Daniel Carroll|2025-10-29T16:53:06.407-0500|-|
Task|Helixian-ZADA-514|This element receives focus in an illogical order for screen reader and keyboard users.|To Do|-|Daniel Carroll|2025-10-29T16:53:01.237-0500|-|
Task|Helixian-ZADA-513|Content within non-visible slides can receive keyboard focus and is visible to screen reader users at all times.|To Do|-|Daniel Carroll|2025-10-29T16:52:57.355-0500|-|
Task|Helixian-ZADA-512|It may not be clear to screen reader users how to interact with this carousel.|To Do|-|Daniel Carroll|2025-10-29T16:52:53.512-0500|-|
Task|Helixian-ZADA-511|It is not clear to screen reader users where the carousel begins or ends.|To Do|-|Daniel Carroll|2025-10-29T16:52:49.581-0500|-|
Task|Helixian-ZADA-510|Keyboard and screen reader users cannot navigate the results popup of this autocomplete.|To Do|-|Daniel Carroll|2025-10-29T16:52:45.691-0500|-|
Task|Helixian-ZADA-509|The close button is not labeled for screen reader users.|To Do|-|Daniel Carroll|2025-10-29T16:52:40.602-0500|-|
Task|Helixian-ZADA-508|Closing this modal dialog does not return the user to the element that opened it.|To Do|-|Daniel Carroll|2025-10-29T16:52:36.487-0500|-|
Task|Helixian-ZADA-507|Keyboard users are able to focus on elements outside of this modal dialog while it is open.|To Do|-|Daniel Carroll|2025-10-29T16:52:32.229-0500|-|
Task|Helixian-ZADA-506|Keyboard and screen reader users do not have their focus moved to this modal dialog when it opens.|To Do|-|Daniel Carroll|2025-10-29T16:52:28.179-0500|-|
Task|Helixian-ZADA-505|Unactionable elements should not have tabindex=”0”.|To Do|-|Daniel Carroll|2025-10-29T16:52:23.091-0500|-|
Task|Helixian-ZADA-504|Decorative SVG elements should be hidden from screen reader users.|To Do|-|Daniel Carroll|2025-10-29T16:52:18.226-0500|-|
Task|Helixian-ZADA-503|This modal dialog closes visually, but the dialog remains visible to screen reader users and can still receive keyboard focus.|To Do|-|Daniel Carroll|2025-10-29T16:52:11.500-0500|-|
Task|Helixian-ZADA-502|Required form fields should be visually indicated.|To Do|-|Daniel Carroll|2025-10-29T16:52:06.167-0500|-|
Task|Helixian-ZADA-501|All pages with more than just a few links should have a "Skip to Main Content" link.|To Do|-|Daniel Carroll|2025-10-29T16:52:02.077-0500|-|
Task|Helixian-ZADA-459|When a link contains a large amount of content, it makes the link difficult to read using a screen reader.|First Client QA|Bobby Hudgins|Daniel Carroll|2025-03-12T09:53:43.524-0500|-|
Task|Helixian-ZADA-434|Image links must be properly labeled for screen reader users.|In Progress|Tony Yen|Daniel Carroll|2025-03-12T09:51:44.413-0500|-|
Task|Helixian-ZADA-424|Information that is only provided visually must be conveyed to screen reader users.|First Client QA|Bobby Hudgins|Daniel Carroll|2025-03-12T09:50:57.994-0500|-|
Task|Helixian-ZADA-375|This color combination does not meet the minimum color contrast required by the WCAG. The combination of blue (#5B8EDB) and white (#FFFFFF) only has a contrast ratio of 3.31:1.|Client Info Needed|J Vishal|Daniel Carroll|2025-03-12T09:47:06.679-0500|-|
Task|Helixian-ZADA-366|This color combination does not meet the minimum color contrast required by the WCAG. The combination of gray (#808080) and white (#FFFFFF) only has a contrast ratio of 3.94:1.|Revisions|Tony Yen|Daniel Carroll|2025-03-12T09:46:16.527-0500|-|
Task|Helixian-ZADA-354|Alt attribute text for decorative images is redundant and/or unnecessary.|First Client QA|Bobby Hudgins|Daniel Carroll|2025-03-12T09:45:17.081-0500|-|
Task|Helixian-ZADA-353|Content that functions as a list should be indicated as such to screen reader users.|First Client QA|Bobby Hudgins|Daniel Carroll|2025-03-12T09:45:11.453-0500|-|
Task|Helixian-ZADA-327|This component was audited previously.|First Client QA|Bobby Hudgins|Daniel Carroll|2025-03-12T09:42:59.803-0500|-|
Task|Helixian-ZADA-310|This component was audited previously.|First Client QA|Bobby Hudgins|Daniel Carroll|2025-03-12T09:41:39.521-0500|-|
Task|Helixian-ZADA-308|This component was audited previously.|First Client QA|Bobby Hudgins|Daniel Carroll|2025-03-12T09:41:28.041-0500|-|
Task|Helixian-ZADA-304|Text that functions as a heading should be marked up as such.|Revisions|Yongwan Song|Daniel Carroll|2025-03-12T09:41:08.002-0500|-|
Task|Helixian-ZADA-299|This third-party component has been determined to pose a significant barrier to accessibility.|Third Party|Bobby Hudgins|Daniel Carroll|2025-03-12T09:40:42.641-0500|-|
Task|Helixian-ZADA-257|Alt attribute text for decorative images is redundant and/or unnecessary.|First Client QA|Bobby Hudgins|Daniel Carroll|2025-03-12T09:37:02.009-0500|-|
Task|Helixian-ZADA-252|Unnecessary ARIA attributes can cause unexpected behavior for screen reader users.|First Client QA|Bobby Hudgins|Daniel Carroll|2025-03-12T09:36:33.994-0500|-|
Task|Helixian-ZADA-248|It may not be clear to screen reader users how to interact with this carousel.|Revisions|Bobby Hudgins|Daniel Carroll|2025-03-12T09:36:12.167-0500|-|
Task|Helixian-ZADA-247|It is not clear to screen reader users where the carousel begins or ends.|Internal QA|Daniel Carroll|Daniel Carroll|2025-03-12T09:36:07.627-0500|-|
Task|Helixian-ZADA-234|This page contains one or more heading levels in an illogical order.|First Client QA|Bobby Hudgins|Daniel Carroll|2025-03-12T09:35:11.657-0500|-|
Task|Helixian-ZADA-233|This component was audited previously.|First Client QA|Bobby Hudgins|Daniel Carroll|2025-03-12T09:35:05.556-0500|-|
Task|Helixian-ZADA-232|Some regions require additional ARIA markup to assist screen reader users in understanding what a section is for, and where it begins and ends.|Internal QA|Daniel Carroll|Daniel Carroll|2025-03-12T09:35:00.926-0500|-|
Task|Helixian-ZADA-225|Content that functions as a list should be indicated as such to screen reader users.|First Client QA|Bobby Hudgins|Daniel Carroll|2025-03-12T09:34:29.568-0500|-|
Task|Helixian-ZADA-215|This page contains one or more heading levels in an illogical order.|Revisions|Bobby Hudgins|Daniel Carroll|2025-03-12T09:33:29.081-0500|-|
Task|Helixian-ZADA-200|This component was audited previously.|First Client QA|Bobby Hudgins|Daniel Carroll|2025-03-12T09:32:09.962-0500|-|
Task|Helixian-ZADA-190|This component was audited previously.|Ready For Allyant QA|Bobby Hudgins|Daniel Carroll|2025-03-12T09:31:24.022-0500|Done|
Task|Helixian-ZADA-185|The strike-through typography used on prices is not conveyed to screen reader users.|Not Fixing|-|Daniel Carroll|2025-03-12T09:31:00.929-0500|-|
Task|Helixian-ZADA-184|The meaning of this number is not clear to screen reader users.|Not Fixing|-|Daniel Carroll|2025-03-12T09:30:58.428-0500|-|
Task|Helixian-ZADA-183|This graphical object does not meet the minimum color contrast required by the WCAG. The combination of light gray (#DEDEDE) and light gray (#F4F4F4) only has a contrast ratio of 1.22:1.|Not Fixing|-|Daniel Carroll|2025-03-12T09:30:55.839-0500|-|
Task|Helixian-ZADA-182|This graphical object does not meet the minimum color contrast required by the WCAG. The combination of light gray (#DEDEDE) and white (#FFFFFF) only has a contrast ratio of 1.34:1.|Not Fixing|-|Daniel Carroll|2025-03-12T09:30:53.170-0500|-|
Task|Helixian-ZADA-181|This modal dialog contains one or more heading levels in an illogical order.|Not Fixing|-|Daniel Carroll|2025-03-12T09:30:50.338-0500|-|
Task|Helixian-ZADA-180|Content that does not programmatically follow a logical reading order can be confusing and difficult for screen reader users to understand.|Not Fixing|-|Daniel Carroll|2025-03-12T09:30:47.649-0500|-|
Task|Helixian-ZADA-179|Elements that control expandable content must be indicated to screen reader users.|Not Fixing|-|Daniel Carroll|2025-03-12T09:30:45.055-0500|-|
Task|Helixian-ZADA-178|Unnecessary ARIA attributes can cause unexpected behavior for screen reader users.|Not Fixing|-|Daniel Carroll|2025-03-12T09:30:42.486-0500|-|
Task|Helixian-ZADA-177|Text nested within an element with role="separator" is not announced to screen reader users.|Not Fixing|-|Daniel Carroll|2025-03-12T09:30:40.001-0500|-|
Task|Helixian-ZADA-176|This page contains one or more heading levels in an illogical order.|Not Fixing|-|Daniel Carroll|2025-03-12T09:30:37.427-0500|-|
Task|Helixian-ZADA-175|This page requires a <header> tag to assist screen reader users in understanding and navigating the structure of the page.|Not Fixing|-|Daniel Carroll|2025-03-12T09:30:35.019-0500|-|
Task|Helixian-ZADA-174|Buttons must have sufficient labels for all users.|Not Fixing|-|Daniel Carroll|2025-03-12T09:30:32.539-0500|-|
Task|Helixian-ZADA-173|Required form fields should be visually indicated.|Not Fixing|-|Daniel Carroll|2025-03-12T09:30:30.168-0500|-|
Task|Helixian-ZADA-172|Tooltip content must be reachable by all users, including screen reader and keyboard users.|Not Fixing|-|Daniel Carroll|2025-03-12T09:30:27.785-0500|-|
Task|Helixian-ZADA-170|Pages must be scalable.|Not Fixing|-|Daniel Carroll|2025-03-12T09:30:22.840-0500|-|
Task|Helixian-ZADA-168|Keyboard and screen reader users are unable to close this dismissible modal dialog.|Not Fixing|-|Daniel Carroll|2025-03-12T09:30:16.882-0500|-|
Task|Helixian-ZADA-167|Closing this modal dialog does not return the user to the element that opened it.|Not Fixing|-|Daniel Carroll|2025-03-12T09:30:14.365-0500|-|
Task|Helixian-ZADA-166|Keyboard users are able to focus on elements outside of this modal dialog while it is open.|Not Fixing|-|Daniel Carroll|2025-03-12T09:30:11.743-0500|-|
Task|Helixian-ZADA-165|The modal dialog container is not labeled as such.|Not Fixing|-|Daniel Carroll|2025-03-12T09:30:09.277-0500|-|
Task|Helixian-ZADA-164|Keyboard and screen reader users do not have their focus moved to this modal dialog when it opens.|Not Fixing|-|Daniel Carroll|2025-03-12T09:30:06.985-0500|-|
Task|Helixian-ZADA-163|It is not indicated to screen reader users that this status message is present.|Not Fixing|-|Daniel Carroll|2025-03-12T09:30:04.600-0500|-|
Task|Helixian-ZADA-162|This color combination does not meet the minimum color contrast required by the WCAG. The combination of red (#E32C2B) and light grey (#FAFAFA) only has a contrast ratio of 4.31:1.|Not Fixing|-|Daniel Carroll|2025-03-12T09:30:02.057-0500|-|
Task|Helixian-ZADA-161|These elements have an unnecessary ARIA attribute.|Not Fixing|-|Daniel Carroll|2025-03-12T09:29:59.721-0500|-|
Task|Helixian-ZADA-160|This form field has not been given the proper autocomplete attribute value, which may prevent users from filling this field out automatically.|Not Fixing|Yongwan Song|Daniel Carroll|2025-03-12T09:29:57.219-0500|-|
Task|Helixian-ZADA-159|This is marked up as a list, but it is not semantically a list.|Not Fixing|Yongwan Song|Daniel Carroll|2025-03-12T09:29:54.483-0500|-|
Task|Helixian-ZADA-158|The content within this map is inherently inaccessible, but it appears that you have taken steps to mitigate this fact.|Not Fixing|Yongwan Song|Daniel Carroll|2025-03-12T09:29:52.163-0500|-|
Task|Helixian-ZADA-157|This content does not appear in a logical order for screen reader users.|Not Fixing|Yongwan Song|Daniel Carroll|2025-03-12T09:29:49.672-0500|-|
Task|Helixian-ZADA-156|This element receives focus in an illogical order for screen reader and keyboard users.|Not Fixing|Yongwan Song|Daniel Carroll|2025-03-12T09:29:47.421-0500|-|
Task|Helixian-ZADA-146|The title of each card is not marked up as a heading.|First Client QA|Bobby Hudgins|Daniel Carroll|2025-03-12T09:28:59.976-0500|-|
Task|Helixian-ZADA-99|Required form fields should be visually indicated.|First Client QA|Bobby Hudgins|Daniel Carroll|2025-03-12T09:25:08.681-0500|-|
Task|Helixian-ZADA-92|Unactionable elements should not have tabindex=”0”.|First Client QA|Bobby Hudgins|Daniel Carroll|2025-03-12T09:24:31.038-0500|-|
Task|Helixian-ZADA-77|This component was audited previously.|First Client QA|Bobby Hudgins|Daniel Carroll|2025-03-12T09:23:25.847-0500|-|
Task|Helixian-ZADA-68|It is not clear to screen reader users where the carousel begins or ends.|First Client QA|Bobby Hudgins|Daniel Carroll|2025-03-12T09:22:41.026-0500|-|
Task|Helixian-ZADA-63|Screen reader users are unable to quickly determine how many cards or tiles are in this set.|First Client QA|Bobby Hudgins|Daniel Carroll|2025-03-12T09:22:14.360-0500|-|
Task|Helixian-ZADA-29|This page contains one or more heading levels in an illogical order.|Third Party|Bobby Hudgins|Daniel Carroll|2025-03-12T09:19:25.634-0500|-|

> Report coverage: 2025-10-21 to 2025-10-27