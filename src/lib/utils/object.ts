export function pick<T extends object, const K extends readonly (keyof T)[]>(
  obj: T,
  keys: K,
): Pick<T, K[number]> {
  const result = {} as Pick<T, K[number]>

  for (const key of keys) {
    result[key] = obj[key]
  }

  return result
}

export function omit<T extends object, const K extends readonly (keyof T)[]>(
  obj: T,
  keys: K,
): Omit<T, K[number]> {
  const result = { ...obj }

  for (const key of keys) {
    delete result[key]
  }

  return result
}
