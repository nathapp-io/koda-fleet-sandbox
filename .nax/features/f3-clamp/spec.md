# Feature: f3-clamp

## Goal

Add a `clamp(n, min, max)` function to `src/math.ts`, next to `add` and `negate`.

## Requirements

- `clamp(n: number, min: number, max: number): number` returns `min` when `n < min`, `max` when `n > max`, and `n` otherwise.
- A zero result is always positive zero (`0`, never `-0`), whichever of `n`, `min` or `max` it came from.
- When `min > max`, it throws a `RangeError` with the message `min must not exceed max`, before any clamping.
- Exported as a named export from `src/math.ts`.
- `add` and `negate` are unchanged.
- Tests go in `test/math.test.ts`.
- `clamp` must handle a `NaN` argument (`n`, `min` or `max`), but the expected result is NOT decided yet: it could return `NaN`, throw a `RangeError`, or treat `NaN` as unbounded. The product owner must choose before implementation.

## Acceptance criteria

1. [unit] `clamp(5, 0, 10)` returns `5`.
2. [unit] `clamp(-1, 0, 10)` returns `0`.
3. [unit] `clamp(11, 0, 10)` returns `10`.
4. [unit] `clamp(0, 0, 0)` returns `0`.
5. [unit] `clamp(1, 2, 1)` throws a `RangeError` with message `min must not exceed max`.
6. [unit] `Object.is(clamp(-0, 0, 10), 0)` is `true`.
7. [unit] `Object.is(clamp(-5, -0, 0), 0)` is `true`.
8. [unit] `Object.is(clamp(5, -10, -0), 0)` is `true`.

## Out of scope

- Other math functions.
- Infinity handling.
- New files outside `src/` and `test/`.

## Flow's calls

### SPEC_REVIEW job cmw77gfui000a07qrz5ulwc5h

- **nan-policy-undecided** (answer): Which NaN policy should clamp(n, min, max) implement: (a) return NaN whenever any argument is NaN, (b) throw a RangeError (and with what message, and does it fire before or after the min > max check), or (c) treat NaN as unbounded and fall through to the ordinary comparisons? Answer: (a) Return NaN whenever n, min or max is NaN. The min > max RangeError check runs first and only on non-NaN bounds (any comparison with NaN is false, so it never throws for NaN). Add unit ACs: clamp(NaN, 0, 10), clamp(5, NaN, 10) and clamp(5, 0, NaN) each return NaN (Number.isNaN).
- **prd-stale-vs-nan** (answered): prd.json was planned before commit 9d432d9 and still says 'do NOT add NaN or Infinity guards' with 'NaN or Infinity handling' out of scope, contradicting the current spec. Call: After the NaN policy is chosen, regenerate the PRD with nax plan rather than hand-editing it, so the NaN requirement and ACs land in US-001 and the outOfScope entry is dropped.
- **zero-normalization-ordering** (minor): Requirement 1 ('returns n otherwise') and Requirement 2 ('a zero result is always positive zero') read as peers but disagree for n = -0 inside ordinary bounds; only AC6 disambiguates. Call: Reword Requirement 2 as a final step applied to the value selected by Requirement 1 (e.g. 'the selected result is normalized so that -0 becomes 0'), so it explicitly overrides all three branches.

### PRD_REVIEW job cmw77m7k1002d07qr2rdt6wl5

- **suggested-nan-inverted-bounds** (answered): suggestedCriteria[0] claims clamp(NaN, 10, 0) returns NaN and does not throw, but with non-NaN bounds 10 > 0 the min>max guard fires first, so the criterion is unsatisfiable against the story's own Approach step 1 and step 2. Call: Delete the criterion (AC9 clamp(NaN, 0, 10) already covers the non-throwing NaN path), or restate it as: clamp(NaN, 10, 0) throws RangeError 'min must not exceed max' — the guard fires on non-NaN bounds regardless of n.
- **suggested-import-check** (minor): suggestedCriteria[1] ('clamp is importable as a named export') is a non-runtime file/import assertion, a mechanism banned for ACs and already implied by every behavioural criterion. Call: Drop it, or rely on the existing behavioural criteria which all require importing clamp from '../src/math'.
- **spec-md-pre-decision-text** (minor): spec.md Requirements still say the NaN result is 'NOT decided yet' and still word zero-normalisation as a peer of the clamping rule, so the spec contradicts the PRD that correctly implements the recorded answer. Call: Fold the answer into Requirements (NaN argument returns NaN; the min>max guard runs first and only on non-NaN bounds) and reword Requirement 2 as a final normalisation applied to the value selected by Requirement 1.
