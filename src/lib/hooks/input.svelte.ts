import type { Attachment } from "svelte/attachments"

export type InputOpts = {
  mode?: "change" | "input"
}

export default class InputState {
  constructor(public opts: InputOpts) { }

  #node = $state<HTMLInputElement>()
  get node() { return this.#node }

  #invalid = $state<boolean>()

  get invalid() {
    return this.#invalid
  }

  #checked = $state<boolean>()
  get checked() { return this.#checked }
  set checked(value: boolean | undefined) {
    this.#checked = value
    if (this.#node) this.#node.checked = !!value
  }

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
      node.addEventListener(this.opts.mode ?? "change", syncvalue)
      node.addEventListener("change", update)
      node.addEventListener("invalid", update)
      return () => {
        this.#node = undefined
        node.removeEventListener(this.opts.mode ?? "change", syncvalue)
        node.removeEventListener("change", update)
        node.removeEventListener("invalid", update)
      }
    }
  }

  #update = (node: HTMLInputElement) => {
    this.#invalid = !node.validity.valid
  }
}
