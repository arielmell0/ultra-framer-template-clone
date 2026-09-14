# E2E — subpages (Work/Writing/Store/Stack/About/Contact routes)

Verdict: PASS
Surface: web
When: 2026-09-14T01:39:00Z
Entry: http://localhost:4100

## Steps

1. LeftRailNav → `/work` listing → 3 project cards, each linking to a detail route → PASS
   Evidence: e2e-shots/work-listing.png
2. `/work/redesigning-gamma` → case study with cover, client, timeline, role, outcome → PASS
   Evidence: e2e-shots/work-detail-gamma.png
3. `/work/building-a-design-system-for-beta` → same → PASS
   Evidence: e2e-shots/work-detail-beta.png
4. `/work/new-mobile-app-for-alpha` → same → PASS
   Evidence: e2e-shots/work-detail-alpha.png
5. `/writing` listing → 3 article cards with category + date → PASS
   Evidence: e2e-shots/writing-listing.png
6. `/writing/the-intersection-of-ai-and-design-creating-user-centric-solutions-in-the-digital-age-copy` → article renders (H1 "Personalized Experiences" section present) → PASS
   Evidence: e2e-shots/writing-detail-ai.png
7. `/writing/designing-for-the-future-exploring-the-role-of-ai-and-crypto-in-product-design` → article renders ("Enhanced Data Analysis" section present) → PASS
   Evidence: e2e-shots/writing-detail-future.png
8. `/writing/blockchain-and-design-opportunities-and-challenges-for-designers-in-the-crypto-industry` → article renders ("User Experience (UX) Design for Crypto Wallets" present) → PASS
   Evidence: e2e-shots/writing-detail-crypto.png
9. `/store` listing → 3 products with prices → PASS
   Evidence: e2e-shots/store-listing.png
10. `/store/ultra-framer-template` → H1 "Ultra Framer Template", $49 → PASS
    Evidence: e2e-shots/store-detail-ultra.png
11. `/store/framer-0-1` → H1 "Framer 0 -> 1", $99 → PASS
    Evidence: e2e-shots/store-detail-framer.png
12. `/store/midjourney-wallpapers` → H1 "Midjourney Wallpapers", $8 → PASS
    Evidence: e2e-shots/store-detail-wallpapers.png
13. `/stack` → Software / Workspace / Physical sections with real tool icons → PASS
    Evidence: e2e-shots/stack.png
14. `/about` → Intro / Experience / Education timeline with real bio copy → PASS
    Evidence: e2e-shots/about.png
15. `/contact` → availability badge, Book call / Copy email CTAs, contact form → PASS
    Evidence: e2e-shots/contact.png
16. `/About` → redirects once to `/about` (200) → PASS
    Evidence: e2e-shots/alias-about.png
17. `/Stack` → redirects once to `/stack` (200) → PASS
    Evidence: e2e-shots/alias-stack.png
18. `/Contact` → redirects once to `/contact` (200) → PASS
    Evidence: e2e-shots/alias-contact.png

## Shots (web only)

- e2e-shots/work-listing.png / work-detail-{gamma,beta,alpha}.png
- e2e-shots/writing-listing.png / writing-detail-{ai,future,crypto}.png
- e2e-shots/store-listing.png / store-detail-{ultra,framer,wallpapers}.png
- e2e-shots/stack.png, about.png, contact.png
- e2e-shots/alias-{about,stack,contact}.png — confirms the capitalized aliases resolve, not just that they respond

## Network (api / curl)

- `curl -sIL http://localhost:4100/About` → `307 -> /about` then `200` — single hop, no loop
- `curl -sIL http://localhost:4100/Stack` → `307 -> /stack` then `200`
- `curl -sIL http://localhost:4100/Contact` → `307 -> /contact` then `200`
- `curl -sI http://localhost:4100/about` → `200` directly, no redirect (confirms the fix didn't just move the loop)

## Gaps

- None outstanding. See "Bug found and fixed" below for what was wrong before this pass.

## Bug found and fixed (carried over from the Antigravity/Gemini session that started this work)

**Symptom:** `/about`, `/stack`, `/contact` (and their capitalized aliases) all returned
"This page isn't working" — an infinite redirect loop (`curl -IL` hit curl's 50-redirect cap,
each hop `307 -> /about` redirecting to itself).

**Root cause:** `next.config.ts` had a `redirects()` block (`source: "/About" → destination:
"/about"`, etc.) running *at the same time* as `src/middleware.ts`, which already handled the
same three capitalized-alias redirects with an exact `pathname === "/About"` check. The
`next.config.ts` `redirects()` matcher does not require an exact-case match the way the
middleware's `===` check does, so it kept matching (and re-redirecting) even the already-lowercase
`/about`, `/stack`, `/contact` paths — self-redirect, forever.

**Fix:** removed the redundant `redirects()` block from `next.config.ts`, keeping only
`src/middleware.ts` (case-sensitive by construction) as the single source of truth for the
three alias redirects. Verified with curl (single-hop redirect, no loop) and in-browser
(all three pages render real content, not the Next.js error page).

**Also fixed:** `middleware.ts` file convention is deprecated in Next.js 16 in favor of
`proxy.ts` — migrated via `npx @next/codemod@canary middleware-to-proxy .` in the same pass.
