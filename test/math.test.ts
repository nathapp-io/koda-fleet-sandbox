import { describe, expect, test } from 'bun:test'
import { add, clamp, min2, negate } from '../src/math'

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

describe('min2', () => {
  test('N-AC1: min2(3, 7) returns 3', () => {
    expect(min2(3, 7)).toBe(3)
  })

  test('N-AC2: min2(7, 3) returns 3', () => {
    expect(min2(7, 3)).toBe(3)
  })

  test('N-AC3: min2(-2, -5) returns -5', () => {
    expect(min2(-2, -5)).toBe(-5)
  })

  test('N-AC4: returns NaN when either argument is NaN', () => {
    expect(Number.isNaN(min2(NaN, 1))).toBe(true)
    expect(Number.isNaN(min2(1, NaN))).toBe(true)
  })

  test('N-AC5: returns negative zero for either zero ordering', () => {
    expect(Object.is(min2(0, -0), -0)).toBe(true)
    expect(Object.is(min2(-0, 0), -0)).toBe(true)
  })

  test('N-AC6: is callable as a named export with two numbers', () => {
    const callable: (a: number, b: number) => number = min2
    expect(callable(2, 1)).toBe(1)
  })

  test('N-AC7: existing add and negate results are unchanged', () => {
    expect(add(2, 3)).toBe(5)
    expect(negate(5)).toBe(-5)
  })
})

describe('clamp', () => {
  test('C-AC1: clamp(5, 0, 10) returns 5', () => {
    expect(clamp(5, 0, 10)).toBe(5)
  })

  test('C-AC2: clamp(-3, 0, 10) returns 0', () => {
    expect(clamp(-3, 0, 10)).toBe(0)
  })

  test('C-AC3: clamp(42, 0, 10) returns 10', () => {
    expect(clamp(42, 0, 10)).toBe(10)
  })

  test('C-AC4: clamp(4, 4, 4) returns 4', () => {
    expect(clamp(4, 4, 4)).toBe(4)
  })

  test('C-AC5: throws RangeError when lo exceeds hi', () => {
    expect(() => clamp(1, 10, 0)).toThrow(RangeError)
    expect(() => clamp(1, 10, 0)).toThrow('lo must not exceed hi')
  })

  test('C-AC6: returns NaN before validating bounds when x or lo is NaN', () => {
    expect(Number.isNaN(clamp(NaN, 10, 0))).toBe(true)
    expect(Number.isNaN(clamp(NaN, 0, 1))).toBe(true)
    expect(Number.isNaN(clamp(0.5, NaN, 1))).toBe(true)
  })
})
