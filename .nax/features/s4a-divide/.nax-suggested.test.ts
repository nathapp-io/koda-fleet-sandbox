import { describe, expect, test } from 'bun:test'
import { divide } from '../../src/math'

describe('s4a-divide', () => {
  test('AC-1: divide(0, 1) returns 0; divide(0, -1) returns 0; divide(0, 5) returns 0', () => {
    expect(divide(0, 1)).toBe(0)
    expect(divide(0, -1)).toBe(0)
    expect(divide(0, 5)).toBe(0)
  })

  test('AC-2: divide(5, 5) returns 1; divide(-3, -3) returns 1; divide(10, 10) returns 1', () => {
    expect(divide(5, 5)).toBe(1)
    expect(divide(-3, -3)).toBe(1)
    expect(divide(10, 10)).toBe(1)
  })
})