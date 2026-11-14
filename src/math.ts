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

export function sign(x: number): number {
  if (Number.isNaN(x)) return NaN
  if (x > 0) return 1
  if (x < 0) return -1
  return 0
}

export function clamp(x: number, lo: number, hi: number): number {
  if (lo > hi) throw new RangeError('clamp: lo must be <= hi')
  if (x < lo) return lo
  if (x > hi) return hi
  return x
}
