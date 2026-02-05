# Tasks: Implement Workout Builder UI

## 1. Structure & Dashboard

- [x] 1.1 Create `app/workouts/page.tsx` (Dashboard showing existing templates).
- [x] 1.2 Implement `WorkoutCard.tsx` component.
- [x] 1.3 Create `app/workouts/new/page.tsx` for the builder route.

## 2. Builder Logic

- [x] 2.1 Refactor/Create `ExercisePicker` as a shared component (extracted from `ExerciseLibraryContainer`).
- [x] 2.2 Implement `WorkoutBuilderContainer` with list state (Add/Remove items).
- [x] 2.3 Add reordering functionality (simple Up/Down controls).

## 3. Data Integration

- [x] 3.1 Fetch templates in the dashboard using `getWorkouts()`.
- [x] 3.2 Implement "Save" logic in the builder calling `createWorkout`.
- [x] 3.3 Add "Delete" functionality to workout cards.

## 4. Verification

- [x] 4.1 Verify template creation works with multiple exercises.
- [x] 4.2 Verify reordering correctly updates the sequence in the DB.
- [x] 4.3 Verify dashboard correctly lists all created templates.
