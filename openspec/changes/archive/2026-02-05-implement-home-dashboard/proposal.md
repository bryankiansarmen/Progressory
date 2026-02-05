# Proposal: Implement Home Dashboard UI

## Why
The Home Dashboard is the first page users see when they open Progressory. It needs to provide immediate value by summarizing their training progress, motivation (streaks), and highlight their achievements (PRs).

## What Changes
- **Root Dashboard Page**: Replace the placeholder at `/` with a rich, data-driven dashboard.
- **Consistency Tracker**: A visual representation of workout frequency over the last week/month.
- **Volume Metrics**: Calculation and display of total weight lifted.
- **PR Showcase**: A section highlighting recent personal records achieved in the player.
- **Quick Start**: Easy access to the Exercise Library and Workout Templates.

## Capabilities

### New Capabilities
- `dashboard-stats-aggregation`: Logic to aggregate raw workout logs into meaningful metrics (Volume, PRs).
- `activity-visualization`: UI components for displaying training consistency and trends.

## Impact
- `app/page.tsx`: Full redesign of the landing page.
- `components/dashboard/`: New subsystem for dashboard-specific widgets and charts.
- `services/stats.service.ts`: Backend logic for data aggregation.
