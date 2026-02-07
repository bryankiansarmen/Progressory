# Proposal: fix-infinite-scroll-duplicate-keys

## Summary
Fix the duplicate key error in the Exercise Library's infinite scroll caused by local exercise creation and unsynchronized pagination offsets.

## Impact
- **Stability**: Prevents React library crashes/warnings due to non-unique keys.
- **Accuracy**: Ensures the exercise list correctly reflects both local and server data without duplication.
- **UX**: Provides a smoother scrolling experience after creating new exercises.

## Delta Requirements
1. **Deduplication**: The infinite scroll merge logic must filter out exercises that are already present in the existing list.
2. **Offset Synchronization**: The pagination offset must be correctly updated when an exercise is added locally to prevent fetching overlapping results on the next scroll.

## New Capabilities
- None (This is a bug fix).
