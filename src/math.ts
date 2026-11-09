export function add(a: number, b: number): number {
  return a + b
}

export function negate(n: number): number {
  if (n === 0) return 0
  return -n
}

export function min2(a: number, b: number): number {
  return Math.min(a, b)
}

export function clamp(x: number, lo: number, hi: number): number {
  if (Number.isNaN(x) || Number.isNaN(lo) || Number.isNaN(hi)) return NaN
  if (lo > hi) throw new RangeError('lo must not exceed hi')
  return Math.max(min2(x, hi), lo)
}
