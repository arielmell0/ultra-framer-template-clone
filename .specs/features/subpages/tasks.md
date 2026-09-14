# Subpages Tasks

## Test Coverage Matrix

> Generated from codebase, project guidelines, and spec - confirm before Execute. Guidelines found: none - strong defaults applied.

| Code Layer | Required Test Type | Coverage Expectation | Location Pattern | Run Command |
| ---------- | ------------------ | -------------------- | ---------------- | ----------- |
| Static Subpages | e2e / build | 100% route availability, full content rendered | `src/app/{about,stack,contact}/page.tsx` | `npm run typecheck && npm run build` |
| Listing Routes | e2e / build | All items rendered with working detail links | `src/app/{work,writing,store}/page.tsx` | `npm run typecheck && npm run build` |
| Dynamic Detail Routes | e2e / build | All slugs render case study/article/product data | `src/app/{work,writing,store}/[slug]/page.tsx` | `npm run typecheck && npm run build` |
| Routing & Nav Aliases | integration | Capitalized aliases redirect or resolve without 404 | `next.config.ts` | `npm run typecheck && npm run build` |

## Gate Check Commands

```bash
npm run typecheck
npm run build
```

## Execution Plan

### Phase 1: Core Static Subpages and Assets

```
T1 -> T2
T2 -> T3
T3 -> T4
T4 -> T5
```

### Phase 2: Dynamic Detail Routes, Content Collections & Navigation Parity

```
T6 -> T7
T7 -> T8
T8 -> T9
T9 -> T10
T10 -> T11
```

## Task Breakdown

### Phase 1: Core Static Subpages and Assets

#### T1: Download and store image assets [DONE]
**What**: Download all missing image assets from ultra.framer.website into public/images.
**Where**: `public/images/about-photo.png`
**Depends on**: None
**Tests**: integration
**Gate**: quick

#### T2: Build About subpage [DONE]
**What**: Implement /about route with header, Intro, Experience, Education sections and shared LeftRailNav.
**Where**: `src/app/about/page.tsx`
**Depends on**: T1
**Tests**: e2e
**Gate**: full

#### T3: Build Stack subpage [DONE]
**What**: Implement /stack route with Software grid, Workspace photo and Physical hardware grid.
**Where**: `src/app/stack/page.tsx`
**Depends on**: T2
**Tests**: e2e
**Gate**: full

#### T4: Build Contact subpage [DONE]
**What**: Implement /contact route with availability badge, booking button, copy email action, and form inputs.
**Where**: `src/app/contact/page.tsx`
**Depends on**: T3
**Tests**: e2e
**Gate**: full

#### T5: Build Work listing page [DONE]
**What**: Implement /work route displaying all 3 project cards with links to /work/[slug].
**Where**: `src/app/work/page.tsx`
**Depends on**: T4
**Tests**: e2e
**Gate**: full

### Phase 2: Dynamic Detail Routes, Content Collections & Navigation Parity

#### T6: Build Work project detail page [DONE]
**What**: Implement /work/[slug] route displaying project cover, client, timeline, role, outcome, and case study narrative.
**Where**: `src/app/work/[slug]/page.tsx`
**Depends on**: T5
**Tests**: e2e
**Gate**: full

#### T7: Build Writing listing page [DONE]
**What**: Implement /writing route displaying all 3 article cards with category tags and dates.
**Where**: `src/app/writing/page.tsx`
**Depends on**: T6
**Tests**: e2e
**Gate**: full

#### T8: Build Writing article detail page [DONE]
**What**: Implement /writing/[slug] route with article header, cover image, category tag, narrative text, and sidebar.
**Where**: `src/app/writing/[slug]/page.tsx`
**Depends on**: T7
**Tests**: e2e
**Gate**: full

#### T9: Build Store product listing page [DONE]
**What**: Implement /store route displaying all 3 products with prices and descriptions.
**Where**: `src/app/store/page.tsx`
**Depends on**: T8
**Tests**: e2e
**Gate**: full

#### T10: Build Store product detail page
**What**: Implement /store/[slug] route with product hero, badges, pricing, preview gallery, and features list.
**Where**: `src/app/store/[slug]/page.tsx`
**Depends on**: T9
**Tests**: e2e
**Gate**: full

#### T11: Configure route aliases and shared Footer
**What**: Configure route rewrites/redirects for /About, /Stack, /Contact and ensure shared Footer layout parity.
**Where**: `next.config.ts`
**Depends on**: T10
**Tests**: integration
**Gate**: full
