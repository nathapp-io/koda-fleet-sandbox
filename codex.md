# Codex Instructions

This file is auto-generated from `.nax/context.md`.
DO NOT EDIT MANUALLY — run `nax generate` to regenerate.

---

## Project Metadata

> Auto-injected by `nax generate`

**Project:** `koda-fleet-sandbox`

**Language:** TypeScript

**Key dependencies:** @types/bun, typescript

**Commands:** test: `bun test` | typecheck: `bun run typecheck`

---
# koda-fleet-sandbox

Throwaway TypeScript library used only for koda fleet live checks. Pure
functions in `src/`, one `bun:test` file per module in `test/`.

## Conventions

- Bun + TypeScript (strict). Named exports, no default exports.
- Tests: `bun test`. Typecheck: `bun run typecheck`.
- Keep functions pure and small; no new dependencies.
- S3 live check: edited from the koda nax config editor.
