import { describe, expect, test } from 'bun:test'
import { add, clamp, negate } from '../src/math'

describe('add', () => {
  test('adds two numbers', () => {
    expect(add(2, 3)).toBe(5)
  })
})

describe('clamp', () => {
  test('US-001 AC1: returns an in-range value unchanged', () => {
    expect(clamp(5, 1, 10)).toBe(5)
  })

  test('US-001 AC2: returns the minimum for a value below the range', () => {
    expect(clamp(0, 1, 10)).toBe(1)
  })

  test('US-001 AC3: returns the maximum for a value above the range', () => {
    expect(clamp(42, 1, 10)).toBe(10)
  })

  test('US-001 AC4: throws when the minimum exceeds the maximum', () => {
    expect(() => clamp(5, 10, 1)).toThrow('min greater than max')
  })
})

describe('negate', () => {
  test('AC1: negate(5) returns -5', () => {
    expect(negate(5)).toBe(-5)
  })

  test('AC2: negate(-3) returns 3', () => {
    expect(negate(-3)).toBe(3)
  })

  test('AC3: negate(0) returns canonical positive zero', () => {
    expect(Object.is(negate(0), 0)).toBe(true)
  })

  test('AC5: negate(0.5) returns -0.5', () => {
    expect(negate(0.5)).toBe(-0.5)
  })
})
