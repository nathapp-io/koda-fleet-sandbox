# Feature: negate

## Goal

Add a `negate(n)` function to `src/math.ts`, next to `add`.

## Requirements

- `negate(n: number): number` returns `-n`, except that `negate(0)` returns `0` (not `-0`).
- Exported as a named export from `src/math.ts`.
- `add` is unchanged.

## Acceptance criteria

1. `negate(5)` returns `-5`.
2. `negate(-3)` returns `3`.
3. `Object.is(negate(0), 0)` is `true`.
4. `bun test` and `bun run typecheck` pass.

## Out of scope

Any other math functions, input validation, or new files outside `src/` and `test/`.
