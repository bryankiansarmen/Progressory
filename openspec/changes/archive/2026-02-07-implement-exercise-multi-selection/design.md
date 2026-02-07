# Design: implement-exercise-multi-selection

## Architecture Overview
The solution involves enhancing the existing `ExercisePicker` component to support an internal "selection" state when in multi-select mode. The parent `WorkoutBuilderContainer` will then receive an array of exercises instead of just one.

## Technical Decisions

### State Management
- **Internal Selection**: `ExercisePicker` will maintain a `selectedExercises` array state.
- **Toggling**: Clicking an exercise will add/remove it from this internal list.
- **Persistence**: The parent component will handle the final batch addition to the workout.

### UI/UX Choice
- **Visual Feedback**: Each selected item will show a primary-colored checkmark or border.
- **Action Button**: A floating or sticky "Add Selected (X)" button will appear at the bottom of the picker once at least one item is selected.
- **Seamless Transition**: If `multiSelect` is false (default), the picker will function exactly as it does now (closing on click).

## User Interface Changes
- Checkbox/Indicator next to each movement/variation when in multi-select mode.
- "Add Selected (X)" button at the bottom of the picker dialog.
- Selection count badge in the picker header.

## Components to Modify

### `components/exercise/ExercisePicker.tsx`
- Add `multiSelect?: boolean` and `onSelectMultiple?: (exercises: Exercise[]) => void` to props.
- Implement selection toggling logic.
- Add selection indicators to the list items.
- Add the batch action button.

### `components/workout/WorkoutBuilderContainer.tsx`
- Update the `isPickerOpen` modal to use `onSelectMultiple`.
- Update `handleAddExercise` to support both single and batch inputs (or create a new `handleAddMultiple` function).
