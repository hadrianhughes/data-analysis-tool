export const get = (path: string, fallback?: any) => (obj: Record<string, any>): any => {
  const parts = path.split('.')
  const value = obj[parts[0]]

  if (parts.length === 1 && value !== undefined) {
    return value
  }

  if (value === undefined) {
    return fallback
  }

  return get(parts.slice(1).join('.'), fallback)(value)
}
