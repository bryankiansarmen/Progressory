# Proposal: fix-infinite-scroll-observer-loop

## Summary
Fix the Intersection Observer recreation loop in the Exercise Library that causes the loading indicator to flash rapidly when scrolling to the bottom, and prevent infinite retry loops when API calls fail.

## Impact
- **UX**: Eliminates the jarring loading indicator flash that occurs during infinite scroll
- **Performance**: Reduces unnecessary observer teardown/recreation cycles and prevents API hammering on failure
- **Stability**: Prevents potential race conditions from observer recreation

## Delta Requirements
1. **Stable Observer**: The Intersection Observer must not recreate when `loadMore` function changes due to state updates
2. **Latest Callback**: The observer must always call the most recent version of `loadMore` to access current state
3. **Error Guard**: The observer must not automatically trigger a retry if the previous attempt failed, requiring user interaction to retry

## New Capabilities
- **Error State Handling**: Visual feedback when loading more exercises fails, replacing the infinite spinner
