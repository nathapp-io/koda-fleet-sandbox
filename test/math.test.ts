import { describe, expect, test } from 'bun:test'
import { add, negate, sign } from '../src/math'

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

describe('sign', () => {
  test('S-AC1: sign(7) returns 1', () => {
    expect(sign(7)).toBe(1)
  })

  test('S-AC2: sign(-3) returns -1', () => {
    expect(sign(-3)).toBe(-1)
  })

  test('S-AC3: sign(0) returns positive zero', () => {
    expect(Object.is(sign(0), 0)).toBe(true)
  })

  test('S-AC4: sign(-0) returns positive zero', () => {
    expect(Object.is(sign(-0), 0)).toBe(true)
  })

  test('S-AC5: sign(NaN) returns NaN', () => {
    expect(Number.isNaN(sign(NaN))).toBe(true)
  })

  test('S-AC6: sign handles positive and negative infinity', () => {
    expect(sign(Infinity)).toBe(1)
    expect(sign(-Infinity)).toBe(-1)
  })

  test('S-AC7: sign is a named function accepting and returning numbers', () => {
    const classify: (n: number) => number = sign
    expect(typeof classify).toBe('function')
    expect(classify(7)).toBe(1)
  })
})
