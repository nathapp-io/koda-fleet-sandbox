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
- NaN or Infinity handling.
- New files outside `src/` and `test/`.

## Flow's calls

### PRD_REVIEW job cmw6hlv1x003q08quzn0wgbfw

- **p4.1-naive-minmax-rationale** (minor): PRD description step 5 and analysis claim a naive Math.min(Math.max(n,min),max) fails AC6/AC7/AC8 and that Math.max(-0, 0) yields -0, but Math.max(-0, 0) is +0 so naive passes AC6 and fails only AC7/AC8. Call: Reword to: naive min/max fails AC7 and AC8 (Math.min(0, -0) and a -0 upper bound yield -0); AC6 happens to pass because Math.max(-0, 0) is +0. Keep the conclusion (do not use naive Math.min/Math.max).
- **p7-prd-meta-ac9** (minor): PRD-only AC9 mixes a runtime export check with an unverifiable 'add and negate remain unchanged in behaviour' diff-state claim an implementer could satisfy by reading the file. Call: Reword AC9 to a pure runtime assertion: 'importing clamp from ../src/math yields a function of arity 3, and the pre-existing add/negate cases in test/math.test.ts still pass unmodified'.
- **p5-ac-number-collision** (minor): The new clamp ACs are numbered AC1-AC8 while test/math.test.ts already uses AC1-AC5 for negate, and the PRD tells the implementer to mirror the test('ACn: ...') naming style, so test names collide in the same file. Call: Instruct the implementer to prefix the new cases (e.g. test('C-AC1: ...')) so the negate and clamp AC numberings stay distinguishable.
- **p4.7-unobservable-order-mandate** (minor): The 'throws before any clamping' ordering mandate, and the PRD suggested criterion using clamp(100, 2, 1), are not observable for a pure function - clamp(1, 2, 1) throws under either guard-first or clamp-then-validate. Call: Optionally reword the rationale from 'throws before clamping' to 'the guard is the first statement in the body', which is what AC5 actually pins.
