import { describe, expect, test } from 'bun:test'
import { abs, add, negate } from '../src/math'

describe('add', () => {
  test('adds two numbers', () => {
    expect(add(2, 3)).toBe(5)
  })
})

describe('abs', () => {
  test('A-AC1: abs(4) returns 4', () => {
    expect(abs(4)).toBe(4)
  })

  test('A-AC2: abs(-4) returns 4', () => {
    expect(abs(-4)).toBe(4)
  })

  test('A-AC3: abs(0) returns canonical positive zero', () => {
    expect(Object.is(abs(0), 0)).toBe(true)
  })

  test('A-AC4: abs(-0) returns canonical positive zero', () => {
    expect(Object.is(abs(-0), 0)).toBe(true)
  })

  test('A-AC5: abs(NaN) returns NaN', () => {
    expect(Number.isNaN(abs(NaN))).toBe(true)
  })

  test('A-AC6: abs(-Infinity) returns Infinity', () => {
    expect(abs(-Infinity)).toBe(Infinity)
  })

  test('A-AC7: abs(-0.5) returns 0.5', () => {
    expect(abs(-0.5)).toBe(0.5)
  })

  test('A-AC8: existing add and negate behavior is unchanged', () => {
    expect(add(2, 3)).toBe(5)
    expect(negate(-3)).toBe(3)
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
