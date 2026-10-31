# Feature: p3-ask-cube

## Goal

Add a `cube(n)` function to `src/math.ts`, next to `add`.

## Requirements

- `cube(n: number): number` returns `n * n * n`.
- Exported as a named export from `src/math.ts`.
- Existing exports are unchanged.

## Acceptance criteria

1. `cube(3)` returns `27`.
2. `cube(-2)` returns `-8`.
3. `cube(0)` returns `0`.
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

Any other math functions, input validation, or new files outside `src/` and `test/`.
