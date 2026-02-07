# Proposal: implement-exercise-multi-selection

## Summary
Enable users to select multiple exercises at once when building a new workout template. Currently, users must open the picker, select one exercise, and repeat for every addition. This change will allow selecting multiple movements (and variations) and adding them all in a single batch.

## Impact
- `components/exercise/ExercisePicker.tsx`: Component needs to support choice state and batch selection UI.
- `components/workout/WorkoutBuilderContainer.tsx`: Needs to handle receiving an array of exercises from the picker.
- `app/workouts/new/page.tsx`: Entry point for template creation.

## Delta Requirements
None. This enhances the existing "Log New Workout" flow.

## New Capabilities
- `exercise-multi-selection`
