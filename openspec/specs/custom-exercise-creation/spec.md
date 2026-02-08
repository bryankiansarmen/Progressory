# custom-exercise-creation Specification

## Purpose
Define requirements for users to create and validate their own custom exercises.

## Requirements
### Requirement: Creation Form
The system SHALL provide a form to create a new custom exercise. The form MUST be centered in the viewport and maintain accessibility regardless of the triggering element's position in the DOM.

#### Scenario: Successful Creation
- **WHEN** the user submits the form with valid `name`, `category`, and `muscleGroup`
- **THEN** the system SHALL call the `createCustomExercise` service
- **AND** the new exercise SHALL appear in the library

#### Scenario: Modal Centering
- **WHEN** the user opens the exercise creation modal
- **THEN** the modal SHALL appear centered in the browser viewport
- **AND** SHALL NOT be constrained by parent element scrolling or filters

### Requirement: Validation
The system SHALL validate that `name`, `category`, and `muscleGroup` are provided before submission (creation or update).

#### Scenario: Empty Name
- **WHEN** the user attempts to submit the form (new or edit) without a name
- **THEN** the system SHALL display a validation error
- **AND** SHALL NOT call the service
