# Tasks: fix-infinite-scroll-observer-loop

## Implementation

- [x] 1.1 Add `loadMoreRef` using `useRef` hook in `ExerciseLibraryContainer.tsx`
- [x] 1.2 Add `isError` state to `ExerciseLibraryContainer.tsx` and update `loadMore` to set/clear it
- [x] 1.3 Add effect to sync `loadMoreRef.current` with the latest `loadMore` function
- [x] 1.4 Update Intersection Observer effect to call `loadMoreRef.current()` and check `!isError`
- [x] 1.5 Remove `loadMore` from Intersection Observer effect dependencies and add `isError`
- [x] 1.6 Add UI for error state (Retry button) in the sentinel area

## Verification

- [x] 2.1 Test: Open Exercise Library and scroll to the bottom to trigger infinite scroll
- [x] 2.2 Test: Observe that loading indicator appears once and does not flash rapidly
- [x] 2.3 Test: Verify exercises continue to load correctly when scrolling
- [x] 2.4 Test: Simulate network error (offline mode) and verify infinite retry loop does not occur
- [x] 2.5 Test: Verify "Retry" button appears on error and successfully retries loading
- [x] 2.6 Test: Check browser console for any errors or warnings
