## Context
The `CreateExerciseDialog` is currently trapped inside the `ExerciseLibraryContainer`'s sticky header because of the `backdrop-blur` CSS filter.

## Goals
- Fix the modal's position so it centers correctly on the screen.
- Use a React Portal to render the modal at the document body level.

## Decisions

### 1. Use `createPortal` from `react-dom`
We will wrap the modal's JSX in `createPortal(content, document.body)`.
- **Rationale**: This is the standard React solution for modals/tooltips that need to escape their parent's layout constraints.

### 2. Client-Side Hydration Check
Since we are in Next.js, we must ensure `document` is available (client-side only) before attempting to render the portal.
- **Implementation**: We will use a `useEffect` to set a `mounted` state to `true`.

## Risks
- **Accessibility**: Portals can sometimes break screen reader focus order if not handled properly. However, for a simple prototype, this is acceptable compared to the visual bug.
