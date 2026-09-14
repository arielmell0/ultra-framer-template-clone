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
- **Phase / Task**: Phase 1 / T1 - In Progress
- **Completed**: None
- **In-progress** (file:line): `src/data/profile.ts`
- **Next step**: Implement T1 (profile data module and unit tests)
- **Blockers**: none
- **Uncommitted files**: vitest.config.ts, package.json, public/images/ariel-avatar.jpg, public/images/projects/, .specs/
- **Branch**: master
