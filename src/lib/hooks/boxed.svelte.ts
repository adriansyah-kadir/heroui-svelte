import { SvelteMap } from "svelte/reactivity"

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

export default function boxedDerived<T extends Record<string, any>>(
  getter: Getter<T>,
  setter?: <K extends keyof T>(key: K, value: T[K]) => any,
): T {
  const boxes = new SvelteMap<string, Box<any>>()

  $effect(() => {
    const value = getter()

    for (const key of Object.keys(value)) {
      if (boxes.has(key)) continue

      boxes.set(
        key,
        boxDerived(
          () => getter()[key],
          (next) => setter?.(key, next),
        ),
      )
    }
  })

  return new Proxy(boxes, {
    get(target, property: string) {
      return target.get(property)?.current
    },

    set(target, property: string, value) {
      const box = target.get(property)

      if (!box) {
        setter?.(property, value)
        // Optionally create a box here
        return false
      }

      box.current = value
      return true
    },

    ownKeys() {
      return [...boxes.keys()]
    },

    getOwnPropertyDescriptor(_, property: string) {
      if (!boxes.has(property)) return undefined

      return {
        enumerable: true,
        configurable: true,
      }
    },
  }) as unknown as T
}
