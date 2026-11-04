# Feature: fpf-double

## Goal

Add a `double(n)` function to `src/math.ts`, next to `add`.

## Requirements

- `double(n: number): number` returns `n * 2`.
- Exported as a named export from `src/math.ts`.
- `add` and `negate` are unchanged.

## Acceptance criteria

1. `double(3)` returns `6`.
2. `double(-4)` returns `-8`.
3. `double(0)` returns `0`.
4. `bun test` and `bun run typecheck` pass.

## Out of scope

Any other math functions, input validation, or new files outside `src/` and `test/`.
