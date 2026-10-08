import { describe, expect, test } from 'bun:test'
import { readFileSync } from 'node:fs'

const testFilePath = new URL('../../../test/math.test.ts', import.meta.url)

function loadTestFile(): string {
  return readFileSync(testFilePath, 'utf8')
}

function extractBlock(source: string, name: string): string | null {
  const re = new RegExp(`describe\\(\\s*['"]${name}['"]\\s*,\\s*(?:\\(\\)\\s*=>\\s*)?\\{`)
  const match = re.exec(source)
  if (!match) return null
  const start = source.indexOf('{', match.index)
  let depth = 1
  let i = start + 1
  while (i < source.length && depth > 0) {
    const ch = source[i]
    if (ch === '{') depth++
    else if (ch === '}') depth--
    i++
  }
  return source.slice(start, i)
}

function countTestCalls(block: string): number {
  const re = /\btest\s*\(/g
  const matches = block.match(re)
  return matches ? matches.length : 0
}

function countExpectCalls(block: string): number {
  const re = /\bexpect\s*\(/g
  const matches = block.match(re)
  return matches ? matches.length : 0
}

function splitTestBlocks(block: string): string[] {
  const re = /\btest\s*\(/g
  const out: string[] = []
  let lastIndex = 0
  let m: RegExpExecArray | null
  while ((m = re.exec(block)) !== null) {
    if (out.length > 0) out[out.length - 1] = block.slice(lastIndex, m.index)
    out.push('')
    lastIndex = m.index
  }
  if (out.length > 0) out[out.length - 1] = block.slice(lastIndex)
  return out
}

describe('AC-1: divide block has exactly 3 test calls with correct content', () => {
  test('AC1: divide block has 3 test calls', async () => {
    const mod = await import('../../../src/math')
    expect(typeof mod.divide).toBe('function')
    const src = loadTestFile()
    const block = extractBlock(src, 'divide')
    expect(block).not.toBeNull()
    expect(countTestCalls(block!)).toBe(3)
  })

  test('AC1: divide function returns correct results', async () => {
    const mod = await import('../../../src/math')
    expect(mod.divide(12, 4)).toBe(3)
    expect(mod.divide(-10, 5)).toBe(-2)
    expect(() => mod.divide(7, 0)).toThrow('division by zero')
  })
})

describe('AC-7: each divide test case has exactly one expect() assertion', () => {
  test('AC7: each test in divide block has exactly 1 expect()', async () => {
    const src = loadTestFile()
    const block = extractBlock(src, 'divide')
    expect(block).not.toBeNull()
    const parts = splitTestBlocks(block!)
    expect(parts.length).toBe(3)
    for (const part of parts) {
      expect(countExpectCalls(part)).toBe(1)
    }
  })
})

describe("AC-8: describe('add') and describe('negate') blocks are unchanged", () => {
  test('AC8: add block exists', async () => {
    const src = loadTestFile()
    const block = extractBlock(src, 'add')
    expect(block).not.toBeNull()
    expect(block!.includes("test('adds two numbers'")).toBe(true)
  })

  test('AC8: negate block exists', async () => {
    const src = loadTestFile()
    const block = extractBlock(src, 'negate')
    expect(block).not.toBeNull()
    expect(block!.includes("test('AC1: negate(5) returns -5'")).toBe(true)
  })
})
