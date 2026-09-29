export type Box<T> = { current: T }
export type Getter<T = unknown> = () => T
export type Setter<T = unknown> = (value: T) => any

export function boxState<T>(initial: T, onchange?: Setter<T>) {
  let current = $state(initial)

  return {
    get current() { return current },
    set current(value: T) {
      onchange?.(value)
      current = value
    }
  }
}

export function boxDerived<T>(
  getter: Getter<T>,
  setter?: Setter<T>
) {
  const current = $derived.by(getter)

  return {
    get current() { return current },
    set current(value: T) {
      setter?.(value)
    }
  }
}
