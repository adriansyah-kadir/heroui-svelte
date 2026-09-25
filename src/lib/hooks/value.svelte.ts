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
        return Reflect.get(target, property, target)
      }

      if (typeof target.current !== "object" || target.current === null) return false;
      if (!(property in target.current)) return false;

      const value = Reflect.get(target.current, property)
      if (typeof value === "function") {
        return value.bind(target.current)
      }

      return value
    },

    set(target, property, value) {
      if (property in target) {
        return Reflect.set(target, property, value, target)
      }

      const current = target.current
      if (typeof current !== "object" || current === null) {
        return false
      }

      return Reflect.set(current, property, value, current)
    }
  }) as ValueState<T>
}
