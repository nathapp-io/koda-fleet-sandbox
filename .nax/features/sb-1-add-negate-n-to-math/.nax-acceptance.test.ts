import { describe, expect, test } from 'bun:test'

describe('AC-1: negate(5) === -5', () => {
  test('negate returns -5 when given 5', async () => {
    const { negate } = await import('../../../src/math')
    expect(negate(5)).toBe(-5)
  })
})

describe('AC-2: negate(-3) === 3', () => {
  test('negate returns 3 when given -3', async () => {
    const { negate } = await import('../../../src/math')
    expect(negate(-3)).toBe(3)
  })
})

describe('AC-3: Object.is(negate(0), 0) === true', () => {
  test('negate(0) returns 0 with Object.is comparison (not -0)', async () => {
    const { negate } = await import('../../../src/math')
    expect(Object.is(negate(0), 0)).toBe(true)
  })
})

describe('AC-4: add(2, 3) === 5', () => {
  test('add returns 5 when given 2 and 3', async () => {
    const { add } = await import('../../../src/math')
    expect(add(2, 3)).toBe(5)
  })
})