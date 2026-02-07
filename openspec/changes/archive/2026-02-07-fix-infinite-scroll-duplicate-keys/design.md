# Design: fix-infinite-scroll-duplicate-keys

## Context

The Exercise Library uses infinite scroll to load exercises in batches. When a user creates a custom exercise, it's added to the local state immediately but the pagination offset isn't updated. This causes the next server fetch to potentially return the same exercise (due to alphabetical sorting), resulting in duplicate keys.

## Technical Approach

### 1. Deduplication in Merge Logic

**Location**: `ExerciseLibraryContainer.tsx` - `loadMore` function

**Current Implementation**:
```typescript
setExercises(prev => [...prev, ...nextExercises]);
```

**Proposed Change**:
```typescript
setExercises(prev => {
    const existingIds = new Set(prev.map(ex => ex.id));
    const uniqueNew = nextExercises.filter(ex => !existingIds.has(ex.id));
    return [...prev, ...uniqueNew];
});
```

**Rationale**: This prevents duplicate IDs from ever entering the list, making the component resilient to overlapping server responses.

### 2. Offset Synchronization

**Location**: `ExerciseLibraryContainer.tsx` - `handleExerciseCreated` function

**Current Implementation**:
```typescript
const handleExerciseCreated = (newExercise: Exercise) => {
    setExercises((prev) => [newExercise, ...prev]);
};
```

**Proposed Change**:
```typescript
const handleExerciseCreated = (newExercise: Exercise) => {
    setExercises((prev) => [newExercise, ...prev]);
    setOffset(prev => prev + 1);
};
```

**Rationale**: Incrementing the offset keeps the pagination state synchronized with the total number of exercises in the list, preventing the server from re-fetching exercises that are already present.

## Components Modified

- [`ExerciseLibraryContainer.tsx`](file:///c:/Users/SuperKian/Downloads/workout-tracker/components/exercise/ExerciseLibraryContainer.tsx)
  - Update `loadMore` to filter duplicates
  - Update `handleExerciseCreated` to increment offset

## Risks / Trade-offs

- **Performance**: The deduplication logic adds a small overhead (O(n) for creating the Set + O(m) for filtering), but this is negligible for typical page sizes (20-50 items).
- **Edge Cases**: If the server returns exercises in a different order than expected, the offset might drift slightly, but the deduplication ensures no visual duplicates.
