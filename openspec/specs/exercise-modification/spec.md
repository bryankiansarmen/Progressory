# exercise-modification Specification

## Purpose
Define requirements for allowing users to update metadata for exercises they have created.

## Requirements
### Requirement: Metadata Editing
The system SHALL allow users to update the metadata (name, category, muscle group, equipment, and parentId) of exercises they own.

#### Scenario: Successful Edit
- **WHEN** a user updates the name of a custom exercise
- **THEN** the change SHALL be persisted
- **AND** the new name SHALL be reflected in the exercise library and all historical logs

#### Scenario: Changing Parent Exercise
- **WHEN** a user updates an exercise and changes its "Parent Exercise"
- **THEN** the exercise SHALL be moved to the new parent group
- **OR** SHALL become a top-level exercise if the parent is removed