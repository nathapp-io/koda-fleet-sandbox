# Feature: f13-max

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

### SPEC_REVIEW job cmw840jxc000a08tg2ou6s28h

- **f13-signed-zero-mislabel** (minor): The Requirements and Out-of-scope bullets classify signed zero as a "non-integer input", though -0 is an integer and the same Requirements line says inputs are integers. Call: Reword Out-of-scope bullet 1 to "Non-integer inputs (`NaN`, `Infinity`), and signed zero (`-0` vs `0`)."

### PRD_REVIEW job cmw84atlf002x08tgjgfbtrij

- **prd-oos-duplicate** (minor): PRD feature-level outOfScope keeps both the pre-call and post-call versions of the signed-zero bullet, and the story-level e2e bullet lost its "not part of this feature" parenthetical. Call: Delete the stale first feature-level outOfScope entry ("Non-integer inputs (`NaN`, `Infinity`, signed zero).") so only the amended "...and signed zero (`-0` vs `0`)." bullet remains, and restore the e2e parenthetical "(a sandbox gate for the koda flow live check; not part of this feature)".
