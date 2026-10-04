import { describe, expect, test } from 'bun:test'
import { multiply } from '../../../src/math'

describe('multiply acceptance criteria', () => {
  test('AC-1: multiply(0, 0) returns 0', () => {
    expect(multiply(0, 0)).toBe(0)
  })

  test('AC-2: typeof multiply(2, 3) returns \'number\'', () => {
    expect(typeof multiply(2, 3)).toBe('number')
  })

  test('AC-3: multiply(0.5, 4) returns 2', () => {
    expect(multiply(0.5, 4)).toBe(2)
  })
})