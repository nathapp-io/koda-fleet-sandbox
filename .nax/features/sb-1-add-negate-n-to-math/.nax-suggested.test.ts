import { describe, expect, test } from 'bun:test'
import { add, negate } from '../../src/math'

describe('AC-1: negate(0.5) === -0.5 (strict equality)', () => {
  test('negate(0.5) returns -0.5 with strict equality', () => {
    expect(negate(0.5)).toBe(-0.5)
  })
})

describe('AC-2: Module exports both negate and add as named exports', () => {
  test('negate is exported as a named export', () => {
    expect(typeof negate).toBe('function')
  })

  test('add is exported as a named export', () => {
    expect(typeof add).toBe('function')
  })

  test('both negate and add can be imported together without error', () => {
    // This test passes if the import at the top of this file succeeded
    // Both functions should be callable
    expect(add(1, 2)).toBe(3)
    expect(negate(5)).toBe(-5)
  })
})