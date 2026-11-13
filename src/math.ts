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
