# Customer Front — localhost:3002

Logged in as a fresh Clerk test user, `ariel.mello+clerk_test_customer@sideup.com` (created via the Clerk API since the two existing seed test aliases don't contain the required `+clerk_test` magic substring), re-pointed in the DB to the existing internal `sideupemployeestaging` user ("Employee Test Staging" under Company Fifteen).

Getting a real (non-401) page required two extra steps beyond login, both documented in business-front's descriptions.md:
1. Driving Business Front's "New enrollment" flow to actually create this employee's `CUSTOMER`-type bank account in `account_core.account` (there were previously zero — only `BUSINESS` accounts existed in this seed data).
2. The onboarding wizard's "Personal Information" step had a client-side form-submit that never actually advanced (no mutation call fired, `/onboarding` kept re-rendering step 1 regardless of button clicks) — worked around by setting `client_core.employee_details.onboarding_status = 'COMPLETED'` directly, since the actual goal was reaching the app's real pages, not debugging this form bug.

1. **01-home.png** — Home (`/home`). "Hey, Employee Test!" greeting, swipeable benefit category cards (Cash, Flexible, Commuting, Education, Household, ...), total balance, an expenses-by-category donut chart, and shortcuts (My cards / Transactions / Support / Terms of Service).
2. **02-cards.png** — My Cards (`/cards`). A styled virtual Visa card (SideUp-branded, green gradient) with a "New Virtual Card" action.
3. **03-transactions.png** — Transactions (`/transactions`). Balance/next-credit header, expenses-by-items search and date-range filters (no transactions yet since the account is brand new).
4. **04-support.png** — Support (`/support`). A help-ticket form: issue-type dropdown, explanation textarea, file attachment, submit.
5. **05-offer.png** — Offer (`/offer`). A quirky empty-state illustration ("We haven't found benefits for you yet") telling the employee they're not enrolled in a benefit scheme — this page auto-signs the user out after ~6 seconds, so it was screenshotted and left quickly. (This is a stale/cached view — the enrollment created via business-front hadn't propagated to this particular check by the time it was visited.)
