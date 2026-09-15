# Business Front (company front) — localhost:3001

Logged in as `ariel.mello+clerk_test@sideup.com` (Clerk), re-pointed in the DB to the existing internal `sideupstaging` user, which the app resolves to "Company Fifteen". Session cookie is shared across `localhost` ports, so this same login also authenticated the Admin front.

Note on these screenshots: this app has an intermittent client-side rendering race where the main content area's left offset is computed before the sidebar's final width settles, making it render underneath/behind the (permanent, non-collapsible) sidebar. It self-corrects on its own after some seconds, but not reliably enough to just "wait it out". These screenshots were taken with a small injected CSS override (`.MuiDrawer-root + div { margin-left: 300px !important; }`) applied right after each page load to force the content area clear of the sidebar every time — a capture-time fix only, not a change to the running app.

1. **01-home.png** — Home dashboard (`/home`). Stat tiles (Enrolled, Benefit Average, Total Amount, Next Invoice — all £100.00 now, reflecting the real enrollment below), a marketing banner, and a calendar with the invoice date flagged.
2. **02-employees.png** — Employees → My employees (`/employees`). Stat tiles (Active/Enrolled/Not Enrolled/Pending) and a table with the company's one seeded employee, "Employee Test Staging".
3. **03-tax-report.png** — Tax Report (`/tax-report`). Table columns for Report/Employees/Total Amount/Start Date/End Date, "No reports at the moment" (`/benefits` 404s directly — needs an existing benefit id — so this was used as the third page instead).

### The "create customer" flow (Benefits → New enrollment)

This is the real app flow that provisions an employee's CUSTOMER-type bank account (the thing customer_front needs to let someone log in) — driven step by step rather than done via SQL. A first enrollment was actually submitted and confirmed earlier in this session (creating the real CUSTOMER accounts, verified in Postgres); the wizard steps below were re-captured cleanly afterward without re-submitting, since the account's uniqueness constraint means a second real submission would fail.

4. **04-new-enrollment-01.png** — Step 1 (General): name the enrollment, set payment frequency and first pay date, toggle which benefit categories to offer (Commuting, Education, Household, Meal, Wellness), with a live "Your budget" cost breakdown on the right.
5. **04-new-enrollment-02-setup.png** — Step 2 (Setup benefits): set the flexible amount per employee (£100).
6. **04-new-enrollment-03-employees.png** — Step 3 (Select employees): "Enroll all employees", confirming 1 employee.
7. **04-new-enrollment-04-summary.png** — Step 4 (Enrollment Summary): full review — enrollment window, payment schedule, flexible benefits list, total cost £100 — before submitting.
8. **04-new-enrollment-05-confirm-modal.png** — Clicking "Confirm Enrollment" here (on an employee already enrolled elsewhere) surfaces a real conflict-handling modal: "The employees below are already enrolled in another benefit" with a table naming the current enrollment, and a choice to keep them on the previous enrollment or move them to this new one. Closed without proceeding, to avoid actually reassigning the real enrollment.
9. **04-new-enrollment-06-details.png** — Details page of the original, real enrollment ("Ariel Test Benefit"): enrolled benefit categories, an empty Invoicing History table, and a "Cancel Enrollment" action.

Confirming the original enrollment triggered `front-monorepo/apps/business_back`'s enrollment service, which created two real `CUSTOMER` accounts (MAIN + BENEFIT type) in `account_core.account` for the employee. This is what let the employee log into customer_front and reach a real (non-401) home page.
