# Feature: wf-power

## Goal

Add a `power(base, exp)` function to `src/math.ts`, next to `add`. (koda workflow-mode live check A, expected outcome `ready`.)

## Requirements

- `power(base: number, exp: number): number` returns `base` raised to `exp`.
- `exp` must be a non-negative integer; otherwise it throws `Error('exp must be a non-negative integer')`.
- Exported as a named export from `src/math.ts`.
- `add` and `negate` are unchanged.

## Acceptance criteria

1. `power(2, 10)` returns `1024`.
2. `power(5, 0)` returns `1`.
3. `power(2, -1)` throws `exp must be a non-negative integer`.
4. `power(2, 1.5)` throws `exp must be a non-negative integer`.
5. `bun test` and `bun run typecheck` pass.

## Out of scope

Any other math functions, and new files outside `src/` and `test/`.
