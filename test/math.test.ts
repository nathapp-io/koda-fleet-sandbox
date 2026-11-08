import { describe, expect, test } from 'bun:test'
import { add, clamp, negate } from '../src/math'

describe('add', () => {
  test('adds two numbers', () => {
    expect(add(2, 3)).toBe(5)
  })
})

describe('clamp', () => {
  test('AC-1: returns n when it is within bounds', () => {
    expect(clamp(5, 0, 10)).toBe(5)
  })

  test('AC-2: returns min when n is below bounds', () => {
    expect(clamp(-1, 0, 10)).toBe(0)
  })

  test('AC-3: returns max when n is above bounds', () => {
    expect(clamp(11, 0, 10)).toBe(10)
  })

  test('AC-4: supports equal bounds', () => {
    expect(clamp(0, 0, 0)).toBe(0)
  })

  test('AC-5: rejects inverted bounds', () => {
    expect(() => clamp(1, 2, 1)).toThrow(
      new RangeError('min must not exceed max'),
    )
  })

  test('AC-6: normalizes a selected negative zero n', () => {
    expect(Object.is(clamp(-0, 0, 10), 0)).toBe(true)
  })

  test('AC-7: normalizes a selected negative zero min', () => {
    expect(Object.is(clamp(-5, -0, 0), 0)).toBe(true)
  })

  test('AC-8: normalizes a selected negative zero max', () => {
    expect(Object.is(clamp(5, -10, -0), 0)).toBe(true)
  })

  test('AC-9: propagates NaN n', () => {
    expect(Number.isNaN(clamp(NaN, 0, 10))).toBe(true)
  })

  test('AC-10: propagates NaN min', () => {
    expect(Number.isNaN(clamp(5, NaN, 10))).toBe(true)
  })

  test('AC-11: propagates NaN max', () => {
    expect(Number.isNaN(clamp(5, 0, NaN))).toBe(true)
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
