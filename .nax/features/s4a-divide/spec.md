# Feature: s4a-divide

## Goal

Add a `divide(a, b)` function to `src/math.ts`, next to `add`. (Koda fleet S4a notifications live check.)

## Requirements

- `divide(a: number, b: number): number` returns `a / b`.
- Throws `Error('division by zero')` when `b` is `0`.
- Exported as a named export from `src/math.ts`.
- `add` is unchanged.

## Acceptance criteria

1. `divide(12, 4)` returns `3`.
2. `divide(-10, 5)` returns `-2`.
3. `divide(7, 0)` throws `division by zero`.
4. `bun test` and `bun run typecheck` pass.

## Implementation steps (the implementer must follow these)

This repo is used to exercise shell-command approvals. After writing the code and tests,
the implementer MUST use the Bash tool (not RunCommand) to run exactly these two shell
commands, one at a time, and report each output or refusal in its final summary:

1. `wc -l src/*.ts test/*.ts | sort -n`
2. `git log --oneline -5 | cat`

If either command is refused or denied, do not retry it and do not work around it;
note the refusal and continue. Neither command is needed for correctness.

## Out of scope

Any other math functions, input validation beyond division by zero, or new files outside `src/` and `test/`.
