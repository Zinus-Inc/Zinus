# Zinus Development Report – October 4, 2025 (th week)

---

## 1. Executive Summary

This week, a total of **199 Jira tickets** related to Zinus website development were analyzed. The breakdown by issue type is:

- **Task:** 129  
- **Bug:** 12  
- **Others (including ADA tasks, Third Party, Revisions, etc.):** 58  

The overall completion rate for website-related tickets is approximately **38%** (“Done” status), reflecting ongoing active development and QA processes.

Key focus areas included:  
- Extensive ADA compliance improvements and accessibility audits across the website.  
- Multiple UI/UX bug fixes impacting product detail pages, collections, and sticky UI components.  
- Technical audits, schema reviews, and backend data consistency validations (Shopify schema, tagging issues).  
- Preparations for FAQ section launch and refinement of search and quick buy functionality.

Bug tickets primarily addressed:  
- Visual and functional inconsistencies in product carousels and modals (image carousel arrows, tooltips).  
- Mobile and accessibility improvements such as accordion styling, sticky add-to-cart bar issues, and color swatch display on collections.  
- Checkout performance and interactive element responsiveness.

---

## 2. Incident Overview

| Category               | Description                                              | Impact                                     |
|------------------------|----------------------------------------------------------|--------------------------------------------|
| Bed Frame PDP          | Accordion section styling broken on mobile view          | Degraded mobile UX on bed frame product pages |
| Mattress PDP           | Sticky Add to Cart bar not functioning properly           | Potential user frustration and lost conversions |
| Bed Frame Quick Buy    | Quick Buy function redirects to PDP instead of in-modal updates | Interrupts quick checkout flow             |
| Product Image Carousel | Thumbnails do not update main image; arrows missing       | Reduced product browsing effectiveness     |
| Bed Frame Swatches     | Color swatches cut off on mobile devices                  | Visual clipping reduces product clarity    |
| PDP Buy Full Set       | Persistent color tooltip does not dismiss                  | UI clutter and potential confusion         |
| Mobile PDP Variant UI  | Variant selector border inconsistent                       | Visual inconsistency impacts UX coherence  |

**Business Impact Summary:**  
- Mobile and PDP UX issues hinder smooth purchase experience and may reduce conversions.  
- Visual inconsistencies and sticky bar glitches risk shopper frustration.  
- Checkout performance problems can increase abandonment rates.

---

## 3. Immediate Response & Fixes

| Focus Area            | Actions Taken                                                                             | Outcome                                           |
|-----------------------|------------------------------------------------------------------------------------------|--------------------------------------------------|
| Bed Frame PDP Accordion| Fixed distorted accordion borders and alignment issues on mobile                         | ✅ Improved mobile PDP readability and UX        |
| Sticky ATC Bar        | Corrected sticky Add to Cart bar styling and behavior abnormalities                       | ✅ Ensured consistent sticky bar behavior        |
| Quick Buy Modal       | Resolved variant selection logic to prevent unwanted redirects                           | ✅ Enabled seamless variant selection in modal   |
| Image Carousel        | Repaired carousel functionality for thumbnail clicks and arrow navigation                | ✅ Restored full image browsing capabilities     |
| Collection Page Swatches | Adjusted mobile layout to prevent color swatch clip-off                               | ✅ Fully visible, centered swatches               |
| Tooltip Behavior      | Fixed persistent tooltip display to dismiss correctly after interaction                  | ✅ Reduced UI clutter on PDP upsells              |
| Mobile Variant UI     | Standardized variant selector border styles across breakpoints                          | ✅ Enhanced UI consistency on mobile PDP          |

---

## 4. UI/UX Improvement Highlights

| Feature Area                   | Before                                                             | After                                                         |
|-------------------------------|-------------------------------------------------------------------|---------------------------------------------------------------|
| Accordion Sections (Bed Frames)| Overlapping borders and misaligned content on mobile             | Clean borders and well-aligned accordion sections             |
| Sticky Add to Cart Bar         | Black bar glitches and inconsistent stickiness                    | Stable and consistent sticky bar behavior                     |
| Quick Buy Modal                | Redirects out of modal when switching variants                     | Variant selection updates dynamically inside quick buy modal  |
| Product Image Carousel         | Arrows missing; thumbnails not updating main image                 | Fully functional carousel with visible arrows and thumbnail sync |
| Color Swatches (Mobile)        | Swatches cut off on smaller screens                               | Fully visible and centered color swatches on all device sizes |
| Buy Full Set Tooltip           | Tooltip stuck visible after selection                             | Tooltip now hides appropriately after interaction             |
| Mobile PDP Variant Styling     | Border inconsistencies                                            | Unified styling across devices                                 |

---

## 5. On-Hold Items & Action Plan

| Key             | Description                                             | Next Step                                     | Owner          |
|-----------------|---------------------------------------------------------|----------------------------------------------|----------------|
| Helixian-ZIN-1255 | Discrepancy between Shopify sales reports & paid media data | Investigate tracking and UTM tagging issues  | Mason Kim      |
| Helixian-ZIN-1254 | VWO new code call                                       | Define scope and integration plan             | Daniel Carroll |
| Helixian-ZIN-1253 | Support/FAQ expansion + assembly instruction search     | Finalize design and confirm feasibility       | Daniel Carroll |
| Helixian-ZIN-1203 | Alt text not updating properly for blog images         | Investigate and implement proper alt text management | Mason Kim  |
| Helixian-ZIN-1177 | Google Search Console - Review snippets issues          | Prioritize schema fixes post-audit            | Daniel Carroll |
| Helixian-ZIN-1181 | Implement JSON-LD for BazaarVoice reviews               | Plan implementation and validation            | Daniel Carroll |
| Helixian-ZIN-1116 | Research and plan for Palo Alto upgrade                  | Risk assessment and upgrade strategy          | Daniel Carroll |
| Helixian-ZIN-1072 | Slow loading on checkout shipping protection section    | Optimize widget performance                    | Daniel Carroll |

---

## 6. Appendix

| Type    | Key                 | Summary                                                                                   | Status          | Assignee          | Reporter       | Created               | Resolved               |
|---------|---------------------|-------------------------------------------------------------------------------------------|-----------------|-------------------|----------------|-----------------------|------------------------|
| Task    | Helixian-ZIN-1255   | Discrepancy Between Shopify Sales Reports and Paid Media Data                            | To Do           | Mason Kim         | J Vishal       | 2025-10-31T11:26:43   | -                      |
| Task    | Helixian-ZIN-1254   | VWO new code call                                                                        | To Do           | Daniel Carroll    | Bill Dzadon    | 2025-10-30T09:55:01   | -                      |
| Task    | Helixian-ZIN-1253   | Zinus Support / FAQ Expansion + Assembly Instruction Search Page                         | To Do           | Daniel Carroll    | Mason Kim      | 2025-10-29T12:24:04   | -                      |
| Task    | Helixian-ZIN-1251   | Add Color Tooltip to Quick View Modal                                                   | Final Client QA  | Olivia Alvarez    | Yongwan Song   | 2025-10-22T16:09:36   | -                      |
| Task    | Helixian-ZIN-1250   | Shopify Product Schema Audit & Validation for Zinus.com                                 | In Progress     | Daniel Carroll    | Mason Kim      | 2025-10-22T14:53:47   | -                      |
| Task    | Helixian-ZIN-1248   | PDP video captions incorrect — shows “thank you” despite music-only audio               | To Do           | J Vishal          | Bobby Hudgins  | 2025-10-22T09:20:00   | -                      |
| Task    | Helixian-ZIN-1245   | Bazaarvoice V2 Activation and Syndication Impact Verification                          | Final Client QA  | Olivia Alvarez    | Mason Kim      | 2025-10-21T12:36:43   | -                      |
| Task    | Helixian-ZIN-1242   | Reset Password form – required field not indicated                                      | Done            | Olivia Alvarez    | Bobby Hudgins  | 2025-10-14T05:35:51   | 2025-10-21T17:17:47    |
| Bug     | Helixian-ZIN-1240   | PDP → “Buy Full Set” color tooltip persists after click/hover                          | Done            | Olivia Alvarez    | Bobby Hudgins  | 2025-10-14T05:24:33   | 2025-10-21T17:17:14    |
| Bug     | Helixian-ZIN-1237   | Product Image Carousel Not Functional — Thumbnails Not Reflecting in Main Image & Arrows Missing | Done    | Olivia Alvarez    | Bobby Hudgins  | 2025-10-16T11:27:49   | 2025-10-21T17:19:41    |
| Bug     | Helixian-ZIN-1238   | Quick Buy Function Not Working Properly for Suzanne Bed Frame Products                  | Done            | Olivia Alvarez    | Bobby Hudgins  | 2025-10-16T11:41:07   | 2025-10-21T17:20:37    |
| Bug     | Helixian-ZIN-1239   | Sticky Add to Cart (ATC) Bar Not Functioning Properly on Mattresses PDP's              | Done            | Olivia Alvarez    | Bobby Hudgins  | 2025-10-16T11:57:04   | 2025-10-22T04:13:11    |
| Task    | Zinus-ZIN-31        | Fix Missing Tags in Page Type and Traffic Source Data in Shopify reports               | To Do           | Mason Kim         | J Vishal       | 2025-10-28T11:57:51   | -                      |
| Task    | Zinus-ZIN-29        | User Access Review (UAR) – Y2025 (IT) for Mason-owned Systems                          | To Do           | Mason Kim         | Mason Kim      | 2025-10-28T08:54:46   | -                      |
| Task    | Zinus-ZIN-28        | Extraction of All Zinus Project Tickets from Helixian Task Board and Migration to Zinus Jira Board | To Do | Bobby Hudgins    | Bobby Hudgins  | 2025-10-27T15:14:33   | -                      |
| Task    | Zinus-ZIN-23        | Create n8n workflow for automated Zinus Weekly Development Report generation            | In Progress     | Bobby Hudgins     | Bobby Hudgins  | 2025-10-27T12:43:39   | -                      |
| Task    | Zinus-ZIN-18        | Share Invoices to Nhu                                                                  | Done            | Mason Kim         | Mason Kim      | 2025-10-22T11:30:11   | 2025-10-23T09:23:51    |
| Task    | Zinus-ZIN-17        | Replit invoice investigations and payment method update                               | Done            | Mason Kim         | Mason Kim      | 2025-10-22T11:29:49   | 2025-10-23T09:23:48    |
| Task    | Zinus-ZIN-16        | Helixian add access to Shipping and Delivery settings for our collaborator account     | Done            | Mason Kim         | Mason Kim      | 2025-10-21T10:22:45   | 2025-10-21T10:24:42    |
| Task    | Zinus-ZIN-15        | Remove Temporary AWS Outage Notice from Website                                       | Done            | Mason Kim         | Mason Kim      | 2025-10-21T09:54:26   | 2025-10-21T09:56:58    |
| Task    | Zinus-ZIN-14        | Review and Verify Zinus.com Schema Attributes                                          | Done            | Mason Kim         | Mason Kim      | 2025-10-21T09:41:30   | 2025-10-21T09:55:08    |

*Note:* The above appendix lists key tickets selected as website development related, sorted by type and status. Numerous Helixian-Zinus ADA tasks (accessibility remediation) and older tickets in varied statuses are also present but omitted here for brevity.

---