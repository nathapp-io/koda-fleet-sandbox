# Feature: wf-clamp2

## Goal

Add a `clamp(value, min, max)` function to `src/math.ts`, next to `add`.

## Requirements

- `clamp(value: number, min: number, max: number): number` returns `value` limited to the range `[min, max]`.
- Throws `Error('min must not exceed max')` when `min > max`.
- Exported as a named export from `src/math.ts`.
- `add` and `negate` are unchanged.

## Acceptance criteria

1. `clamp(5, 0, 10)` returns `5`.
2. `clamp(-3, 0, 10)` returns `0`.
3. `clamp(42, 0, 10)` returns `10`.
4. `clamp(1, 5, 2)` throws `min must not exceed max`.
5. `bun test` and `bun run typecheck` pass.

## Out of scope

Any other math functions, new files outside `src/` and `test/`, and any change under `.github/`.
