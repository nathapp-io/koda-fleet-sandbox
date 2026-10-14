export function add(a: number, b: number): number {
  return a + b
}

export function negate(n: number): number {
  if (n === 0) return 0
  return -n
}

export function power(base: number, exp: number): number {
  if (exp < 0 || !Number.isInteger(exp)) {
    throw new Error('exp must be a non-negative integer')
  }
  return Math.pow(base, exp)
}
