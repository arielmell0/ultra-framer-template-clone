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

### AD-003
- **Decision**: Separate the marketing platform ecosystem into 6 distinct standalone project showcases (Admin CRM, Advertiser Marketing Platform, Talent Agency & Assessor Platform, Influencer Mobile App, Influencer Web Portal, Creator Invoicing & Accountant Portal), each featuring in-depth engineering narratives and high-resolution screenshot galleries from `project-prints/infleux/`.
- **Reason**: Shifts focus from a single monolithic company name ("Infleux") to the specific systems, platforms, and architectures engineered by Ariel Mello, highlighting diverse full-stack, mobile, CRM, and financial compliance capabilities.
- **Trade-off**: Increases total project count to 9 (including SideUp and Upwork projects); default work route is `/work/admin-crm` with backward-compatible redirect from `/work/infleux`.
- **Scope**: Work listing, ProjectDetailPage, LeftRailNav, SubpageSidebar, project-prints.
- **Date**: 2026-09-14
- **Status**: active

---

## Handoff

- **Feature**: separated-works
- **Phase / Task**: Phase 2 / T8 - Complete
- **Completed**: T1 (Synchronize project-prints into clone and public), T2 (Projects data module with 6 separated platforms), T3 (Projects unit test suite), T4 (Home Work section update), T5 (LeftRailNav and work redirect to admin-crm), T6 (Legacy infleux redirect), T7 (ProjectDetailPage tests), T8 (E2E verification, typecheck, build, visual validation)
- **In-progress** (file:line): None
- **Next step**: None (feature completed and verified)
- **Blockers**: none
- **Uncommitted files**: none
- **Branch**: master
