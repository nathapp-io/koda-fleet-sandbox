# Feature: f10-max

## Goal

Add a `max2(a, b)` function to `src/math.ts`, next to `add` and `negate`.

## Requirements

- `max2(a: number, b: number): number` returns the larger of `a` and `b`.
- When either argument is `NaN`, it returns `NaN`.
- `max2(0, -0)` and `max2(-0, 0)` both return positive zero (`0`).
- Exported as a named export from `src/math.ts`, with an explicit return type.
- `add`, `negate` and any other existing export are unchanged.
- Tests go in `test/math.test.ts`, in a new `describe('max2', ...)` block whose test names are prefixed `M-AC<n>:`.

## Acceptance criteria

1. [unit] `max2(3, 7)` returns `7`.
2. [unit] `max2(7, 3)` returns `7`.
3. [unit] `max2(-2, -5)` returns `-2`.
4. [unit] `Number.isNaN(max2(NaN, 1))` and `Number.isNaN(max2(1, NaN))` are both `true`.
5. [unit] `Object.is(max2(0, -0), 0)` and `Object.is(max2(-0, 0), 0)` are both `true`.

## Out of scope

- Other math functions.
- Changes to existing exports.
- New files outside `src/` and `test/`.
- The `e2e` quality command in `.nax/config.json` (a sandbox gate for the koda flow live check; not part of this feature).

## Flow's calls

### SPEC_REVIEW job cmw7r03wc000a08mfg14b4hia

- **m-ac-numbering** (minor): The `M-AC<n>:` test-name prefix is anchored to nothing explicit, and `nax plan` splits/renumbers ACs (prior feature went 4 spec ACs → 8 story ACs), so the implementer cannot tell whether n is the spec AC number or the story AC number. Call: Reword spec line 14 to say `<n>` is the spec's acceptance-criterion number (1–5), so the naming stays stable however the plan splits AC4/AC5.
- **neg-zero-equal** (minor): `max2(-0, -0)` is unpinned: the spec pins mixed-sign zeros to +0 but says nothing about equal negative zeros, and two implementations that satisfy all five ACs disagree there (Math.max → -0; a normalise-zeros impl → +0). Call: Pin `max2(-0, -0)` to `-0` (only mixed signs promote to `+0`) in the Requirements and add the matching assertion to AC5, or add it to `## Out of scope`.

### PRD_REVIEW job cmw7r6iq0002108mfyso0alig

- **p9-zero-guard-a-ne-b** (answered): The PRD description's implementation note #4 (and the same guard in `analysis`) tells the implementer to promote a zero tie to +0 only when `a !== b`, but `-0 === 0` numerically, so `a !== b` is false for `(-0, 0)` and the prescribed code returns `-0` — failing PRD AC5's `Object.is(max2(-0, 0), 0)`; `analysis`'s "AC-satisfying" snippet separately returns +0 for `(-0, -0)`, contradicting the pinned `-0`. Call: Replace the numeric-inequality guard with a sign-explicit one in the description (and drop/correct the two sample impls in `analysis`): `if (m === 0) return Object.is(a, -0) && Object.is(b, -0) ? -0 : 0` — equivalently `1/a === -Infinity && 1/b === -Infinity`. Spec AC5 and the `neg-zero-equal` call already pin the required behaviour, so only the prescribed code changes.
