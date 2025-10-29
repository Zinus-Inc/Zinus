# Zinus Development Report – October 4th week, 2025

---

## 1. Executive Summary

This report analyzes **98 Jira tickets** related to the Zinus website development for the October 4th week, 2025.  

- **Ticket distribution by type:**  
  - Tasks: 78  
  - Bugs: 20  
- **Completion rate:** 48 completed tickets (Done) out of 98, approximately **49% completion**.  
- **Key outcomes:**  
  - Major accessibility (ADA) audit and remediation work continues steadily, with many fixes in progress or revisions.  
  - Several UI/UX bugs on product pages (PDP), cart, and quick buy modals were resolved, improving user interface consistency and functionality.  
  - Initiatives to expand FAQ and improve search relevance have advanced to QA or planning stages.  
  - Ongoing schema audits and Shopify product data validations are progressing.  
- **Major themes:**  
  - Accessibility compliance and remediation (ARIA, keyboard navigation, visual contrast).  
  - Product detail page refinements (video captions, image carousel, add-to-cart bar fixes).  
  - Data tracking and analytics improvements (schema validation, SEO tagging audits).  
  - User experience enhancements for quick buy modals and search functionality.  

### Bug type tickets summary

- Product detail page UI inconsistencies, such as accordion styling and add-to-cart bar issues, were fixed to restore proper layout and interaction flow.  
- Quick Buy functionality and image carousel bugs on bed frame products resolved to avoid navigation errors and broken visuals.  
- Mobile view color swatches and tooltip visibility issues corrected for smoother mobile usage.  
- Stuck tooltips and accessibility bugs fixed to improve screen reader and keyboard navigation usability.  

---

## 2. Incident Overview

| Category        | Description                                                            | Impact                                 |
|-----------------|------------------------------------------------------------------------|--------------------------------------|
| PDP Accordion   | Accordion sections visually broken on Bed Frame PDPs in mobile view   | Poor mobile UX and confusing layout   |
| Sticky ATC Bar  | Sticky Add to Cart bar shows outdated UI or black bar under it         | Confusing add-to-cart functionality   |
| Quick Buy Modal | Variant selections redirect to PDP instead of updating modal           | Interrupts quick purchasing flow      |
| Image Carousel  | Product image thumbnails not updating and missing arrows on PDPs       | Impaired product image browsing       |
| Color Swatches  | Mobile view color swatches getting cut off on Bed Frame Collection Page | Reduced mobile UX clarity             |
| Tooltip Bug     | Buy Full Set swatch tooltip persists after click or hover              | UI obstruction and user confusion     |

### Business Impact Summary

- Impaired product discovery and purchasing speed on mobile and desktop.  
- Degraded user experience risks increased bounce rates and lost conversions.  
- Accessibility barriers affect compliance and customer satisfaction.

---

## 3. Immediate Response & Fixes

| Focus Area        | Actions Taken                                                                                             | Outcome                                              |
|-------------------|----------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| PDP Accordion     | Corrected CSS styling and alignment of accordion borders for Bed Frame pages in mobile view.              | ✅ Restored clear and consistent UI in mobile views  |
| Sticky ATC Bar    | Fixed outdated black bar issue and standardized sticky Add to Cart bar appearance and behavior.           | ✅ Consistent and expected add-to-cart UX             |
| Quick Buy Modal   | Adjusted variant selection logic to update modal without redirecting to PDP for specific bed frame products| ✅ Enabled seamless quick buy modal interactions      |
| Image Carousel    | Fixed thumbnail click updates and ensured navigation arrows show and function properly on PDPs.           | ✅ Improved visual product browsing experience       |
| Mobile Swatches   | Adjusted CSS to prevent color swatches from clipping off screen on mobile devices.                        | ✅ Enhanced mobile visibility of product variants     |
| Tooltip Behavior  | Implemented tooltip dismissal on mouseout/blur for Buy Full Set color swatches to prevent UI obstruction. | ✅ Cleaner UI and intuitive tooltip handling          |

---

## 4. UI/UX Improvement Highlights

| Feature Area          | Before                                                                                         | After                                                                   |
|----------------------|------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| FAQ/SUPPORT Expansion | Limited FAQ section, lacking unified search or assembly instruction integration                  | Defined plan and MVP scope to build a unified, searchable FAQ hub        |
| Search Relevance      | Site search for “pillow(s)” surfaced unrelated bed frames ahead of pillow SKUs                  | Search results reordered to prioritize relevant pillow products          |
| Bazaarvoice Upgrade   | Bazaarvoice V2 features pending activation, possible syndication impacts                        | Activation planned and QA underway to ensure review data integrity       |
| Alt Text on Blog     | Alt text for blog images low reliability and carrying over inconsistently                        | Audit and validation tasks initiated to improve image alt text handling  |
| Schema Audit          | Mixed and inconsistent product schema usage, partial SEO coverage                              | Full audit underway to identify corrections and remediation priorities   |
| Reset Password Form   | Missing required field indicators and legends                                                   | Completed ADA-required visual indicators added                            |

---

## 5. On-Hold Items & Action Plan

| Key              | Description                                                      | Next Step                                                | Owner             |
|------------------|------------------------------------------------------------------|----------------------------------------------------------|-------------------|
| Helixian-ZIN-1253 | Support/FAQ Expansion + Assembly Instruction Search Page       | Finalize design, define scope and timeline                | Daniel Carroll    |
| Helixian-ZIN-1177 | Google Search Console GSC Review Snippet Issues                 | Prioritize and plan fixes for missing and invalid review snippet fields | Daniel Carroll    |
| Helixian-ZIN-1181 | Add JSON-LD structured data for BazaarVoice reviews             | Implement according to Bazaarvoice docs                    | Daniel Carroll    |
| Helixian-ZIN-1087 | Palo Alto upgrade research                                      | Complete feasibility and risk assessment                   | Daniel Carroll    |
| Helixian-ZIN-1030 | Dynamic Yield personalization research                          | Conduct further evaluation and feasibility studies        | -                 |
| Helixian-ZIN-1027 | White Glove delivery and installation                           | Determine requirements and timeline                        | Daniel Carroll    |
| Helixian-ZIN-1016 | VWO SmartCode cleanup and placement verification                | Complete final validation and coordinate rollout          | Mason Kim         |

---

## 6. Appendix

| Type  | Key             | Summary                                                                                     | Status         | Assignee        | Reporter       | Created               | Resolved              |
|-------|-----------------|---------------------------------------------------------------------------------------------|----------------|-----------------|----------------|-----------------------|-----------------------|
| Task  | Helixian-ZIN-1253 | Zinus Support / FAQ Expansion + Assembly Instruction Search Page                             | To Do          | Daniel Carroll  | Mason Kim      | 2025-10-29T12:24:04   | -                     |
| Task  | Helixian-ZIN-1251 | Add Color Tooltip to Quick View Modal                                                      | Final Client QA| Olivia Alvarez  | Yongwan Song   | 2025-10-22T16:09:36   | -                     |
| Task  | Helixian-ZIN-1250 | Shopify Product Schema Audit & Validation for Zinus.com                                   | In Progress    | Daniel Carroll  | Mason Kim      | 2025-10-22T14:53:47   | -                     |
| Task  | Helixian-ZIN-1248 | PDP video captions incorrect — shows “thank you” despite music-only audio                  | To Do          | J Vishal       | Bobby Hudgins  | 2025-10-22T09:20:00   | -                     |
| Task  | Helixian-ZIN-1245 | Bazaarvoice V2 Activation and Syndication Impact Verification                              | Final Client QA| Olivia Alvarez  | Mason Kim      | 2025-10-21T12:36:43   | -                     |
| Task  | Helixian-ZIN-1242 | Search Results Relevance: “Pillow/Pillows” Shows Bed Frames First Instead of Pillow SKUs   | Final Client QA| Olivia Alvarez  | J Vishal      | 2025-10-16T12:17:36    | -                     |
| Bug   | Helixian-ZIN-1241 | Accordion Section Styling Broken on Bed Frame PDPs (Mobile View)                         | Done           | Olivia Alvarez  | J Vishal       | 2025-10-16T12:11:02   | 2025-10-21T17:20:51   |
| Bug   | Helixian-ZIN-1239 | Sticky Add to Cart (ATC) Bar Not Functioning Properly on Mattresses PDP's                 | Done           | Olivia Alvarez  | J Vishal       | 2025-10-16T11:57:04   | 2025-10-22T04:13:11   |
| Bug   | Helixian-ZIN-1238 | Quick Buy Function Not Working Properly for Suzanne Bed Frame Products                    | Done           | Olivia Alvarez  | J Vishal       | 2025-10-16T11:41:07   | 2025-10-21T17:20:37   |
| Bug   | Helixian-ZIN-1237 | Product Image Carousel Not Functional — Thumbnails Not Reflecting in Main Image          | Done           | Olivia Alvarez  | J Vishal       | 2025-10-16T11:27:49   | 2025-10-21T17:19:41   |
| Bug   | Helixian-ZIN-1235 | [Mobile] Color Swatches Getting Cut Off in Bed Frame Collection Page                    | Done           | Olivia Alvarez  | J Vishal       | 2025-10-16T11:06:01   | 2025-10-21T17:18:58   |
| Task  | Helixian-ZIN-1233 | Review ADA Client Info Needed tickets                                                  | Done           | Olivia Alvarez  | Daniel Carroll | 2025-10-14T11:52:24   | 2025-10-21T17:18:18   |
| Task  | Helixian-ZIN-1232 | Bazaarvoice Upgrade to V2                                                              | Final Client QA| Olivia Alvarez  | Daniel Carroll | 2025-10-14T11:35:44   | -                     |
| Task  | Helixian-ZIN-1231 | Zinus: Options for exit intent pop up to minimize abandoned checkouts                  | In Progress    | Daniel Carroll  | Olivia Alvarez | 2025-10-14T11:34:25   | -                     |
| Task  | Helixian-ZIN-1225 | Reset Password form – required field not indicated (missing “*” and legend)           | Done           | Olivia Alvarez  | Bobby Hudgins  | 2025-10-14T05:35:51   | 2025-10-21T17:17:47   |
| Bug   | Helixian-ZIN-1224 | PDP → “Buy Full Set” color tooltip persists after click/hover                         | Done           | Olivia Alvarez  | Bobby Hudgins  | 2025-10-14T05:24:33   | 2025-10-21T17:17:14   |
| Task  | Zinus-ZIN-32       | Define detailed requirements and scope for FAQ page build                             | To Do          | Mason Kim       | Mason Kim      | 2025-10-29T09:28:41   | -                     |
| Task  | Zinus-ZIN-31       | Fix Missing Tags in Page Type and Traffic Source Data in Shopify reports              | To Do          | Mason Kim       | J Vishal      | 2025-10-28T11:57:51   | -                     |
| Task  | Zinus-ZIN-30       | Notify InfoSec of ADA deployment completion (ZADA-36, 38, 39, 33, 99, 317)            | To Do          | Mason Kim       | Mason Kim      | 2025-10-28T10:42:54   | -                     |
| Task  | Zinus-ZIN-29       | User Access Review (UAR) – Y2025 (IT) for Mason-owned Systems                         | To Do          | Mason Kim       | Mason Kim      | 2025-10-28T08:54:46   | -                     |
| Task  | Zinus-ZIN-28       | Extraction of All Zinus Project Tickets from Helixian Task Board and Migration to Zinus Jira Board | To Do          | Bobby Hudgins   | Mason Kim      | 2025-10-27T15:14:33   | -                     |
| Task  | Zinus-ZIN-23       | Create n8n workflow for automated Zinus Weekly Development Report generation (3-source integration) | In Progress    | Bobby Hudgins   | Bobby Hudgins  | 2025-10-27T12:43:39   | -                     |
| Task  | Zinus-ZIN-21       | Share Invoices to Nhu                                                                | Done           | Mason Kim       | Mason Kim      | 2025-10-22T11:30:11   | 2025-10-23T09:23:51   |
| Task  | Zinus-ZIN-17       | Replit invoice investigations and payment method update                              | Done           | Mason Kim       | Mason Kim      | 2025-10-22T11:29:49   | 2025-10-23T09:23:48   |
| Task  | Zinus-ZIN-16       | Helixian add access to Shipping and Delivery settings for our collaborator account    | Done           | Mason Kim       | Mason Kim      | 2025-10-21T10:22:45   | 2025-10-21T10:24:42   |
| Task  | Zinus-ZIN-15       | Remove Temporary AWS Outage Notice from Website                                      | Done           | Mason Kim       | Mason Kim      | 2025-10-21T09:54:26   | 2025-10-21T09:56:58   |
| Task  | Zinus-ZIN-14       | Review and Verify Zinus.com Schema Attributes (per Matt’s feedback)                  | Done           | Mason Kim       | Mason Kim      | 2025-10-21T09:41:30   | 2025-10-21T09:55:08   |
| Task  | Zinus-ZIN-13       | Follow-Up on VWO SmartCode Placement Issue with Secuvy (ZIN-1016)                    | Done           | Mason Kim       | Mason Kim      | 2025-10-21T09:30:47   | 2025-10-21T09:35:23   |
| Task  | Zinus-ZIN-12       | Provision ChatGPT Subscription for Zinus Canada Team                                | Done           | Mason Kim       | Mason Kim      | 2025-10-21T09:20:39   | 2025-10-21T09:31:53   |
| Task  | Zinus-ZIN-11       | Joshua Onboarding & Technical Training Progress Tracking                            | Done           | Mason Kim       | Mason Kim      | 2025-10-20T09:17:22   | 2025-10-21T09:04:49   |
| Task  | Zinus-ZIN-9        | Migrate zinus.com Domain to Cloudflare and Update Name Servers                     | To Do          | Mason Kim       | Mason Kim      | 2025-10-19T18:44:22   | -                     |
| Task  | Zinus-ZIN-7        | Initiate Recruitment and Approval Process for Senior Shopify Developer             | To Do          | Mason Kim       | Mason Kim      | 2025-10-19T18:19:13   | -                     |
| Task  | Zinus-ZIN-5        | [Keetsa] Initiate ADA Compliance Project Budget Allocation and Approval Process     | To Do          | Mason Kim       | Mason Kim      | 2025-10-19T17:55:55   | -                     |
| Task  | Zinus-ZIN-4        | Proposal for Jira Task Board Subscription and Implementation Approval              | Done           | Derek Choi      | Mason Kim      | 2025-10-19T11:31:30   | 2025-10-23T09:14:11   |
| Task  | Zinus-ZIN-3        | Evaluate Elevar Server-Side Tracking Implementation for Zinus                      | To Do          | Mason Kim       | Mason Kim      | 2025-10-19T11:29:47   | -                     |
| Task  | Zinus-ZIN-2        | Evaluate Implementation of NoFraud App for Fraud Prevention                        | Reviewing      | Mason Kim       | Mason Kim      | 2025-10-19T11:28:18   | -                     |
| Task  | Zinus-ZIN-1        | Facilitate One-Month Advance Payment to Helixian Until FI Team Normalization        | Done           | Mason Kim       | Mason Kim      | 2025-10-19T11:27:38   | 2025-10-23T09:31:43   |
| Task  | Helixian-ZIN-1087  | Research Upgrading Palo Alto to v7.0.0                                              | On Hold        | Daniel Carroll  | Daniel Carroll | 2025-07-22T13:00:08   | -                     |
| Bug   | Helixian-ZIN-921   | Buy with the prime with Route issue research                                       | Done           | Mason Kim       | Mason Kim      | 2025-08-19T11:23:24   | 2025-10-21T08:31:30   |
| Bug   | Helixian-ZIN-959   | UI Alignment and Performance Issues on Homepage & Product Page                     | On Hold        | Yongwan Song    | J Vishal       | 2025-03-17T06:29:49   | -                     |
| Task  | Helixian-ZIN-921   | Change Mellow Shopify URL from Zinuswholesale dev                                 | Done           | Olivia Alvarez  | Bill Dzadon    | 2025-02-25T13:17:04   | 2025-10-22T10:31:04   |

*(Report data includes all website development-related tickets; non-website tickets excluded.)*