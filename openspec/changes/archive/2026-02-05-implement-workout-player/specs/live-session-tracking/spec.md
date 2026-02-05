# Spec: Live Session Tracking

## ADDED Requirements

### Requirement: Session Initialization
The system SHALL support starting a workout session from a previously created `Workout` template.

#### Scenario: Start from Template
- **WHEN** the user selects "Start" on a workout template
- **THEN** the system SHALL navigate to `/workouts/active`
- **AND** load all exercises associated with that template.

### Requirement: Workout Timer
The system SHALL maintain a live timer calculating the elapsed time from the moment the session started.

#### Scenario: Timer visibility
- **WHEN** a session is active
- **THEN** the header SHALL display an incrementing timer in `MM:SS` format.

### Requirement: Session Completion
The system SHALL allow users to finish and persist their workout data.

#### Scenario: Finish Workout
- **WHEN** the user clicks "Finish"
- **THEN** the system SHALL calculate total duration
- **AND** save the workout session using the `logging.service.ts`.
