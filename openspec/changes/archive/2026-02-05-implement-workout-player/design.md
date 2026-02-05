# Design: Workout Player UI

## Context
The Workout Player is a dynamic, logic-heavy interface. It needs to handle a lot of state (timer, active set, logging data) and provide a "heads-up display" experience for the user.

## Goals
- Create a immersive tracking experience.
- Implement a robust timer system.
- Provide a clear, easy-to-use logging interface for sets.
- Handle "Rest" states between sets without losing session context.

## Decisions

### Decision 1: Context-Driven Session State
We will use a `WorkoutSessionContext` (or local state in a high-level container) to manage the session.
- **Rationale**: Multiple components (Timer, ExerciseList, RestOverlay) need access to the same session data.

### Decision 2: Local Logging with Batch Persistence
Sets will be saved in local React state during the session. The entire `WorkoutLog` will only be persisted to the DB when the user clicks "Finish".
- **Rationale**: Simplifies the API interaction. Batch saving reduces the number of database writes and ensures a session is only "real" once completed.

### Decision 3: "Sticky" Rest Timer
The rest timer will be implemented as a global overlay or a prominent fixed header element.
- **Rationale**: Users need to see the rest countdown regardless of which exercise they are currently viewing/logging.

## Component Hierarchy
```
WorkoutPlayerPage (Server Component - Load Template)
└── WorkoutPlayerContainer (Client Component - Session State)
    ├── PlayerHeader (Duration Timer, Finish Button)
    ├── ActiveExerciseCard (Current focus)
    │   ├── SetLoggingRow (Input Weight/Reps + Checkmark)
    │   └── ExerciseHistory (Quick reference)
    ├── SessionSummary (Next exercises)
    └── RestTimerOverlay (Appears when rest starts)
```

## State Shape
```typescript
interface SessionState {
  duration: number;
  exercises: {
    exerciseId: string;
    sets: { reps: number; weight: number; isDone: boolean }[];
  }[];
  activeExerciseIndex: number;
  restTimeRemaining: number | null;
}
```
