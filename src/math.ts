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

export function max3(a: number, b: number, c: number): number {
  return Math.max(a, b, c)
}
