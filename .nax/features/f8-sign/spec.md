# Feature: f8-sign

## Goal

Add a `sign(n)` function to `src/math.ts`, next to `add` and `negate`.

## Requirements

- `sign(n: number): number` returns `-1` when `n < 0`, `1` when `n > 0`, and `0` when `n` is `0` or `-0`.
- A zero result is always positive zero (`0`, never `-0`).
- A `NaN` argument returns `NaN`.
- Exported as a named export from `src/math.ts`, with an explicit return type.
- `add` and `negate` are unchanged.
- Tests go in `test/math.test.ts`, in a new `describe('sign', ...)` block whose test names are prefixed `S-AC<n>:` so they do not collide with the existing `negate` `AC<n>:` names.

## Acceptance criteria

1. [unit] `sign(7)` returns `1`.
2. [unit] `sign(-3)` returns `-1`.
3. [unit] `Object.is(sign(0), 0)` is `true`.
4. [unit] `Object.is(sign(-0), 0)` is `true`.
5. [unit] `Number.isNaN(sign(NaN))` is `true`.
6. [unit] `sign(Infinity)` returns `1` and `sign(-Infinity)` returns `-1`.

## Out of scope

- Other math functions.
- Changes to `add` or `negate`.
- New files outside `src/` and `test/`.
