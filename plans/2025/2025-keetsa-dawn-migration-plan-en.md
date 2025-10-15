## Keetsa Shopify Dawn Theme Migration Plan (Draft)
- Date: 2025-10-15
- Author: Mason Kim

## Document Overview

- **Purpose**: Migrate the existing Keetsa custom Shopify theme to the official Dawn theme to improve maintainability, performance, accessibility (ADA), and SEO, while standardizing app compatibility.
- **Version**: v0.1 (Draft)

## 1. Overview / Background

- Keetsa has operated a custom theme for a long time, and technical debt has accumulated. Introducing new features, optimizing accessibility/performance, and maintaining app compatibility incur recurring costs.
- Dawn, Shopify’s reference theme, implements Online Store 2.0 standards (Sections Everywhere, JSON templates, App Blocks), providing better maintainability, performance, and accessibility defaults.
- This project restructures the theme on top of Dawn to improve performance/accessibility/SEO and to automate repetitive operational work.

### Current Theme Status

- Theme name: Slate
- Current version in use: 0.11.0
- Latest Slate version: 1.0 (currently beta, not officially released)
- Author: Shopify
- Docs: [Shopify Slate Docs](https://shopify.github.io/slate/)
- Support/Repository: [Shopify Slate GitHub](https://github.com/Shopify/slate)
- Notes:
    - Our Slate version (0.11.0) is the last stable version prior to the beta 1.0 line.
    - Slate 1.0 is in beta (some feature/structural changes), not officially released. Our theme uses a pre–Online Store 2.0 Slate structure (no Sections Everywhere, etc.).
    - There are functional and architectural gaps versus the latest (beta 1.0). Both lines are archived by Shopify (end of official support).

### Why migrate to Dawn

- **Most important reason**: With the introduction of the section-based theme architecture and Online Store 2.0, Shopify ended support for Slate and designated Dawn as the official reference theme. For long-term maintenance and feature compatibility, migrating to Dawn is the standard path. (Ref: Slate README archive notice and “Dawn is Shopify’s reference theme”.)

- Slate is a developer starter framework and is archived (no new features/security updates). There is no auto-update mechanism, and the legacy build chain (webpack/ES6/Sass) increases maintenance costs.
- Dawn is the reference theme that fully follows the OS 2.0 standard. JSON templates, Sections Everywhere, and App Blocks/Theme App Extensions provide strong structural compatibility and extensibility.
- Performance/accessibility: Dawn’s HTML‑first and minimal‑JS approach with progressive enhancement improves Core Web Vitals potential and bakes in A11y patterns (ARIA/focus), making ADA compliance easier.
- App compatibility/maintenance: App Blocks enable install/remove without forking the theme and minimize third‑party code injection. Shopify continuously updates Dawn, making best practices easy to track.
- Tooling alignment: Shopify CLI, GitHub integration, and Theme Check align naturally, shortening release cycles and reducing regression risk.
- Business effects: Shorter change lead time, performance/SEO improvements (structured data, consistent meta), and operational stability help avoid degradation and enable improvement in conversion/traffic metrics.
- Migration implications: With section/template restructuring (JSON template architecture), a clear Metafield schema, redirect strategy, data migration automation, and QA/rollback plans, risks can be kept manageable.

#### References
- Slate Docs: https://shopify.github.io/slate/
- Slate GitHub (archived): https://github.com/Shopify/slate
- Dawn Reference: https://github.com/Shopify/dawn

## 2. Goals & Success Criteria (KPI)

- **Timeline**: Target production cutover by early February 2026, aiming to release sooner if possible (zero downtime or ≤ 30 minutes read‑only mode)
- **Web Performance (Core Web Vitals, mobile P75, current observed)**: LCP P75 2700ms, INP P75 112ms, CLS P75 0.24
- **Accessibility (ADA/WCAG 2.1 AA)**: ≥ 95% pass on automated scans (Allyant/axe), 100% pass for key keyboard/screen reader scenarios
- Note: Accessibility targets carry non-trivial cost and resourcing; confirm in review sessions.

## 3. Code Audit Findings (Current Slate Theme, as of 2025‑10‑15)

> This section documents “what to replace/keep/remove” when migrating to Dawn. It summarizes current Slate code/structure/third‑party integrations to identify risks and inform mapping decisions.

- **Cart / Side Cart**: Implemented with `CartJS + rivets`. CartJS init in `layout/theme.liquid`, side cart section loads.
  - Refs: `layout/theme.liquid` (CartJS init), sidecart section, script injection
  - Refs: `sections/cart-sidecart.liquid` (rivets bindings, qty/remove, Route widget)
- **PDP Customization**: Heavy reliance on `product.metafields["global"]`. Many blocks (Features/Specs/Icons/Side‑by‑Side/Reviews/Related) controlled by metafields. Slick‑based gallery.
  - Ref: `sections/product.liquid` (keys: Show‑Features‑Block, Specs‑*, Icons‑*, Side‑by‑Side‑*, Related‑Products‑Handles, etc.)
- **Third‑party Integrations / Tagging**:
  - Reviews (Yotpo): Widget and global script manually injected.
  - Recommendations (LimeSpot): Snippet `snippets/limespot.liquid` included across templates; removal requires code cleanup.
  - Page builder (GemPages): `/templates/page.gem-*.liquid` and custom header/footer scripts present.
  - Tagging/marketing scripts:
    - Managed via GTM container; also gtag (Google Ads), Bing UET, Pinterest, Merchant Center widget, Tidio chatbot, Seguno banners.
    - Some tags injected via GTM, others hardcoded in `<head>`/`<body>`, causing inconsistency.
  - Actual insertion points:
    - Many scripts in `layout/theme.liquid`, plus `snippets/limespot.liquid`, `layout/theme.gempages.*.liquid`, etc.
- **Checkout (Shopify Plus)**: `layout/checkout.liquid` customized. Recycling fee logic (by state/product type) present (some paths disabled).
  - Refs: `snippets/plus_checkout_extra_fees.liquid`, `snippets/plus_california_fee.liquid`
- **SEO/meta**: Open Graph/Twitter via `snippets/social-meta-tags.liquid`. JSON‑LD snippets absent; markup largely microdata/meta.
- **A11y/Performance JS**: `assets/custom.js` includes focus trap/keyboard handling. Uses external `tabbable`/`focus-trap` UMD. High Slick/jQuery dependency.

## 4. Dawn Mapping Guide

> A one‑look guide to “what we use today (Slate) vs how to build it in Dawn.”

### 4.1 Template / Section Mapping (Current → Dawn, highlights)

| Area | Current (Slate) | In Dawn | Reason/Effect | Notes |
|---|---|---|---|---|
| Layout / Header / Footer | `layout/theme.liquid`, `sections/header.liquid`, `sections/footer.liquid` | Use default `header`, `footer`, `announcement-bar` | Editable in Theme Editor, less custom code | Top banner via multiple `announcement-bar`s or a `custom-top-banner` |
| Home (Marketing) | `hero.liquid` / `icon_*` / `image_*` / `featured_*` / `featured_reviews.liquid` / `dynamic-collections.liquid` | `image-banner` (or `slideshow`) / `multicolumn` / `image-with-text` (or `-columns`) / `featured-collection` / Yotpo App Block / keep custom section | Covered by core sections; App Block toggles | Keep `dynamic-collections` with metafield/settings |
| PDP | Single `sections/product.liquid` mixing gallery/specs/icons/reviews (Slick, many metafields) | `main-product` + auxiliary sections (`collapsible-content`, `image-with-text`, `icons`, `product-recommendations`) + custom (`keetsa-product-*`) as needed | Modularization → easier maintenance/testing; better A11y/perf | Bind metafields via Dynamic source |
| Cart / Side Cart | `sections/cart-sidecart.liquid` + CartJS/rivets | `cart-drawer`/`cart-notification` + Section Rendering API | Drop external libs, stability/perf ↑ | Route/Affirm/free‑shipping hints inside drawer blocks |
| GemPages | `theme.gempages.*.liquid` with direct scripts | App Embed/Blocks | Reduce conflict/maintenance risk | Use app’s Dawn‑compatible blocks |
| Apps / Scripts (Tagging) | Yotpo/LimeSpot snippets, gtag/Bing/Merchant mixed | App Blocks/Embeds + GTM consolidation | Toggle‑based mgmt, fewer conflicts | Keep only essential meta in `<head>` |
| Metafield Schema | Many `product.metafields["global"]` keys | Consolidate to `keetsa.*` (`keetsa.pdp.*`, `keetsa.flags.*`) | Self‑descriptive and editor‑friendly | Use JSON for repeatables |
| Checkout (Plus) | `layout/checkout.liquid` customization | Checkout Extensibility + Cart Transform (Functions) | Official extensibility, maintainability ↑ | Route/tagging via Checkout UI Extensions |
| SEO / JSON‑LD | OG/Twitter snippet, no JSON‑LD | Dawn built‑in JSON‑LD + consistent meta | Remove duplicates, standardize | Enables ratings, etc. |
| A11y / Performance | jQuery/Slick/focus‑trap dependency | Dawn components + deferred/conditional loads | Improve CWV/ADA | Include image/font optimization |

- Execution by category (concrete steps)

- Layout / Header / Footer
  - Layout: Move hardcoded scripts from `layout/theme.liquid` to App Embeds/Blocks or GTM. Keep `{{ content_for_header }}`.
  - Header: Configure Dawn `header` in the editor (logo/menu/icons). Link existing navigation menus.
  - Top banner: Use multiple `announcement-bar`s or add a simple `Keetsa Top Banner` custom section.
  - Footer: Use Dawn `footer` columns; connect existing footer menus; enable Newsletter/Social blocks.

- Home (Marketing)
  - Hero: Add `image-banner` (or `slideshow`) and set image/text/buttons.
  - Icons/USPs: Add `multicolumn` with icon images/headings/text.
  - Image + text: Use `image-with-text` (or columns) for two‑column layouts.
  - Featured collection: Use `featured-collection` and select the collection.
  - Reviews: Add Yotpo App Block (or a custom testimonials‑like section).

- PDP (Product Detail Page)
  - Use `main-product` for the core buy box (gallery/price/options/add to cart).
  - Add auxiliary sections: `collapsible-content`, `image-with-text`, `icons`, `product-recommendations`.
  - Split previous all‑in‑one blocks into custom sections as needed: `keetsa-product-features`, `keetsa-product-specs`, `keetsa-product-icons`, `keetsa-product-side-by-side`, `keetsa-product-reviews`.
  - Bind metafields via Dynamic Source in the Theme Editor.

- Cart / Side Cart
  - Enable the Cart Drawer in Dawn settings.
  - Decommission `sections/cart-sidecart.liquid` and CartJS/rivets.
  - Add free shipping hints/Route widget/monthly payment note as drawer blocks.
  - Use Section Rendering API for partial updates; minimize custom JS.

- GemPages
  - Remove direct scripts in `theme.gempages.*.liquid`.
  - Use the app’s Embeds/Blocks for Dawn.

- Apps / Scripts (Tagging)
  - Place Yotpo/LimeSpot/Route/Tidio/Seguno via App Blocks/Embeds only.
  - Consolidate tagging in GTM; keep only essential meta in `<head>`.

- Metafield Schema
  - Migrate `product.metafields["global"]` to the `keetsa.*` namespace.
  - Store repeated data as JSON and loop in sections for simpler editing.

- Checkout (Plus)
  - Replace `layout/checkout.liquid` customization with Checkout Extensibility.
  - Implement recycling fee (by state/product type) via Cart Transform (Functions).
  - Use Checkout UI Extensions/App Blocks for Route/tagging/A11y.

- SEO / JSON‑LD
  - Enable Dawn built‑in JSON‑LD; remove duplicated microdata.
  - Align `social-meta-tags` with Dawn defaults (title/description/image).

- Accessibility / Performance
  - Replace Slick/jQuery with Dawn components.
  - Use Dawn A11y patterns; optionally defer a lightweight utility.
  - Optimize images/fonts (AVIF/WEBP, minimal preload, `font-display: swap`).

- Reference: simple Top Banner section (optional)

```liquid
{% comment %} sections/keetsa-top-banner.liquid {% endcomment %}
<div class="keetsa-top-banner" role="region" aria-label="site notice">
  <div class="container">
    <div class="items">
      <div>{{ section.settings.msg_1 }}</div>
      <div>{{ section.settings.msg_2 }}</div>
      <div>{{ section.settings.msg_3 }}</div>
      <div><a href="tel:{{ section.settings.phone }}">{{ section.settings.phone }}</a></div>
    </div>
  </div>
  <style>
    .keetsa-top-banner .items{display:flex;gap:24px;flex-wrap:wrap;align-items:center}
  </style>
</div>
{% schema %}
{
  "name": "Keetsa Top Banner",
  "settings": [
    { "type": "text", "id": "msg_1", "label": "Message 1", "default": "Fast & Free Shipping to 48 States*" },
    { "type": "text", "id": "msg_2", "label": "Message 2", "default": "12-Year Warranty*" },
    { "type": "text", "id": "msg_3", "label": "Message 3", "default": "0% APR Financing*" },
    { "type": "text", "id": "phone", "label": "Phone", "default": "1.877.753.3872" }
  ],
  "blocks": [],
  "presets": [{ "name": "Keetsa Top Banner" }]
}
{% endschema %}
```

### 4.2 Metafield Schema (Self‑describing names)

- Summary table

| Current key example (`global/*`) | Proposed schema (`keetsa.*`) | Purpose |
|---|---|---|
| `Show-Features-Block` | `keetsa.flags.features_enabled` | Toggle block visibility |
| `Features-Block-Column-*-*` | `keetsa.pdp.features` (JSON array) | Icon/heading/body repeatables |
| `Cross-Section-Block-*` | `keetsa.pdp.cross_section` | Cross‑section text/images |
| `Specs-*`, `Dimensions-*` | `keetsa.pdp.specs` | Specs/size tables |
| `Icons-Block-*` | `keetsa.pdp.icons` (JSON array) | 3–4 column icon grid |
| `Side-by-Side-*` | `keetsa.pdp.side_by_side` | Two‑column image + text |
| `Related-Products-Handles` | `keetsa.pdp.related_products` | Related product references |
| (show reviews?) | `keetsa.flags.show_reviews` | Toggle reviews |

- Goal: Consolidate scattered `product.metafields["global"]` into `keetsa.*` so usage is obvious by name.
- Recommended structure (summary):
  - `keetsa.flags.features_enabled` (show/hide)
  - `keetsa.pdp.features` (list of icon/heading/body items)
  - `keetsa.pdp.cross_section` (heading/intro/details/bullets/desktop&mobile images/focus)
  - `keetsa.pdp.specs` (size tables, materials/certifications/shipping/design story HTML)
  - `keetsa.pdp.icons` (four‑column icon grid)
  - `keetsa.pdp.side_by_side` (two‑column image + text)
  - `keetsa.pdp.related_products` (references)
  - `keetsa.flags.show_reviews` (toggle)
- Example mapping: `global/Show-Features-Block` → `keetsa.flags.features_enabled`; `global/Specs-*` → `keetsa.pdp.specs`, etc.
- Ops tip: For repeatables (icons/lists), store as one JSON blob and render in a loop to simplify editing.

### 4.3 Apps & Scripts: from “hardcoded” to App Blocks

- Place Yotpo, LimeSpot, GemPages via App Blocks/Embeds rather than directly in theme files.
- Consolidate tagging (ads/merchant/verification) in GTM; keep only essential meta in the theme’s `<head>`.
- Effect: Easier toggling, fewer conflicts, better performance.

### 4.4 Cart / Side Cart (remove external libraries)

1) Enable `cart-drawer`; add free‑shipping hint/Route/Affirm blocks.
2) Use Section Rendering API for quantity/remove partial updates.
3) Remove (or phase out) CartJS/rivets and jQuery dependencies.
4) Keep monthly payment display consistent across product/cart (price/12).

### 4.5 Checkout (Plus): file edits → extensibility

- Replace `layout/checkout.liquid` customization with Checkout Extensibility.
- Add recycling fees (by state/product type) using Cart Transform (Functions).
- Place Route/tagging/A11y via Checkout UI Extensions/App Blocks.

### 4.6 SEO / JSON‑LD: standardize on Dawn

- Enable Dawn JSON‑LD (product/collection/blog/breadcrumb). Remove duplicate microdata.
- Align `social-meta-tags` with Dawn default snippets; unify title/description/image.

### 4.7 Accessibility / Performance: high‑impact items

- Use Dawn gallery/slider components (remove Slick) → fewer legacy dependencies.
- Follow Dawn focus/keyboard patterns; defer a lightweight utility if needed.
- Image/font optimization: Dawn `image` component, AVIF/WEBP, minimal preload, `font-display: swap`.
- Defer/conditional‑load third‑party via GTM.

## 5. Project Timeline & Milestones (Realistic Estimate)

- Total duration (recommendation): 8 weeks (1 Senior Software Engineer full‑time + PM/DevOps 0.3 FTE + E‑com Manager 0.2–0.3 FTE)
- Acceleration option (6–7 weeks): reduce custom sections (e.g., start with two PDP custom sections), move recycling‑fee checkout work to post‑launch (within a week), run content finalization/uploads in parallel with dev.

- Weekly milestones / deliverables
  - Week 1: Kickoff / environments / backlog
    - Deliverables: finalized requirements, apps/scripts list, work/risk backlog, staging theme + CLI wired up, branching/release policy
    - Effort: PM 12h, SE 24–32h, E‑com 4h
  - Week 2: Dawn base / global
    - Deliverables: theme init, colors/fonts/logo, header/footer/banner, base home sections (banner/multicolumn/featured collection), nav menus
  - Weeks 3–4: PDP / Metafields / App Blocks
    - Deliverables: `main-product`, 2–4 custom `keetsa-product-*` sections, `keetsa.*` metafield schema/bindings, Yotpo/LimeSpot App Blocks, E‑com content wired
  - Week 5: Cart Drawer
    - Deliverables: Cart Drawer enabled, CartJS/rivets removed, Route widget/free‑shipping/monthly payment blocks, Section Rendering API hooked
  - Week 6: SEO/JSON‑LD/GTM, A11y/Performance round 1
    - Deliverables: Dawn JSON‑LD enabled, duplicate markup removed, GTM consolidation, taxonomy/meta checks, image/font optimization v1, keyboard/focus patterns
  - Week 7: Checkout Extensibility / Cart Transform
    - Deliverables: Plus checkout extensibility, Cart Transform (recycling fee by state/product type), Route/UI Extensions, payment flow tests
  - Week 8: Comprehensive QA / Launch / Monitoring (7 days)
    - Deliverables: device/browser‑matrix QA, re‑measure A11y/perf, golden‑path UAT, launch/rollback scripts, post‑launch monitoring (GSC/GA4)

- Dependency chain (summary)
  - Week 2 (Home/Header/Footer) → Weeks 3–4 (PDP/Metafields) → Week 5 (Cart) → Week 6 (SEO/Perf) ↔ Week 7 (Checkout) → Week 8 (QA/Launch)

## 6. Required Resources / Staffing Plan

- Roles / responsibilities
  - PM/DevOps (0.3 FTE): schedule/risk/quality, GTM/measurement, launch/rollback, comms
  - Senior Software Engineer (1.0 FTE): theme implementation (Dawn sections/custom sections/Cart Drawer/Checkout Extensibility/Transform/perf & A11y)
  - E‑com Manager (0.2–0.3 FTE): content sign‑off/upload, images/copy, menu/collection mapping, QA/UAT support

- Weekly allocation (guidance)
  - Week 1: PM high, SE high, E‑com low (requirements/assets)
  - Weeks 2–5: SE high (implementation), PM medium (scrum/issue clearing), E‑com medium (content wiring/review)
  - Weeks 6–7: SE high (SEO/Checkout), PM medium (measurement/risk), E‑com low (review)
  - Week 8: PM/SE/E‑com medium (UAT/launch/monitoring)

- Dependencies / assumptions
  - Prepare app accounts/access in advance (Yotpo/LimeSpot/GTM/GA4/GSC)
  - Content/image sign‑off deadlines matter (delays affect overall schedule)
  - Plus permissions/Checkout Extensibility available; provide Transform policy (by state/product type)

## 7. Step‑by‑Step Implementation Checklist (Code‑Level)

1) Create Dawn theme and connect preview (`shopify theme init --template dawn`)
2) Migrate brand settings (colors/fonts/logo/favicon)
3) Recreate header/footer/top banner in Dawn sections → connect nav/footer menus
4) Rebuild PDP: `main-product` + 3–5 custom sections; bind Dynamic sources after finalizing metafield schema
5) Configure Cart Drawer: qty/remove/total updates; Route/free‑shipping/monthly payment blocks
6) Move apps to App Blocks/Embeds; remove direct theme scripts (Yotpo/LimeSpot/Tidio/Seguno/Route)
7) Checkout changes: Checkout Extensibility + Cart Transform (recycling fees); consolidate tagging in GTM
8) SEO/JSON‑LD: enable Dawn built‑ins; remove conflicting microdata, extend as needed
9) A11y/performance tuning: keyboard/screen reader scenarios; Core Web Vitals (images/fonts/third‑party)
10) Comprehensive QA (device/browser), launch/rollback, monitoring

## 8. Appendix — Current → Dawn Mapping Examples (Excerpt)

- PDP Features: `global/Features-Block-*` → `keetsa.pdp.features` JSON → `sections/keetsa-product-features.liquid`
- Specs: `global/Specs-*`, `Dimensions-*` → `keetsa.pdp.specs` JSON → `sections/keetsa-product-specs.liquid`
- Icons: `global/Icons-Block-*` → `keetsa.pdp.icons` JSON → `sections/keetsa-product-icons.liquid`
- Side-by-Side: `global/Side-by-Side-*` → `keetsa.pdp.side_by_side` JSON → `sections/keetsa-product-side-by-side.liquid`
- Related: `global/Related-Products-Handles` → `keetsa.pdp.related_products` (product_reference) → Dawn `related-products` or custom list

Note: The above mappings assume combinations with Dawn core sections. Keep JSON structures simple so operators can maintain them easily.


