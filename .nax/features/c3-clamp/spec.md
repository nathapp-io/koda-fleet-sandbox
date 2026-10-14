# Feature: c3-clamp

## Goal

Add a `clamp(value, min, max)` function to `src/math.ts`, next to `add` and `negate`.

## User story

**US-001** — As a caller doing numeric work, I want `clamp` to keep a number inside a
range, so that out-of-range inputs are limited to the nearest bound instead of leaking
through. (Koda fleet c3 live check.)

## Requirements

- `clamp(value: number, min: number, max: number): number` is exported as a named export
  from `src/math.ts`.
- Returns `min` when `value < min`, `max` when `value > max`, otherwise `value` unchanged.
- Throws `Error('min greater than max')` when `min > max` (checked before any clamping).
- `min === max` is valid and returns that bound.
- `add` and `negate` are unchanged.
- Tests live in the existing `test/math.test.ts`, in a `describe('clamp', ...)` block.

## Acceptance criteria

1. A value inside the range is returned unchanged: `clamp(5, 1, 10)` returns `5`.
2. A value outside the range is clamped to the nearer bound: `clamp(0, 1, 10)` returns `1`
   and `clamp(42, 1, 10)` returns `10`.
3. `clamp(5, 10, 1)` throws an `Error` with message `min greater than max`.

## Verification

`bun test` and `bun run typecheck` pass, with no new dependencies and no new files
outside `src/` and `test/`.

## Out of scope

Other math functions, NaN/infinity special-casing, reversed-argument helpers, or any
change to existing exports.
