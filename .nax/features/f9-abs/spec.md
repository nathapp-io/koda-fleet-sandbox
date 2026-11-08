# Feature: f9-abs

## Goal

Add an `abs(n)` function to `src/math.ts`, next to `add` and `negate`.

## Requirements

- `abs(n: number): number` returns `-n` when `n < 0` and `n` otherwise.
- A zero result is always positive zero (`0`, never `-0`).
- A `NaN` argument returns `NaN`.
- Exported as a named export from `src/math.ts`, with an explicit return type.
- `add` and `negate` are unchanged.
- Tests go in `test/math.test.ts`, in a new `describe('abs', ...)` block whose test names are prefixed `A-AC<n>:` (the project's convention for a new block next to the `negate` `AC<n>:` names).

## Acceptance criteria

1. [unit] `abs(4)` returns `4`.
2. [unit] `abs(-4)` returns `4`.
3. [unit] `Object.is(abs(0), 0)` is `true`.
4. [unit] `Object.is(abs(-0), 0)` is `true`.
5. [unit] `Number.isNaN(abs(NaN))` is `true`.
6. [unit] `abs(-Infinity)` returns `Infinity`.

## Out of scope

- Other math functions.
- Changes to `add` or `negate`.
- New files outside `src/` and `test/`.

## Flow's calls

### SPEC_REVIEW job cmw7dn59v000808qj2mtid4bb

- **abs-neg-zero-wording** (minor): Requirements bullet 1 (`-n` when n<0, `n` otherwise) yields `-0` for abs(-0), contradicting bullet 2 and AC4; the override is only stated in a separate bullet, so the algorithm text can be quoted against a correct zero guard. Call: Restate bullet 1 as: `abs(n: number): number` returns `-n` when `n < 0`, `0` when `n === 0`, and `n` otherwise — so the `-0` guarantee is part of the algorithm rather than a second rule.
- **abs-fractional-ac** (minor): No AC exercises a fractional input, leaving the branch a future `!n`-style guard regression would break untested (same shape as the review finding on the negate run). Call: Add `7. [unit] `abs(-0.5)` returns `0.5`.` to Acceptance criteria.
