import { describe, expect, test } from 'bun:test'
import { add, negate, square } from '../src/math'

describe('add', () => {
  test('adds two numbers', () => {
    expect(add(2, 3)).toBe(5)
  })
})

describe('square', () => {
  test('US-001: square(3) returns 9', () => {
    expect(square(3)).toBe(9)
  })

  test('US-001: square(-4) returns 16', () => {
    expect(square(-4)).toBe(16)
  })

  test('US-001: square(0) returns 0', () => {
    expect(square(0)).toBe(0)
  })

  test('US-001: square propagates NaN', () => {
    expect(Number.isNaN(square(Number.NaN))).toBe(true)
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
