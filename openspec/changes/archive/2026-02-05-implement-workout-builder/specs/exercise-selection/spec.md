# Spec: Exercise Selection

## ADDED Requirements

### Requirement: Contextual Exercise Picker
The system SHALL provide a searchable picker/modal within the Workout Builder to select exercises from the library.

#### Scenario: Adding Exercise
- **WHEN** the user searches for "Squat" in the picker
- **AND** clicks on "Back Squat"
- **THEN** "Back Squat" SHALL be added to the current workout template's exercise list.

### Requirement: Reordering
The system SHALL allow users to reorder exercises within a template.

#### Scenario: Change Order
- **WHEN** the user drags an exercise to a new position
- **THEN** the `order` property SHALL be updated to reflect the new sequence.
