# Feature Specification: SideUp v2 Rebrand Applications in Works Showcase

## Problem Statement

SideUp overhauled its employee benefits architecture from the initial `composer-monorepo` prototype to a modernized, highly scalable `sideup-monorepo`. The rewritten platform resolves architecture bottlenecks, improves interface usability, replaces brittle onboarding flows with reliable session management, and adopts an updated brand identity featuring a signature purple icon (`#8127cf`).

The portfolio currently showcases only the legacy v1 applications. To accurately reflect Ariel Mello's progression and technical leadership, the Works section must showcase the rewritten v2 applications using real interface prints from `/home/arieldelmar/Projects/sideup/sideup-monorepo-prints`:
1. SideUp Employer Portal (`sideup-employer-portal`): Corporate workforce management platform (`admin-web`, 14 prints) featuring employee rosters, automated HR integrations (Gusto, BambooHR, ADP), 7-step benefit program setup, and financial billing controls.
2. SideUp Backoffice (`sideup-backoffice`): Internal operations platform (`backoffice`, 11 prints) for platform-wide benefits catalogs, MCC category mappings, statutory obligation rules engines, condition types, and Xero accounting sync.
3. SideUp Customer App (`sideup-customer-web`): Cross-platform employee app (`customer-web`, 6 prints) built on React Native Web and Expo Router, featuring Stripe Issuing / Celtic Bank Visa cards, peer recognition rewards, and activity tracking.

The legacy v1 projects are retained with clear legacy titling and their historical green icon, while the new v2 applications feature the purple rebrand favicon and humanized narrative copy.

## Out of Scope

| Feature | Reason |
| ------- | ------ |
| Live card issuing mutations | Portfolio presents static case studies with authentic interface prints |
| Codebase changes to SideUp backend repositories | Changes apply strictly to the Ultra Framer portfolio presentation |
| Removal of legacy SideUp project routes | Legacy URLs are preserved to maintain backward compatibility |

---

## Assumptions & Open Questions

| Assumption / decision | Chosen default | Rationale | Confirmed? |
| --------------------- | -------------- | --------- | ---------- |
| Project Slugs | `sideup-employer-portal`, `sideup-backoffice`, `sideup-customer-web` | Descriptive, unambiguous identifiers matching the rewritten apps | y |
| Brand Favicon | `/images/sideup-purple-favicon.png` | Official purple rebrand icon (`#8127cf`) extracted from `sideup-monorepo` | y |
| Legacy Projects | Retain with "(Legacy v1)" title suffix and green `#8CDD80` icon | Illustrates technical evolution from prototype to scalable rewrite | y |
| Prints Directory Location | `public/project-prints/sideup-v2/` | Consistent with existing screenshot storage structure | y |
| Copywriting Guidelines | Humanized, direct, active voice without promotional fluff or AI markers | Complies with humanizer skill instructions | y |

**Open questions:** none - all requirements and directory structures verified.

---

## User Stories

### P1: SideUp v2 Rebrand Project Data and Screenshot Galleries

**User Story**: As a visitor or technical recruiter reviewing Ariel Mello's portfolio, I want to explore his work on the rewritten SideUp v2 platform across employer, backoffice, and employee applications with real screenshots and technical context so that I understand his role in re-architecting the system for scale and usability.

**Acceptance Criteria**:

1. The system SHALL define three new SideUp v2 projects in `src/data/projects.ts`: `sideup-employer-portal`, `sideup-backoffice`, and `sideup-customer-web`.
2. The system SHALL associate each SideUp v2 project with its respective screenshot prints and technical captions from `public/project-prints/sideup-v2/`.
3. The system SHALL assign `/images/sideup-purple-favicon.png` to the new SideUp v2 projects to reflect the brand update.
4. The system SHALL mark previous SideUp entries in `src/data/projects.ts` as legacy v1 implementations while retaining their green favicon.
5. The system SHALL ensure all narratives follow humanizer guidelines with concrete architectural facts, active voice, and zero AI filler.

---

### P2: Navigation, Home Showcase, and Route Integrity

**User Story**: As a visitor browsing the portfolio, I want to see the new SideUp v2 projects featured prominently in the Works section and navigate between them seamlessly.

**Acceptance Criteria**:

1. The system SHALL render the new SideUp v2 project cards on the Home page Works section with purple icons, titles, and cover images.
2. WHEN a visitor clicks any SideUp v2 card THEN the system SHALL navigate to the matching `/work/[slug]` route.
3. WHEN a visitor views any project detail page THEN the system SHALL list the new SideUp v2 projects in the master-detail secondary sidebar.
4. The system SHALL keep legacy URLs `/work/sideup-business-portal`, `/work/sideup-admin-portal`, and `/work/sideup-employee-app` functional.

---

## Edge Cases

- IF an invalid project slug is accessed THEN the system SHALL return a 404 response.
- WHEN a project detail page loads THEN each screenshot print SHALL render with its full descriptive caption.
- IF an image is requested on any project card THEN the system SHALL display the matching brand favicon without rendering lag.

---

## Requirement Traceability

| Requirement ID | Story | Phase | Status |
| -------------- | ----- | ----- | ------ |
| V2-01 | P1: SideUp v2 Rebrand Project Data and Screenshot Galleries | Tasks | in tasks |
| V2-02 | P1: SideUp v2 Rebrand Project Data and Screenshot Galleries | Tasks | in tasks |
| V2-03 | P1: SideUp v2 Rebrand Project Data and Screenshot Galleries | Tasks | in tasks |
| V2-04 | P1: SideUp v2 Rebrand Project Data and Screenshot Galleries | Tasks | in tasks |
| V2-05 | P1: SideUp v2 Rebrand Project Data and Screenshot Galleries | Tasks | in tasks |
| V2-06 | P2: Navigation, Home Showcase, and Route Integrity | Tasks | in tasks |
| V2-07 | P2: Navigation, Home Showcase, and Route Integrity | Tasks | in tasks |
| V2-08 | P2: Navigation, Home Showcase, and Route Integrity | Tasks | in tasks |
| V2-09 | P2: Navigation, Home Showcase, and Route Integrity | Tasks | in tasks |

**Coverage:** 9 total, 9 mapped to tasks, 0 unmapped.

---

## Success Criteria

- [ ] `src/data/projects.ts` contains `sideup-employer-portal`, `sideup-backoffice`, and `sideup-customer-web` with 31 real prints and captions.
- [ ] Purple brand favicon is generated at `public/images/sideup-purple-favicon.png` and assigned to v2 projects.
- [ ] Legacy SideUp projects are distinguished with `(Legacy v1)` title indicators and green icon.
- [ ] All unit and component tests pass via `npm test`.
- [ ] TypeScript checking (`npm run typecheck`) and Next.js production build (`npm run build`) pass cleanly.
- [ ] E2E visual verification confirms purple favicon and project cards in the browser.
