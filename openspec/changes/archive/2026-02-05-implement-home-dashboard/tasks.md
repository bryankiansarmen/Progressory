# Tasks: Implement Home Dashboard UI

## 1. Data Aggregation
- [x] 1.1 Create `stats.service.ts` with `getDashboardStats(userId)`.
- [x] 1.2 Implement weekly volume calculation logic.
- [x] 1.3 Implement PR detection logic (max weight per exercise).

## 2. Shared Dashboard Components
- [x] 2.1 Create `DashboardStatCard.tsx` (Reusable metric display).
- [x] 2.2 Implement `ConsistencyChart.tsx` (Daily activity dots).
- [x] 2.3 Create `RecentPRList.tsx`.

## 3. Page Assembly
- [x] 3.1 Redesign `app/page.tsx` to include the new components.
- [x] 3.2 Add "Quick Start" navigation cards.

## 4. Verification
- [x] 4.1 Verify stats correctly aggregate for a user with multiple logs.
- [x] 4.2 Verify PRs correctly detect weight increases.
- [x] 4.3 Verify the dashboard is fully responsive.
