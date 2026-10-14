import { describe, expect, test } from 'bun:test'
import { add, modulo, negate } from '../src/math'

describe('add', () => {
  test('adds two numbers', () => {
    expect(add(2, 3)).toBe(5)
  })
})

describe('modulo', () => {
  test('US-001 AC1: returns the remainder', () => {
    expect(modulo(7, 3)).toBe(1)
  })

  test('US-001 AC1: returns zero for an exactly divisible pair', () => {
    expect(modulo(4, 2)).toBe(0)
  })

  test('US-001 AC2: preserves a negative dividend remainder', () => {
    expect(modulo(-7, 3)).toBe(-1)
  })

  test('US-001 AC2: preserves JavaScript remainder semantics for a negative divisor', () => {
    expect(modulo(7, -3)).toBe(1)
  })

  test('US-001 AC2: preserves negative zero', () => {
    expect(Object.is(modulo(-4, 2), -0)).toBe(true)
  })

  test('US-001 AC3: rejects a zero divisor with the exact error message', () => {
    expect(() => modulo(1, 0)).toThrow('division by zero')

    let thrown: unknown
    try {
      modulo(1, 0)
    } catch (error) {
      thrown = error
    }
    expect(thrown).toBeInstanceOf(Error)
    expect((thrown as Error).message).toBe('division by zero')
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
