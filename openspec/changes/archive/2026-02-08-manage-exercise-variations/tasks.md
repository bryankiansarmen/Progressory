## 1. Service Layer Enhancements

- [x] 1.1 Update `getExercises` to ensure variations are always included for parents
- [x] 1.2 Implement `getPotentialParents` to fetch top-level exercises for the dropdown
- [x] 1.3 Ensure `createCustomExercise` and `updateExercise` correctly persist `parentId`

## 2. Dialog Component Updates

- [x] 2.1 Update `CreateExerciseDialog` to include a "Parent Exercise" select field
- [x] 2.2 Add logic to pre-fill "Parent Exercise" when editing a variation
- [x] 2.3 Ensure "Parent Exercise" is omitted or disabled if the current exercise has children (preventing nested hierarchies)

## 3. ExerciseCard UI Enhancements

- [x] 3.1 Refactor variation list rendering in `ExerciseCard.tsx`
- [x] 3.2 Add inline "Edit" and "Archive" icons for each variation row
- [x] 3.3 Connect inline "Edit" to `CreateExerciseDialog` (editing mode)
- [x] 3.4 Connect inline "Archive" to the archiving service and local state update

## 4. State Management & Integration

- [x] 4.1 Update `ExerciseLibraryContainer.tsx` to handle nested exercise updates (updating a child within a parent)
- [x] 4.2 Update `ExerciseLibraryContainer.tsx` to handle moving exercises (removing from one parent, adding to another or top-level)
- [x] 4.3 Final verification of hierarchical management
