import { describe, expect, test } from 'bun:test'
import { add, negate, triple } from '../src/math'

describe('add', () => {
  test('adds two numbers', () => {
    expect(add(2, 3)).toBe(5)
  })
})

describe('triple', () => {
  test('AC-1: triple(3) returns 9', () => {
    expect(triple(3)).toBe(9)
  })

  test('AC-2: triple(-4) returns -12', () => {
    expect(triple(-4)).toBe(-12)
  })

  test('AC-3: triple(0) returns 0', () => {
    expect(triple(0)).toBe(0)
  })

  test('AC-6: triple(NaN) returns NaN', () => {
    expect(Number.isNaN(triple(Number.NaN))).toBe(true)
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
