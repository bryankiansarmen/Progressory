# Proposal: Fix Exercise Modal Centering

## Why
The exercise creation/edit modal is currently rendered inside a sticky header with `backdrop-blur`. In CSS, filters create a new containing block, which traps `position: fixed` elements. This causes the modal to align to the top of the header instead of the viewport center.

## What Changes
- **React Portal Integration**: Update `CreateExerciseDialog.tsx` to use a React Portal, rendering the modal content at the document body level.
- **Z-Index Cleanup**: Ensure the modal overlay consistently covers the entire viewport and has the highest z-index.

## Capabilities

### New Capabilities
- None (Technical fix)

### Modified Capabilities
- `custom-exercise-creation`: Requirement for the form to be properly centered and accessible regardless of parent positioning.

## Impact
- **UI**: `CreateExerciseDialog` component will now render its modal outside of the exercise library's sticky header.
