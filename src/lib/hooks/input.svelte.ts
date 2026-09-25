import type { Attachment } from "svelte/attachments"

export default class InputState {
  #invalid = $state<boolean>()

  get invalid() {
    return this.#invalid
  }

  attach(): Attachment<HTMLInputElement> {
    return (node) => {
      const update = this.#update.bind(this, node)

      node.addEventListener("change", update)
      node.addEventListener("invalid", update)
      return () => {
        node.removeEventListener("change", update)
        node.removeEventListener("invalid", update)
      }
    }
  }

  #update = (node: HTMLInputElement) => {
    this.#invalid = !node.validity.valid
  }
}
