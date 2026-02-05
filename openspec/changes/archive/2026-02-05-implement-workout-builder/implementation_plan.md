# Implementation Plan: Workout Builder UI

## Goal
Build the "Planner" section of Progressory. Users can create, organize, and save their workout routines.

## Proposed Changes

### UI & Routes
- **[NEW] `app/workouts/page.tsx`**: Dashboard listing saved workout templates.
- **[NEW] `app/workouts/new/page.tsx`**: The interactive builder interface.
- **[NEW] `components/workout/WorkoutCard.tsx`**: Summary display for templates.
- **[NEW] `components/workout/WorkoutBuilderContainer.tsx`**: Main client logic for managing the builder state.
- **[NEW] `components/exercise/ExercisePicker.tsx`**: Reusable component for selecting exercises.

### Features
- **Reordering**: Simple "Up/Down" buttons to sequence movements.
- **Integrated Search**: Uses the same library logic to find exercises quickly.
- **Persistence**: Full integration with the relational `Workout` and `WorkoutExercise` DB models.

## Verification Plan

### Automated
- `npx tsc --noEmit` to ensure type-safe integration with the database service.

### Manual
1. **Create Template**: 
   - Navigate to `/workouts/new`.
   - Add "Bench Press" and "Pushups". 
   - Reorder them.
   - Save and verify redirect to dashboard.
2. **Dashboard**:
   - Verify the new template appears with the correct exercise count.
3. **Persistence**:
   - Check `npx prisma studio` to confirm `WorkoutExercise` records are created with correct `order`.
