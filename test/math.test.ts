import { describe, expect, test } from 'bun:test'
import { add, negate, subtract } from '../src/math'

describe('add', () => {
  test('adds two numbers', () => {
    expect(add(2, 3)).toBe(5)
  })
})

describe('subtract', () => {
  test('subtracts unequal operands in the given order', () => {
    expect(subtract(5, 2)).toBe(3)
    expect(subtract(2, 5)).toBe(-3)
  })

  test('subtracts negative numbers', () => {
    expect(subtract(-5, -2)).toBe(-3)
    expect(subtract(5, -2)).toBe(7)
    expect(subtract(-5, 2)).toBe(-7)
  })

  test('handles zero in either position', () => {
    expect(subtract(5, 0)).toBe(5)
    expect(subtract(0, 5)).toBe(-5)
    expect(subtract(0, 0)).toBe(0)
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
