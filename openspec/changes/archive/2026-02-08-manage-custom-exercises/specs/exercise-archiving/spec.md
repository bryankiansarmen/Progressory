## ADDED Requirements

### Requirement: Archiving Custom Exercises
The system SHALL allow users to archive exercises they have created.

#### Scenario: Successful Archiving
- **WHEN** a user selects "Archive" for an exercise they own
- **THEN** the exercise SHALL be marked as archived
- **AND** it SHALL no longer appear in the active exercise library

### Requirement: Preservation in Logs
Archived exercises SHALL remain visible and identifiable in existing workout logs.

#### Scenario: Historical Data Integrity
- **WHEN** a user views a past workout containing an archived exercise
- **THEN** the exercise name and details SHALL still be displayed correctly
