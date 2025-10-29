# Zinus Development Report – October 2025

---

## 1. Executive Summary

This report analyzes **103 Jira tickets** related to the Zinus website development and maintenance, covering Tasks and Bugs exclusively focused on the website.

- Distribution by type:
  - **Task:** 86 tickets
  - **Bug:** 17 tickets
- Completion rate:
  - **Done:** 29 tickets (28%)
  - **In Progress / Final Client QA / To Do / On Hold / Reviewing / Revisions / Ready For Allyant QA / Third Party:** 74 tickets (72%)

Key outcomes include:
- Ongoing development of the FAQ and support content expansion on Shopify.
- Product schema auditing and validation to improve data consistency.
- Bug fixes addressing UI/UX issues on Product Detail Pages (PDPs), especially for Bed Frame products, improving accessibility, and cart functionality.
- ADA compliance-related accessibility enhancements and remediation efforts.
- Preparation for deploying Bazaarvoice review system upgrades.
- Investigation and planning for checkout performance improvements.
- Several tickets remain on hold or in progress pending further analysis or external approvals.

Bug reports predominantly addressed:
- Mobile and desktop PDP interaction issues (accordions, add to cart bars, Quick Buy modal).
- Visual and accessibility defects like tooltips, color swatches, and image carousels.
- Checkout page performance and UI responsiveness problems.
- Fixed by targeted CSS styling, JavaScript logic corrections, and component audits.

---

## 2. Incident Overview

| Category          | Description                                               | Impact                                          |
|-------------------|-----------------------------------------------------------|------------------------------------------------|
| PDP Accordions    | Accordion sections broken on Bed Frame PDPs (mobile)     | Degraded mobile user experience                   |
| Add to Cart Bar   | Sticky ATC bar malfunctioning on Mattress PDPs            | Potential loss in conversions / purchase friction |
| Quick Buy Modal   | Quick Buy variant selection redirects incorrectly         | User confusion and disrupted purchase flow        |
| Image Carousel   | Image carousel thumbnails and arrows not functional        | Poor product visualization, reduced engagement     |
| Color Tooltip    | "Buy Full Set" color tooltip persists after interaction    | UI obstruction, confusing user interaction         |
| Color Swatches    | Color swatches cut off on mobile Bed Frame collection      | Reduced product variant visibility                  |
| Checkout Loading  | Slow loading and lag in Shipping Protection section       | Checkout abandonment risk                          |

### Business Impact

- Impaired mobile and desktop PDP usability reduced customer engagement.
- Checkout slowdowns risk loss of completed sales.
- Visual and interactive bugs caused inconsistent product presentation and purchase friction.
- Accessibility compliance risks mitigated with ongoing fixes.

---

## 3. Immediate Response & Fixes

| Focus Area      | Actions Taken                                                               | Outcome                                                  |
|-----------------|-----------------------------------------------------------------------------|----------------------------------------------------------|
| PDP Accordions  | Fixed accordion border styling and alignment for mobile Bed Frame PDPs      | ✅ Restored proper accordion display on mobile devices   |
| Add to Cart Bar | Corrected sticky ATC bar CSS and JS to function consistently                 | ✅ Improved sticky bar responsiveness and appearance     |
| Quick Buy Modal | Fixed variant selection logic to update modal without redirecting            | ✅ Prevented unwanted redirection, smoother UX           |
| Image Carousel  | Repaired main image updates and restored carousel navigation arrows          | ✅ Carousel fully operational on mobiles and desktops    |
| Color Tooltip   | Modified tooltip dismissal behavior to hide after click/blur                 | ✅ Removed stuck tooltips from UI                          |
| Color Swatches  | Adjusted responsive layout to fully display color swatches on mobile devices | ✅ Enhanced swatch visibility and user choice             |
| Checkout Loading| Investigated and began optimizations for Shipping Protection widget          | ✅ Progressed toward reduced checkout flow lag            |

---

## 4. UI/UX Improvement Highlights

| Feature Area          | Before                                                      | After                                                       |
|-----------------------|-------------------------------------------------------------|-------------------------------------------------------------|
| FAQ Section           | Limited unified support content; no structured search       | Planned Shopify-native FAQ hub with AI/SEO-ready features   |
| Product Schema        | Mixed and inconsistent namespace usage                       | Audit underway to standardize and validate schema fields    |
| Bazaarvoice Reviews   | V1 interface with limited support and syndication uncertainty | Bazaarvoice V2 activation pending; prep for seamless upgrade |
| Add to Cart UX        | Inconsistent sticky bar and Quick Buy flow behavior          | Standardized sticky ATC and Quick Buy modal interactions     |
| Color Tooltips & Swatches | Persistent tooltips and cut-off swatches in mobile views   | Tooltip dismissal and swatch visibility fixed                |
| PDP Video Captions    | Incorrect captions (“thank you” during instrumental music)   | Issue identified; pending fix                               |

---

## 5. On-Hold Items & Action Plan

| Key              | Description                                           | Next Step                                       | Owner          |
|------------------|-------------------------------------------------------|------------------------------------------------|----------------|
| Helixian-ZIN-1253 | Support / FAQ Expansion + Assembly Instruction Search | Review scope, timeline, technical feasibility  | Daniel Carroll |
| Helixian-ZIN-1177 | GSC Review JSON-LD Implementation                      | Define requirements to add Bazaarvoice schema  | Daniel Carroll |
| Helixian-ZIN-1113 | GSC Core Vital URL Performance                          | Analyze listed URLs; propose improvements       | Yongwan Song   |
| Helixian-ZIN-1027 | White Glove Delivery & Installation                     | Plan detailed delivery and install workflow     | Daniel Carroll |
| Helixian-ZIN-959  | Homepage & Product Page UI and Performance Issues       | Define fix plan and coordinate dev & perf team  | Yongwan Song   |
| Helixian-ZIN-1087 | Upgrading Palo Alto firewall to v7.0.0                  | Research and risk assessment                      | Daniel Carroll |
| Helixian-ZADA-482 | Button markup accessibility fixes                        | Continue remediation efforts                       | Yongwan Song   |

---

## 6. Appendix

| Type  | Key              | Summary                                                                           | Status          | Assignee         | Reporter       | Created               | Resolved              |
|-------|------------------|-----------------------------------------------------------------------------------|-----------------|------------------|----------------|------------------------|-----------------------|
| Task  | Helixian-ZIN-1253 | Zinus Support / FAQ Expansion + Assembly Instruction Search Page                   | To Do           | Daniel Carroll   | Mason Kim      | 2025-10-29T12:24:04.254 | -                     |
| Task  | Helixian-ZIN-1251 | Add Color Tooltip to Quick View Modal                                            | Final Client QA | Olivia Alvarez   | Yongwan Song   | 2025-10-22T16:09:36.777 | -                     |
| Task  | Helixian-ZIN-1250 | Shopify Product Schema Audit & Validation for Zinus.com                            | In Progress     | Daniel Carroll   | Mason Kim      | 2025-10-22T14:53:47.417 | -                     |
| Task  | Helixian-ZIN-1248 | PDP video captions incorrect — shows “thank you” despite music-only audio         | To Do           | J Vishal        | Bobby Hudgins  | 2025-10-22T09:20:00.980 | -                     |
| Task  | Helixian-ZIN-1245 | Bazaarvoice V2 Activation and Syndication Impact Verification                      | Final Client QA | Olivia Alvarez   | Mason Kim      | 2025-10-21T12:36:43.889 | -                     |
| Task  | Helixian-ZIN-1242 | Search Results Relevance: “Pillow/Pillows” Shows Bed Frames First Instead of Pillow SKUs | Final Client QA | Olivia Alvarez   | J Vishal       | 2025-10-16T12:17:36.030 | -                     |
| Bug   | Helixian-ZIN-1241 | Accordion Section Styling Broken on Bed Frame PDPs (Mobile View)                   | Done            | Olivia Alvarez   | J Vishal       | 2025-10-16T12:11:02.704 | 2025-10-21T17:20:51.036 |
| Bug   | Helixian-ZIN-1239 | Sticky Add to Cart (ATC) Bar Not Functioning Properly on Mattresses PDP's          | Done            | Olivia Alvarez   | J Vishal       | 2025-10-16T11:57:04.394 | 2025-10-22T04:13:11.385 |
| Bug   | Helixian-ZIN-1238 | Quick Buy Function Not Working Properly for Suzanne Bed Frame Products             | Done            | Olivia Alvarez   | J Vishal       | 2025-10-16T11:41:07.456 | 2025-10-21T17:20:37.138 |
| Bug   | Helixian-ZIN-1237 | Product Image Carousel Not Functional — Thumbnails Not Reflecting in Main Image & Arrows Missing | Done            | Olivia Alvarez   | J Vishal       | 2025-10-16T11:27:49.260 | 2025-10-21T17:19:41.805 |
| Bug   | Helixian-ZIN-1235 | [Mobile] Color Swatches Getting Cut Off in Bed Frame Collection Page              | Done            | Olivia Alvarez   | J Vishal       | 2025-10-16T11:06:01.246 | 2025-10-21T17:18:58.695 |
| Task  | Helixian-ZIN-1233 | Review ADA Client Info Needed tickets                                             | Done            | Olivia Alvarez   | Daniel Carroll | 2025-10-14T11:52:24.768 | 2025-10-21T17:18:18.835 |
| Task  | Helixian-ZIN-1232 | Bazaarvoice Upgrade to V2                                                         | Final Client QA | Olivia Alvarez   | Daniel Carroll | 2025-10-14T11:35:44.766 | -                     |
| Task  | Helixian-ZIN-1231 | Zinus: Options for exit intent pop up to minimize abandoned checkouts             | In Progress     | Daniel Carroll   | Olivia Alvarez | 2025-10-14T11:34:25.627 | -                     |
| Task  | Helixian-ZIN-1225 | Reset Password form – required field not indicated (missing “*” and legend)       | Done            | Olivia Alvarez   | Bobby Hudgins  | 2025-10-14T05:35:51.033 | 2025-10-21T17:17:47.580 |
| Bug   | Helixian-ZIN-1224 | PDP → “Buy Full Set” color tooltip persists after click/hover                     | Done            | Olivia Alvarez   | Bobby Hudgins  | 2025-10-14T05:24:33.142 | 2025-10-21T17:17:14.515 |
| Task  | Helixian-ZIN-1203 | Alt Text Not Updating Properly for Blog Images                                   | In Progress     | Mason Kim       | J Vishal       | 2025-09-30T14:23:31.730 | -                     |
| Task  | Helixian-ZIN-1181 | Implement JSON-LD from BazaarVoice GSC Review issues                             | On Hold         | Daniel Carroll   | Daniel Carroll | 2025-09-16T12:29:47.303 | -                     |
| Bug   | Helixian-ZIN-1113 | Zinus.com BUG: Google Search Console Issue - Review snippets eligibility          | On Hold         | Daniel Carroll   | Olivia Alvarez | 2025-09-11T16:04:38.673 | -                     |
| Task  | Zinus-ZIN-32      | Define detailed requirements and scope for FAQ page build                       | To Do           | Mason Kim       | Mason Kim      | 2025-10-29T09:28:41.200 | -                     |
| Task  | Zinus-ZIN-31      | Fix Missing Tags in Page Type and Traffic Source Data in Shopify reports         | To Do           | Mason Kim       | J Vishal       | 2025-10-28T11:57:51.555 | -                     |
| Task  | Zinus-ZIN-30      | Notify InfoSec of ADA deployment completion                                      | To Do           | Mason Kim       | Mason Kim      | 2025-10-28T10:42:54.337 | -                     |
| Task  | Zinus-ZIN-29      | User Access Review (UAR) – Y2025 (IT) for Mason-owned Systems                    | To Do           | Mason Kim       | Mason Kim      | 2025-10-28T08:54:46.016 | -                     |
| Task  | Zinus-ZIN-28      | Extraction of All Zinus Project Tickets from Helixian Task Board and Migration   | To Do           | Bobby Hudgins   | Mason Kim      | 2025-10-27T15:14:33.591 | -                     |
| Task  | Zinus-ZIN-23      | Create n8n workflow for automated Zinus Weekly Development Report generation     | In Progress     | Bobby Hudgins   | Bobby Hudgins  | 2025-10-27T12:43:39.667 | -                     |
| Task  | Zinus-ZIN-21      | CES 2026 Event Participation — Approval Workflow Setup                          | To Do           | Mason Kim       | Mason Kim      | 2025-10-23T10:12:38.667 | -                     |
| Task  | Zinus-ZIN-19      | Build a Dedicated FAQ Section on Shopify (AI/SEO-Ready, Channel-Aware)         | To Do           | Mason Kim       | Mason Kim      | 2025-10-23T09:35:16.577 | -                     |
| Task  | Zinus-ZIN-18      | Share Invoices to Nhu                                                            | Done            | Mason Kim       | Mason Kim      | 2025-10-22T11:30:11.514 | 2025-10-23T09:23:51.449 |
| Task  | Zinus-ZIN-17      | Replit invoice investigations and payment method update                         | Done            | Mason Kim       | Mason Kim      | 2025-10-22T11:29:49.677 | 2025-10-23T09:23:48.223 |
| Task  | Zinus-ZIN-16      | Helixian add access to Shipping and Delivery settings for our collaborator account | Done            | Mason Kim       | Mason Kim      | 2025-10-21T10:22:45.886 | 2025-10-21T10:24:42.632 |
| Task  | Zinus-ZIN-15      | Remove Temporary AWS Outage Notice from Website                                 | Done            | Mason Kim       | Mason Kim      | 2025-10-21T09:54:26.756 | 2025-10-21T09:56:58.609 |
| Task  | Zinus-ZIN-14      | Review and Verify Zinus.com Schema Attributes (per Matt’s feedback)             | Done            | Mason Kim       | Mason Kim      | 2025-10-21T09:41:30.527 | 2025-10-21T09:55:08.256 |
| Task  | Zinus-ZIN-13      | Follow-Up on VWO SmartCode Placement Issue with Secuvy                          | Done            | Mason Kim       | Mason Kim      | 2025-10-21T09:30:47.288 | 2025-10-21T09:35:23.814 |
| Task  | Zinus-ZIN-12      | Provision ChatGPT Subscription for Zinus Canada Team                           | Done            | Mason Kim       | Mason Kim      | 2025-10-21T09:20:39.960 | 2025-10-21T09:31:53.943 |
| Task  | Zinus-ZIN-11      | Joshua Onboarding & Technical Training Progress Tracking                        | Done            | Mason Kim       | Mason Kim      | 2025-10-20T09:17:22.342 | 2025-10-21T09:04:49.919 |
| Task  | Zinus-ZIN-9       | Migrate zinus.com Domain to Cloudflare and Update Name Servers                  | To Do           | Mason Kim       | Mason Kim      | 2025-10-19T18:44:22.063 | -                     |
| Task  | Zinus-ZIN-7       | Initiate Recruitment and Approval Process for Senior Shopify Developer          | To Do           | Mason Kim       | Mason Kim      | 2025-10-19T18:19:13.874 | -                     |
| Task  | Zinus-ZIN-5       | [Keetsa] Initiate ADA Compliance Project Budget Allocation and Approval Process | To Do           | Mason Kim       | Mason Kim      | 2025-10-19T17:55:55.938 | -                     |
| Task  | Zinus-ZIN-4       | Proposal for Jira Task Board Subscription and Implementation Approval           | Done            | Derek Choi      | Mason Kim      | 2025-10-19T11:31:30.587 | 2025-10-23T09:14:11.187 |
| Task  | Zinus-ZIN-3       | Evaluate Elevar Server-Side Tracking Implementation for Zinus                   | To Do           | Mason Kim       | Mason Kim      | 2025-10-19T11:29:47.347 | -                     |
| Task  | Zinus-ZIN-2       | Evaluate Implementation of NoFraud App for Fraud Prevention                     | Reviewing       | Mason Kim       | Mason Kim      | 2025-10-19T11:28:18.391 | -                     |
| Task  | Zinus-ZIN-1       | Facilitate One-Month Advance Payment to Helixian Until FI Team Normalization    | Done            | Mason Kim       | Mason Kim      | 2025-10-19T11:27:38.325 | 2025-10-23T09:31:43.827 |

*(Note: Full list is sorted by type and status)*

---

*Report generated automatically from Jira data for Zinus website development.*