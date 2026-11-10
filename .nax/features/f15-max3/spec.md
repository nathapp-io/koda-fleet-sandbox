# Feature: f15-max3

## Goal

Add a `max3(a, b, c)` function to `src/math.ts` alongside `add`, `negate` and `min2`.

## User story

**US-001** — As a caller of the math library, I want `max3` so that I can get the
largest of three numbers without nesting comparisons at the call site.

## Requirements

- `max3(a: number, b: number, c: number): number` returns the largest of the three.
- The implementation strategy is left to the implementer (plain comparisons or
  `Math.max` are both acceptable); no new dependencies.
- Named export from `src/math.ts`, explicit return type, no default export.
- `add`, `negate` and `min2` are unchanged.
- Tests go in the existing `test/math.test.ts`, in a new `describe('max3', ...)`
  block; every new test name carries the prefix `M3-AC<n>:`, matching the
  existing per-feature prefix style (`AC<n>:`, `N-AC<n>:`).

## Acceptance criteria

1. [unit] `max3(9, 2, 5)` returns `9` — largest first.
2. [unit] `max3(2, 5, 9)` returns `9` — largest last.
3. [unit] `max3(4, 4, 4)` returns `4` — all equal.
4. [unit] `max3(2, 9, 5)` returns `9` — largest in the middle.
5. [unit] `max3(-7, -3, -5)` returns `-3` — all operands negative.

## Out of scope

- NaN and signed-zero semantics (not pinned by this feature).
- Changes to existing exports or new files outside `src/` and `test/`.
