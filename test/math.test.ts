import { describe, expect, test } from 'bun:test'
import { add, clamp, negate } from '../src/math'

describe('add', () => {
  test('adds two numbers', () => {
    expect(add(2, 3)).toBe(5)
  })
})

describe('clamp', () => {
  test('returns min for values below the range', () => {
    expect(clamp(-1, 0, 10)).toBe(0)
  })

  test('returns max for values above the range', () => {
    expect(clamp(11, 0, 10)).toBe(10)
  })

  test('preserves values within the range', () => {
    expect(clamp(5, 0, 10)).toBe(5)
  })

  test('preserves the lower bound', () => {
    expect(clamp(0, 0, 10)).toBe(0)
  })

  test('preserves the upper bound', () => {
    expect(clamp(10, 0, 10)).toBe(10)
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
