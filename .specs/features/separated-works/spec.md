# Feature Specification: Separated Marketing Systems & Platforms in Works

## Problem Statement

Previously, the portfolio grouped all systems built for the influencer marketing company into a single overarching project named "Infleux". This obscured the breadth and distinct technical architectures of each individual product. The user requires separating the works into standalone, polished project showcases for each platform:
1. Admin CRM for Marketing Company (React-Admin curatorship & management)
2. Advertiser Marketing Platform (self-service campaign builder, CPC/CPA/CPI models, attribution)
3. Talent Agency & Assessor Platform (agency roster management, campaign discovery, mobile alerts)
4. Influencer Mobile App (React Native creator marketplace, briefings, earnings)
5. Influencer Web Portal (responsive desktop and mobile creator platform)
6. Creator Invoicing & Accountant Portal (high-volume invoice automation and accountant delegation)

In addition, the portfolio must showcase the actual high-resolution prints from `project-prints/infleux/` for each platform, preserve parity of the `project-prints` directory between `ariel-landing` and `ultra.framer.clone`, and maintain SideUp and Upwork engineering projects.

## Goals

- [ ] Separate the unified Infleux case study into 6 distinct, in-depth system projects with professional technical descriptions and business context.
- [ ] Maintain the `project-prints/infleux/` directory structure and assets in `ultra.framer.clone` matching `ariel-landing`.
- [ ] Display real screenshot prints for all 6 marketing platforms in their respective detail galleries.
- [ ] Update Home Work section, LeftRailNav, and SubpageSidebar to navigate all separated systems smoothly.
- [ ] Provide backward-compatible routing so `/work` and `/work/infleux` redirect to the primary flagship platform (`/work/admin-crm`).
- [ ] Verify all Vitest unit/integration tests, TypeScript typechecking, and Next.js static builds pass with 0 errors.

## Out of Scope

| Feature | Reason |
| ------- | ------ |
| Live third-party accounting API integrations | Platform showcase focuses on front-end/architecture case studies and real prints |
| Modifying reference `ariel-landing` repository | `ariel-landing` is read-only reference; changes apply to `ultra.framer.clone` |
| Altering Ultra Framer dark design tokens | Parity and visual styling established in previous milestones must be preserved |

---

## Assumptions & Open Questions

Every ambiguity is resolved or recorded here - nothing is left silently unclear.

| Assumption / decision | Chosen default | Rationale | Confirmed? |
| --------------------- | -------------- | --------- | ---------- |
| Flagship default route | `/work/admin-crm` | The user highlighted the Admin CRM first, with deep React-Admin architecture and curatorship prints | y |
| Backward compatibility for `/work/infleux` | Redirect to `/work/admin-crm` | Prevents dead links or 404s for anyone navigating to the previous flagship URL | y |
| Asset serving strategy | Serve from `/project-prints/infleux/...` with URL-safe encoding | Matches exact directory path requested by the user and ensures browser/Next.js compatibility | y |
| Additional projects retention | Retain SideUp, Upwork CMS, and Upwork RAG | Preserves complete breadth of Ariel's remote and freelance engineering achievements | y |

**Open questions:** none - all resolved or logged above.

---

## User Stories

### P1: Separated Systems Data & Real Prints Showcase ⭐ MVP

**User Story**: As a recruiter, engineering manager, or client reviewing Ariel's portfolio, I want to explore each system built for the marketing company as a distinct, dedicated project with its own architecture narrative and real screenshot prints so that I can evaluate his technical capabilities across different domains (CRM, mobile apps, advertiser portals, multi-tenant agency tools, and financial compliance).

**Why P1**: Essential requirement requested by the user to represent the true scope of work delivered across multiple systems.

**Acceptance Criteria**:

1. The system SHALL define 6 distinct marketing platform projects in `src/data/projects.ts`: Admin CRM for Marketing Company (`admin-crm`), Advertiser Marketing Platform (`advertisers-platform`), Talent Agency & Assessor Platform (`agencies-platform`), Influencer Mobile App (`influencer-app`), Influencer Web Portal (`influencer-web`), and Creator Invoicing & Accountant Portal (`invoicing-accountant-portal`).
2. The system SHALL associate each separated project with its dedicated screenshot prints from `project-prints/infleux/` with clear descriptive captions.
3. The system SHALL provide comprehensive technical case studies for each platform focusing on the engineering challenges, architectural design, and operational workflows.
4. The system SHALL retain Ariel's other engineering projects (SideUp, Upwork CMS, Upwork RAG) in the project catalog.

**Independent Test**: Can run unit tests against `src/data/projects.ts` to assert all 9 projects exist, carry valid slugs, covers, paragraphs, and prints.

---

### P2: Navigation, Home Work Section & Master-Detail Integration

**User Story**: As a visitor browsing the portfolio, I want to see the separated projects listed in the Home page Work section and navigate seamlessly between them using the master-detail secondary sidebar on the Work detail page.

**Why P2**: Delivers a cohesive browsing experience aligned with Ultra Framer's design paradigm.

**Acceptance Criteria**:

1. The system SHALL render all project cards with titles, logos, and covers on the Home page Work section.
2. WHEN a user clicks any project card on the Home page THEN the system SHALL navigate to `/work/[slug]`.
3. WHEN a user navigates to `/work` THEN the system SHALL redirect to `/work/admin-crm`.
4. WHEN a user navigates to `/work/infleux` THEN the system SHALL redirect to `/work/admin-crm`.
5. WHEN a user navigates to `/work/[slug]` for any project THEN the system SHALL render the master-detail sidebar listing all other projects and display the selected project's metadata, paragraphs, and prints gallery.
6. The system SHALL link the "Work" item in `LeftRailNav` to `/work/admin-crm` and highlight it when on any `/work/*` route.

**Independent Test**: Can navigate between all work subpages and verify URLs, sidebar items, and active states.

---

## Edge Cases

- IF an invalid project slug is requested THEN the system SHALL return a 404 response.
- IF a project has multiple prints THEN the system SHALL render each print in a clean figure with caption without layout shift.
- IF `/work/infleux` is accessed THEN the system SHALL smoothly redirect to `/work/admin-crm`.

---

## Requirement Traceability

Each requirement gets a unique ID for tracking across design, tasks, and validation.

| Requirement ID | Story | Phase | Status |
| -------------- | ----- | ----- | ------ |
| SEP-01 | P1: Separated Systems Data & Real Prints Showcase | Tasks | Planned |
| SEP-02 | P1: Separated Systems Data & Real Prints Showcase | Tasks | Planned |
| SEP-03 | P1: Separated Systems Data & Real Prints Showcase | Tasks | Planned |
| SEP-04 | P1: Separated Systems Data & Real Prints Showcase | Tasks | Planned |
| SEP-05 | P2: Navigation, Home Work Section & Master-Detail Integration | Tasks | Planned |
| SEP-06 | P2: Navigation, Home Work Section & Master-Detail Integration | Tasks | Planned |
| SEP-07 | P2: Navigation, Home Work Section & Master-Detail Integration | Tasks | Planned |
| SEP-08 | P2: Navigation, Home Work Section & Master-Detail Integration | Tasks | Planned |
| SEP-09 | P2: Navigation, Home Work Section & Master-Detail Integration | Tasks | Planned |
| SEP-10 | P2: Navigation, Home Work Section & Master-Detail Integration | Tasks | Planned |

**Coverage:** 10 total, 10 mapped to tasks, 0 unmapped.

---

## Success Criteria

- [ ] All 6 marketing platforms are individually separated and detailed in `src/data/projects.ts`.
- [ ] Real prints from `project-prints/infleux/` are displayed in each system's prints gallery.
- [ ] `ultra.framer.clone` contains `project-prints` matching `ariel-landing`.
- [ ] Vitest unit and integration test suites pass with 100% success.
- [ ] `npm run typecheck` passes with 0 errors.
- [ ] `npm run build` prerenders all static pages successfully.
- [ ] Deterministic TLC validation scripts validate spec, tasks, and state cleanly.
