import { getContext, hasContext, setContext } from "svelte";

export function getContextOr<T>(key: string): T | undefined
export function getContextOr<T>(key: string, value: T): T

export function getContextOr<T>(key: string, value?: T) {
  if (hasContext(key)) return getContext<T>(key);
  if (value !== undefined) return setContext(key, value)
  return undefined
}
