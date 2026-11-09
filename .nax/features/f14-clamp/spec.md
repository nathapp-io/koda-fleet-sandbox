# Feature: f14-clamp

## Goal

Add a `clamp(x, lo, hi)` function to `src/math.ts`, built on the existing `min2` export.

## Dependencies

- Depends on feature `f14-min`: `min2(a, b)` must already be exported from `src/math.ts` (merged to `main`).

## Requirements

- `clamp(x: number, lo: number, hi: number): number` returns `x` limited to the closed range `[lo, hi]`.
- It calls `min2` for the upper bound (`min2(x, hi)`); the lower bound may use `Math.max`.
- When `lo > hi`, it throws a `RangeError` whose message contains `lo must not exceed hi`.
- When any argument is `NaN`, it returns `NaN` (checked before the range check).
- Exported as a named export from `src/math.ts`, with an explicit return type.
- `add`, `negate`, `min2` and any other existing export are unchanged.
- Tests go in `test/math.test.ts`, in a new `describe('clamp', ...)` block whose test names are prefixed `C-AC<n>:`.

## Acceptance criteria

1. [unit] `clamp(5, 0, 10)` returns `5`.
2. [unit] `clamp(-3, 0, 10)` returns `0`.
3. [unit] `clamp(42, 0, 10)` returns `10`.
4. [unit] `clamp(4, 4, 4)` returns `4`.
5. [unit] `clamp(1, 10, 0)` throws a `RangeError` whose message contains `lo must not exceed hi`.
6. [unit] `Number.isNaN(clamp(NaN, 0, 1))` and `Number.isNaN(clamp(0.5, NaN, 1))` are both `true`.

## Out of scope

- Changes to `min2` or other existing exports.
- New files outside `src/` and `test/`.

## Flow's calls

### SPEC_REVIEW job cmw8w5zwt001a08nxrtvn5ahm

- **f14-clamp-signed-zero-lo-eq-0** (minor): The amended signed-zero clause claims clamp(0, lo, -0) is -0 for any lo, but under the mandated Math.max(min2(x, hi), lo) order clamp(0, 0, -0) is +0, since 0 > -0 does not throw and Math.max(-0, 0) is +0. Call: Scope the clause: 'clamp(0, lo, -0) returns -0 for lo < 0; clamp(0, 0, -0) returns +0 (Math.max(-0, 0)); no other zero's sign is pinned,' and drop the claim that both cells are forced under either legal call order.
- **f14-clamp-existing-min2-wording** (minor): The Goal calls min2 'the existing min2 export' although src/math.ts exports only add and negate at 41011ba, which invites an implementer to create min2 themselves, forbidden by the spec's Out of scope. Call: Reword the Goal to 'build on min2 from f14-min (see Dependencies)' and keep the Dependencies bullet as the hard precondition.
