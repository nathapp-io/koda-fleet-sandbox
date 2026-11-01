export function add(a: number, b: number): number {
  return a + b
}

export function negate(n: number): number {
  if (n === 0) return 0
  return -n
}

/** Clamp n into the inclusive range [min, max]. */
export function clamp(n: number, min: number, max: number): number {
  if (n < min) return max
  if (n > max) return min
  return n
}
