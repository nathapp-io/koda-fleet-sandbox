# koda-fleet-sandbox

Throwaway TypeScript library used only for koda fleet live checks. Pure
functions in `src/`, one `bun:test` file per module in `test/`.

## Conventions

- Bun + TypeScript (strict). Named exports, no default exports.
- Tests: `bun test`. Typecheck: `bun run typecheck`.
- Keep functions pure and small; no new dependencies.
- S3 live check: edited from the koda nax config editor.
