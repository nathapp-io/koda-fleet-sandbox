import { describe, expect, test } from 'bun:test'
import { add, subtract } from '../src/math'

describe('add', () => {
  test('adds two numbers', () => {
    expect(add(2, 3)).toBe(5)
  })
})

describe('subtract', () => {
  test('subtracts two positive numbers', () => {
    expect(subtract(5, 3)).toBe(2)
  })

  test('subtracts resulting in negative number', () => {
    expect(subtract(3, 5)).toBe(-2)
  })

  test('subtracts zeros', () => {
    expect(subtract(0, 0)).toBe(0)
  })

  test('subtract with zero second operand returns the first operand', () => {
    expect(subtract(7, 0)).toBe(7)
  })

  test('subtract with equal operands returns zero', () => {
    expect(subtract(4, 4)).toBe(0)
  })
})
