# Feature: g5-sign

## Goal

Add a `sign(x)` function to `src/math.ts`, next to the existing exports.

## Requirements

- `sign(x: number): number` returns `1` for a positive number, `-1` for a negative number and `0` for zero.
- When `x` is `NaN`, it returns `NaN`.
- `sign(-0)` returns `0` (positive zero); the sign of zero is not preserved.
- Exported as a named export from `src/math.ts`, with an explicit return type.
- Every existing export is unchanged.
- Tests go in `test/math.test.ts`, in a new `describe('sign', ...)` block whose test names are prefixed `N-AC<n>:`.

## Acceptance criteria

1. [unit] `sign(5)` returns `1`.
2. [unit] `sign(-3)` returns `-1`.
3. [unit] `Object.is(sign(0), 0)` and `Object.is(sign(-0), 0)` are both `true`.
4. [unit] `Number.isNaN(sign(NaN))` is `true`.

## Out of scope

- Other math functions.
- Changes to existing exports.
- New files outside `src/` and `test/`.
