# Proposal: Manage Exercise Variations

## Why
Currently, exercise variations (child exercises) are treated as read-only data displayed within a parent exercise card. Users cannot edit, archive, or specifically create variations. This prevents full management of the exercise hierarchy and leads to a lack of control over specific equipment variations (e.g., switching from Barbell to Dumbbell).

## What Changes
- **Variation CRUD**: Enable Edit and Archive actions for variations listed inside an `ExerciseCard`.
- **Hierarchical Creation**: Update the creation flow to allow designating an exercise as a variation of an existing parent.
- **Service Layer Updates**: Ensure `updateExercise` and `archiveExercise` handle child records correctly, and `createCustomExercise` supports `parentId`.
- **UI Enhancement**: Add inline action buttons for variations and a "Parent Exercise" selector in the creation/edit dialog.

## Capabilities

### New Capabilities
- `hierarchical-exercise-management`: Ability to manage the relationship between parent exercises and variations.

### Modified Capabilities
- `custom-exercise-creation`: Add `parentId` support.
- `exercise-modification`: Allow updating `parentId` to move exercises in/out of groups.
- `exercise-archiving`: Ensure archiving a parent or child behaves correctly (child-specific archiving).

## Impact
- **Services**: `createCustomExercise` and `updateExercise` need to accept `parentId`.
- **UI**: `ExerciseCard` needs to render action icons for each variation. `CreateExerciseDialog` needs a parent selection UI.
