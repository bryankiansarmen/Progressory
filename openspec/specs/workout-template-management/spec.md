# workout-template-management Specification

## Purpose
TBD - created by archiving change implement-workout-builder. Update Purpose after archive.
## Requirements
### Requirement: Template Dashboard
The system SHALL provide a view at `/workouts` listing all available workout templates.

#### Scenario: View List
- **WHEN** the user navigates to `/workouts`
- **THEN** they SHALL see cards for each template showing the template `name` and the number of exercises it contains.

### Requirement: Create New Template
The system SHALL allow users to create a new workout template with a unique name.

#### Scenario: Creation Flow
- **WHEN** the user submits a new workout with a name and a list of exercises
- **THEN** the system SHALL create a `Workout` record 
- **AND** create `WorkoutExercise` records for each selected exercise with correct `order`.

### Requirement: Delete Template
The system SHALL allow users to delete their workout templates.

#### Scenario: Deletion
- **WHEN** the user clicks "Delete" on a workout card
- **THEN** the system SHALL remove the template and its associated exercise mappings.

