# Feature: f9-abs

## Goal

Add an `abs(n)` function to `src/math.ts`, next to `add` and `negate`.

## Requirements

- `abs(n: number): number` returns `-n` when `n < 0` and `n` otherwise.
- A zero result is always positive zero (`0`, never `-0`).
- A `NaN` argument returns `NaN`.
- Exported as a named export from `src/math.ts`, with an explicit return type.
- `add` and `negate` are unchanged.
- Tests go in `test/math.test.ts`, in a new `describe('abs', ...)` block whose test names are prefixed `A-AC<n>:` (the project's convention for a new block next to the `negate` `AC<n>:` names).

## Acceptance criteria

1. [unit] `abs(4)` returns `4`.
2. [unit] `abs(-4)` returns `4`.
3. [unit] `Object.is(abs(0), 0)` is `true`.
4. [unit] `Object.is(abs(-0), 0)` is `true`.
5. [unit] `Number.isNaN(abs(NaN))` is `true`.
6. [unit] `abs(-Infinity)` returns `Infinity`.

## Out of scope

- Other math functions.
- Changes to `add` or `negate`.
- New files outside `src/` and `test/`.
