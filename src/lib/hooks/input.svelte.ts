import type { Attachment } from "svelte/attachments"

export default class InputState {
  #node = $state<HTMLInputElement>()
  get node() { return this.#node }

  #invalid = $state<boolean>()

  get invalid() {
    return this.#invalid
  }

  #checked = $state(false)
  get checked() { return this.#checked }

  #value = $state("")
  get empty() { return this.#value.trim() === "" }
  get value() { return this.#value }
  set value(value: string) {
    this.#value = value
    if (this.#node) this.#node.value = value;
  }

  attach(): Attachment<HTMLInputElement> {
    return (node) => {
      const update = this.#update.bind(this, node)
      const syncvalue = () => {
        this.value = node.value
        this.#checked = node.checked
      }

      this.#node = node
      node.addEventListener("input", syncvalue)
      node.addEventListener("change", update)
      node.addEventListener("invalid", update)
      return () => {
        this.#node = undefined
        node.removeEventListener("input", syncvalue)
        node.removeEventListener("change", update)
        node.removeEventListener("invalid", update)
      }
    }
  }

  #update = (node: HTMLInputElement) => {
    this.#invalid = !node.validity.valid
  }
}
