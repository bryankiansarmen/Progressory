## MODIFIED Requirements

### Requirement: Validation
The system SHALL validate that `name`, `category`, and `muscleGroup` are provided before submission (creation or update).

#### Scenario: Empty Name
- **WHEN** the user attempts to submit the form (new or edit) without a name
- **THEN** the system SHALL display a validation error
- **AND** SHALL NOT call the service
