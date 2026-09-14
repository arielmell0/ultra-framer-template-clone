# Separated Works Tasks

## Test Coverage Matrix

> Generated from codebase, project guidelines, and spec - confirm before Execute.

| Code Layer | Required Test Type | Coverage Expectation | Location Pattern | Run Command |
| ---------- | ------------------ | -------------------- | ---------------- | ----------- |
| Project Data & Prints | unit | 100% field assertions and schema integrity | `src/data/projects.test.ts` | `npm test` |
| Navigation & Components | unit / integration | Component rendering with separated systems | `src/components/__tests__/*.test.tsx` | `npm test` |
| Static Build & Prerender | build | Zero TypeScript or Next.js build errors | `src/app/**` | `npm run typecheck && npm run build` |

## Gate Check Commands

```bash
npm test
npm run typecheck
npm run build
```

## Execution Plan

### Phase 1: Project Prints Parity & Data Layer

```
T1 -> T2
T2 -> T3
```

### Phase 2: UI Components, Routing & Verification

```
T4 -> T5
T5 -> T6
T6 -> T7
T7 -> T8
```

## Task Breakdown

### Phase 1: Project Prints Parity & Data Layer

#### T1: Synchronize project-prints directory into clone root and public [DONE]
**What**: Ensure project-prints directory exists at root and within public/ in ultra.framer.clone matching ariel-landing.
**Where**: `project-prints`
**Depends on**: None
**Tests**: unit
**Gate**: quick

#### T2: Update projects data module with 6 separated marketing systems [DONE]
**What**: Update src/data/projects.ts with separate systems: Admin CRM, Advertisers Platform, Agencies Platform, Influencer App, Influencer Web, and Invoicing Portal, with rich case studies and prints.
**Where**: `src/data/projects.ts`
**Depends on**: T1
**Tests**: unit
**Gate**: quick

#### T3: Update projects unit test suite to assert all 9 projects and prints [DONE]
**What**: Update src/data/projects.test.ts to test all separated projects, their prints count, and required fields.
**Where**: `src/data/projects.test.ts`
**Depends on**: T2
**Tests**: unit
**Gate**: quick

### Phase 2: UI Components, Routing & Verification

#### T4: Update Home Work section to render all separated projects
**What**: Update src/components/Work.tsx to display all projects and update "View all" to link to /work/admin-crm.
**Where**: `src/components/Work.tsx`
**Depends on**: T3
**Tests**: unit
**Gate**: quick

#### T5: Update LeftRailNav and work index redirect for admin-crm flagship
**What**: Update LeftRailNav.tsx and src/app/work/page.tsx to route to /work/admin-crm.
**Where**: `src/components/LeftRailNav.tsx`
**Depends on**: T4
**Tests**: unit
**Gate**: quick

#### T6: Add backward-compatible redirect for legacy /work/infleux route
**What**: Create src/app/work/infleux/page.tsx to redirect legacy traffic smoothly to /work/admin-crm.
**Where**: `src/app/work/infleux/page.tsx`
**Depends on**: T5
**Tests**: integration
**Gate**: quick

#### T7: Update ProjectDetailPage and component test suites
**What**: Update ProjectDetailPage and its test in src/components/__tests__/ProjectDetailPage.test.tsx and WorkSection.test.tsx.
**Where**: `src/components/__tests__/ProjectDetailPage.test.tsx`
**Depends on**: T6
**Tests**: integration
**Gate**: full

#### T8: End-to-end verification, typecheck, build, and visual validation
**What**: Run full test suite, typecheck, static build of all pages, and verify visual appearance.
**Where**: `tests/e2e`
**Depends on**: T7
**Tests**: e2e
**Gate**: full
