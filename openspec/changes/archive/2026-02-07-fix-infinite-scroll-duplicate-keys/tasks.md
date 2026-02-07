# Tasks: fix-infinite-scroll-duplicate-keys

## Implementation

- [x] 1.1 Update `loadMore` function in `ExerciseLibraryContainer.tsx` to filter duplicate IDs when merging server results <!-- id: 1 -->
- [x] 1.2 Update `handleExerciseCreated` function in `ExerciseLibraryContainer.tsx` to increment the `offset` state <!-- id: 2 -->

## Verification

- [x] 2.1 Test: Open Exercise Library and scroll to load multiple pages <!-- id: 3 -->
- [x] 2.2 Test: Create a new custom exercise <!-- id: 4 -->
- [x] 2.3 Test: Continue scrolling and verify no duplicate key warnings in console <!-- id: 5 -->
- [x] 2.4 Test: Verify the newly created exercise appears only once in the list <!-- id: 6 -->
