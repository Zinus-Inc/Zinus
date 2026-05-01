# Keetsa Development Report – April 2026

---

## 1. Executive Summary

In April 2026, a total of **75 Jira tickets** related to Keetsa website development and maintenance were analyzed, comprising mainly **Tasks (63), Bugs (9), and Stories (3)**. The overall completion rate was **49%**, with **37 tickets marked Done**. Key outcomes include progress on major UI revamps such as the homepage, new landing pages, and brand color updates, alongside bug fixes addressing checkout, cart, and product page issues.

Major themes of work:
- UI/UX redesigns: homepage revamp, mattress size guide, brand color updates
- New page creation: Truemed Landing, Compare Mattress page
- Bug fixes improving cart behavior, checkout trust blocks, and PDP modals
- Operational tasks including SOP documentation and app installations

Bug tickets focused mainly on cart popup anomalies, collection page rendering issues, and product page modal display problems. Fixes restored cart visibility, improved content rendering on collections, and corrected modal layouts.

---

## 2. Incident Overview

| Category        | Description                                                    | Impact                                 |
|-----------------|----------------------------------------------------------------|--------------------------------------|
| Cart Popup      | "Shipping Protection" option disappears if cross-sell missing  | Checkout interruption risk             |
| Collection Page | 'Related Content' section renders empty heading (no links)    | Reduced trust and broken UI on PLPs    |
| PDP Modal       | Truemed modal body too narrow on mattress product pages       | Reduced readability in financing flow  |
| Collection Page | Incorrect 'From' price on variant-filtered product collections | Confusing pricing display               |
| Virtual Products| Route & Recycling Fee assigned to wrong retail store location | Fulfillment and reporting inaccuracies |

### Business Impact Summary
- Checkout interruptions reduce conversion potential
- Broken UI on collection pages erodes user trust
- Financing modal UI defects lower shopper clarity
- Pricing mismatches affect purchasing decisions
- Inventory and reporting affected by location misassignments

---

## 3. Immediate Response & Fixes

| Focus Area     | Actions Taken                                                         | Outcome                                 |
|----------------|----------------------------------------------------------------------|----------------------------------------|
| Cart Popup     | Investigation on shipping protection visibility tied to cross-sell   | ⏸ Issue remains on hold; planned fix needed |
| Collection UI  | Restored default link blocks for empty 'Related Content' sections    | ✅ Eliminated empty headings on collections |
| PDP Modal      | Scoped CSS override added to Truemed modal for proper width          | ✅ Modal content renders correctly      |
| Pricing Display| Updated collection pricing logic to show final discounted price      | ✅ Pricing reflects accurate variant cost |
| Inventory Tag  | Reviewed auto-fulfill configuration to correct virtual product location| ⏸ Under analysis, fix scheduled          |

---

## 4. UI/UX Improvement Highlights

| Feature Area                 | Before                                                         | After                                                       |
|-----------------------------|----------------------------------------------------------------|-------------------------------------------------------------|
| Homepage                    | Legacy layout with inconsistent spacing and placeholders       | New homepage structure aligned to Figma; layout foundations set |
| Truemed HSA/FSA Landing     | Not existing                                                   | New landing page created resembling Zinus with Keetsa branding |
| Brand Colors                | Outdated palette not fully applied                             | New brand color scheme implemented on Dev Store for testing  |
| Mattress Size Guide         | Old guide with limited responsive layout                      | Revamped page started; mobile layout exploration in progress |
| Checkout Trust Blocks       | Basic icons, text blocks lack visual polish                   | Redesigned icons and copy for Free Shipping, Trial, Warranty |
| Compare Mattress Page       | Not present                                                    | New page under development with interactive selectors        |
| Collection Pricing Display  | Shows "From price" based on lowest variant                     | Updated to show final discounted price, more transparent     |

---

## 5. On-Hold Items & Action Plan

| Key               | Description                                                   | Next Step                                | Owner           |
|-------------------|---------------------------------------------------------------|-----------------------------------------|-----------------|
| Helixian-KEET-18  | Cart popup "Shipping Protection" disappears when no cross-sell | Investigate fallback display logic       | Daniel Carroll  |
| Helixian-KEET-8   | Issue adding different mattress sizes removes first size      | Expand test cases; prepare fix           | Unassigned      |
| Helixian-KEET-11  | Home page hero text contrast insufficient                      | Redesign overlay or text styling         | Bobby Hudgins   |
| Helixian-KEET-7   | Collection page pricing badges (discount highlights)           | Coordinate A/B test on badge positioning | Bobby Hudgins   |
| Zinus-KEET-243    | Mattress quiz capabilities development                         | Requirement gathering and prototype      | Olivia Alvarez  |
| Zinus-KEET-332    | Truemed modal width issue fix post-deploy validation          | Monitor after recent fix deployment      | Bobby Hudgins   |
| Zinus-KEET-244+   | Multiple operational SOP documentation tasks                   | Complete drafting and stakeholder review| Mason Kim       |
| Zinus-KEET-209, 208, 207 | Shipping config and order mod sync with SAP                | Continue SAP integration improvements    | Bobby Hudgins   |

---

## 6. Appendix

| Type      | Key               | Summary                                                                    | Status          | Assignee         | Reporter         | Created             | Resolved            |
|-----------|-------------------|-----------------------------------------------------------------------------|-----------------|------------------|------------------|---------------------|---------------------|
| Bug       | Helixian-KEET-18  | Cart popup — “Shipping Protection” option disappears when cross-sell unavailable | ⏸ On Hold       | Daniel Carroll   | Bobby Hudgins    | 2025-10-08T08:48:40  | -                   |
| Bug       | Helixian-KEET-8   | Issue when adding different sizes of same product to cart                   | ⏸ On Hold       | -                | Olivia Alvarez   | 2025-09-26T15:32:51  | -                   |
| Bug       | Zinus-KEET-343    | Collection 'Related Content' section renders empty heading (0 blocks)        | ✅ Done          | Bobby Hudgins    | Joshua Cortez    | 2026-04-21T05:39:08  | 2026-04-27T11:21:40  |
| Bug       | Zinus-KEET-336    | Creat New Bedframe Template                                                  | ✅ Done          | Bobby Hudgins    | J Vishal        | 2026-04-10T09:55:41  | 2026-04-14T05:03:04  |
| Bug       | Zinus-KEET-335    | Remove "From" from the Twin Size Bedframe Collection page                   | ✅ Done          | Bobby Hudgins    | J Vishal        | 2026-04-09T13:02:42  | 2026-04-14T05:02:55  |
| Bug       | Zinus-KEET-322    | Checkout blocks: enhance visual display                                     | ✅ Done          | Bobby Hudgins    | Olivia Alvarez   | 2026-03-26T08:35:46  | 2026-04-06T11:15:03  |
| Bug       | Zinus-KEET-240    | Virtual Products Incorrectly Assigned to Retail Store Location              | - Final Client QA| Olivia Alvarez   | Mason Kim       | 2026-02-05T12:40:58  | -                   |
| Bug       | Zinus-KEET-228    | Cart popup — “Shipping Protection” option disappears                        | ⏸ On Hold       | -                | Mason Kim       | 2026-02-04T12:04:08  | -                   |
| Bug       | Zinus-KEET-19     | Migrate keetsa.com Domain to Cloudflare and Update Name Servers            | To Do           | -                | Mason Kim       | 2025-10-19T18:44:59  | -                   |
| Story     | Zinus-KEET-335    | Data Discrepancy between Shopify & GA4 Data                                | In Progress     | Bobby Hudgins    | Juhi Sagar Gupta| 2026-04-08T18:50:23  | -                   |
| Story     | Zinus-KEET-324    | Add size guide on mattress PDP page                                        | Done            | Bobby Hudgins    | Juhi Sagar Gupta| 2026-03-27T11:00:14  | 2026-04-06T11:16:26  |
| Story     | Zinus-KEET-342    | [P0] Collection 'Related Content' section renders empty heading            | Done            | Bobby Hudgins    | Joshua Cortez   | 2026-04-21T05:39:08  | 2026-04-27T11:21:40  |
| Task      | Helixian-KEET-26  | Keetsa Patrol ADA Review                                                   | To Do           | -                | Bill Dzadon     | 2026-01-15T14:04:56  | -                   |
| Task      | Helixian-KEET-11  | Home page hero text lacks sufficient contrast                             | ⏸ On Hold       | Bobby Hudgins    | Bobby Hudgins   | 2025-10-07T11:24:22  | -                   |
| Task      | Helixian-KEET-7   | Collection Page Pricing & Badges                                          | ⏸ On Hold       | Bobby Hudgins    | Daniel Carroll  | 2025-09-23T13:00:47  | -                   |
| Task      | Zinus-KEET-346    | Create Truemed (HSA/FSA) Landing Page                                     | In Progress     | Bobby Hudgins    | J Vishal       | 2026-04-29T12:53:14  | -                   |
| Task      | Zinus-KEET-343    | Revamp Homepage                                                           | In Progress     | Bobby Hudgins    | J Vishal       | 2026-04-21T13:58:33  | -                   |
| Task      | Zinus-KEET-344    | Create New Compare Mattress Page                                          | To Do           | Bobby Hudgins    | J Vishal       | 2026-04-23T08:42:12  | -                   |
| Task      | Zinus-KEET-339    | Update Collection Page Pricing to Show Final Discounted Price            | Done            | Bobby Hudgins    | J Vishal       | 2026-04-15T10:01:49  | 2026-04-20T10:08:02  |
| Task      | Zinus-KEET-240    | Fix Assignments of Virtual Products to Correct Location                  | Final Client QA | Olivia Alvarez   | Mason Kim      | 2026-02-05T12:40:58  | -                   |
| Task      | Zinus-KEET-321    | Couponing for Keetsa.com: Better automation vs manual intervention       | In Progress     | Bobby Hudgins    | Olivia Alvarez | 2026-03-26T08:33:48  | -                   |
| Task      | Zinus-KEET-261    | Review all shopify users and assign correct permissions                  | In Progress     | Olivia Alvarez   | Olivia Alvarez | 2026-02-19T09:18:28  | -                   |
| Task      | Zinus-KEET-247    | [Ops] Keetsa Business SOP Documentation                                  | To Do           | Mason Kim        | Mason Kim      | 2026-02-16T14:08:39  | -                   |
| Task      | Zinus-KEET-266+   | Multiple ops and tech debt tickets                                       | Various         | Various          | Various        | Various             | -                   |

*(Due to volume, only key tickets included here; full list available upon request.)*

---