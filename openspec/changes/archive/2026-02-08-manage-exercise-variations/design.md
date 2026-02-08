## Context

Currently, variations are managed implicitly. This design formalizes the hierarchy by allowing explicit management of child exercises (variations) through the same UI patterns used for parent exercises.

## Goals / Non-Goals

**Goals:**
- Enable inline editing and archiving of variations.
- Support hierarchical creation (assigning a parent during creation).
- Allow moving exercises between parents or to the top level.

**Non-Goals:**
- Creating multi-level hierarchies (only 1 level deep: Parent -> Child).
- Automatic variation generation.

## Decisions

### 1. UI: Inline Action Icons
Inside the variation list in `ExerciseCard`, we will add small `Edit` and `Trash` icons next to each variation.
- **Rationale**: Variations are listed in a compact view; a full meatball menu for each line might be too busy. Simple icons are more space-efficient.

### 2. UI: Parent Selector in Dialog
The `CreateExerciseDialog` will include a "Parent Exercise (Optional)" dropdown.
- **Rationale**: Allows users to group their custom exercises under existing movements.
- **Data Fetching**: We will need a new service `getPotentialParents` that returns only top-level exercises (`parentId: null`).

### 3. Logic: Recursive Archiving (Optional)
If a parent is archived, should the children also be archived?
- **Decision**: No. Children will remain associated but will effectively be hidden from the library because the parent card itself is hidden. We will add a "Show Archived" toggle in the future if needed.

### 4. Implementation: Component Refactoring
- **ExerciseCard**: Refactor the variation rendering to use a sub-component or a clean loop that includes action handlers.
- **CreateExerciseDialog**: Add a state for `parentId` and a searchable select or simple dropdown for parent exercises.

## Risks / Trade-offs

- **Risk: UI Clutter** → Adding icons to every variation row might look messy.
- **Mitigation**: Use low-opacity icons that brighten on hover.
- **Risk: Circular References** → A user could accidentally try to set an exercise as its own parent.
- **Mitigation**: The parent dropdown will exclude the current exercise being edited.
