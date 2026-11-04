# Feature: fpf-square

## Goal

Add a `square(n)` function to `src/math.ts`, next to `add`.

## Requirements

- `square(n: number): number` returns `n * n`.
- Exported as a named export from `src/math.ts`.
- `add` and `negate` are unchanged.

## Acceptance criteria

1. `square(3)` returns `9`.
2. `square(-4)` returns `16`.
3. `square(0)` returns `0`.
4. `bun test` and `bun run typecheck` pass.

## Out of scope

Any other math functions, input validation, or new files outside `src/` and `test/`.
