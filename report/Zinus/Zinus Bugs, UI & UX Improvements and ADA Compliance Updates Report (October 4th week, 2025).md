# Zinus Development Report – October 4th week, 2025

---

## 1. Executive Summary

In the week of October 4th, 2025, a total of **211 Jira tickets** related to Zinus website development were reviewed.

- **Ticket types:**  
  - Tasks: 164  
  - Bugs: 23  
  - Accessibility (Helixian-Zinus ADA) Tasks: 24  

- **Completion rate:** Approximately **40%** of all tickets marked as "Done" or "Resolved."

- **Key outcomes:**  
  - Extensive accessibility audit and remediation planning completed for Zinus.com (over 100 ADA-related tickets ongoing).  
  - Multiple UI/UX bug fixes on PDP and Cart, fixing accordion styling, sticky add-to-cart bar, quick buy modal issues, and mobile color swatches cut-off.  
  - Shopify product schema audit initiated to improve data consistency and SEO.  
  - Bazaarvoice V2 upgrade validation progressing in staging environment.  
  - Performance and analytics data discrepancies identified for paid media attribution.  
  - Preparations for Zinus FAQ section and exit intent popup underway.  

- **Major themes:**  
  - Accessibility compliance enhancements across site components.  
  - Bug resolution focusing on product and cart pages.  
  - Data quality improvement through Shopify schema audit.  
  - Implementation planning for exit-intent popups and FAQ content.  
  - Performance and data accuracy investigations.

- **Bug tickets summary:**  
  - Accordion sections on Bed Frame PDPs fixed to restore mobile view styling.  
  - Sticky Add to Cart bar errors resolved for mattress pages.  
  - Quick Buy modal variant selection and product image carousel corrected.  
  - Mobile color swatches layout fixed for collection pages.  
  - PDP “Buy Full Set” color tooltip fixed to disappear properly.  

---

## 2. Incident Overview

| Category      | Description                                             | Impact                                   |
|---------------|---------------------------------------------------------|------------------------------------------|
| PDP Accordion | Accordion styling broken on Bed Frame PDPs (mobile)    | Reduced mobile UX consistency             |
| Sticky ATC    | Sticky Add to Cart bar malfunction on Mattress PDPs     | Checkout friction, possible lost sales   |
| Quick Buy     | Variant selection redirects instead of modal update     | Poor purchase flow, user confusion        |
| Image Carousel| PDP product image carousel non-functional                | Hindered product visualization           |
| Color Swatch  | Mobile color swatches cut off on Bed Frame collection   | Reduced product discoverability on mobile|
| Color Tooltip | Color tooltip in “Buy Full Set” stuck after interaction | UI obstruction, confused user experience |

**Business Impact:**  
- Checkout and product browsing UX inconsistencies reduced conversion efficiency.  
- Mobile UX issues impaired user satisfaction and discovery.  
- Visual defects impaired merchandising and purchase decisions.

---

## 3. Immediate Response & Fixes

| Focus Area   | Actions Taken                                                                                  | Outcome                                      |
|--------------|-----------------------------------------------------------------------------------------------|----------------------------------------------|
| Accordion UI | Fixed accordion border distortion and overlap on multiple Bed Frame PDPs for mobile views     | ✅ Restored consistent PDP mobile layout     |
| Sticky ATC   | Corrected sticky Add to Cart bar rendering and behavior to display current version properly    | ✅ Improved sticky bar reliability            |
| Quick Buy    | Resolved issue causing variant selection in Quick Buy modal to redirect to full PDP           | ✅ Modal variant selection now dynamic        |
| Image Carousel | Fixed image thumbnails and navigation arrows to function properly on bed frame PDPs          | ✅ Restored interactive product image viewing|
| Mobile Swatch| Adjusted layout to ensure full visibility of color swatches on mobile collection pages        | ✅ Improved mobile product discoverability    |
| Tooltip      | Implemented logic to hide “Buy Full Set” color tooltip on mouse out and after click            | ✅ Removed tooltip UI obstruction              |

---

## 4. UI/UX Improvement Highlights

| Feature Area         | Before                                                    | After                                                   |
|----------------------|-----------------------------------------------------------|---------------------------------------------------------|
| Bed Frame PDP Accordion | Broken, distorted accordion borders on mobile           | Consistent accordion styling and proper border display  |
| Sticky Add to Cart bar | Inconsistent and outdated display on Mattress PDPs       | Updated sticky bar with correct version and full function |
| Quick Buy Modal       | Variant selection redirected unexpectedly                  | Variant options update dynamically within modal          |
| Product Image Carousel| Thumbnails not updating main image, arrows missing         | Functional carousel with clickable thumbnails and arrows  |
| Mobile Color Swatches | Swatches cut off on smaller screens                         | Fully visible and centered swatches on mobile devices    |
| Buy Full Set Tooltip  | Tooltip stuck visible after selection                       | Tooltip hides correctly on mouseout and click            |

---

## 5. On-Hold Items & Action Plan

| Key               | Description                                                      | Next Step                                             | Owner          |
|-------------------|-----------------------------------------------------------------|-------------------------------------------------------|----------------|
| Helixian-ZIN-1255 | Discrepancy between Shopify sales and paid media data           | Investigate tracking and UTM issues                    | Mason Kim      |
| Helixian-ZIN-1254 | VWO new code call                                               | Define scope and technical details                     | Daniel Carroll |
| Helixian-ZIN-1253 | Support / FAQ Expansion + Assembly Instruction Search Page      | Review design and technical feasibility                | Daniel Carroll |
| Helixian-ZIN-1177 | GSC Review issues - JSON-LD implementation                      | Implement rich results with BazaarVoice integration    | Daniel Carroll |
| Helixian-ZIN-1072 | Slow Loading at Checkout Page                                   | Optimize loading for Shipping Protection in checkout  | Daniel Carroll |
| Helixian-ZIN-1027 | White Glove delivery and/or installation                        | Define and plan delivery options                        | Daniel Carroll |
| Helixian-ZIN-1002 | TrueMed additional Placements                                   | Detail placements and requirements                      | Daniel Carroll |
| Helixian-ZIN-1087 | Buy with Prime with Route issue research                        | Analyze and resolve issue                               | Mason Kim      |
| Helixian-ZIN-1113 | SEO and analytics improvement                                   | Proceed with performance tuning and validation         | Daniel Carroll |
| Helixian-ZIN-1238 | Quick Buy Functionality anomalies                               | Full fix and release planning                           | Olivia Alvarez |

---

## 6. Appendix

| Type       | Key               | Summary                                                                           | Status         | Assignee       | Reporter       | Created             | Resolved            |
|------------|-------------------|-----------------------------------------------------------------------------------|----------------|----------------|----------------|---------------------|---------------------|
| Task       | Helixian-ZIN-1255 | Discrepancy Between Shopify Sales Reports and Paid Media Data                     | To Do          | Mason Kim      | J Vishal       | 2025-10-31 11:26:43 | -                   |
| Task       | Helixian-ZIN-1254 | VWO new code call                                                                 | To Do          | Daniel Carroll | Bill Dzadon    | 2025-10-30 09:55:01 | -                   |
| Task       | Helixian-ZIN-1253 | Support / FAQ Expansion + Assembly Instruction Search Page                        | To Do          | Daniel Carroll | Mason Kim      | 2025-10-29 12:24:04 | -                   |
| Task       | Helixian-ZIN-1251 | Add Color Tooltip to Quick View Modal                                             | Final Client QA| Olivia Alvarez | Yongwan Song   | 2025-10-22 16:09:36 | -                   |
| Task       | Helixian-ZIN-1250 | Shopify Product Schema Audit & Validation for Zinus.com                           | In Progress    | Daniel Carroll | Mason Kim      | 2025-10-22 14:53:47 | -                   |
| Task       | Helixian-ZIN-1248 | PDP video captions incorrect — shows “thank you” despite music-only audio        | To Do          | J Vishal       | Bobby Hudgins  | 2025-10-22 09:20:00 | -                   |
| Task       | Helixian-ZIN-1245 | Bazaarvoice V2 Activation and Syndication Impact Verification                     | Final Client QA| Olivia Alvarez | Mason Kim      | 2025-10-21 12:36:43 | -                   |
| Task       | Helixian-ZIN-1242 | Search Results Relevance: “Pillow/Pillows” Shows Bed Frames First Instead of Pillow SKUs | Final Client QA| Olivia Alvarez | J Vishal       | 2025-10-16 12:17:36 | -                   |
| Bug        | Helixian-ZIN-1241 | Accordion Section Styling Broken on Bed Frame PDPs (Mobile View)                  | Done           | Olivia Alvarez | J Vishal       | 2025-10-16 12:11:02 | 2025-10-21 17:20:51  |
| Bug        | Helixian-ZIN-1239 | Sticky Add to Cart (ATC) Bar Not Functioning Properly on Mattresses PDP's         | Done           | Olivia Alvarez | J Vishal       | 2025-10-16 11:57:04 | 2025-10-22 04:13:11  |
| Bug        | Helixian-ZIN-1238 | Quick Buy Function Not Working Properly for Suzanne Bed Frame Products            | Done           | Olivia Alvarez | J Vishal       | 2025-10-16 11:41:07 | 2025-10-21 17:20:37  |
| Bug        | Helixian-ZIN-1237 | Product Image Carousel Not Functional — Thumbnails Not Updating & Arrows Missing  | Done           | Olivia Alvarez | J Vishal       | 2025-10-16 11:27:49 | 2025-10-21 17:19:41  |
| Bug        | Helixian-ZIN-1235 | [Mobile] Color Swatches Getting Cut Off in Bed Frame Collection Page              | Done           | Olivia Alvarez | J Vishal       | 2025-10-16 11:06:01 | 2025-10-21 17:18:58  |
| Task       | Helixian-ZIN-1233 | Review ADA Client Info Needed tickets                                             | Done           | Olivia Alvarez | Daniel Carroll | 2025-10-14 11:52:24 | 2025-10-21 17:18:18  |
| Task       | Helixian-ZIN-1232 | Bazaarvoice Upgrade to V2                                                          | Final Client QA| Olivia Alvarez | Daniel Carroll | 2025-10-14 11:35:44 | -                   |
| Task       | Helixian-ZIN-1231 | Options for exit intent pop up to minimize abandoned checkouts                    | In Progress    | Daniel Carroll | Olivia Alvarez | 2025-10-14 11:34:25 | -                   |
| Task       | Helixian-ZIN-1225 | Reset Password form – required field not indicated                                | Done           | Olivia Alvarez | Bobby Hudgins  | 2025-10-14 05:35:51 | 2025-10-21 17:17:47  |
| Bug        | Helixian-ZIN-1224 | PDP → “Buy Full Set” color tooltip persists after click/hover                     | Done           | Olivia Alvarez | Bobby Hudgins  | 2025-10-14 05:24:33 | 2025-10-21 17:17:14  |
| Task       | Helixian-ZIN-1203 | Alt Text Not Updating Properly for Blog Images                                  | In Progress    | Mason Kim      | J Vishal       | 2025-09-30 14:23:31 | -                   |
| Bug        | Helixian-ZIN-1113 | Buy with the prime with Route issue research                                    | Done           | Mason Kim      | Mason Kim      | 2025-08-19 11:23:24 | 2025-10-21 08:31:30  |
| Bug        | Helixian-ZIN-1072 | Slow Loading at Checkout Page                                                   | On Hold        | Daniel Carroll | J Vishal       | 2025-07-14 13:42:51 | -                   |
| Task       | Helixian-ZIN-1058 | Review and update Secuvy code                                                    | On Hold        | Daniel Carroll | Mason Kim      | 2025-06-30 11:19:02 | -                   |
| Task       | Helixian-ZIN-1030 | Dynamic Yield Research / Personalization                                        | To Do          | -              | Daniel Carroll | 2025-06-03 13:13:29 | -                   |
| Task       | Helixian-ZIN-1027 | White Glove delivery and/or installation                                        | On Hold        | Daniel Carroll | Daniel Carroll | 2025-06-03 13:01:23 | -                   |
| Task       | Helixian-ZIN-1026 | Variant Images for Bed Frame Sizes                                              | On Hold        | J Vishal       | Daniel Carroll | 2025-06-03 12:49:30 | -                   |
| Task       | Helixian-ZIN-1016 | Fix Duplicate and Misplaced VWO SmartCode on Zinus.com                         | In Progress    | Mason Kim      | J Vishal       | 2025-05-19 11:25:27 | -                   |
| Task       | Helixian-ZIN-1002 | TrueMed additional Placements                                                  | On Hold        | Daniel Carroll | Daniel Carroll | 2025-05-06 12:43:48 | -                   |
| Bug        | Helixian-ZIN-959  | UI Alignment and Performance Issues on Homepage & Product Page                 | On Hold        | Yongwan Song   | J Vishal       | 2025-03-17 06:29:49 | -                   |
| Task       | Zinus-ZIN-32      | Define detailed requirements and scope for FAQ page build                      | To Do          | Mason Kim      | Mason Kim      | 2025-10-29 09:28:41 | -                   |
| Task       | Zinus-ZIN-31      | Fix Missing Tags in Page Type and Traffic Source Data in Shopify reports       | To Do          | Mason Kim      | J Vishal       | 2025-10-28 11:57:51 | -                   |
| Task       | Zinus-ZIN-29      | User Access Review (UAR) – Y2025 (IT) for Mason-owned Systems                  | To Do          | Mason Kim      | Mason Kim      | 2025-10-28 08:54:46 | -                   |
| Task       | Zinus-ZIN-28      | Extraction of All Zinus Project Tickets from Helixian Task Board and Migration | To Do          | Bobby Hudgins  | Mason Kim      | 2025-10-27 15:14:33 | -                   |
| Task       | Zinus-ZIN-23      | Create n8n workflow for automated Zinus Weekly Development Report generation    | In Progress    | Bobby Hudgins  | Bobby Hudgins  | 2025-10-27 12:43:39 | -                   |
| Task       | Zinus-ZIN-21      | Share Invoices to Nhu                                                          | Done           | Mason Kim      | Mason Kim      | 2025-10-22 11:30:11 | 2025-10-23 09:23:51  |
| Task       | Zinus-ZIN-17      | Replit invoice investigations and payment method update                        | Done           | Mason Kim      | Mason Kim      | 2025-10-22 11:29:49 | 2025-10-23 09:23:48  |
| Task       | Zinus-ZIN-16      | Helixian add access to Shipping and Delivery settings for our collaborator acc  | Done           | Mason Kim      | Mason Kim      | 2025-10-21 10:22:45 | 2025-10-21 10:24:42  |
| Task       | Zinus-ZIN-15      | Remove Temporary AWS Outage Notice from Website                               | Done           | Mason Kim      | Mason Kim      | 2025-10-21 09:54:26 | 2025-10-21 09:56:58  |
| Task       | Zinus-ZIN-14      | Review and Verify Zinus.com Schema Attributes                                 | Done           | Mason Kim      | Mason Kim      | 2025-10-21 09:41:30 | 2025-10-21 09:55:08  |
| Task       | Zinus-ZIN-13      | Follow-Up on VWO SmartCode Placement Issue with Secuvy                        | Done           | Mason Kim      | Mason Kim      | 2025-10-21 09:30:47 | 2025-10-21 09:35:23  |
| Task       | Zinus-ZIN-12      | Provision ChatGPT Subscription for Zinus Canada Team                         | Done           | Mason Kim      | Mason Kim      | 2025-10-21 09:20:39 | 2025-10-21 09:31:53  |
| Task       | Zinus-ZIN-11      | Joshua Onboarding & Technical Training Progress Tracking                     | Done           | Mason Kim      | Mason Kim      | 2025-10-20 09:17:22 | 2025-10-21 09:04:49  |
| Task       | Zinus-ZIN-9       | Migrate zinus.com Domain to Cloudflare and Update Name Servers               | To Do          | Mason Kim      | Mason Kim      | 2025-10-19 18:44:22 | -                   |
| Task       | Zinus-ZIN-7       | Initiate Recruitment and Approval Process for Senior Shopify Developer        | To Do          | Mason Kim      | Mason Kim      | 2025-10-19 18:19:13 | -                   |
| Task       | Zinus-ZIN-5       | [Keetsa] Initiate ADA Compliance Project Budget Allocation and Approval Process | To Do          | Mason Kim      | Mason Kim      | 2025-10-19 17:55:55 | -                   |
| Task       | Zinus-ZIN-4       | Proposal for Jira Task Board Subscription and Implementation Approval         | Done           | Derek Choi     | Mason Kim      | 2025-10-19 11:31:30 | 2025-10-23 09:14:11  |
| Task       | Zinus-ZIN-3       | Evaluate Elevar Server-Side Tracking Implementation for Zinus                 | To Do          | Mason Kim      | Mason Kim      | 2025-10-19 11:29:47 | -                   |
| Task       | Zinus-ZIN-2       | Evaluate Implementation of NoFraud App for Fraud Prevention                  | Reviewing      | Mason Kim      | Mason Kim      | 2025-10-19 11:28:18 | -                   |
| Task       | Zinus-ZIN-1       | Facilitate One-Month Advance Payment to Helixian Until FI Team Normalization  | Done           | Mason Kim      | Mason Kim      | 2025-10-19 11:27:38 | 2025-10-23 09:31:43  |
| ADA Task   | Helixian-ZADA-638 | Unnecessary ARIA attributes on Quick Buy button                              | To Do          | -              | Daniel Carroll | 2025-10-29 17:02:53 | -                   |
| ADA Task   | Helixian-ZADA-637 | Sync fixes to accordion per referenced component                            | To Do          | -              | Daniel Carroll | 2025-10-29 17:02:47 | -                   |
| ADA Task   | Helixian-ZADA-636 | Sync fixes to Quick Buy modal per referenced component                     | To Do          | -              | Daniel Carroll | 2025-10-29 17:02:42 | -                   |
| ADA Task   | Helixian-ZADA-635 | WCAG color contrast non-compliance on gold/white text                    | To Do          | -              | Daniel Carroll | 2025-10-29 17:02:38 | -                   |
| ADA Task   | Helixian-ZADA-634 | Accessible names mismatch on product slide links                          | To Do          | -              | Daniel Carroll | 2025-10-29 17:02:33 | -                   |
| ADA Task   | Helixian-ZADA-633 | Accordion fix synchronization                                              | To Do          | -              | Daniel Carroll | 2025-10-29 17:02:28 | -                   |
| ADA Task   | Helixian-ZADA-632 | Decorative images alt attributes set to empty                             | To Do          | -              | Daniel Carroll | 2025-10-29 17:02:23 | -                   |
| ADA Task   | Helixian-ZADA-631 | WCAG color contrast non-compliance on green/white text                   | To Do          | -              | Daniel Carroll | 2025-10-29 17:02:19 | -                   |

*Note: Due to space, only key tickets are listed here; full list available in project repository.*

---