# rest-timer-management Specification

## Purpose
TBD - created by archiving change implement-workout-player. Update Purpose after archive.
## Requirements
### Requirement: Automatic Rest Trigger
The system SHALL optionally trigger a rest timer immediately after a set is marked as complete.

#### Scenario: Starting Rest
- **WHEN** the user completes a set
- **THEN** a countdown timer (default 90 seconds) SHALL appear and begin decrementing.

### Requirement: Manual Controls
The system SHALL provide controls to skip or add time to the rest timer.

#### Scenario: Adjusting rest
- **WHEN** the rest timer is running
- **THEN** the user SHALL be able to click "+30s" or "Skip" to resume the session immediately.

