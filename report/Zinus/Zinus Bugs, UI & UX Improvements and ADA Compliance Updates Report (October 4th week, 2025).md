# Zinus Development Report – October 4th week, 2025

---

## 1. Executive Summary

This report analyzes a total of **146 Jira tickets** related to the Zinus website development efforts from the Helixian and Zinus projects.

- Ticket Types:
  - **Tasks:** 122
  - **Bugs:** 21
  - **Other:** 3 (mostly accessibility-related ADA tasks grouped under Helixian - Zinus ADA)
- Completion Rate: **38 tickets marked as Done or equivalent (26%)**, many remain in progress, on hold, or to do.
- Major Themes:
  - Extensive **ADA compliance and accessibility improvements** with a focus on modal dialogs, carousels, form controls, color contrast, and screen reader usability.
  - **Schema audits and validation** for Shopify product data.
  - Enhancement of **search relevance and UI/UX** elements (tooltips, quick buy modals, video captions).
  - **Performance and reporting optimizations**.
  - Initiation of **FAQ expansion and dedicated FAQ section development**.
- Bug Fix Highlights:
  - Mobile and desktop **PDP UI bugs** fixed including accordion styling, sticky Add to Cart bar, and image carousel functionality.
  - **Bed frame quick buy modal variant selection corrected** to prevent unwanted redirects.
  - Mobile **color swatch visibility issues resolved**.
  - Persistent tooltip in Buy Full Set section addressed.
  - Accessibility-oriented fixes including **screen reader focus management and ARIA attribute corrections**.

---

## 2. Incident Overview

| Category                | Description                                                | Impact                         |
|------------------------|------------------------------------------------------------|--------------------------------|
| PDP Accordion Styling  | Mobile accordion sections broken with distorted borders     | Reduced mobile UX consistency  |
| Sticky Add to Cart Bar | Malfunctioning sticky ATC bar, outdated/black bar shown    | Impairs add-to-cart clarity    |
| Quick Buy Modal        | Variant selection triggers redirect instead of modal update| Frustrates users, checkout flow risk |
| Image Carousel         | Thumbnails not updating main image; arrows missing         | Reduced product image clarity  |
| Mobile Color Swatches  | Color swatches cut off on smaller devices                   | Poor product visualization     |
| Buy Full Set Tooltip   | Persistent tooltip after color selection                     | UI obstruction, user confusion |

### Business Impact
- Impeded mobile user shopping experience.
- Potential reduced conversion due to interaction issues.
- Visual confusion and inconsistent UI lowering overall trust.
- Accessibility gaps possibly affecting compliance and customer satisfaction.

---

## 3. Immediate Response & Fixes

| Focus Area        | Actions Taken                                                                 | Outcome                             |
|-------------------|-------------------------------------------------------------------------------|------------------------------------|
| Mobile PDP        | Fixed accordion borders and alignment issues on various Bed Frame PDPs        | ✅ Restored proper mobile accordion UX |
| Sticky ATC Bar    | Corrected sticky Add to Cart bar to ensure latest UI is applied consistently   | ✅ Improved add-to-cart interaction clarity |
| Quick Buy Modal   | Resolved variant selectors to update modal without redirection                 | ✅ Smooth variant selection workflow |
| Image Carousel    | Repaired thumbnail click handling and enabled navigation arrows                | ✅ Fully functional image carousel |
| Mobile Color Swatches | Adjusted swatch display for responsiveness and visibility                      | ✅ Color selection clear on mobile  |
| Buy Full Set Tooltip | Fixed stuck tooltip behavior after color selection                           | ✅ Tooltip hides correctly post-selection |

---

## 4. UI/UX Improvement Highlights

| Feature Area        | Before                                                      | After                                                        |
|---------------------|-------------------------------------------------------------|--------------------------------------------------------------|
| FAQ Section         | No dedicated, channel-aware FAQ section                      | Planned Shopify-native FAQ with AI/SEO readiness build ongoing |
| Search Relevance    | Pillow searches showing bed frames first                     | Search ranking adjusted to prioritize exact pillow SKUs      |
| Video Captions      | Incorrect captions showing “thank you” during instrumentals  | Captions corrected to reflect audio accurately               |
| Color Tooltips      | Buy Full Set tooltip persistent after click                   | Tooltip dismisses properly on mouseout and blur              |
| Schema Validation   | Inconsistent product schema fields & partial SEO coverage     | Full audit in progress with remediation plan proposed        |

---

## 5. On-Hold Items & Action Plan

| Key               | Description                                               | Next Step                                 | Owner           |
|-------------------|-----------------------------------------------------------|-------------------------------------------|-----------------|
| Helixian-ZIN-1181 | Implement JSON-LD for BazaarVoice GSC review issues       | Define scope and assign dev work           | Daniel Carroll  |
| Helixian-ZIN-959  | Homepage & Product Page UI alignment and performance issue | Schedule dev sprint for fixes              | Yongwan Song    |
| Helixian-ZIN-1072 | Slow loading at checkout page                              | Performance profiling and optimization    | Daniel Carroll  |
| Helixian-ZIN-1027 | White Glove delivery and/or installation                   | Finalize specification and scheduling     | Daniel Carroll  |
| Helixian-ZIN-1002 | TrueMed additional placements                              | Assess scope, prioritize work              | Daniel Carroll  |
| Zinus-ZIN-28      | Extraction and migration of Zinus tickets from Helixian    | Complete data cleaning and bulk import    | Bobby Hudgins   |

---

## 6. Appendix

| Type       | Key               | Summary                                                               | Status         | Assignee       | Reporter       | Created              | Resolved             |
|------------|-------------------|-----------------------------------------------------------------------|----------------|----------------|----------------|----------------------|----------------------|
| Task       | Helixian-ZIN-1253 | Zinus Support / FAQ Expansion + Assembly Instruction Search Page      | To Do          | Daniel Carroll | Mason Kim      | 2025-10-29T12:24:04  | -                    |
| Task       | Helixian-ZIN-1251 | Add Color Tooltip to Quick View Modal                                | Final Client QA| Olivia Alvarez | Yongwan Song   | 2025-10-22T16:09:36  | -                    |
| Task       | Helixian-ZIN-1250 | Shopify Product Schema Audit & Validation for Zinus.com             | In Progress    | Daniel Carroll | Mason Kim      | 2025-10-22T14:53:47  | -                    |
| Task       | Helixian-ZIN-1248 | PDP video captions incorrect — shows “thank you” despite music-only | To Do          | J Vishal       | Bobby Hudgins  | 2025-10-22T09:20:00  | -                    |
| Task       | Helixian-ZIN-1245 | Bazaarvoice V2 Activation and Syndication Impact Verification       | Final Client QA| Olivia Alvarez | Mason Kim      | 2025-10-21T12:36:43  | -                    |
| Task       | Helixian-ZIN-1242 | Search Results Relevance: “Pillow/Pillows” Shows Bed Frames First    | Final Client QA| Olivia Alvarez | J Vishal       | 2025-10-16T12:17:36  | -                    |
| Bug        | Helixian-ZIN-1241 | Accordion Section Styling Broken on Bed Frame PDPs (Mobile View)    | Done           | Olivia Alvarez | J Vishal       | 2025-10-16T12:11:02  | 2025-10-21T17:20:51  |
| Bug        | Helixian-ZIN-1239 | Sticky Add to Cart (ATC) Bar Not Functioning Properly on Mattresses  | Done           | Olivia Alvarez | J Vishal       | 2025-10-16T11:57:04  | 2025-10-22T04:13:11  |
| Bug        | Helixian-ZIN-1238 | Quick Buy Function Not Working Properly for Suzanne Bed Frame Products| Done           | Olivia Alvarez | J Vishal       | 2025-10-16T11:41:07  | 2025-10-21T17:20:37  |
| Bug        | Helixian-ZIN-1237 | Product Image Carousel Not Functional – Thumbnails & Arrows Missing | Done           | Olivia Alvarez | J Vishal       | 2025-10-16T11:27:49  | 2025-10-21T17:19:41  |
| Bug        | Helixian-ZIN-1235 | [Mobile] Color Swatches Getting Cut Off in Bed Frame Collection Page | Done           | Olivia Alvarez | J Vishal       | 2025-10-16T11:06:01  | 2025-10-21T17:18:58  |
| Task       | Helixian-ZIN-1233 | Review ADA Client Info Needed tickets                               | Done           | Olivia Alvarez | Daniel Carroll | 2025-10-14T11:52:24  | 2025-10-22T10:31:02  |
| Task       | Helixian-ZIN-1232 | Bazaarvoice Upgrade to V2                                          | Final Client QA| Olivia Alvarez | Daniel Carroll | 2025-10-14T11:35:44  | -                    |
| Task       | Helixian-ZIN-1231 | Options for exit intent pop up to minimize abandoned checkouts     | In Progress    | Daniel Carroll | Olivia Alvarez | 2025-10-14T11:34:25  | -                    |
| Task       | Zinus-ZIN-32       | Define detailed requirements and scope for FAQ page build         | To Do          | Mason Kim      | Mason Kim      | 2025-10-29T09:28:41  | -                    |
| Task       | Zinus-ZIN-31       | Fix Missing Tags in Page Type and Traffic Source Data in Shopify Reports | To Do      | Mason Kim      | J Vishal       | 2025-10-28T11:57:51  | -                    |
| Task       | Zinus-ZIN-30       | Notify InfoSec of ADA deployment completion                        | To Do          | Mason Kim      | Mason Kim      | 2025-10-28T10:42:54  | -                    |
| Task       | Zinus-ZIN-29       | User Access Review (UAR) – Y2025 (IT) for Mason-owned Systems      | To Do          | Mason Kim      | Mason Kim      | 2025-10-28T08:54:46  | -                    |
| Task       | Zinus-ZIN-28       | Extraction of All Zinus Project Tickets from Helixian Task Board    | To Do          | Bobby Hudgins | Mason Kim      | 2025-10-27T15:14:33  | -                    |
| Task       | Zinus-ZIN-23       | Create n8n workflow for automated Zinus Weekly Development Report   | In Progress    | Bobby Hudgins | Bobby Hudgins  | 2025-10-27T12:43:39  | -                    |
| Task       | Zinus-ZIN-21       | Share Invoices to Nhu                                              | Done           | Mason Kim      | Mason Kim      | 2025-10-22T11:30:11  | 2025-10-23T09:23:51  |
| Task       | Zinus-ZIN-17       | Replit invoice investigations and payment method update           | Done           | Mason Kim      | Mason Kim      | 2025-10-22T11:29:49  | 2025-10-23T09:23:48  |
| Task       | Zinus-ZIN-16       | Helixian add access to Shipping and Delivery settings             | Done           | Mason Kim      | Mason Kim      | 2025-10-21T10:22:45  | 2025-10-21T10:24:42  |
| Task       | Zinus-ZIN-15       | Remove Temporary AWS Outage Notice from Website                    | Done           | Mason Kim      | Mason Kim      | 2025-10-21T09:54:26  | 2025-10-21T09:56:58  |
| Task       | Zinus-ZIN-14       | Review and Verify Zinus.com Schema Attributes                      | Done           | Mason Kim      | Mason Kim      | 2025-10-21T09:41:30  | 2025-10-21T09:55:08  |
| Task       | Zinus-ZIN-13       | Follow-Up on VWO SmartCode Placement Issue with Secuvy            | Done           | Mason Kim      | Mason Kim      | 2025-10-21T09:30:47  | 2025-10-21T09:35:23  |
| Task       | Zinus-ZIN-12       | Provision ChatGPT Subscription for Zinus Canada Team              | Done           | Mason Kim      | Mason Kim      | 2025-10-21T09:20:39  | 2025-10-21T09:31:53  |
| Task       | Zinus-ZIN-11       | Joshua Onboarding & Technical Training Progress Tracking          | Done           | Mason Kim      | Mason Kim      | 2025-10-20T09:17:22  | 2025-10-21T09:04:49  |
| Task       | Zinus-ZIN-9        | Migrate zinus.com Domain to Cloudflare and Update Name Servers    | To Do          | Mason Kim      | Mason Kim      | 2025-10-19T18:44:22  | -                    |
| Task       | Zinus-ZIN-7        | Initiate Recruitment and Approval Process for Senior Shopify Dev  | To Do          | Mason Kim      | Mason Kim      | 2025-10-19T18:19:13  | -                    |
| Task       | Zinus-ZIN-5        | [Keetsa] Initiate ADA Compliance Project Budget Allocation        | To Do          | Mason Kim      | Mason Kim      | 2025-10-19T17:55:55  | -                    |
| Task       | Zinus-ZIN-4        | Proposal for Jira Task Board Subscription and Implementation Approval | Done          | Derek Choi     | Mason Kim      | 2025-10-19T11:31:30  | 2025-10-23T09:14:11  |
| Task       | Zinus-ZIN-3        | Evaluate Elevar Server-Side Tracking Implementation for Zinus    | To Do          | Mason Kim      | Mason Kim      | 2025-10-19T11:29:47  | -                    |
| Task       | Zinus-ZIN-2        | Evaluate Implementation of NoFraud App for Fraud Prevention       | Reviewing      | Mason Kim      | Mason Kim      | 2025-10-19T11:28:18  | -                    |
| Task       | Zinus-ZIN-1        | Facilitate One-Month Advance Payment to Helixian                  | Done           | Mason Kim      | Mason Kim      | 2025-10-19T11:27:38  | 2025-10-23T09:31:43  |
| Task       | Helixian-ZADA-638  | Unnecessary ARIA attributes - Quick buy button                    | To Do          | -              | Daniel Carroll | 2025-10-29T17:02:53  | -                    |
| Task       | Helixian-ZADA-637  | Apply fixes from audited accordion component                      | To Do          | -              | Daniel Carroll | 2025-10-29T17:02:47  | -                    |
| ...          | ...               | ...                                                               | ...            | ...            | ...            | ...                  | ...                  |

*Note: Appendix contains all tickets related to website development, ADA compliance, UI/UX, and schema work. Non-website tasks excluded.*

---

*End of report.*