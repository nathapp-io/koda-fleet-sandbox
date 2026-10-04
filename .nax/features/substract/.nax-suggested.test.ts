import { describe, expect, test } from 'bun:test'
import { subtract } from '../../../src/math'

describe('AC-1: Calling subtract(a,0) returns a for any numeric a', () => {
  test('subtract(5,0) returns 5', () => {
    expect(subtract(5, 0)).toBe(5)
  })

  test('subtract(-2,0) returns -2', () => {
    expect(subtract(-2, 0)).toBe(-2)
  })

  test('subtract(0,0) returns 0', () => {
    expect(subtract(0, 0)).toBe(0)
  })

  test('subtract(1.5,0) returns 1.5', () => {
    expect(subtract(1.5, 0)).toBe(1.5)
  })

  test('subtract(-0.5,0) returns -0.5', () => {
    expect(subtract(-0.5, 0)).toBe(-0.5)
  })
})

describe('AC-2: Calling subtract(a,a) returns 0 for any numeric a', () => {
  test('subtract(5,5) returns 0', () => {
    expect(subtract(5, 5)).toBe(0)
  })

  test('subtract(-3,-3) returns 0', () => {
    expect(subtract(-3, -3)).toBe(0)
  })

  test('subtract(0,0) returns 0', () => {
    expect(subtract(0, 0)).toBe(0)
  })

  test('subtract(1.5,1.5) returns 0', () => {
    expect(subtract(1.5, 1.5)).toBe(0)
  })
})