# Feature: f17-min3

## Goal

Add a `min3(a, b, c)` function to `src/math.ts` alongside `add`, `negate` and `min2`.

## User story

**US-001** — As a caller of the math library, I want `min3` so that I can get the
smallest of three numbers without nesting comparisons at the call site.

## Requirements

- `min3(a: number, b: number, c: number): number` returns the smallest of the three.
- Implemented with plain comparisons (`if`/ternary), not `Math.min`; no new dependencies.
- Named export from `src/math.ts`, explicit return type, no default export.
- `add`, `negate` and `min2` are unchanged.
- Tests go in the existing `test/math.test.ts`, in a new `describe('min3', ...)` block.

## Acceptance criteria

1. [unit] `min3(1, 8, 5)` returns `1` — smallest first.
2. [unit] `min3(8, 5, 1)` returns `1` — smallest last.
3. [unit] `min3(4, 4, 4)` returns `4` — all equal.

## Out of scope

- NaN / signed-zero semantics (not pinned by this feature).
- Changes to existing exports or new files outside `src/` and `test/`.
