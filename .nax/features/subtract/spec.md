# Feature: subtract

## Goal

Add a `subtract(a, b)` function to `src/math.ts`, next to `add`.

## Requirements

- `subtract(a: number, b: number): number` returns `a - b`.
- Exported as a named export from `src/math.ts`.
- `add` is unchanged.

## Acceptance criteria

1. `subtract(5, 3)` returns `2`.
2. `subtract(3, 5)` returns `-2`.
3. `subtract(0, 0)` returns `0`.
4. `bun test` and `bun run typecheck` pass.

## Out of scope

Any other math functions, input validation, or new files outside `src/` and `test/`.
