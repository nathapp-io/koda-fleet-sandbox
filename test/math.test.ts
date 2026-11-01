import { describe, expect, test } from 'bun:test'
import { add, negate } from '../src/math'

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

import { clamp, isNegative, ratio, safeDivide } from "../src/math"

test("clamp bounds the value", () => {
  expect(clamp(5, 0, 3)).toBe(3)
  expect(clamp(-1, 0, 3)).toBe(0)
  expect(clamp(2, 0, 3)).toBe(2)
})

test("ratio divides", () => {
  expect(ratio(6, 3)).toBe(2)
})

test("safeDivide divides", () => {
  expect(safeDivide(8, 2)).toBe(4)
})

test("isNegative flags negatives", () => {
  expect(isNegative(-1)).toBe(true)
  expect(isNegative(2)).toBe(false)
})
