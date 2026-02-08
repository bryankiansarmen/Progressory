# Design: fix-infinite-scroll-observer-loop

## Context

The Exercise Library uses an Intersection Observer to trigger infinite scroll when the user reaches the bottom. Currently, the observer effect depends on the `loadMore` callback, which is recreated every time the `offset` state changes. This creates a problematic cycle:

1. Observer triggers `loadMore()`
2. `loadMore()` updates `offset`
3. `offset` change causes `loadMore` to be recreated (new function reference)
4. Observer effect sees new `loadMore` and re-runs
5. Old observer is destroyed, new one is created
6. New observer immediately triggers again (still at bottom)
7. Result: Loading indicator flashes rapidly

## Technical Approach

### Use a Ref to Stabilize the Observer

**Pattern**: Store the latest `loadMore` function in a ref, and have the observer call the ref instead of the function directly.

**Location**: `ExerciseLibraryContainer.tsx`

**Current Implementation**:
```typescript
const loadMore = useCallback(async () => {
  // ... implementation
}, [offset, isLoading, hasMore, searchQuery, categoryFilter, muscleGroupFilter]);

useEffect(() => {
  const observer = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting && hasMore && !isLoading) {
        loadMore(); // Direct call
      }
    },
    { threshold: 1.0 }
  );
  // ...
}, [loadMore, hasMore, isLoading]); // loadMore causes recreation
```

**Proposed Change**:
```typescript
const loadMore = useCallback(async () => {
  // ... implementation stays the same
}, [offset, isLoading, hasMore, searchQuery, categoryFilter, muscleGroupFilter]);

// NEW: Store latest loadMore in a ref
const loadMoreRef = useRef(loadMore);
useEffect(() => {
  loadMoreRef.current = loadMore;
}, [loadMore]);

// UPDATED: Observer uses ref, no longer depends on loadMore
useEffect(() => {
  const observer = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting && hasMore && !isLoading) {
        loadMoreRef.current(); // Call via ref
      }
    },
    { threshold: 1.0 }
  );
  // ...
}, [hasMore, isLoading]); // loadMore removed from deps
```

**Rationale**: 
- The ref always points to the latest `loadMore` function
- The observer effect only depends on `hasMore` and `isLoading` (which change less frequently)
- When `offset` changes, `loadMore` is recreated, but the observer is NOT recreated
- The ref is updated to point to the new `loadMore`, so the next trigger uses the latest version
- No more recreation loop!

### Prevent Infinite Error Loops

**Problem**: If `loadMore` fails, `isLoading` becomes `false` but no new items are added. The sentinel remains visible. The observer (which depends on `isLoading`) recreates/re-runs, sees the sentinel is visible, and triggers `loadMore` again. This creates an infinite API call loop.

**Solution**:
1. Add `error` state (boolean) to `ExerciseLibraryContainer`.
2. Update `loadMore` to set `error` on failure.
3. In the observer effect, check `!error` before calling `loadMore`.
4. Render a "Retry" button or error message in the sentinel area if an error exists.

**Modified Logic**:
```typescript
// Observer Effect
useEffect(() => {
  const observer = new IntersectionObserver(
    entries => {
      // Added !error check
      if (entries[0].isIntersecting && hasMore && !isLoading && !error) {
        loadMoreRef.current();
      }
    },
    // ...
  );
  // ...
}, [hasMore, isLoading, error]); // Add error to deps

// Load More
const loadMore = useCallback(async () => {
    // ...
    setError(false); // Clear error on start
    try {
        // ...
    } catch (err) {
        setError(true); // Set error on fail
    } finally {
        setIsLoading(false);
    }
}, [...]);
```

## Components Modified

- [`ExerciseLibraryContainer.tsx`](file:///c:/Users/SuperKian/Downloads/workout-tracker/components/exercise/ExerciseLibraryContainer.tsx)
  - Add `loadMoreRef` using `useRef`
  - Add `error` state using `useState`
  - Add effect to sync ref with latest `loadMore`
  - Update `loadMore` to handle error state
  - Update Intersection Observer effect to use ref, remove `loadMore` from dependencies, and check `!error`
  - Add retry UI in the sentinel area

## Risks / Trade-offs

- **Complexity**: Adds a ref indirection and error state management, slightly more complex than direct function call
- **React patterns**: This is a standard React pattern for stabilizing callbacks in effects, well-documented and widely used
- **Edge cases**: None identified - the ref pattern is specifically designed for this use case
