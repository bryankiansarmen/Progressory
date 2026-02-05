# Design: Home Dashboard

## Context
The Home Dashboard is a "heads-up display" for user progress. It needs to fetch data from `WorkoutLog`, `WorkoutLogEntry`, and `Set` to calculate metrics.

## Decisions

### Decision 1: Server-Side Aggregation
Stats will be calculated in a dedicated `stats.service.ts` using Prisma.
- **Rationale**: Aggregating hundreds of sets on the client is inefficient. Server-side caching can also be applied later.

### Decision 2: Weekly Focus
The primary metrics (Volume, Frequency) will focus on a rolling 7-day window.
- **Rationale**: Short-term goals are more actionable for consistency.

## Component Hierarchy
```
DashboardPage (Server Component)
├── DashboardHeader (Volume, Sessions, Days)
├── ProductivitySection (Row)
│   ├── ConsistencyChart (7-day activity)
│   └── WeeklyVolumeProgress (Vs last week)
├── AchievementsSection
│   └── PersonalRecordsList (Top 3 recent)
└── QuickActions (Library, Routines)
```

## Data Requirements
```typescript
interface DashboardStats {
  weeklyVolume: number;
  weeklySessions: number;
  activityDays: boolean[]; // [M, T, W, T, F, S, S]
  recentPRs: {
    exerciseName: string;
    weight: number;
    reps: number;
    date: Date;
  }[];
}
```
