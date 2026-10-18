import { describe, expect, test } from 'bun:test'
import { add, cube, negate } from '../src/math'

describe('cube', () => {
  test('AC-1: cubes two', () => {
    expect(cube(2)).toBe(8)
  })

  test('AC-2: cubes negative numbers', () => {
    expect(cube(-3)).toBe(-27)
  })

  test('AC-3: cubes zero', () => {
    expect(cube(0)).toBe(0)
  })

  test('AC-6: propagates NaN', () => {
    expect(Number.isNaN(cube(Number.NaN))).toBe(true)
  })
})

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
