# Project State & Memory

## Decisions

### AD-001
- **Decision**: Support both canonical lowercase routes (`/about`, `/stack`, `/contact`) and live-site capitalized routes (`/About`, `/Stack`, `/Contact`) alongside dedicated listing routes (`/work`, `/writing`, `/store`) and dynamic detail routes (`/[section]/[slug]`).
- **Reason**: Live Ultra site uses mixed casing in rail links and points directly to detail items, while modern web conventions expect canonical lowercase listing routes. Supporting both prevents 404s in all navigation scenarios.
- **Trade-off**: Requires maintaining both listing and detail routes in App Router.
- **Scope**: Next.js App Router routing structure and navigation components.
- **Date**: 2026-09-13
- **Status**: active

### AD-002
- **Decision**: Port real Ariel Mello portfolio data from `ariel-landing` (bio, experience, education, tech stack, and Infleux project prints) directly into `ultra.framer.clone` while keeping Ultra Framer's pixel-perfect styling tokens, subpage sidebars, and responsive grid layout.
- **Reason**: The user wants the Ultra Framer reference design to showcase their personal portfolio information with real project screenshots.
- **Trade-off**: Replaces generic "Dean Smith" placeholder text with real career achievements.
- **Scope**: Profile, Hero, About, Work, Stack, Contact.
- **Date**: 2026-09-13
- **Status**: active

---

## Handoff

- **Feature**: ariel-portfolio
- **Phase / Task**: Phase 2 / T9 - Complete
- **Completed**: T1 (Profile data), T2 (Hero & About), T3 (About page experience/education), T4 (Stack subpage), T5 (Contact page), T6 (Projects data & prints), T7 (Work section & redirects), T8 (Work detail gallery), T9 (E2E verification & visual testing)
- **In-progress** (file:line): None
- **Next step**: None (feature completed and verified)
- **Blockers**: none
- **Uncommitted files**: none
- **Branch**: master

