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

### AD-004
- **Decision**: Separate the SideUp engineering work into 3 dedicated standalone project showcases (SideUp Business Portal, SideUp Admin Console, SideUp Employee App), featuring real high-resolution screenshots from `/home/arieldelmar/Projects/sideup/composer-monorepo-prints`, verified business rules from monorepo specifications, humanized copy adhering to strict prose standards, and backward-compatible redirect from `/work/sideup` to `/work/sideup-business-portal`.
- **Reason**: The user requires their corporate benefits engineering work at SideUp to be clearly visible across employer benefit management, operations compliance, and cardholder mobile web domains.
- **Trade-off**: Increases total project count to 11; legacy `/work/sideup` route redirects to primary employer portal.
- **Scope**: `src/data/projects.ts`, `src/app/work/sideup/page.tsx`, `public/project-prints/sideup/`, test suites, and subpage navigation.
- **Date**: 2026-09-15
### AD-005
- **Decision**: Introduce three new SideUp v2 rebrand showcases (`sideup-employer-portal`, `sideup-backoffice`, `sideup-customer-web`) featuring 31 authentic prints from `/home/arieldelmar/Projects/sideup/sideup-monorepo-prints`, official purple rebrand favicon (`#8127cf`) from `sideup-monorepo`, and humanized copy highlighting the re-architecture from composer-monorepo to sideup-monorepo for scalability and UX. Retain previous SideUp entries marked as `(Legacy v1)` with their original green `#8CDD80` icon.
- **Reason**: The user requested adding the rewritten SideUp v2 platform projects, showing both the modern scalable architecture with purple rebrand and preserving the v1 legacy history.
- **Trade-off**: Total project count increases to 14; legacy routes remain intact.
- **Scope**: `src/data/projects.ts`, `public/images/sideup-purple-favicon.png`, `public/project-prints/sideup-v2/`, and test suites.
- **Date**: 2026-09-15
- **Status**: active

---

## Handoff

- **Feature**: sideup-v2-rebrand
- **Phase / Task**: Phase 1 / T2 - Add SideUp v2 rewritten platforms to projects data module
- **Completed**: T1 (Copy SideUp v2 prints and generate purple rebrand favicon)
- **In-progress** (file:line): T2 (src/data/projects.ts:380)
- **Next step**: Update src/data/projects.ts with v2 applications
- **Blockers**: none
- **Uncommitted files**: public/images/sideup-purple-favicon.*, public/project-prints/sideup-v2/
- **Branch**: master
