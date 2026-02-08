## MODIFIED Requirements

### Requirement: Categorical Filtering
The system SHALL allow users to filter exercises by Category (e.g., Strength, Cardio) and Muscle Group. By default, the system SHALL only return exercises that are NOT archived.

#### Scenario: Muscle Group Filtering
- **WHEN** the user selects "Chest" from the muscle group filter
- **THEN** only exercises targeted at the chest SHALL be displayed
- **AND** archived exercises SHALL be excluded from the results
