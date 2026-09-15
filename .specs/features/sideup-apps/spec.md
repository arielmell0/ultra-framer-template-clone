# Feature Specification: SideUp Applications in Works Showcase

## Problem Statement

The portfolio currently represents Ariel Mello's work at SideUp as a single generic entry without screenshot prints, detailed business rules, or platform breakdowns. SideUp comprises three distinct web and mobile platforms with dedicated architectures and compliance domains:
1. SideUp Business Portal (`sideup-business-portal`): Corporate employer portal for employee benefit schemes, flexible budget allocations, and tax reporting.
2. SideUp Admin Console (`sideup-admin-portal`): Operations backoffice managing corporate clients, HMRC tax jurisdictions, and statutory benefit obligations.
3. SideUp Employee App (`sideup-employee-app`): Cardholder web application for virtual Visa card issuance, category wallets, and transaction tracking.

The user requires integrating these applications into the Works section using real screenshots from `/home/arieldelmar/Projects/sideup/composer-monorepo-prints`, with copy revised to eliminate AI writing patterns per the humanizer guidelines.

## Out of Scope

| Feature | Reason |
| ------- | ------ |
| Live banking card transaction processing | Case studies display real recorded screenshots and architecture summaries |
| Backend code modifications to SideUp monorepos | Changes apply exclusively to the Ultra Framer portfolio presentation |
| Redesigning the Ultra Framer master-detail layout | Existing layout tokens and sidebar components are retained |

---

## Assumptions & Open Questions

| Assumption / decision | Chosen default | Rationale | Confirmed? |
| --------------------- | -------------- | --------- | ---------- |
| Project Slugs | `sideup-business-portal`, `sideup-admin-portal`, `sideup-employee-app` | Matches naming conventions in `projects.ts` while distinguishing employer, ops, and cardholder domains | y |
| Legacy `/work/sideup` URL | Redirects to `/work/sideup-business-portal` | Preserves existing links and bookmarks without 404 errors | y |
| Prints Directory Location | `public/project-prints/sideup/` and `project-prints/sideup/` | Follows the established project print directory layout used by Infleux | y |
| Prose Style | Plain, active voice without promotional inflation, triads, or AI formatting | Complies with humanizer guidelines | y |

**Open questions:** none - all requirements and locations confirmed.

---

## User Stories

### P1: SideUp Applications Data and Real Prints Showcase

**User Story**: As a visitor or hiring manager reviewing Ariel Mello's portfolio, I want to explore his work at SideUp across three distinct applications with real screenshot galleries and concrete business narratives so that I can evaluate his domain knowledge in corporate benefits, payroll compliance, and cardholder fintech.

**Acceptance Criteria**:

1. The system SHALL define three distinct SideUp projects in `src/data/projects.ts` covering the Employer Portal, Admin Console, and Employee Card App.
2. The system SHALL associate each SideUp project with its corresponding screenshot prints and descriptive captions from `public/project-prints/sideup/`.
3. The system SHALL document the core domain responsibilities for each project, including flexible allowance schemes, statutory obligations, and virtual card issuance.
4. The system SHALL ensure all narrative text follows humanizer principles without AI markers, decorative em dashes, or promotional jargon.

---

### P2: Navigation, Detail Views, and Backward Compatibility

**User Story**: As a visitor navigating the portfolio, I want to see the new SideUp projects in the Home page Work section and browse between them using the sidebar and direct URLs.

**Acceptance Criteria**:

1. The system SHALL render all three SideUp project cards in the Home page Work section with their respective logos, titles, and cover images.
2. WHEN a visitor clicks any SideUp project card THEN the system SHALL navigate to `/work/[slug]`.
3. WHEN a visitor navigates to `/work/sideup` THEN the system SHALL redirect to `/work/sideup-business-portal`.
4. WHEN a visitor views any work detail page THEN the system SHALL list the SideUp projects in the secondary sidebar.

---

## Edge Cases

- IF an invalid project slug is requested THEN the system SHALL return a 404 status.
- WHEN a visitor visits `/work/sideup` with a trailing slash THEN the system SHALL redirect to `/work/sideup-business-portal/`.
- IF a project includes multiple prints THEN the system SHALL render each print with its caption in sequential order.

---

## Requirement Traceability

| Requirement ID | Story | Phase | Status |
| -------------- | ----- | ----- | ------ |
| SIDE-01 | P1: SideUp Applications Data and Real Prints Showcase | Tasks | in tasks |
| SIDE-02 | P1: SideUp Applications Data and Real Prints Showcase | Tasks | in tasks |
| SIDE-03 | P1: SideUp Applications Data and Real Prints Showcase | Tasks | in tasks |
| SIDE-04 | P1: SideUp Applications Data and Real Prints Showcase | Tasks | in tasks |
| SIDE-05 | P2: Navigation, Detail Views, and Backward Compatibility | Tasks | in tasks |
| SIDE-06 | P2: Navigation, Detail Views, and Backward Compatibility | Tasks | in tasks |
| SIDE-07 | P2: Navigation, Detail Views, and Backward Compatibility | Tasks | in tasks |
| SIDE-08 | P2: Navigation, Detail Views, and Backward Compatibility | Tasks | in tasks |

**Coverage:** 8 total, 8 mapped to tasks, 0 unmapped.

---

## Success Criteria

- [ ] `src/data/projects.ts` contains the 3 separate SideUp applications with full metadata and print galleries.
- [ ] Screenshot assets exist under `public/project-prints/sideup/`.
- [ ] `/work/sideup` redirects to `/work/sideup-business-portal`.
- [ ] All Vitest tests pass cleanly.
- [ ] Next.js static build and TypeScript typechecking complete with zero errors.
- [ ] Closure and state gates pass via TLC validation scripts.
