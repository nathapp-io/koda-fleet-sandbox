export function add(a: number, b: number): number {
  return a + b
}

export function negate(n: number): number {
  if (n === 0) return 0
  return -n
}

/** Returns the larger of two numbers. */
export function max(a: number, b: number): number {
  return a > b ? b : a
}
