import { describe, expect, test } from 'bun:test'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

// AC-1: assert(multiply(3, 4) === 12)
test('AC-1: multiply(3, 4) returns 12', async () => {
  const { multiply } = await import('../src/math')
  expect(multiply(3, 4)).toBe(12)
})

// AC-2: assert(multiply(-2, 5) === -10)
test('AC-2: multiply(-2, 5) returns -10', async () => {
  const { multiply } = await import('../src/math')
  expect(multiply(-2, 5)).toBe(-10)
})

// AC-3: assert(multiply(7, 0) === 0)
test('AC-3: multiply(7, 0) returns 0', async () => {
  const { multiply } = await import('../src/math')
  expect(multiply(7, 0)).toBe(0)
})

// AC-4: File src/math.ts contains 'export function multiply(a: number, b: number): number' and module exports multiply property
test('AC-4: src/math.ts exports multiply function with correct signature', () => {
  const content = readFileSync(resolve('src/math.ts'), 'utf-8')
  expect(content).toContain('export function multiply(a: number, b: number): number')
  // Verify multiply is exported as a named export
  expect(content).toMatch(/export\s+\{\s*[^}]*\bmultiply\b[^}]*\}/)
})

// AC-5: File src/math.ts contains 'export function add(a: number, b: number): number' and does not contain modifications to the add function body
test('AC-5: src/math.ts contains unchanged add function', () => {
  const content = readFileSync(resolve('src/math.ts'), 'utf-8')
  expect(content).toContain('export function add(a: number, b: number): number')
  // Verify add function body is unchanged (returns a + b)
  expect(content).toContain('export function add(a: number, b: number): number {')
  expect(content).toContain('return a + b')
})

// AC-6: File test/math.test.ts contains import statement with multiply in braces from '../src/math' and contains describe('multiply', with three test blocks calling expect(multiply(...)).toBe(...) for values 12, -10, and 0
test('AC-6: test/math.test.ts contains correct multiply test structure', () => {
  const content = readFileSync(resolve('test/math.test.ts'), 'utf-8')
  // Check for import statement with multiply from '../src/math'
  expect(content).toMatch(/import\s*\{[^}]*\bmultiply\b[^}]*\}\s*from\s*['"]\.\.\/src\/math['"]/)
  // Check for describe('multiply', ...)
  expect(content).toContain("describe('multiply',")
  // Check for three test blocks with expected values 12, -10, and 0
  expect(content).toMatch(/expect\(multiply\([^)]+\)\)\.toBe\(12\)/)
  expect(content).toMatch(/expect\(multiply\([^)]+\)\)\.toBe\(-10\)/)
  expect(content).toMatch(/expect\(multiply\([^)]+\)\)\.toBe\(0\)/)
})