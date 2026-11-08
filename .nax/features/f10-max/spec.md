# Feature: f10-max

## Goal

Add a `max2(a, b)` function to `src/math.ts`, next to `add` and `negate`.

## Requirements

- `max2(a: number, b: number): number` returns the larger of `a` and `b`.
- When either argument is `NaN`, it returns `NaN`.
- `max2(0, -0)` and `max2(-0, 0)` both return positive zero (`0`).
- Exported as a named export from `src/math.ts`, with an explicit return type.
- `add`, `negate` and any other existing export are unchanged.
- Tests go in `test/math.test.ts`, in a new `describe('max2', ...)` block whose test names are prefixed `M-AC<n>:`.

## Acceptance criteria

1. [unit] `max2(3, 7)` returns `7`.
2. [unit] `max2(7, 3)` returns `7`.
3. [unit] `max2(-2, -5)` returns `-2`.
4. [unit] `Number.isNaN(max2(NaN, 1))` and `Number.isNaN(max2(1, NaN))` are both `true`.
5. [unit] `Object.is(max2(0, -0), 0)` and `Object.is(max2(-0, 0), 0)` are both `true`.

## Out of scope

- Other math functions.
- Changes to existing exports.
- New files outside `src/` and `test/`.
- The `e2e` quality command in `.nax/config.json` (a sandbox gate for the koda flow live check; not part of this feature).
