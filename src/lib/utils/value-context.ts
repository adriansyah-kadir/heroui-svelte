import ValueState from "#lib/hooks/value.svelte.ts";
import { getContext, hasContext, setContext } from "svelte";

export type Getter<T> = () => T;

export default function getValueContextOr<T>(
  k: string,
): ValueState<T> | undefined;

export default function getValueContextOr<T>(
  k: string,
  v: Getter<T>,
): ValueState<T>;

export default function getValueContextOr<T>(
  k: string,
  v?: Getter<T>,
): ValueState<T> | undefined {
  if (hasContext(k)) {
    return getContext<ValueState<T>>(k);
  }

  return v ? setContext(k, new ValueState(v)) : undefined;
}

export function getValueContext<T>(
  k: string,
): ValueState<T> | undefined {
  return getContext<ValueState<T>>(k);
}
