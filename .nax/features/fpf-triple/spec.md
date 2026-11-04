# Feature: fpf-triple

## Goal

Add a `triple(n)` function to `src/math.ts`, next to `add`.

## Requirements

- `triple(n: number): number` returns `n * 3`.
- Exported as a named export from `src/math.ts`.
- `add` and `negate` are unchanged.

## Acceptance criteria

1. `triple(3)` returns `9`.
2. `triple(-4)` returns `-12`.
3. `triple(0)` returns `0`.
4. `bun test` and `bun run typecheck` pass.

## Out of scope

Any other math functions, input validation, or new files outside `src/` and `test/`.

## Notes

The `e2e` quality gate on this branch is intentionally red for a koda live check. Leave it and `.nax/config.json` unchanged.
