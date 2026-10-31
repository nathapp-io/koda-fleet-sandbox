import { describe, expect, test } from 'bun:test'
import { add, cube, negate } from '../src/math'

describe('add', () => {
  test('adds two numbers', () => {
    expect(add(2, 3)).toBe(5)
  })
})

describe('cube', () => {
  test('AC-1: cube(3) returns 27', () => {
    expect(cube(3)).toBe(27)
  })

  test('AC-2: cube(-2) returns -8', () => {
    expect(cube(-2)).toBe(-8)
  })

  test('AC-3: cube(0) returns 0', () => {
    expect(cube(0)).toBe(0)
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
