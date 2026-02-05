# Proposal: Implement Workout Builder UI

## Why
Users need a way to group exercises into reusable "Workouts" (templates) so they don't have to manually pick exercises every time they hit the gym. This is the "planning" half of the application.

## What Changes
- **Workout Dashboard**: View existing templates at `/workouts`.
- **Template Creator**: A new page/form at `/workouts/new`.
- **Exercise Selector**: An interactive modal to browse and pick exercises from the library.
- **Sequence Management**: Ability to reorder exercises within a template.
- **Template Persistence**: Saving templates using the `workout.service.ts`.

## Capabilities

### New Capabilities
- `workout-template-management`: Create, view, and organize workout routines.
- `exercise-selection`: Search and select exercises from the library within the context of building a workout.

## Impact
- `app/workouts/`: New routes for the dashboard and builder.
- `components/workout/`: New components for workout cards and exercise reordering.
- `services/workout.service.ts`: Utilized for template persistence.
