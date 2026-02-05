# Spec: Dashboard Stats Aggregation

## ADDED Requirements

### Requirement: Weekly Volume Calculation
The system SHALL support calculating the total training volume (Sum of Weight * Reps) for the last 7 days.

#### Scenario: Volume Summary
- **WHEN** the dashboard is loaded
- **THEN** it SHALL display the total kilograms lifted in the current week.

### Requirement: Personal Record (PR) Identification
The system SHALL identify new Personal Records achieved in exercises.

#### Scenario: Highlighting Achievements
- **WHEN** a user logs a set with a weight higher than the previous maximum for that exercise
- **THEN** it SHALL be flagged as a PR and displayed on the dashboard.

### Requirement: Workout Frequency
The system SHALL aggregate the number of completed workout sessions per week.

#### Scenario: Consistency tracking
- **WHEN** summarizing user activity
- **THEN** it SHALL provide the count of sessions for the current week.
