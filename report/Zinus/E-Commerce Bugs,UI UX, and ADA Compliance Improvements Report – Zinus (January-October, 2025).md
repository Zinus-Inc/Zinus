# Zinus Development Report – October 2025

---

## 1. Executive Summary

This report analyzes **104 Jira tickets** related to the Zinus website development from January through October 2025.  
- **Ticket types:**  
  - 84 Tasks  
  - 20 Bugs  
- **Completion rate:** 79 completed tickets (76%) marked “Done,” with some in “In Progress,” “Final Client QA,” or “On Hold.”  
- **Key outcomes:**  
  - Resolved multiple UX and accessibility issues on product detail and collection pages.  
  - Addressed critical bugs impacting mobile usability and product selection flows.  
  - Advanced schema validation and SEO improvements for product data.  
  - Added performance monitoring with MS Clarity reinstatement.  
  - Extended site support with new FAQ and assembly instruction search planning.  
  - Improved merchandising and announcement bar functionality.  
- **Major themes:**  
  - UX/UI fixes for PDPs and mobile navigation  
  - Accessibility compliance (ADA/WCAG) enhancements  
  - Shopify schema auditing and tagging corrections  
  - Deployment and release management  
  - Chatbot/AI FAQ and advanced search readiness  
- **Bug summary:**  
  - Visual and functional bugs in carousel, color swatches, tooltips, and modals (fixed).  
  - Mobile-specific upsell and sticky add-to-cart bar issues resolved.  
  - Menu clicks and accordion styles corrected to improve navigation and readability.  
  - Tooltip visibility and video caption accuracy fixed for better user experience.

---

## 2. Incident Overview

| Category          | Description                                                  | Impact                                              |
|-------------------|--------------------------------------------------------------|-----------------------------------------------------|
| PDP UX            | Accordion section styling broken on bed frame PDPs (mobile) | Poor mobile UX, content visibility issues            |
| Sticky ATC Bar    | Sticky Add to Cart bar malfunctioning on mattress pages      | Purchase friction, potential lost conversions        |
| Quick Buy Modal   | Quick Buy modal on Suzanne bed frame redirects incorrectly   | Confusing flow, broken selection within modal        |
| Product Carousel  | Image carousel does not update main image; arrows missing    | Degraded product browsing experience                  |
| Color Swatches    | Color swatches missing or cut off on product/collection pages| Reduced visual information; poor product choice      |
| Tooltip Stuck     | Buy Full Set color tooltip remains visible post-click        | UI obstruction, user confusion                        |
| Mobile Upsell     | Upsell pop-up broken on mobile add-to-cart                    | Interrupted purchase upsell flow                      |
| Chat Pop-up       | Chat pop-up misaligned on mobile (center-right instead bottom-right) | Inconsistent chat access affecting support requests|

### Business Impact Summary
- Mobile UX inconsistencies disrupting shopping flow  
- Increased cart and PDP confusion potentially lowering conversion rates  
- Visual glitches reducing customer trust and product clarity  
- Accessibility issues limiting compliance and site usability  

---

## 3. Immediate Response & Fixes

| Focus Area             | Actions Taken                                                          | Outcome                                          |
|------------------------|------------------------------------------------------------------------|-------------------------------------------------|
| PDP Accordion Styling  | Corrected border rounding and alignment on accordion mobile views      | ✅ Improved readability and UX consistency       |
| Sticky ATC Bar         | Fixed black bar overlay and updated sticky functionality on mattress PDPs | ✅ Restored expected sticky add-to-cart behavior |
| Quick Buy Modal        | Altered selection logic to prevent redirect; allow in-modal updates    | ✅ Streamlined variant selection without page reload |
| Image Carousel         | Restored thumbnail clicks and re-enabled carousel arrows               | ✅ Enhanced visual navigation on PDPs            |
| Color Swatches         | Updated style for color fill visibility and fixed mobile cut-offs      | ✅ Accurate color representation                   |
| Tooltip Behavior       | Fixed tooltip dismissal on mouseout/blur and click for Buy Full Set    | ✅ Prevented UI blockage by stuck tooltips       |
| Mobile Upsell          | Fixed upsell pop-up flow for mobile add-to-cart                        | ✅ Usable upsell experience on mobile             |
| Chat Pop-up Position   | Adjusted chat pop-up position on mobile to bottom-right consistent with desktop | ✅ Consistent chat UI placement                  |

---

## 4. UI/UX Improvement Highlights

| Feature Area                | Before                                                        | After                                                      |
|-----------------------------|---------------------------------------------------------------|------------------------------------------------------------|
| Announcement Bar Clickability | Redirect only worked on CTA button                            | Entire bar clickable with enable/disable toggle             |
| Homepage Hero Banner        | Missing preload on updated desktop and mobile banners         | Preload added for better performance and user perception    |
| Mobile Menu Interaction     | Images unclickable; only text links worked on mobile menu     | Fixed clickable areas ensuring entire items responsive       |
| Search Functionality (Mobile)| Search bar did not accept input or close                        | Search bar fully functional with close button operational   |
| Collection Page Badging     | Shared footer section for multiple collection templates        | Unique footer sections per template for content control     |
| PDP “Write a Review” Modal  | Broken/missing product images, overlapping title text          | Correct images and clean header text displayed               |
| Pricing Display             | Incorrect upgrade price shown for mattress variants            | Fixed calculation and display of accurate upgrade pricing   |
| Contrast & Font Consistency | Fonts and contrast varied, affecting ADA compliance            | Font styling aligned site-wide with proper contrast          |
| Mobile PDP Variant Selector | Variant selector UI inconsistent borders                       | Uniform styling ensuring consistent variant selection UI    |

---

## 5. On-Hold Items & Action Plan

| Key               | Description                                              | Next Step                                | Owner          |
|-------------------|----------------------------------------------------------|-----------------------------------------|----------------|
| Helixian-ZIN-1181 | Implement JSON-LD from BazaarVoice GSC Review issues     | Finalize JSON-LD schema and deploy       | Daniel Carroll |
| Helixian-ZIN-1177 | Google Search Console Review Snippet Eligibility Issue   | Investigate missing fields and fix GSC errors | Daniel Carroll |
| Helixian-ZIN-1253 | Zinus Support / FAQ Expansion + Assembly Instruction Search Page | Review scope, timeline, and technical feasibility | Daniel Carroll |

---

## 6. Appendix

| Type  | Key              | Summary                                                          | Status          | Assignee        | Reporter        | Created             | Resolved            |
|-------|------------------|------------------------------------------------------------------|-----------------|-----------------|-----------------|---------------------|---------------------|
| Task  | Helixian-ZIN-1253| Zinus Support / FAQ Expansion + Assembly Instruction Search Page | To Do           | Daniel Carroll  | Mason Kim       | 2025-10-29 12:24:04 | -                   |
| Task  | Helixian-ZIN-1252| Deployment                                                       | Done            | Daniel Carroll  | Daniel Carroll  | 2025-10-28 09:41:58 | 2025-10-28 12:09:20 |
| Task  | Helixian-ZIN-1251| Add Color Tooltip to Quick View Modal                           | Final Client QA | Olivia Alvarez  | Yongwan Song    | 2025-10-22 16:09:36 | -                   |
| Task  | Helixian-ZIN-1250| Shopify Product Schema Audit & Validation for Zinus.com        | In Progress     | Daniel Carroll  | Mason Kim       | 2025-10-22 14:53:47 | -                   |
| Task  | Helixian-ZIN-1249| Restock “Notify Me” form allows submission with empty/invalid email | Done         | Olivia Alvarez  | Bobby Hudgins  | 2025-10-22 09:27:20 | 2025-10-27 15:55:10 |
| Bug   | Helixian-ZIN-1241| Accordion Section Styling Broken on Bed Frame PDPs (Mobile)   | Done            | Olivia Alvarez  | J Vishal       | 2025-10-16 12:11:02 | 2025-10-21 17:20:51 |
| Bug   | Helixian-ZIN-1239| Sticky Add to Cart (ATC) Bar Not Functioning on Mattresses PDPs | Done          | Olivia Alvarez  | J Vishal       | 2025-10-16 11:57:04 | 2025-10-22 04:13:11 |
| Bug   | Helixian-ZIN-1238| Quick Buy Function Not Working Properly for Suzanne Bed Frame   | Done            | Olivia Alvarez  | J Vishal       | 2025-10-16 11:41:07 | 2025-10-21 17:20:37 |
| Bug   | Helixian-ZIN-1187| Chat Pop-up Misaligned on Desktop and Mobile                    | Done            | Olivia Alvarez  | J Vishal       | 2025-09-22 08:49:34 | 2025-09-26 16:39:48 |
| Bug   | Helixian-ZIN-1176| URGENT Mobile Issue: Upsell component broken                    | Done            | Olivia Alvarez  | Olivia Alvarez | 2025-09-11 12:10:42 | 2025-09-11 16:47:45 |
| Task  | Zinus-ZIN-31     | Fix Missing Tags in Page Type and Traffic Source Data in Shopify reports | To Do      | Mason Kim      | J Vishal       | 2025-10-28 11:57:51 | -                   |
| Task  | Zinus-ZIN-30     | Notify InfoSec of ADA deployment completion                     | To Do           | Mason Kim       | Mason Kim       | 2025-10-28 10:42:54 | -                   |
| Task  | Zinus-ZIN-28     | Extraction of All Zinus Project Tickets from Helixian Task Board and Migration to Zinus Jira Board | To Do | Bobby Hudgins | Mason Kim | 2025-10-27 15:14:33 | -          |
| Task  | Helixian-ZIN-1234| [Mobile] Search Bar Not Functional — Unable to Type or Close    | Done            | J Vishal       | J Vishal       | 2025-10-16 07:51:24 | 2025-10-16 08:19:52 |
| ...   | ...              | ...                                                              | ...             | ...             | ...             | ...                 | ...                 |

*Complete ticket list is available with all metadata upon request.*

---