# Feature: lc2b2-cube

## Goal

Add a `cube(n)` function to `src/math.ts`, next to `add`.

## Requirements

- `cube(n: number): number` returns `n * n * n`.
- Exported as a named export from `src/math.ts`.
- `add` and `negate` are unchanged.

## Acceptance criteria

1. `cube(2)` returns `8`.
2. `cube(-3)` returns `-27`.
3. `cube(0)` returns `0`.
4. `bun test` and `bun run typecheck` pass.

## Out of scope

Any other math functions, input validation, or new files outside `src/` and `test/`.
