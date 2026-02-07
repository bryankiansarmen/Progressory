# Capability: exercise-multi-selection

## Summary
Allow users to select multiple exercises from the picker and add them to the workout template in a single action.

## Requirements

### Multi-Selection Mode
- **GIVEN** a user is creating a new workout template
- **WHEN** they open the exercise picker
- **THEN** they should be able to toggle multiple exercises for selection

### Selection Visualization
- **GIVEN** the exercise picker is open
- **WHEN** an exercise is clicked
- **THEN** it should be marked as "selected" (e.g., checkbox or highlight) instead of closing the picker immediately

### Batch Addition
- **GIVEN** one or more exercises are selected
- **WHEN** the "Add selected" button is clicked
- **THEN** all selected exercises should be added to the workout template in the order they were selected (or alphabetical order) and the picker should close

### Individual Variation Selection
- **GIVEN** a movement with variations is expanded
- **WHEN** multiple variations are selected
- **THEN** each selected variation should be treated as an individual exercise to be added
