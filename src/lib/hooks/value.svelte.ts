import { untrack } from "svelte"

export default class ValueState<T> {
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
