# Project Constitution

## Goals
- Deliver high-quality, maintainable code
- Follow project conventions and best practices
- Maintain comprehensive test coverage

## Constraints
- Follow functional style for pure logic
- Keep files focused and under 400 lines

## strict TypeScript
- Enable strict mode in tsconfig.json
- No `any` in public APIs — use `unknown` + type guards
- Explicit return types on all exported functions

## Preferences
- Prefer immutability over mutation
- Write tests first (TDD approach)
- Clear, descriptive naming
