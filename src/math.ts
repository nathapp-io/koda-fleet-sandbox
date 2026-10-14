export function add(a: number, b: number): number {
  return a + b
}

export function negate(n: number): number {
  if (n === 0) return 0
  return -n
}

export function clamp(value: number, min: number, max: number): number {
  if (min > max) {
    throw new Error('min must not exceed max')
  }
  if (value < min) return min
  if (value > max) return max
  return value
}
