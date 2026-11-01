import { describe, expect, test } from 'bun:test'
import { add, max, negate } from '../src/math'

describe('add', () => {
  test('adds two numbers', () => {
    expect(add(2, 3)).toBe(5)
  })
})

describe('max', () => {
  test('returns the larger number when it is the second argument', () => {
    expect(max(2, 3)).toBe(3)
  })

  test('returns the larger number when it is the first argument', () => {
    expect(max(3, 2)).toBe(3)
  })

  test('returns the larger negative number in either argument order', () => {
    expect(max(-5, -2)).toBe(-2)
    expect(max(-2, -5)).toBe(-2)
  })

  test('returns the value when both arguments are equal', () => {
    expect(max(4, 4)).toBe(4)
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
