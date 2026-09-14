# Ariel Portfolio Tasks

## Test Coverage Matrix

> Generated from codebase, project guidelines, and spec - confirm before Execute. Guidelines found: none - strong defaults applied.

| Code Layer | Required Test Type | Coverage Expectation | Location Pattern | Run Command |
| ---------- | ------------------ | -------------------- | ---------------- | ----------- |
| Profile & Projects Data | unit | 100% field assertions and schema integrity | `src/data/*.test.ts` | `npm test` |
| UI Components & Pages | unit / integration | Component rendering with Ariel's data | `src/components/__tests__/*.test.tsx` | `npm test` |
| Build & Typecheck Gate | build | Zero TypeScript or Next.js build errors | `src/app/**` | `npm run typecheck && npm run build` |

## Gate Check Commands

```bash
npm test
npm run typecheck
npm run build
```

## Execution Plan

### Phase 1: Profile Data & Core Content Integration

```
T1 -> T2
T2 -> T3
T3 -> T4
T4 -> T5
```

### Phase 2: Projects, Prints & Master-Detail Integration

```
T6 -> T7
T7 -> T8
T8 -> T9
```

## Task Breakdown

### Phase 1: Profile Data & Core Content Integration

#### T1: Create profile data module and unit tests [DONE]
**What**: Create unified profile data file carrying Ariel Mello's personal data, bio, experience, education, and stack, along with unit tests.
**Where**: `src/data/profile.ts`, `src/data/profile.test.ts`
**Depends on**: None
**Tests**: unit
**Gate**: quick

#### T2: Update Hero & About components on Home page [DONE]
**What**: Update Hero with Ariel Mello avatar, headline, RS Brazil location ticker, and LinkedIn link. Update About with bio paragraphs.
**Where**: `src/components/Hero.tsx`, `src/components/About.tsx`, `src/app/page.tsx`
**Depends on**: T1
**Tests**: unit
**Gate**: quick

#### T3: Update About subpage with Experience & Education [DONE]
**What**: Update /about to render Ariel's experience (SideUp, Infleux, Upwork, IFC, Aliança) and education (IFC, ULBRA, IFRO).
**Where**: `src/app/about/page.tsx`
**Depends on**: T2
**Tests**: unit
**Gate**: quick

#### T4: Update Stack subpage with Ariel's Tech & Hardware
**What**: Update /stack with Ariel's software stack (Node, TS, React, Next, React Native, AWS, Mongo, Postgres, LangChain, Git) and physical hardware.
**Where**: `src/app/stack/page.tsx`
**Depends on**: T3
**Tests**: unit
**Gate**: quick

#### T5: Update Contact page with Ariel's links & messaging
**What**: Update /contact with Ariel's LinkedIn booking and contact form.
**Where**: `src/app/contact/page.tsx`
**Depends on**: T4
**Tests**: unit
**Gate**: quick

### Phase 2: Projects, Prints & Master-Detail Integration

#### T6: Update Projects data with Ariel's real works and prints
**What**: Update src/data/projects.ts with Infleux, SideUp, Upwork CMS, Upwork RAG, gallery prints, and detailed case studies.
**Where**: `src/data/projects.ts`, `src/data/projects.test.ts`
**Depends on**: T5
**Tests**: unit
**Gate**: quick

#### T7: Update Home Work section & listing redirect
**What**: Render Ariel's project cards on Home page Work section and link to /work/infleux.
**Where**: `src/components/Work.tsx`, `src/app/work/page.tsx`
**Depends on**: T6
**Tests**: unit
**Gate**: quick

#### T8: Enhance Work detail page with screenshot prints gallery
**What**: Update src/app/work/[slug]/page.tsx to render Ariel's case studies and an image gallery of prints for Infleux.
**Where**: `src/app/work/[slug]/page.tsx`
**Depends on**: T7
**Tests**: integration
**Gate**: full

#### T9: End-to-end verification and visual regression testing
**What**: Run Vitest test suite, typecheck, build, and browser-harness visual check.
**Where**: `tests/`
**Depends on**: T8
**Tests**: e2e
**Gate**: full
