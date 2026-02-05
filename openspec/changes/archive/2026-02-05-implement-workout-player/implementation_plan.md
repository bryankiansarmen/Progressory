# Implementation Plan: Workout Player UI

## Goal
Implement the core interactive experience for tracking live workout sessions. This includes a session timer, set logging (weight/reps), and rest interval management.

## User Review Required
> [!IMPORTANT]
> **No Authentication**: Like previous features, we will use a mock `userId` for now.
> **Batch Saving**: Data is saved locally in React state until the user finishes the session. If the page is refreshed without saving, current session progress will be lost.

## Proposed Changes

### Routes & Container
- **[NEW] `app/workouts/active/page.tsx`**: Loads the selected workout template and renders the player.
- **[NEW] `components/workout/player/WorkoutPlayerContainer.tsx`**: State machine for the workout (timer, current exercise, logged sets).

### HUD & Tracking
- **[NEW] `hooks/useWorkoutTimer.ts`**: Handles the MM:SS session timer logic.
- **[NEW] `components/workout/player/PlayerHeader.tsx`**: Sticky header with the timer and a prominent "Finish Workout" button.

### Logging Features
- **[NEW] `components/workout/player/ExerciseLoggingCard.tsx`**: Displays the active exercise and previous performance.
- **[NEW] `components/workout/player/SetLoggingRow.tsx`**: Inline inputs for weight and reps with a completion checkmark.
- **[NEW] `components/workout/player/RestTimer.tsx`**: A visual countdown triggered after completing a set.

## Verification Plan

### Automated Tests
- `npx tsc --noEmit` to verify type-safe integration with relational workout logs.

### Manual Verification
1. **Start Session**: Load a template and verify all exercises are present.
2. **Log Sets**: Complete multiple sets with different weights/reps.
3. **Rest Timer**: Confirm the rest timer appears after checking a set.
4. **Finish**: Complete the session and verify that the logs are correctly saved to the database.
