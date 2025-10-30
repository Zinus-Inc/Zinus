# Zinus Development Report – October 4th week, 2025

---

## 1. Executive Summary

This report covers **215 website-related Jira tickets** across Tasks, Bugs, and ADA compliance issues analyzed for Zinus’ eCommerce platform.

- **Ticket Types:**
  - Tasks: 111
  - Bugs: 10
  - ADA Accessibility Improvements: 94
- **Status Overview:**
  - Done: 34 (16%)
  - In Progress/Final QA: 10 (5%)
  - To Do/On Hold/Not Fixing/Revisions: 171 (79%)
- **Key Outcomes & Themes:**
  - Continued focus on ADA accessibility compliance improvements with a large volume of accessibility remediation and verification tasks.
  - Product Detail Page (PDP) and Cart-related bug fixes improving UX consistency and functionality.
  - Ongoing preparations for FAQ section expansion, schema validation audits, and analytics tagging enhancements.
  - Migration and Jira board consolidation activities underway.
  
**Bug Fix Highlights:**
- Fixed accordion and sticky Add to Cart styling issues on PDPs.
- Resolved Quick Buy modal variant selection redirect problems.
- Corrected mobile view color swatch cutoff and carousel image navigation.
- Eliminated persistent tooltips in the "Buy Full Set" section.
- Addressed slow loading issues on Checkout shipping protection widget.

---

## 2. Incident Overview

| Category   | Description                                              | Impact                              |
|------------|----------------------------------------------------------|-----------------------------------|
| PDP Accordion Styling | Broken accordion section borders in mobile view         | Degraded user interface on mobile |
| Sticky ATC Bar | Sticky Add to Cart bar malfunction on Mattress PDPs        | Confusing purchase process         |
| Quick Buy Modal | Quick Buy option redirects improperly on variant change     | Frustrates user selection          |
| Product Image Carousel | Thumbnails not updating main image, arrows missing          | Hinders product browsing           |
| Mobile Color Swatches | Color swatches get cut off on bed frames collection page  | Reduced mobile usability           |
| Persistent Tooltip | Color tooltip in "Buy Full Set" does not dismiss             | UI clutter and obstruction        |
| Checkout Performance | Slow loading and lag in Shipping Protection section          | Checkout abandonment risk          |

**Business Impact Summary:**
- Potential loss of mobile conversions due to UI inconsistencies.
- User frustration during variant selections and add-to-cart actions.
- Increased risk of cart abandonment from slow checkout responsiveness.

---

## 3. Immediate Response & Fixes

| Focus Area         | Actions Taken                                                           | Outcome                                             |
|--------------------|------------------------------------------------------------------------|-----------------------------------------------------|
| PDP Layout         | Fixed accordion borders and mobile styling issues                      | ✅ Restored mobile PDP usability                     |
| Add to Cart Bar    | Resolved sticky bar rendering bugs and updated latest version          | ✅ Improved purchase clarity and responsiveness    |
| Quick Buy Modal    | Corrected redirect logic to update variant selections dynamically      | ✅ Enabled smooth variant switching in modal       |
| Image Carousel     | Repaired thumbnail click behavior and navigation arrows functionality  | ✅ Restored proper image browsing experience        |
| Mobile Color UI    | Fixed CSS to prevent color swatches cutoff on smaller screens          | ✅ Enhanced mobile product collection presentation  |
| Tooltip Handling   | Fixed tooltip dismissal issues on color selectors                      | ✅ Improved interaction and visual cleanness        |
| Checkout Widget    | Investigated and mitigated loading lag on Shipping Protection toggle   | ✅ Improved checkout flow speed and reliability     |

---

## 4. UI/UX Improvement Highlights

| Feature Area                   | Before                                                              | After                                                        |
|-------------------------------|---------------------------------------------------------------------|--------------------------------------------------------------|
| FAQ and Support Expansion     | Limited FAQ and support content; no assembly instructions search    | Planned unified FAQ hub and assembly instructions search MVP |
| Product Schema Validation      | Mixed namespaces, missing SEO coverage, inconsistent units          | Audit and remediation plan initiated for accurate schema     |
| Bazaarvoice Upgrade           | V1 interface with limited accessibility and outdated features       | Bazaarvoice V2 activation in staging for enhanced syndication |
| Shopify Analytics Tagging     | Missing tags and misclassified page types/traffic sources           | Tagging issue under review for accurate Shopify reports      |
| Mobile PDP Video Captions     | Incorrect captions showing "thank you" during music-only sections   | Issue reported for caption correction                         |
| Cart and Collection Badging   | Badges inconsistent or missing                                      | New theme variable planned for toggling collection badges    |
| Cloudflare Migration           | Domain hosted elsewhere, DNS speed/security limitations             | Migration in planning stage for Cloudflare DNS/Name Servers   |

---

## 5. On-Hold Items & Action Plan

| Key              | Description                                        | Next Step                            | Owner           |
|------------------|--------------------------------------------------|------------------------------------|-----------------|
| Helixian-ZIN-1253 | FAQ Expansion + Assembly Instruction Search Page  | Define scope and feasibility review | Daniel Carroll  |
| Helixian-ZIN-1177 | GSC Review snippets JSON-LD Implementation         | Awaiting development approval       | Daniel Carroll  |
| Helixian-ZIN-1113 | GSC Core Web Vitals Affected URLs Review           | Analyze URLs and recommend fixes    | Yongwan Song    |
| Helixian-ZIN-1030 | Dynamic Yield Research / Personalization           | Further investigation planned       | -               |
| Helixian-ZIN-1027 | White Glove delivery and installation               | On hold pending project alignment   | Daniel Carroll  |
| Helixian-ZIN-1026 | Variant Images for Bed Frame Sizes                   | Awaiting prioritization             | J Vishal       |
| Helixian-ZADA-959 | UI Alignment and Performance Issues Homepage & PDP | Untimed high priority fix, planning | Yongwan Song    |

---

## 6. Appendix

| Type           | Key                | Summary                                                                   | Status         | Assignee        | Reporter       | Created              | Resolved          |
|----------------|--------------------|---------------------------------------------------------------------------|----------------|-----------------|----------------|----------------------|-------------------|
| Task           | Helixian-ZIN-1253  | Zinus Support / FAQ Expansion + Assembly Instruction Search Page           | To Do          | Daniel Carroll  | Mason Kim      | 2025-10-29T12:24:04  | -                 |
| Task           | Helixian-ZIN-1251  | Add Color Tooltip to Quick View Modal                                     | Final Client QA| Olivia Alvarez  | Yongwan Song   | 2025-10-22T16:09:36  | -                 |
| Task           | Helixian-ZIN-1250  | Shopify Product Schema Audit & Validation for Zinus.com                   | In Progress    | Daniel Carroll  | Mason Kim      | 2025-10-22T14:53:47  | -                 |
| Task           | Helixian-ZIN-1248  | PDP video captions incorrect — shows “thank you” despite music-only audio | To Do          | J Vishal       | Bobby Hudgins  | 2025-10-22T09:20:00  | -                 |
| Task           | Helixian-ZIN-1245  | Bazaarvoice V2 Activation and Syndication Impact Verification             | Final Client QA| Olivia Alvarez  | Mason Kim      | 2025-10-21T12:36:43  | -                 |
| Task           | Helixian-ZIN-1242  | Search Results Relevance: “Pillow/Pillows” Shows Bed Frames First          | Final Client QA| Olivia Alvarez  | J Vishal      | 2025-10-16T12:17:36  | -                 |
| Bug            | Helixian-ZIN-1241  | Accordion Section Styling Broken on Bed Frame PDPs (Mobile View)          | Done           | Olivia Alvarez  | J Vishal      | 2025-10-16T12:11:02  | 2025-10-21T17:20:51|
| Bug            | Helixian-ZIN-1239  | Sticky Add to Cart (ATC) Bar Not Functioning Properly on Mattresses PDP's | Done           | Olivia Alvarez  | J Vishal      | 2025-10-16T11:57:04  | 2025-10-22T04:13:11|
| Bug            | Helixian-ZIN-1238  | Quick Buy Function Not Working Properly for Suzanne Bed Frame Products     | Done           | Olivia Alvarez  | J Vishal      | 2025-10-16T11:41:07  | 2025-10-21T17:20:37|
| Bug            | Helixian-ZIN-1237  | Product Image Carousel Not Functional — Thumbnails Not Reflecting          | Done           | Olivia Alvarez  | J Vishal      | 2025-10-16T11:27:49  | 2025-10-21T17:19:41|
| Bug            | Helixian-ZIN-1235  | [Mobile] Color Swatches Getting Cut Off in Bed Frame Collection Page       | Done           | Olivia Alvarez  | J Vishal      | 2025-10-16T11:06:01  | 2025-10-21T17:18:58|
| Bug            | Helixian-ZIN-1224  | PDP → “Buy Full Set” color tooltip persists after click/hover              | Done           | Olivia Alvarez  | Bobby Hudgins | 2025-10-14T05:24:33  | 2025-10-21T17:17:14|
| Task           | Zinus-ZIN-32        | Define detailed requirements and scope for FAQ page build                 | To Do          | Mason Kim       | Mason Kim     | 2025-10-29T09:28:41  | -                 |
| Task           | Zinus-ZIN-31        | Fix Missing Tags in Page Type and Traffic Source Data in Shopify reports  | To Do          | Mason Kim       | J Vishal      | 2025-10-28T11:57:51  | -                 |
| Task           | Zinus-ZIN-30        | Notify InfoSec of ADA deployment completion                               | To Do          | Mason Kim       | Mason Kim     | 2025-10-28T10:42:54  | -                 |
| Task           | Zinus-ZIN-21        | Share Invoices to Nhu                                                     | Done           | Mason Kim       | Mason Kim     | 2025-10-22T11:30:11  | 2025-10-23T09:23:51|
| Task           | Zinus-ZIN-17        | Replit invoice investigations and payment method update                  | Done           | Mason Kim       | Mason Kim     | 2025-10-22T11:29:49  | 2025-10-23T09:23:48|
| Task           | Zinus-ZIN-16        | Helixian add access to Shipping and Delivery settings for our collaborator | Done           | Mason Kim       | Mason Kim     | 2025-10-21T10:22:45  | 2025-10-21T10:24:42|
| Task           | Zinus-ZIN-15        | Remove Temporary AWS Outage Notice from Website                           | Done           | Mason Kim       | Mason Kim     | 2025-10-21T09:54:26  | 2025-10-21T09:56:58|
| Task           | Zinus-ZIN-14        | Review and Verify Zinus.com Schema Attributes (per Matt’s feedback)       | Done           | Mason Kim       | Mason Kim     | 2025-10-21T09:41:30  | 2025-10-21T09:55:08|
| Task           | Zinus-ZIN-13        | Follow-Up on VWO SmartCode Placement Issue with Secuvy                   | Done           | Mason Kim       | Mason Kim     | 2025-10-21T09:30:47  | 2025-10-21T09:35:23|
| Task           | Zinus-ZIN-12        | Provision ChatGPT Subscription for Zinus Canada Team                     | Done           | Mason Kim       | Mason Kim     | 2025-10-21T09:20:39  | 2025-10-21T09:31:53|
| Task           | Zinus-ZIN-11        | Joshua Onboarding & Technical Training Progress Tracking                 | Done           | Mason Kim       | Mason Kim     | 2025-10-20T09:17:22  | 2025-10-21T09:04:49|
| Task           | Zinus-ZIN-9         | Migrate zinus.com Domain to Cloudflare and Update Name Servers           | To Do          | Mason Kim       | Mason Kim     | 2025-10-19T18:44:22  | -                 |
| Task           | Zinus-ZIN-7         | Initiate Recruitment and Approval Process for Senior Shopify Developer    | To Do          | Mason Kim       | Mason Kim     | 2025-10-19T18:19:13  | -                 |
| Task           | Zinus-ZIN-5         | [Keetsa] Initiate ADA Compliance Project Budget Allocation and Approval  | To Do          | Mason Kim       | Mason Kim     | 2025-10-19T17:55:55  | -                 |
| Task           | Zinus-ZIN-4         | Proposal for Jira Task Board Subscription and Implementation Approval    | Done           | Derek Choi      | Mason Kim     | 2025-10-19T11:31:30  | 2025-10-23T09:14:11|
| Task           | Zinus-ZIN-3         | Evaluate Elevar Server-Side Tracking Implementation for Zinus            | To Do          | Mason Kim       | Mason Kim     | 2025-10-19T11:29:47  | -                 |
| Task           | Zinus-ZIN-2         | Evaluate Implementation of NoFraud App for Fraud Prevention              | Reviewing      | Mason Kim       | Mason Kim     | 2025-10-19T11:28:18  | -                 |
| Task           | Zinus-ZIN-1         | Facilitate One-Month Advance Payment to Helixian Until FI Team Normalization| Done          | Mason Kim       | Mason Kim     | 2025-10-19T11:27:38  | 2025-10-23T09:31:43|
| Task           | Helixian-ZADA-638    | Unnecessary ARIA attributes can cause unexpected behavior for screen readers| To Do          | -               | Daniel Carroll| 2025-10-29T17:02:53  | -                 |
| ADA Improvement | (numerous tickets)  | Various ADA compliance and accessibility audits and fixes across site    | Mixed          | Multiple        | Daniel Carroll| Various              | -                 |

*Note: The Appendix table includes a selection representative of the report’s contents, showing only website-related tickets per scope.*

---

*End of Zinus Development Report – October 4th week, 2025*