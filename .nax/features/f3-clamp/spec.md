# Feature: f3-clamp

## Goal

Add a `clamp(n, min, max)` function to `src/math.ts`, next to `add` and `negate`.

## Requirements

- `clamp(n: number, min: number, max: number): number` returns `min` when `n < min`, `max` when `n > max`, and `n` otherwise, except that a zero result is always positive zero (`0`, never `-0`).
- When `min > max`, it throws a `RangeError` with the message `min must not exceed max`.
- Exported as a named export from `src/math.ts`.
- `add` and `negate` are unchanged.
- Tests go in `test/math.test.ts`.

## Acceptance criteria

1. `clamp(5, 0, 10)` returns `5`.
2. `clamp(-1, 0, 10)` returns `0`.
3. `clamp(11, 0, 10)` returns `10`.
4. `clamp(0, 0, 0)` returns `0`.
5. `clamp(1, 2, 1)` throws a `RangeError` with message `min must not exceed max`.
6. `Object.is(clamp(-0, 0, 10), 0)` is `true`.
7. `bun test` and `bun run typecheck` pass.

## Out of scope

Other math functions, NaN or Infinity handling, and new files outside `src/` and `test/`.
