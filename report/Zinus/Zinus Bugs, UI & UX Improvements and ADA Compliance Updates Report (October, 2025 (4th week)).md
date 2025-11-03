# Zinus Development Report – October, 2025 (4th week)

---

## 1. Executive Summary

In the fourth week of October 2025, a total of **178 Jira tickets** related to the Zinus website development were analyzed. The distribution by issue type is as follows:  
- **162 Tasks**  
- **16 Bugs**

Completion status reveals:  
- **48 tickets completed ("Done") (27%)**  
- **33 tickets On Hold or In Progress (18%)**  
- **97 tickets To Do, Reviewing, or other statuses (55%)**

Key outcomes include:  
- Significant progress on **accessibility improvements** to ensure WCAG compliance, notably for modals, carousels, forms, and color contrast.  
- Strategic planning for **FAQ expansion and schema validation** to enhance SEO and user support.  
- Ongoing **Shopify product schema audits** and **tracking/tagging fixes** to improve data accuracy.  
- Investigations into **performance issues** such as slow checkout widget response and video captions errors.  
- Preparations for **Cloudflare domain migration** and **ChatGPT subscription provisioning** for team productivity.

Major themes covered:  
- Extensive **ADA accessibility remediation and audit follow-ups** across multiple site areas.  
- **SEO and schema data validation** including merchant schema and JSON-LD structured data plans.  
- **User experience fixes** on PDP modals, quick buy flows, and collection pages with variant display issues.  
- **Analytics and tracking optimization** targeting VWO SmartCode cleanup, Shopify sales reporting discrepancies, and traffic source tagging.  
- **Deployment preparation** including FAQ build scope definition and marketplace syndication verification.

Bug-specific highlights:  
- Accordion styling and sticky add-to-cart bar issues resolved to improve mobile UX.  
- Color tooltip persistence and quick buy modal variant selection redirect bugs fixed.  
- Carousel image display and swatch visibility corrected for consistency in product displays.  
- Tooltip and popup UI glitches addressed to prevent interference with checkout flow.  

---

## 2. Incident Overview

| Category         | Description                                                | Impact                                   |
|------------------|------------------------------------------------------------|------------------------------------------|
| PDP Accordion    | Mobile accordion styling broken with distorted borders     | Reduced mobile UX clarity and polish     |
| Sticky ATC Bar   | Sticky Add to Cart bar malfunctioning on mattress PDPs     | Confusing purchase steps, potential drop-off |
| Quick Buy Modal  | Variant selection redirects unexpectedly on Bed Frame products | Interrupted shopping flow and user confusion |
| Product Carousel | Image carousel thumbnails fail to update main image        | Poor product image browsing experience   |
| Color Tooltip    | Tooltip in Buy Full Set section remains visible after click | UI obstruction and user frustration      |
| Color Swatches   | Cut-off swatches on Bed Frame Collection (mobile devices)  | Reduced product attribute visibility     |

### Business Impact Summary
- Improved mobile shopping experience and interface consistency.  
- Mitigated risk of lost conversions from broken interactive elements.  
- Enhanced product discoverability and visual appeal.

---

## 3. Immediate Response & Fixes

| Focus Area      | Actions Taken                                                                 | Outcome                                      |
|-----------------|-------------------------------------------------------------------------------|----------------------------------------------|
| Accordion Mobile | Fixed border rendering and alignment issues in accordion sections on PDPs    | ✅ Restored visual consistency for mobile users |
| Sticky ATC Bar  | Corrected the sticky add-to-cart bar behavior on mattress product pages       | ✅ Enabled consistent add-to-cart experience   |
| Quick Buy Modal | Fixed variant selector redirect issue in Quick Buy modals for Bed Frame items | ✅ Preserved modal variant selection workflow  |
| Image Carousel  | Re-enabled thumbnail click updating main image and restored arrows           | ✅ Enhanced product image navigation          |
| Color Tooltip   | Fixed tooltip persistence to dismiss correctly after click and mouse out     | ✅ Removed UI obstructions                     |
| Swatches Mobile | Adjusted responsive layout to prevent swatch cutoff on smaller devices        | ✅ Improved visibility across device sizes    |

---

## 4. UI/UX Improvement Highlights

| Feature Area               | Before                                                      | After                                                       |
|---------------------------|-------------------------------------------------------------|-------------------------------------------------------------|
| Accordion Sections (Mobile) | Distorted borders, overlapping content                       | Aligned, consistent accordion borders on all device sizes   |
| Add to Cart Sticky Bar     | Inconsistent display with black bars or outdated versions    | Stable, visible sticky bar supporting add-to-cart actions   |
| Quick Buy Modal            | Variant selection redirected users to product details        | Dynamic variant selection within modal without page reload  |
| Product Image Carousel     | Thumbnails inactive, arrows missing                          | Fully functional carousel with interactive thumbnails       |
| Buy Full Set Tooltip       | Tooltip text stuck on-screen after interaction              | Tooltips dismiss correctly on mouseout and after selection  |
| Bed Frame Color Swatches   | Swatches cut off on mid-sized mobile screens                 | Swatches fully visible and centered on all supported devices|

---

## 5. On-Hold Items & Action Plan

| Key              | Description                                         | Next Step                                  | Owner         |
|------------------|-----------------------------------------------------|--------------------------------------------|---------------|
| Helixian-ZIN-1177| GSC Review Snippet Issues (Rich Results Eligibility) | Diagnose JSON-LD and fix missing review fields | Daniel Carroll|
| Helixian-ZIN-1181| BazaarVoice JSON-LD Implementation                   | Implement structured data per BazaarVoice docs | Daniel Carroll|
| Helixian-ZIN-1177| Upgrade Palo Alto to v7.0.0 - Research                | Complete feasibility and risk assessment  | Daniel Carroll|
| Helixian-ZIN-1027| White Glove Delivery and Installation                 | Define requirements and coordinate with delivery partner | Daniel Carroll|
| Helixian-ZIN-1026| Bed Frame Variant Images - Enhancement                 | Clarify variant image requirements         | J Vishal      |

---

## 6. Appendix

| Type | Key              | Summary                                                  | Status          | Assignee       | Reporter       | Created             | Resolved             |
|------|------------------|----------------------------------------------------------|-----------------|----------------|----------------|---------------------|----------------------|
| Bug  | Helixian-ZIN-1241| Accordion Section Styling Broken on Bed Frame PDPs (Mobile View) | Done            | Olivia Alvarez | J Vishal       | 2025-10-16T12:11:02 | 2025-10-21T17:20:51  |
| Bug  | Helixian-ZIN-1239| Sticky Add to Cart (ATC) Bar Not Functioning Properly on Mattresses PDPs | Done        | Olivia Alvarez | J Vishal       | 2025-10-16T11:57:04 | 2025-10-22T04:13:11  |
| Bug  | Helixian-ZIN-1238| Quick Buy Function Not Working Properly for Suzanne Bed Frame Products | Done         | Olivia Alvarez | J Vishal       | 2025-10-16T11:41:07 | 2025-10-21T17:20:37  |
| Bug  | Helixian-ZIN-1237| Product Image Carousel Not Functional — Thumbnails Not Reflecting in Main Image & Arrows Missing | Done    | Olivia Alvarez | J Vishal       | 2025-10-16T11:27:49 | 2025-10-21T17:19:41  |
| Bug  | Helixian-ZIN-1235| [Mobile] Color Swatches Getting Cut Off in Bed Frame Collection Page | Done             | Olivia Alvarez | J Vishal       | 2025-10-16T11:06:01 | 2025-10-21T17:18:58  |
| Bug  | Helixian-ZIN-1224| PDP → “Buy Full Set” color tooltip persists after click/hover | Done                      | Olivia Alvarez | Bobby Hudgins | 2025-10-14T05:24:33 | 2025-10-21T17:17:14  |
| Task | Helixian-ZIN-1253| Zinus Support / FAQ Expansion + Assembly Instruction Search Page | To Do                   | Daniel Carroll | Mason Kim     | 2025-10-29T12:24:04 | -                    |
| Task | Helixian-ZIN-1250| Shopify Product Schema Audit & Validation for Zinus.com | In Progress                 | Daniel Carroll | Mason Kim     | 2025-10-22T14:53:47 | -                    |
| Task | Helixian-ZIN-1245| Bazaarvoice V2 Activation and Syndication Impact Verification | Final Client QA           | Olivia Alvarez | Mason Kim     | 2025-10-21T12:36:43 | -                    |
| Task | Helixian-ZIN-1242| Search Results Relevance: “Pillow/Pillows” Shows Bed Frames First Instead of Pillow SKUs | Final Client QA           | Olivia Alvarez | J Vishal       | 2025-10-16T12:17:36 | -                    |
| Task | Helixian-ZIN-1002| TrueMed additional Placements                            | On Hold                   | Daniel Carroll | Daniel Carroll| 2025-05-06T12:43:48 | -                    |
| Task | Helixian-ZIN-1181| Implement JSON-LD from BazaarVoice GSC Review issues    | On Hold                   | Daniel Carroll | Daniel Carroll| 2025-09-16T12:29:47 | -                    |
| Task | Zinus-ZIN-31     | Fix Missing Tags in Page Type and Traffic Source Data in Shopify reports | To Do                | Mason Kim     | J Vishal       | 2025-10-28T11:57:51 | -                    |
| Task | Zinus-ZIN-32     | Define detailed requirements and scope for FAQ page build | To Do                   | Mason Kim     | Mason Kim      | 2025-10-29T09:28:41 | -                    |
| Task | Zinus-ZIN-9      | Migrate zinus.com Domain to Cloudflare and Update Name Servers | To Do                  | Mason Kim     | Mason Kim      | 2025-10-19T18:44:22 | -                    |
| Task | Zinus-ZIN-28     | Extraction of All Zinus Project Tickets from Helixian Task Board and Migration to Zinus Jira Board | To Do   | Bobby Hudgins | Mason Kim      | 2025-10-27T15:14:33 | -                    |
| Task | Zinus-ZIN-29     | User Access Review (UAR) – Y2025 (IT) for Mason-owned Systems | To Do                   | Mason Kim     | Mason Kim      | 2025-10-28T08:54:46 | -                    |
| Task | Zinus-ZIN-21     | Share Invoices to Nhu                                   | Done                     | Mason Kim     | Mason Kim      | 2025-10-22T11:30:11 | 2025-10-23T09:23:51  |
| Task | Zinus-ZIN-17     | Replit invoice investigations and payment method update | Done                     | Mason Kim     | Mason Kim      | 2025-10-22T11:29:49 | 2025-10-23T09:23:48  |
| Task | Zinus-ZIN-16     | Helixian add access to Shipping and Delivery settings for our collaborator account | Done             | Mason Kim     | Mason Kim      | 2025-10-21T10:22:45 | 2025-10-21T10:24:42  |
| Task | Zinus-ZIN-15     | Remove Temporary AWS Outage Notice from Website         | Done                     | Mason Kim     | Mason Kim      | 2025-10-21T09:54:26 | 2025-10-21T09:56:58  |
| Task | Zinus-ZIN-14     | Review and Verify Zinus.com Schema Attributes (per Matt’s feedback) | Done                   | Mason Kim     | Mason Kim      | 2025-10-21T09:41:30 | 2025-10-21T09:55:08  |
| Task | Zinus-ZIN-13     | Follow-Up on VWO SmartCode Placement Issue with Secuvy (ZIN-1016) | Done                   | Mason Kim     | Mason Kim      | 2025-10-21T09:30:47 | 2025-10-21T09:35:23  |
| Task | Zinus-ZIN-12     | Provision ChatGPT Subscription for Zinus Canada Team    | Done                     | Mason Kim     | Mason Kim      | 2025-10-21T09:20:39 | 2025-10-21T09:31:53  |
| Task | Zinus-ZIN-11     | Joshua Onboarding & Technical Training Progress Tracking | Done                     | Mason Kim     | Mason Kim      | 2025-10-20T09:17:22 | 2025-10-21T09:04:49  |
| Task | Zinus-ZIN-4      | Proposal for Jira Task Board Subscription and Implementation Approval | Done               | Derek Choi    | Mason Kim      | 2025-10-19T11:31:30 | 2025-10-23T09:14:11  |
| Task | Helixian-ZIN-1203| Alt Text Not Updating Properly for Blog Images           | In Progress              | Mason Kim     | J Vishal       | 2025-09-30T14:23:31 | -                    |
| Task | Helixian-ZIN-1254| VWO new code call                                         | To Do                    | Daniel Carroll| Bill Dzadon    | 2025-10-30T09:55:01 | -                    |
| Task | Helixian-ZIN-1255| Discrepancy Between Shopify Sales Reports and Paid Media Data (Google Ads & Meta) | To Do            | Mason Kim     | J Vishal       | 2025-10-31T11:26:43 | -                    |

*All statuses and assignments reflect the latest data as of report date.*

---

*End of Report*