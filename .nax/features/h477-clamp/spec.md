# Feature: h477-clamp

## Goal

Add a `clamp(x, lo, hi)` function to `src/math.ts`, next to the existing exports.

## Requirements

- `clamp(x: number, lo: number, hi: number): number` returns `lo` when `x < lo`, `hi` when `x > hi`, and `x` otherwise.
- When `lo > hi`, it throws a `RangeError` whose message is `clamp: lo must be <= hi`.
- When any argument is `NaN`, it returns `NaN`.
- Exported as a named export from `src/math.ts`, with an explicit return type.
- Every existing export is unchanged.
- Tests go in `test/math.test.ts`, in a new `describe('clamp', ...)` block whose test names are prefixed `N-AC<n>:`.

## Acceptance criteria

1. [unit] `clamp(5, 0, 10)` returns `5`.
2. [unit] `clamp(-1, 0, 10)` returns `0` and `clamp(11, 0, 10)` returns `10`.
3. [unit] `clamp(1, 10, 0)` throws a `RangeError` with message `clamp: lo must be <= hi`.
4. [unit] `Number.isNaN(clamp(NaN, 0, 1))` is `true`.

## Out of scope

- Other math functions.
- Changes to existing exports.
- New files outside `src/` and `test/`.
