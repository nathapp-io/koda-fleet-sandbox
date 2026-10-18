export function add(a: number, b: number): number {
  return a + b
}

export function cube(n: number): number {
  return n * n * n
}

export function negate(n: number): number {
  if (n === 0) return 0
  return -n
}
