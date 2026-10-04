import { describe, expect, test } from 'bun:test'
import * as math from '../../../src/math'
import { add, subtract } from '../../../src/math'
import * as fs from 'node:fs'
import * as path from 'node:path'

// AC-1: subtract(5, 3) === 2
describe('AC-1', () => {
  test('subtract(5, 3) returns 2', () => {
    expect(subtract(5, 3)).toBe(2)
  })
})

// AC-2: subtract(3, 5) === -2
describe('AC-2', () => {
  test('subtract(3, 5) returns -2', () => {
    expect(subtract(3, 5)).toBe(-2)
  })
})

// AC-3: subtract(0, 0) === 0
describe('AC-3', () => {
  test('subtract(0, 0) returns 0', () => {
    expect(subtract(0, 0)).toBe(0)
  })
})

// AC-4: src/math.ts exports `subtract` as a named export alongside `add`,
// and `add`'s signature and body are unchanged.
describe('AC-4', () => {
  test('src/math.ts has a named export `subtract`', () => {
    expect(typeof subtract).toBe('function')
    expect(typeof math.subtract).toBe('function')
  })

  test('src/math.ts still has a named export `add`', () => {
    expect(typeof add).toBe('function')
    expect(typeof math.add).toBe('function')
  })

  test('add signature and body are unchanged', () => {
    const source = fs.readFileSync(
      path.resolve(import.meta.dir, '../../../src/math.ts'),
      'utf8',
    )
    // The `add` function must be a two-arg, return-a+b function and be byte-identical
    // to the original implementation.
    expect(add(2, 3)).toBe(5)
    expect(add(0, 0)).toBe(0)
    expect(add(-1, 1)).toBe(0)
    expect(add.length).toBe(2)
    // Source still contains the original `return a + b` body for `add`.
    expect(source).toMatch(/export\s+function\s+add\s*\(\s*a\s*:\s*number\s*,\s*b\s*:\s*number\s*\)\s*:\s*number\s*\{[\s\S]*?return\s+a\s*\+\s*b[\s\S]*?\}/)
  })
})

// AC-5: test/math.test.ts imports `subtract` from '../src/math' and
// exercises it via a describe('subtract', ...) block, with the existing
// describe('add', ...) block and its assertions unchanged.
describe('AC-5', () => {
  test('test/math.test.ts imports subtract from ../src/math', () => {
    const source = fs.readFileSync(
      path.resolve(import.meta.dir, '../../../test/math.test.ts'),
      'utf8',
    )
    expect(source).toMatch(
      /import\s*\{[^}]*\bsubtract\b[^}]*\}\s*from\s*['"]\.\.\/src\/math['"]/,
    )
  })

  test('test/math.test.ts contains a describe("subtract", ...) block', () => {
    const source = fs.readFileSync(
      path.resolve(import.meta.dir, '../../../test/math.test.ts'),
      'utf8',
    )
    expect(source).toMatch(/describe\(\s*['"]subtract['"]/)
  })

  test('test/math.test.ts still contains the describe("add", ...) block unchanged', () => {
    const source = fs.readFileSync(
      path.resolve(import.meta.dir, '../../../test/math.test.ts'),
      'utf8',
    )
    // The `add` block (and its original assertion) must still be present.
    expect(source).toMatch(/describe\(\s*['"]add['"]/)
    expect(source).toMatch(/expect\(\s*add\(\s*2\s*,\s*3\s*\)\s*\)\.toBe\(\s*5\s*\)/)
  })
})
