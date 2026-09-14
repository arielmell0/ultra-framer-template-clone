# Project State & Memory

## Decisions

### AD-001
- **Decision**: Support both canonical lowercase routes (`/about`, `/stack`, `/contact`) and live-site capitalized routes (`/About`, `/Stack`, `/Contact`) alongside dedicated listing routes (`/work`, `/writing`, `/store`) and dynamic detail routes (`/[section]/[slug]`).
- **Reason**: Live Ultra site uses mixed casing in rail links and points directly to detail items, while modern web conventions expect canonical lowercase listing routes. Supporting both prevents 404s in all navigation scenarios.
- **Trade-off**: Requires maintaining both listing and detail routes in App Router.
- **Scope**: Next.js App Router routing structure and navigation components.
- **Date**: 2026-09-13
- **Status**: active

---

## Handoff

- **Feature**: subpages
- **Phase / Task**: Phase 2 / T10 - Build Store product detail page
- **Completed**: T1, T2, T3, T4, T5, T6, T7, T8, T9
- **In-progress** (file:line): src/app/store/[slug]/page.tsx
- **Next step**: Implement /store/[slug] dynamic route with hero, pricing, badges, buy/preview actions, and features
- **Blockers**: none
- **Uncommitted files**: src/data/products.ts, src/app/store/, .specs/
- **Branch**: master
