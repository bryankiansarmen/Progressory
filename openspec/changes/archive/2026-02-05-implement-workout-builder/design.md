# Design: Workout Builder UI

## Context
The Workout Builder allows users to construct plans. It needs to be highly interactive, allowing for quick exercise additions and effortless reordering.

## Goals
- Create a dashboard to view saved templates.
- Implement a builder interface that manages a list of exercises.
- Enable basic reordering (drag-and-drop or simple up/down buttons).
- Persist templates to the database via `WorkoutService`.

## Decisions

### Decision 1: Shared Exercise Picker
We will extract the logic from `ExerciseLibraryContainer` into a reusable `ExercisePicker` component.
- **Rationale**: The library and the workout builder both need searchable selection lists. Code reuse ensures a consistent UI.

### Decision 2: State-First Builder
The `WorkoutBuilder` will maintain a local state of `WorkoutExercise` items.
- **Rationale**: Users should be able to "draft" a workout (add/remove/reorder) before hitting "Save". Local state management with `useState` is ideal for this interaction.

### Decision 3: Simple Reordering (MVP)
For the first iteration, we will use "Up/Down" buttons for reordering instead of full drag-and-drop.
- **Rationale**: Up/Down buttons are faster to implement and highly accessible/reliable on mobile. Full drag-and-drop can be added as a future enhancement.

## Component Hierarchy
```
WorkoutDashboard (Server Component)
└── WorkoutList
    └── WorkoutCard

WorkoutBuilderPage (Server Component)
└── WorkoutBuilderContainer (Client Component)
    ├── WorkoutHeader (Name Input)
    ├── SelectedExerciseList
    │   └── SelectedExerciseItem (Controls for reordering/removal)
    └── ExercisePickerModal (Search + Add)
```
