## MODIFIED Requirements

### Requirement: Metadata Editing
The system SHALL allow users to update the metadata (name, category, muscle group, equipment, and parentId) of exercises they own.

#### Scenario: Changing Parent Exercise
- **WHEN** a user updates an exercise and changes its "Parent Exercise"
- **THEN** the exercise SHALL be moved to the new parent group
- **OR** SHALL become a top-level exercise if the parent is removed
