import { describe, expect, test } from 'bun:test'
import { add, multiply } from '../src/math'

describe('add', () => {
  test('adds two numbers', () => {
    expect(add(2, 3)).toBe(5)
  })
})

describe('multiply', () => {
  test('multiply(3, 4) returns 12', () => {
    expect(multiply(3, 4)).toBe(12)
  })

  test('multiply(-2, 5) returns -10', () => {
    expect(multiply(-2, 5)).toBe(-10)
  })

  test('multiply(7, 0) returns 0', () => {
    expect(multiply(7, 0)).toBe(0)
  })
})
