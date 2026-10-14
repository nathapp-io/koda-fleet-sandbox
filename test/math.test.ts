import { describe, expect, test } from 'bun:test'
import { add, negate, power } from '../src/math'

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

describe('power', () => {
  test('AC1: power(2, 10) returns 1024', () => {
    expect(power(2, 10)).toBe(1024)
  })

  test('AC2: power(5, 0) returns 1', () => {
    expect(power(5, 0)).toBe(1)
  })

  test('AC3: power(2, -1) throws "exp must be a non-negative integer"', () => {
    expect(() => power(2, -1)).toThrow('exp must be a non-negative integer')
  })

  test('AC4: power(2, 1.5) throws "exp must be a non-negative integer"', () => {
    expect(() => power(2, 1.5)).toThrow('exp must be a non-negative integer')
  })
})
