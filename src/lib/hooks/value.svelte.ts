import { untrack } from "svelte"

export type ValueState<T> = {
  current: T
} & (T extends object ? T : {})

class ValueStateImpl<T> {
  current: T

  constructor(value: () => T) {
    this.current = $state(value())

    $effect.pre(() => {
      const v = value()

      untrack(() => {
        this.current = v
      })
    })
  }
}

export default function valueState<T>(value: () => T): ValueState<T> {
  const state = new ValueStateImpl(value)

  if (typeof state.current !== "object" || state.current === null) {
    return state as ValueState<T>
  }

  return new Proxy(state, {
    get(target, property) {
      if (property in target) {
        // @ts-expect-error
        return target[property]
      }

      // @ts-expect-error
      return target.current[property]
    },

    set(target, property, value) {
      if (property in target) {
        // @ts-expect-error
        target[property] = value
      }

      // @ts-expect-error
      target.current[property] = value
      return true
    }
  }) as ValueState<T>
}
