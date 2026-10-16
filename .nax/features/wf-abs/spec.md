# Feature: wf-abs

## Goal

Add an `abs(n)` function to `src/math.ts`, next to `add` and `negate`.

## Requirements

- `abs(n: number): number` returns the absolute value of `n`; `abs(-0)` returns `0` (not `-0`).
- Exported as a named export from `src/math.ts`.
- `add` and `negate` are unchanged.

## Acceptance criteria

1. `abs(5)` returns `5`.
2. `abs(-3)` returns `3`.
3. `Object.is(abs(-0), 0)` is `true`.
4. `bun test` and `bun run typecheck` pass.

## Out of scope

Any other math functions, input validation, or new files outside `src/` and `test/`.
