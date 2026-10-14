import { describe, expect, test } from 'bun:test'
import { add, negate, clamp } from '../src/math'

describe('add', () => {
  test('adds two numbers', () => {
    expect(add(2, 3)).toBe(5)
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

describe('clamp', () => {
  test('AC1: clamp(5, 0, 10) returns 5', () => {
    expect(clamp(5, 0, 10)).toBe(5)
  })

  test('AC2: clamp(-3, 0, 10) returns 0', () => {
    expect(clamp(-3, 0, 10)).toBe(0)
  })

  test('AC3: clamp(42, 0, 10) returns 10', () => {
    expect(clamp(42, 0, 10)).toBe(10)
  })

  test('AC4: clamp(1, 5, 2) throws "min must not exceed max"', () => {
    expect(() => clamp(1, 5, 2)).toThrow('min must not exceed max')
  })
})
