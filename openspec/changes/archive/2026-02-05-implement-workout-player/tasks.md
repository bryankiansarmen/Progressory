# Tasks: Implement Workout Player UI

## 1. Setup & Routines

- [x] 1.1 Create `app/workouts/active/page.tsx` (Route to start a workout).
- [x] 1.2 Implement `WorkoutPlayerContainer.tsx` (Main session state).

## 2. Session HUD (Heads-Up Display)

- [x] 2.1 Create `useWorkoutTimer.ts` hook for tracking session duration.
- [x] 2.2 Implement `PlayerHeader.tsx` with timer and finish button.

## 3. Performance Logging

- [x] 3.1 Create `ExerciseLoggingCard.tsx` for displaying active exercise and set list.
- [x] 3.2 Implement `SetLoggingRow.tsx` (Inputs for weight/reps + checkmark logic).
- [x] 3.3 Add rest timer logic (trigger overlay after set completion).

## 4. Closing the Loop

- [x] 4.1 Integrate `logWorkout` service to save the session to the DB.
- [x] 4.2 Create "Session Complete" summary view/modal.
- [x] 4.3 Add history lookup (display previous bests for reference).

## 5. Verification

- [x] 5.1 Verify session timer correctly calculates elapsed time.
- [x] 5.2 Verify weight/reps for multiple exercises persist correctly to `WorkoutLog`.
- [x] 5.3 Verify rest timer skips and additions work.
