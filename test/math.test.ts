import { describe, expect, test } from 'bun:test'
import { add, min2, negate, sign } from '../src/math'

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

describe('sign', () => {
  test('N-AC1: sign(5) returns 1', () => {
    expect(sign(5)).toBe(1)
  })

  test('N-AC2: sign(-3) returns -1', () => {
    expect(sign(-3)).toBe(-1)
  })

  test('N-AC3: both zero inputs return canonical positive zero', () => {
    expect(Object.is(sign(0), 0)).toBe(true)
    expect(Object.is(sign(-0), 0)).toBe(true)
  })

  test('N-AC4: sign(NaN) returns NaN', () => {
    expect(Number.isNaN(sign(NaN))).toBe(true)
  })

  test('N-AC5: is callable as a named export with a number signature', () => {
    const callable: (x: number) => number = sign
    expect(callable(5)).toBe(1)
  })

  test('N-AC6: existing exports remain unchanged', () => {
    expect(add(2, 3)).toBe(5)
    expect(negate(5)).toBe(-5)
    expect(Object.is(negate(0), 0)).toBe(true)
    expect(min2(3, 7)).toBe(3)
  })
})
