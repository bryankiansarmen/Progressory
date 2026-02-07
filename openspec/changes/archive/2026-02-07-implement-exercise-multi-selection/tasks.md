# Tasks: implement-exercise-multi-selection

## Phase 1: Exercise Picker Enhancements

- [x] 1.1 Update `ExercisePickerProps` to include `multiSelect` boolean and `onSelectMultiple` callback <!-- id: 14 -->
- [x] 1.2 Add `selectedIds` state to `ExercisePicker` to track multiple selections <!-- id: 15 -->
- [x] 1.3 Update `ExercisePicker` selection logic to toggle IDs in `selectedIds` when `multiSelect` is active <!-- id: 16 -->
- [x] 1.4 Add visual selection indicators (e.g., checkmarks or badges) to exercise items in the picker <!-- id: 17 -->
- [x] 1.5 Implement "Add Selected (X)" button in the picker footer that triggers `onSelectMultiple` <!-- id: 18 -->

## Phase 2: Workflow Integration

- [x] 2.1 Update `WorkoutBuilderContainer` to pass `multiSelect={true}` and use `onSelectMultiple` when opening the picker <!-- id: 19 -->
- [x] 2.2 Update `handleAddExercise` in `WorkoutBuilderContainer` to support adding an array of exercises <!-- id: 20 -->
- [x] 2.3 Ensure picker closes correctly after batch addition <!-- id: 21 -->

## Phase 3: Verification

- [x] 3.1 Verify batch addition of multiple exercises across different muscle groups <!-- id: 22 -->
- [x] 3.2 Verify that single selection mode still works correctly if used elsewhere <!-- id: 23 -->
- [x] 3.3 Verify exercise ordering remains consistent after batch addition <!-- id: 24 -->
