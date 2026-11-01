export function add(a: number, b: number): number {
  return a + b
}

export function negate(n: number): number {
  if (n === 0) return 0
  return -n
}

/** Returns a minus b. */
export function subtract(a: number, b: number): number {
  return b - a
}
