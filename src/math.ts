export function add(a: number, b: number): number {
  return a + b
}

export function negate(n: number): number {
  if (n === 0) return 0
  return -n
}

export function divide(a: number, b: number): number {
  if (b === 0) throw new Error('division by zero')
  return a / b
}
