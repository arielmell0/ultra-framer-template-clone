# Admin Front — localhost:3003

Logged in as `ariel.mello+clerk_test@sideup.com` (Clerk), re-pointed in the DB to the existing internal `sideupstaging` user (authorization_core.user, id `b5325133-6419-4b04-b8e4-d7176c24101c`) so the app still recognizes the session as "Sideup Staging" with its existing business/admin permissions.

Note on these screenshots: this app has an intermittent client-side rendering race where the main content area's left offset is computed before the sidebar's final width settles, making it render underneath/behind the (permanent, non-collapsible) sidebar — happens on a fresh load unpredictably, not tied to any specific page. It self-corrects on its own after some seconds, but not reliably enough to just "wait it out". These screenshots were taken with a small injected CSS override (`.MuiDrawer-root + div { margin-left: 300px !important; }`) applied right after each page load to force the content area clear of the sidebar every time — a capture-time fix only, not a change to the running app.

1. **01-home.png** — Home dashboard (`/home`). Greeting "Hi, Sideup Staging!", three activity charts (Enterprise Activity, Active Customers, Active Companies) and four stat tiles (Enrollments, Enrolled Users, Benefit Amount, Customers) — numbers reflect the real enrollment created via business-front (1 enrollment, £100.00).
2. **02-list-companies.png** — Companies list (`/list-companies`). 14 seeded client companies; "Company Fifteen" shows 1 employee / 1 enrollment / £100.00 from the enrollment, all others still at 0.
3. **03-taxing.png** — Taxing → Region (`/taxing`). Tax regions (United Kingdom, UK-England) with level/children/parent/tax year/report period/allowances/status, all "Enabled", plus a "New Region" action.
4. **04-terms-of-use.png** — Terms of Use (`/terms-of-use`). Empty table ("Not data found") with a "Create A Term Of Use" action.

Note: `/add-admin` and `/taxing/tax-rating` aren't directly navigable by URL (they either redirect or need a parent-selected record/ID), so they were skipped in favor of the pages above.
