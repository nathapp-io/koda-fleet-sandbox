export function add(a: number, b: number): number {
  return a + b
}

export function negate(n: number): number {
  if (n === 0) return 0
  return -n
}

export function clamp(n: number, min: number, max: number): number {
  if (!Number.isNaN(min) && !Number.isNaN(max) && min > max) {
    throw new RangeError('min must not exceed max')
  }

  if (Number.isNaN(n) || Number.isNaN(min) || Number.isNaN(max)) return NaN

  const result = n < min ? min : n > max ? max : n
  return result === 0 ? 0 : result
}
