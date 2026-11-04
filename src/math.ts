export function add(a: number, b: number): number {
  return a + b
}

export function double(n: number): number {
  return n * 2
}

export function negate(n: number): number {
  if (n === 0) return 0
  return -n
}
