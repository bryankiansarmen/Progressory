## 1. Database Schema Updates

- [x] 1.1 Add `isArchived` (Boolean, default: false) to the `Exercise` model in `prisma/schema.prisma`
- [x] 1.2 Add `updatedAt` (DateTime, @updatedAt) to the `Exercise` model in `prisma/schema.prisma`
- [x] 1.3 Run `npx prisma migrate dev --name add_exercise_archiving` to apply changes

## 2. Service Layer Implementation

- [x] 2.1 Update `getExercises` in `services/exercise.service.ts` to filter for `isArchived: false` by default
- [x] 2.2 Implement `updateExercise` in `services/exercise.service.ts` with ownership check (`userId`)
- [x] 2.3 Implement `archiveExercise` in `services/exercise.service.ts` with ownership check (`userId`)

## 3. UI Components Refactoring

- [x] 3.1 Refactor `CreateExerciseDialog.tsx` to accept an optional `exercise` prop for editing mode
- [x] 3.2 Update `CreateExerciseDialog` to handle both `create` and `update` service calls
- [x] 3.3 Add an actions menu (meatball menu) to `ExerciseCard.tsx` for custom exercises
- [x] 3.4 Implement "Edit" action in `ExerciseCard` to open the refactored dialog
- [x] 3.5 Implement "Archive" action in `ExerciseCard` with a confirmation prompt

## 4. State Management & Integration

- [x] 4.1 Update `ExerciseLibraryContainer.tsx` to handle exercise updates in the local state
- [x] 4.2 Update `ExerciseLibraryContainer.tsx` to remove archived exercises from the local state
- [x] 4.3 Verify that archived exercises still appear in workout history/logs
- [x] 4.4 Final verification of the end-to-end edit/archive flow
