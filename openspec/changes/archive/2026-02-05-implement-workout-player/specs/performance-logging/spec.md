# Spec: Performance Logging

## ADDED Requirements

### Requirement: Set Entry
The system SHALL allow users to log individual sets for each exercise in the active session.

#### Scenario: Logging a set
- **WHEN** the user enters "80" kg and "10" reps
- **AND** clicks the "Checkmark" (Done)
- **THEN** that set SHALL be marked as complete
- **AND** the values SHALL be saved locally until the session is finished.

### Requirement: History Visualization
The system SHALL display previous session performance (last weight/reps) for the same exercise if available.

#### Scenario: Progress context
- **WHEN** the user is logging a set for "Bench Press"
- **THEN** the system SHALL show "Last: 75kg x 10" as a reference.
