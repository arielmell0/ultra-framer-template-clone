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
- **Phase / Task**: Phase 2 / T9 - Build Store product listing page
- **Completed**: T1, T2, T3, T4, T5, T6, T7, T8
- **In-progress** (file:line): src/app/store/page.tsx
- **Next step**: Implement /store listing route displaying all 3 products with prices and descriptions
- **Blockers**: none
- **Uncommitted files**: src/app/writing/[slug]/, .specs/
- **Branch**: master
