# Proposal: Implement Workout Player UI

## Why
The Workout Player is the core engagement point of the application. It transforms a static template into an active tracking session, allowing users to log their performance (reps, weight, sets) in real-time.

## What Changes
- **Live Session View**: A dedicated active workout route at `/workouts/active`.
- **Set Logging Interface**: Direct input for weight and reps for each exercise.
- **Session Lifecycle**: Logic to "Start", "Pause", and "Finish" a workout.
- **Rest Timer**: A visual countdown triggered after completing a set.
- **Persistence**: Saving the results as a `WorkoutLog` with multiple `WorkoutLogEntry` and `Set` records.

## Capabilities

### New Capabilities
- `live-session-tracking`: Real-time session management including a workout timer.
- `performance-logging`: Granular logging of sets, reps, and weight for specific exercises during a session.
- `rest-timer-management`: Automatic and manual rest interval tracking.

## Impact
- `app/workouts/active/`: New dynamic route for the player.
- `components/workout/player/`: New subsystem for managing the player UI.
- `services/logging.service.ts`: Integration for persisting session data.
- `hooks/useWorkoutTimer.ts`: Custom hook for managing the live duration.
