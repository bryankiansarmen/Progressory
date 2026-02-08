# Proposal: Manage Custom Exercises

## Why
Currently, users can create custom exercises but have no way to edit them if they made a mistake or archive them if they no longer wish to use them. This leads to a cluttered exercise library. Additionally, we need a way to "delete" exercises without breaking the integrity of past workout logs that reference them.

## What Changes
- **Exercise Metadata Update**: Allow users to edit the name, category, muscle group, and equipment of exercises they own.
- **Archiving System**: Implement a soft-delete (archiving) mechanism so exercises can be hidden from the library while preserving historical records.
- **Service Layer Enhancements**: Update `exercise.service.ts` to support update and archive operations with ownership checks.
- **UI Actions**: Add an actions menu to `ExerciseCard` for custom exercises to trigger edit and archive flows.

## Capabilities

### New Capabilities
- `exercise-archiving`: Ability to hide exercises from active selection while maintaining data for historical logs.
- `exercise-modification`: Ability for users to update metadata for exercises they created.

### Modified Capabilities
- `exercise-browsing`: Update to filter out archived exercises by default.
- `custom-exercise-creation`: Potentially update to handle validation for edited exercises as well.

## Impact
- **Prisma Schema**: Addition of `isArchived` (boolean) and `updatedAt` (DateTime) to the `Exercise` model.
- **Services**: `getExercises` will need a default filter for `isArchived: false`. New `updateExercise` and `archiveExercise` functions.
- **UI**: `ExerciseLibraryContainer` and `ExerciseCard` will need to handle the new action states and UI updates.
