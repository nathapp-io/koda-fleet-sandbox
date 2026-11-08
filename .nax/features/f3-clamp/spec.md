# Feature: f3-clamp

## Goal

Add a `clamp(n, min, max)` function to `src/math.ts`, next to `add` and `negate`.

## Requirements

- `clamp(n: number, min: number, max: number): number` returns `min` when `n < min`, `max` when `n > max`, and `n` otherwise.
- A zero result is always positive zero (`0`, never `-0`), whichever of `n`, `min` or `max` it came from.
- When `min > max`, it throws a `RangeError` with the message `min must not exceed max`, before any clamping.
- Exported as a named export from `src/math.ts`.
- `add` and `negate` are unchanged.
- Tests go in `test/math.test.ts`.
- `clamp` must handle a `NaN` argument (`n`, `min` or `max`), but the expected result is NOT decided yet: it could return `NaN`, throw a `RangeError`, or treat `NaN` as unbounded. The product owner must choose before implementation.

## Acceptance criteria

1. [unit] `clamp(5, 0, 10)` returns `5`.
2. [unit] `clamp(-1, 0, 10)` returns `0`.
3. [unit] `clamp(11, 0, 10)` returns `10`.
4. [unit] `clamp(0, 0, 0)` returns `0`.
5. [unit] `clamp(1, 2, 1)` throws a `RangeError` with message `min must not exceed max`.
6. [unit] `Object.is(clamp(-0, 0, 10), 0)` is `true`.
7. [unit] `Object.is(clamp(-5, -0, 0), 0)` is `true`.
8. [unit] `Object.is(clamp(5, -10, -0), 0)` is `true`.

## Out of scope

- Other math functions.
- Infinity handling.
- New files outside `src/` and `test/`.
