## Context

The current exercise library system allows for the creation of custom exercises but lacks lifecycle management. Once created, a custom exercise is permanent and immutable for the user. This design addresses the need for editing (to fix typos or update details) and archiving (to clean up the library without losing historical data in workout logs).

## Goals / Non-Goals

**Goals:**
- Provide a way for users to update metadata for exercises they own.
- Implement a "soft-delete" mechanism via archiving to hide exercises from selection while preserving them in past logs.
- Ensure global exercises (owned by the system) remain read-only for users.
- Update the exercise library UI to accommodate these management actions.

**Non-Goals:**
- Allowing users to edit global exercises.
- Hard-deleting exercises that have been used in workouts.
- Bulk management of exercises.

## Decisions

### 1. Model Changes: `isArchived` flag
We will add an `isArchived` boolean field to the `Exercise` model in `schema.prisma`.
- **Rationale**: Since `Exercise` is referenced by `WorkoutLogEntry`, deleting a record would either violate foreign key constraints or result in orphaned logs. Archiving allows us to filter the "active" library while maintaining referential integrity.
- **Default Value**: `false`.

### 2. Model Changes: `updatedAt` tracking
We will add an `updatedAt` field with `@updatedAt` to the `Exercise` model.
- **Rationale**: Standard practice for tracking modifications and useful for sorting/syncing in the future.

### 3. Service Layer Ownership Checks
All update and archive operations will require a `userId`.
- **Rationale**: Prevents users from accidentally or maliciously modifying global exercises or exercises belonging to other users.
- **Implementation**: The services will use `where: { id, userId }` to ensure the operation only succeeds if the user owns the record.

### 4. UI: Dialog Reuse
We will refactor `CreateExerciseDialog` to handle both creation and editing.
- **Rationale**: The fields required for creation and editing are identical (name, category, muscle group, equipment). Reusing the component reduces duplication and ensures consistent validation.

### 5. UI: Soft-Delete Interaction
When a user "deletes" an exercise, the UI will call the `archive` service and then remove the exercise from the local state of the `ExerciseLibraryContainer`.
- **Rationale**: Provides immediate feedback. Since the library filters for `isArchived: false`, the exercise will disappear as expected.

## Risks / Trade-offs

- **Risk: Historical Confusion** → Users might change the name of an exercise (e.g., from "Bench Press" to "Squat"), making past logs look incorrect.
- **Mitigation**: We will add a warning in the edit dialog: "Changes will reflect in all past workouts."
- **Trade-off: Global Immutability** → Users cannot "fix" a typo in a global exercise.
- **Decision**: Acceptable. Users should create a custom variation if they want a different name/muscle group.
