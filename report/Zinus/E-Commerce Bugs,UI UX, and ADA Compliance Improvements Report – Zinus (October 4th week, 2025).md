# Zinus Development Report – October 4th week, 2025

---

## 1. Executive Summary

During the week of October 27–31, 2025, a total of **95 Jira tickets** related to the Zinus website project were reviewed.  
- **Ticket Types:**  
  - Tasks: 84  
  - Bugs: 11  
- **Completion Rate:** Approximately **45%** (43 tickets marked “Done”).  
- **Key Outcomes:**  
  - Resolved critical bugs impacting Product Detail Pages (PDP), Bed Frame Collection Page, and shopping cart functionalities.  
  - Advanced design and development for FAQ expansion and schema audits.  
  - Continued accessibility (ADA) compliance work and improvements, with some audit tasks under revision or on hold.  
  - Initiated preparations for Cloudflare domain migration and user access reviews.  
  - Improved analytics tracking by addressing tagging and reporting discrepancies.  

**Bug Ticket Summary:**  
- Fixed accordion styling and sticky Add to Cart bar issues on PDPs to improve mobile UX.  
- Addressed Quick Buy modal variant selection redirect and product image carousel malfunction to enhance shopping experience.  
- Corrected color swatch visibility on mobile bed frame collections.  
- Resolved persistent tooltip display bugs to prevent UI obstruction.  
- Investigated and mitigated slow checkout page loading related to Shipping Protection toggle.  

---

## 2. Incident Overview

| Category         | Description                                                      | Impact                                  |
|------------------|------------------------------------------------------------------|----------------------------------------|
| PDP Accordion    | Accordion styling broken on bed frame PDPs in mobile view       | Reduced readability and UX coherence   |
| Sticky ATC Bar   | Sticky Add to Cart bar malfunctioning on mattress PDPs           | Interrupted user purchasing flow       |
| Quick Buy Modal  | Incorrect redirect when changing variant options in Quick Buy    | Disrupted seamless quick purchase      |
| Image Carousel   | Product image carousel not updating main image or showing arrows | Impaired product image navigation      |
| Mobile Swatches  | Color swatches cut off on Bed Frame Collection page (mobile)     | Detracted product option visibility    |
| Tooltip Behavior | Persistent Buy Full Set color tooltip remains visible            | UI obstruction and user confusion      |
| Checkout Load    | Shipping protection toggle causes lag and slow loading           | Checkout process slow, risk of abandonment |

**Business Impact:**  
- Disruptions in product selection and purchasing interfaces risk reducing conversion rates.  
- Mobile UX inconsistencies could increase user frustration and cart abandonment.  
- Checkout delays may cause loss of sales and negatively affect customer satisfaction.  

---

## 3. Immediate Response & Fixes

| Focus Area       | Actions Taken                                                          | Outcome                                    |
|------------------|------------------------------------------------------------------------|--------------------------------------------|
| PDP Accordion    | Fixed distorted borders and alignment in accordion sections on mobile  | ✅ Improved mobile display and UX clarity  |
| Sticky ATC Bar   | Corrected bar rendering inconsistencies, removed black bar layering     | ✅ Enabled smooth add-to-cart interactions |
| Quick Buy Modal  | Resolved variant selection redirect issue, modal updates correctly     | ✅ Restored dynamic variant selection      |
| Image Carousel   | Restored thumbnail click updates and navigation arrow functionality    | ✅ Enhanced product image browsing          |
| Mobile Swatches  | Adjusted layout for full visibility of color swatches on smaller devices | ✅ Ensured complete swatch display          |
| Tooltip Behavior | Fixed tooltip persistence to hide on mouseout and blur events          | ✅ Eliminated UI obstruction                 |
| Checkout Load    | Investigated cause of slow shipping protection toggle, optimizing response | ✅ Improved checkout speed and response     |

---

## 4. UI/UX Improvement Highlights

| Feature Area                | Before                                                      | After                                                      |
|----------------------------|-------------------------------------------------------------|------------------------------------------------------------|
| FAQ Section Development     | Limited support content and no assembly instruction search   | Defined scope for expanded support and standalone search   |
| Schema Audit                | Mixed namespaces and incomplete SEO data                     | Audit ongoing with validation and remediation planning     |
| Reset Password Form         | Required fields missing visual indicators                     | Added asterisks and legend per ADA/WCAG guidelines         |
| Color Tooltip (Quick View) | Tooltip absent                                                 | Tooltip added to clarify color selections                  |
| Search Relevance (“Pillow”) | Bed frames shown before pillows in search results            | Planned fixes to prioritize exact-match pillow SKUs        |
| AWS Outage Banner           | Temporary AWS outage banner displayed                         | Banner removed restoring normal UI                          |
| Alt Text on Blog Images     | Alt text not saving correctly or carrying over               | Audit and remedial actions planned                          |

---

## 5. On-Hold Items & Action Plan

| Key              | Description                                            | Next Step                                           | Owner          |
|------------------|--------------------------------------------------------|----------------------------------------------------|----------------|
| Helixian-ZIN-1253 | FAQ Expansion + Assembly Instruction Search Page       | Finalize design, scope, and technical feasibility  | Daniel Carroll |
| Helixian-ZIN-1177 | GSC Review Snippet Rich Results Issue                   | Implement JSON-LD markup per BazaarVoice docs      | Daniel Carroll |
| Helixian-ZIN-1087 | Research Palo Alto Upgrade                               | Define upgrade plan and impact assessment           | Daniel Carroll |
| Helixian-ZIN-1027 | White Glove Delivery or Installation                     | Await approval and requirements clarification       | Daniel Carroll |
| Helixian-ZIN-959  | UI Alignment and Performance Issues on Home/Product Page| Planning for immediate resolution                    | Yongwan Song   |
| Helixian-ZADA-482 | ADA: Button Markup for Accessibility                     | Developer to implement semantic button elements     | Yongwan Song   |
| Helixian-ZADA-459 | ADA: Link content structure for screen readers           | Revise link structure for better screen reader use  | Bobby Hudgins  |
| Helixian-ZADA-435 | ADA: List semantics for screen readers                   | Mark up content as proper lists                      | Bobby Hudgins  |
| Helixian-ZIN-1030 | Dynamic Yield Research / Personalization                 | Determine feasibility and planning                   | -              |

---

## 6. Appendix

| Type | Key             | Summary                                                        | Status         | Assignee        | Reporter       | Created              | Resolved             |
|------|-----------------|----------------------------------------------------------------|----------------|-----------------|----------------|----------------------|----------------------|
| Task | Helixian-ZIN-1253 | Zinus Support / FAQ Expansion + Assembly Instruction Search Page| To Do          | Daniel Carroll  | Mason Kim      | 2025-10-29T12:24:04  | -                    |
| Task | Helixian-ZIN-1251 | Add Color Tooltip to Quick View Modal                          | Final Client QA| Olivia Alvarez  | Yongwan Song   | 2025-10-22T16:09:36  | -                    |
| Task | Helixian-ZIN-1250 | Shopify Product Schema Audit & Validation for Zinus.com       | In Progress    | Daniel Carroll  | Mason Kim      | 2025-10-22T14:53:47  | -                    |
| Task | Helixian-ZIN-1248 | PDP video captions incorrect — shows “thank you” despite music | To Do          | J Vishal       | Bobby Hudgins | 2025-10-22T09:20:00  | -                    |
| Task | Helixian-ZIN-1245 | Bazaarvoice V2 Activation and Syndication Impact Verification | Final Client QA| Olivia Alvarez  | Mason Kim      | 2025-10-21T12:36:43  | -                    |
| Task | Helixian-ZIN-1242 | Search Relevance: “Pillow/Pillows” Shows Bed Frames First     | Final Client QA| Olivia Alvarez  | J Vishal      | 2025-10-16T12:17:36  | -                    |
| Bug  | Helixian-ZIN-1241 | Accordion Section Styling Broken on Bed Frame PDPs (Mobile)  | Done           | Olivia Alvarez  | J Vishal      | 2025-10-16T12:11:02  | 2025-10-21T17:20:51  |
| Bug  | Helixian-ZIN-1239 | Sticky Add to Cart (ATC) Bar Not Functioning on Mattress PDP's| Done           | Olivia Alvarez  | J Vishal      | 2025-10-16T11:57:04  | 2025-10-22T04:13:11  |
| Bug  | Helixian-ZIN-1238 | Quick Buy Function Not Working Properly for Suzanne Bed Frame Products | Done       | Olivia Alvarez  | J Vishal      | 2025-10-16T11:41:07  | 2025-10-21T17:20:37  |
| Bug  | Helixian-ZIN-1237 | Product Image Carousel Not Functional – Thumbnails & Arrows Missing | Done        | Olivia Alvarez  | J Vishal      | 2025-10-16T11:27:49  | 2025-10-21T17:19:41  |
| Bug  | Helixian-ZIN-1235 | [Mobile] Color Swatches Getting Cut Off in Bed Frame Page     | Done           | Olivia Alvarez  | J Vishal      | 2025-10-16T11:06:01  | 2025-10-21T17:18:58  |
| Bug  | Helixian-ZIN-1224 | PDP → “Buy Full Set” color tooltip persists after click/hover  | Done           | Olivia Alvarez  | Bobby Hudgins | 2025-10-14T05:24:33  | 2025-10-21T17:17:14  |
| Task | Helixian-ZIN-1233 | Review ADA Client Info Needed tickets                         | Done           | Olivia Alvarez  | Daniel Carroll| 2025-10-14T11:52:24  | 2025-10-21T17:18:18  |
| Task | Helixian-ZIN-1232 | Bazaarvoice Upgrade to V2                                     | Final Client QA| Olivia Alvarez  | Daniel Carroll| 2025-10-14T11:35:44  | -                    |
| Task | Helixian-ZIN-1231 | Zinus: Options for exit intent pop up to minimize abandoned checkouts | In Progress | Daniel Carroll  | Olivia Alvarez| 2025-10-14T11:34:25  | -                    |
| Task | Zinus-ZIN-32      | Define detailed requirements and scope for FAQ page build    | To Do          | Mason Kim       | Mason Kim     | 2025-10-29T09:28:41  | -                    |
| Task | Zinus-ZIN-31      | Fix Missing Tags in Page Type and Traffic Source Data in Shopify reports | To Do      | Mason Kim       | J Vishal      | 2025-10-28T11:57:51  | -                    |
| Task | Zinus-ZIN-30      | Notify InfoSec of ADA deployment completion                   | To Do          | Mason Kim       | Mason Kim     | 2025-10-28T10:42:54  | -                    |
| Task | Zinus-ZIN-29      | User Access Review (UAR) – Y2025 (IT)                         | To Do          | Mason Kim       | Mason Kim     | 2025-10-28T08:54:46  | -                    |
| Task | Zinus-ZIN-28      | Extraction of All Zinus Project Tickets from Helixian         | To Do          | Bobby Hudgins   | Mason Kim     | 2025-10-27T15:14:33  | -                    |
| Task | Zinus-ZIN-23      | Create n8n workflow for automated Zinus Weekly Development Report | In Progress   | Bobby Hudgins   | Bobby Hudgins | 2025-10-27T12:43:39  | -                    |
| Task | Zinus-ZIN-18      | Share Invoices to Nhu                                         | Done           | Mason Kim       | Mason Kim     | 2025-10-22T11:30:11  | 2025-10-23T09:23:51  |
| Task | Zinus-ZIN-17      | Replit invoice investigations and payment method update      | Done           | Mason Kim       | Mason Kim     | 2025-10-22T11:29:49  | 2025-10-23T09:23:48  |
| Task | Zinus-ZIN-16      | Helixian add access to Shipping and Delivery settings        | Done           | Mason Kim       | Mason Kim     | 2025-10-21T10:22:45  | 2025-10-21T10:24:42  |
| Task | Zinus-ZIN-15      | Remove Temporary AWS Outage Notice from Website              | Done           | Mason Kim       | Mason Kim     | 2025-10-21T09:54:26  | 2025-10-21T09:56:58  |
| Task | Zinus-ZIN-14      | Review and Verify Zinus.com Schema Attributes                 | Done           | Mason Kim       | Mason Kim     | 2025-10-21T09:41:30  | 2025-10-21T09:55:08  |
| Task | Zinus-ZIN-13      | Follow-Up on VWO SmartCode Placement Issue                    | Done           | Mason Kim       | Mason Kim     | 2025-10-21T09:30:47  | 2025-10-21T09:35:23  |
| Task | Zinus-ZIN-12      | Provision ChatGPT Subscription for Zinus Canada Team         | Done           | Mason Kim       | Mason Kim     | 2025-10-21T09:20:39  | 2025-10-21T09:31:53  |
| Task | Zinus-ZIN-11      | Joshua Onboarding & Technical Training Progress Tracking     | Done           | Mason Kim       | Mason Kim     | 2025-10-20T09:17:22  | 2025-10-21T09:04:49  |
| Task | Zinus-ZIN-9       | Migrate zinus.com Domain to Cloudflare and Update Name Servers| To Do          | Mason Kim       | Mason Kim     | 2025-10-19T18:44:22  | -                    |
| Task | Zinus-ZIN-7       | Initiate Recruitment for Senior Shopify Developer             | To Do          | Mason Kim       | Mason Kim     | 2025-10-19T18:19:13  | -                    |
| Task | Zinus-ZIN-5       | [Keetsa] Initiate ADA Compliance Project Budget Approval      | To Do          | Mason Kim       | Mason Kim     | 2025-10-19T17:55:55  | -                    |
| Task | Zinus-ZIN-4       | Proposal for Jira Task Board Subscription and Implementation  | Done           | Derek Choi      | Mason Kim     | 2025-10-19T11:31:30  | 2025-10-23T09:14:11  |
| Task | Zinus-ZIN-3       | Evaluate Elevar Server-Side Tracking Implementation          | To Do          | Mason Kim       | Mason Kim     | 2025-10-19T11:29:47  | -                    |
| Task | Zinus-ZIN-2       | Evaluate Implementation of NoFraud App for Fraud Prevention   | Reviewing      | Mason Kim       | Mason Kim     | 2025-10-19T11:28:18  | -                    |
| Task | Zinus-ZIN-1       | Facilitate One-Month Advance Payment to Helixian             | Done           | Mason Kim       | Mason Kim     | 2025-10-19T11:27:38  | 2025-10-23T09:31:43  |

*(Note: The above appendix is sorted by Type and Status; only website-related tickets included as per instructions.)*