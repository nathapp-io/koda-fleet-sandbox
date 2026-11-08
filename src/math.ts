export function add(a: number, b: number): number {
  return a + b
}

export function negate(n: number): number {
  if (n === 0) return 0
  return -n
}

export function abs(n: number): number {
  if (n < 0) return -n
  if (n === 0) return 0
  return n
}
