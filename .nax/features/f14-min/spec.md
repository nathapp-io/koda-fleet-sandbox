# Feature: f14-min

## Goal

Add a `min2(a, b)` function to `src/math.ts`, next to `add` and `negate`.

## Requirements

- `min2(a: number, b: number): number` returns the smaller of `a` and `b`.
- When either argument is `NaN`, it returns `NaN`.
- `min2(0, -0)` and `min2(-0, 0)` both return negative zero (`-0`).
- Exported as a named export from `src/math.ts`, with an explicit return type.
- `add`, `negate` and any other existing export are unchanged.
- Tests go in `test/math.test.ts`, in a new `describe('min2', ...)` block whose test names are prefixed `N-AC<n>:`.

## Acceptance criteria

1. [unit] `min2(3, 7)` returns `3`.
2. [unit] `min2(7, 3)` returns `3`.
3. [unit] `min2(-2, -5)` returns `-5`.
4. [unit] `Number.isNaN(min2(NaN, 1))` and `Number.isNaN(min2(1, NaN))` are both `true`.
5. [unit] `Object.is(min2(0, -0), -0)` and `Object.is(min2(-0, 0), -0)` are both `true`.

## Out of scope

- Other math functions (the `clamp` feature `f14-clamp` is a separate spec that builds on `min2`).
- Changes to existing exports.
- New files outside `src/` and `test/`.

## Flow's calls

### SPEC_REVIEW job cmw8w24z6000d08nxznfp3dqd

- **f14-clamp-signed-zero** (minor): f14-clamp never pins signed-zero behaviour, although f14-min makes signed zero load-bearing for min2 and clamp imports it via the mandated min2(x, hi) call. Call: Add to f14-clamp's Requirements: "Signed zero follows from the mandated calls: `clamp(-0, 0, hi)` returns `+0` and `clamp(0, lo, -0)` returns `-0`; no other zero's sign is pinned. Does not apply to `min2`, whose signed-zero output (including `min2(0, -0) === -0`) makes `clamp(0, lo, -0)` negative-zero, and `Math.max(-0, lo)` makes `clamp(-0, 0, hi)` positive-zero." Both cells are forced under either legal call order, so this states derived behaviour rather than adding a new rule.
- **f14-clamp-nan-hi** (minor): The requirement covers "any argument" being NaN but f14-clamp AC6 only exercises NaN in x and lo, never in hi. Call: Extend AC6 to: `Number.isNaN(clamp(NaN, 0, 1))`, `Number.isNaN(clamp(0.5, NaN, 1))` and `Number.isNaN(clamp(0.5, 0, NaN))` are all `true`.
- **f14-clamp-min2-unobservable** (minor): f14-clamp mandates calling min2 for the upper bound, but min2 and Math.min are behaviourally identical for numbers, so no AC in the spec can distinguish them and the mandate is intent-only. Call: Reword f14-clamp's Requirements bullet to "It uses `min2(x, hi)` for the upper bound and `Math.max(x, lo)` for the lower bound; `min2` is behaviourally identical to `Math.min` here, so no AC asserts the call — do not add a spy or spyOn test for it." (applies to the `may use Math.max` wording too: state it as definite).
