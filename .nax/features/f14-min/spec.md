# Feature: f14-min

## Goal

Add a `min2(a, b)` function to `src/math.ts`, next to `add` and `negate`.

## Requirements

- `min2(a: number, b: number): number` returns the smaller of `a` and `b`.
- When either argument is `NaN`, it returns `NaN`.
- `min2(0, -0)` and `min2(-0, 0)` both return negative zero (`-0`).
- Exported as a named export from `src/math.ts`, with an explicit return type.
- `add`, `negate` and any other existing export are unchanged.
- Tests go in `test/math.test.ts`, in a new `describe('min2', ...)` block whose test names are prefixed `N-AC<n>:`.

## Acceptance criteria

1. [unit] `min2(3, 7)` returns `3`.
2. [unit] `min2(7, 3)` returns `3`.
3. [unit] `min2(-2, -5)` returns `-5`.
4. [unit] `Number.isNaN(min2(NaN, 1))` and `Number.isNaN(min2(1, NaN))` are both `true`.
5. [unit] `Object.is(min2(0, -0), -0)` and `Object.is(min2(-0, 0), -0)` are both `true`.

## Out of scope

- Other math functions (the `clamp` feature `f14-clamp` is a separate spec that builds on `min2`).
- Changes to existing exports.
- New files outside `src/` and `test/`.
