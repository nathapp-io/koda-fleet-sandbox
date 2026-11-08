# Feature: f11-max

## Goal

Add a `max2(a, b)` function to `src/math.ts`, next to `add` and `negate`, for integer inputs.

## Requirements

- `max2(a: number, b: number): number` returns `a` when `a >= b`, otherwise `b` (implemented as `a >= b ? a : b`).
- Inputs are integers; behaviour for `NaN`, `Infinity` and signed zero is not part of this feature and is not tested.
- Exported as a named export from `src/math.ts`, with an explicit return type.
- `add`, `negate` and any other existing export are unchanged.
- Tests go in `test/math.test.ts`, in a new `describe('max2', ...)` block whose test names are prefixed `M-AC<n>:`.

## Acceptance criteria

1. [unit] `max2(3, 7)` returns `7`.
2. [unit] `max2(7, 3)` returns `7`.
3. [unit] `max2(-2, -5)` returns `-2`.
4. [unit] `max2(4, 4)` returns `4`.

## Out of scope

- Non-integer inputs (`NaN`, `Infinity`, signed zero).
- Other math functions.
- Changes to existing exports.
- New files outside `src/` and `test/`.
- The `e2e` quality command in `.nax/config.json` (a sandbox gate for the koda flow live check; not part of this feature).

## Flow's calls

### SPEC_REVIEW job cmw7sewsn005308mfd9bh88y6

- **m-ac-numbering** (minor): The `M-AC<n>:` test-name prefix on line 13 is unanchored, and the prior near-identical spec's recorded `SPEC_REVIEW` call plus the f10-max PRD (5 spec ACs → 7 planned story ACs) show `nax plan` renumbers/extends ACs, so the implementer again cannot tell whether n is the spec's 1–4 or the planned story's numbering. Call: Reword line 13 to "test names are prefixed `M-AC<n>:`, where `<n>` is this spec's acceptance-criterion number (1–4)".
