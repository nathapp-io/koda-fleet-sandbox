import { describe, expect, test } from 'bun:test'
import { add, max2, negate } from '../src/math'

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

describe('max2', () => {
  test('M-AC1: max2(3, 7) returns 7', () => {
    expect(max2(3, 7)).toBe(7)
  })

  test('M-AC2: max2(7, 3) returns 7', () => {
    expect(max2(7, 3)).toBe(7)
  })

  test('M-AC3: max2(-2, -5) returns -2', () => {
    expect(max2(-2, -5)).toBe(-2)
  })

  test('M-AC4: max2(4, 4) returns 4', () => {
    expect(max2(4, 4)).toBe(4)
  })
})
