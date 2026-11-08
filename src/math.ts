export function add(a: number, b: number): number {
  return a + b
}

export function negate(n: number): number {
  if (n === 0) return 0
  return -n
}

export function sign(n: number): number {
  if (Number.isNaN(n)) return NaN
  if (n === 0) return 0
  return n < 0 ? -1 : 1
}
