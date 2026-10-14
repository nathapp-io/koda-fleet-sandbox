# SPEC: modulo

## Summary

Add a pure `modulo(a, b)` function to `src/math.ts` returning the JavaScript
remainder `a % b`, throwing on a zero divisor. Tests go in the existing
`test/math.test.ts`.

## US-001 — Compute the remainder of two numbers

As a caller of the math module, I want `modulo(a, b)` to return `a % b` so that
I can compute remainders without hand-guarding against a zero divisor.

**Acceptance criteria**

1. **AC1 — Normal result.** `modulo(7, 3)` returns `1`, and an exactly
   divisible pair such as `modulo(4, 2)` returns `0`.
2. **AC2 — Negative dividend keeps JS `%` sign semantics.** The result sign
   follows the dividend, not the divisor: `modulo(-7, 3)` returns `-1` and
   `modulo(7, -3)` returns `1`. Truncation matches `%`, so a result of `-0`
   (e.g. `modulo(-4, 2)`) is asserted with `Object.is`.
3. **AC3 — Zero divisor throws.** `modulo(1, 0)` throws an `Error` whose
   message is exactly `division by zero` (test via `expect(() => …).toThrow('division by zero')`).

## Scope

- In: `export function modulo(a: number, b: number): number` in `src/math.ts`;
  tests in `test/math.test.ts` following the existing `describe('modulo')` and
  `ACn:` test-name convention.
- Out: new dependencies, changes to `add` / `negate`, CLI or API surface.

## Constraints

- Bun + TypeScript (strict), named export only — no default exports.
- Verification: `bun test` and `bun run typecheck` both pass.
