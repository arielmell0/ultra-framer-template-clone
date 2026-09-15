# Admin Web — https://admin.localhost

Logged in as `ariel.mello+clerk_test@sideup.com` (Clerk User ID: `user_3FTRdqiHKAiRLpU2BQnc6pagRbq`), mapped to internal principal `d92eb061-8431-4f72-b9e4-442cb6d28bd2` (Ariel Mello, `PLATFORM_ADMIN` for company `05759156-3fec-45e5-83dc-b6534709c261` - Demo Cookies CO).

Note: The application uses Framer Motion for route animations. When running in a background tab or under automated capture, Framer Motion transitions can pause mid-flight; screenshots were stabilized by applying complete opacity styles (`main * { opacity: 1 !important; }`) post-route transition.

1. **01-home.png** — Dashboard (`/home`). Personalized greeting ("Good Morning, Ariel"), active company ("Demo Cookies CO"), Available Balance metric, Open Programs counter (1 scheduled program), Upcoming Invoice indicator, and Recent Activity feed detailing "General Benefits" program lifecycle.
2. **02-employees.png** — All Employees (`/employees`). Employee roster displaying Ariel Mello (`ariel.mello@sideup.com`, People department, hire date Jan 15, 2024, Active status), search input, Filter panel toggle, Bulk Edit toggle, and action buttons (Download CSV, Sync & Import, Add Employee).
3. **03-employees-import.png** — Sync & Import (`/employees/import`). Workforce data ingestion hub offering HR system sync (Gusto, BambooHR, ADP) and bulk CSV upload with spreadsheet template download.
4. **04-benefits.png** — Program Enrollment (`/benefits`). Corporate benefit offerings management table showing active program "General Benefits" (Mixed type, 1 employee, $24,000 annual allocation, scheduled 1/1/2026, Open status), search, filter, and "+ Create New Program" action.
5. **05-benefits-documents.png** — Benefit Documents (`/benefits/documents`). Supporting document and evidence review dashboard with stat tiles (Pending Evidence, Expired, Active, Average Review Time) and category filters (Enrollment eligibility, Expense claims, Reimbursements).
6. **06-billing-overview.png** — Billing Overview (`/billing`). Financial control center showing company balance card with Top Up Balance trigger, Current Cycle summary, Projected Shortfall, Amount Due, and auto-settlement status badge.
7. **07-billing-invoices.png** — Billing History (`/billing/invoices`). Full audit log and invoice statements table with 12-month date-range filter, status filters, and "Export all to CSV" action.
8. **08-billing-payment-methods.png** — Payment Methods (`/billing/payment-methods`). Funding sources management for auto-settlement, with "+ Add Credit Card" modal trigger, "+ Link Bank Account" direct debit trigger, and payment method priority reordering.
9. **09-settings-company-profile.png** — Company Profile (`/settings/profile`). Company metadata and KYB verification badge ("KYB Verified") for Demo Cookies CO, legal name, trading name, and platform contact links.
10. **10-settings-platform-users.png** — Platform Users (`/settings/users`). Administrative access control list displaying Ariel Mello as Administrator (Active), search/filter by role and status, and "+ Invite User" action.
11. **11-settings-integrations.png** — Integrations Hub (`/integrations`). Directory of third-party HR, payroll, and accounting integrations (Xero with Connect action, Gusto, BambooHR).
12. **12-settings-my-account.png** — My Account (`/settings/my-account`). User profile card for Ariel Mello (Platform Administrator), showing initials avatar, personal details, name, and email.
13. **13-employees-create.png** — Add Employee Wizard (`/employees/new`). Multi-step employee creation wizard starting at Step 1 of 4 (Identity: first name, last name, work email, phone).
14. **14-benefits-create-program.png** — Create Benefit Program Modal (`/benefits`). Step 1 of 7 (Basic Info: Foundation, internal program name, internal notes, dynamic budget overview calculator).
