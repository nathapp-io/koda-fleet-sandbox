export function add(a: number, b: number): number {
  return a + b
}

export function negate(n: number): number {
  if (n === 0) return 0
  return -n
}

export function max2(a: number, b: number): number {
  return a >= b ? a : b
}
