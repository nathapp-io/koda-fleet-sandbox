import { describe, expect, test } from 'bun:test'
import { add } from '../src/math'

describe('add', () => {
  test('adds two numbers', () => {
    expect(add(2, 3)).toBe(5)
  })
})
