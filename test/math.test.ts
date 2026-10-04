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
})
