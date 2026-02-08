# hierarchical-exercise-management Specification

## Purpose
Define requirements for managing the relationship between parent exercises and their variations.

## Requirements
### Requirement: Variation Management Actions
The system SHALL provide Edit and Archive actions for individual variations within a parent exercise card.

#### Scenario: Editing a Variation
- **WHEN** a user clicks the Edit icon next to a variation name
- **THEN** the Edit dialog SHALL open with the variation's data pre-filled
- **AND** the parent exercise SHALL be correctly identified

### Requirement: Creating Variations
The system SHALL allow users to create a new exercise as a variation of an existing parent.

#### Scenario: Successful Variation Creation
- **WHEN** a user creates a new exercise and selects a "Parent Exercise"
- **THEN** the new exercise SHALL be saved with the corresponding `parentId`
- **AND** it SHALL appear under the parent's variation list in the library
