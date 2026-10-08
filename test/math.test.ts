import { describe, expect, test } from 'bun:test'
import { add, negate, divide } from '../src/math'

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

describe('divide', () => {
  test('AC1: divide(12, 4) returns 3', () => {
    expect(divide(12, 4)).toBe(3)
  })

  test('AC1: divide(-10, 5) returns -2', () => {
    expect(divide(-10, 5)).toBe(-2)
  })

  test('AC2: divide(a, 0) throws Error with message "division by zero"', () => {
    expect(() => divide(5, 0)).toThrow(new Error('division by zero'))
  })

  test('AC2: divide(a, 0) throws Error with message exactly "division by zero"', () => {
    let threw = false
    try {
      divide(10, 0)
    } catch (e) {
      threw = true
      expect(e).toBeInstanceOf(Error)
      expect((e as Error).message).toBe('division by zero')
    }
    expect(threw).toBe(true)
  })

  test('AC4: add function remains unchanged and still works', () => {
    expect(add(2, 3)).toBe(5)
  })
})
