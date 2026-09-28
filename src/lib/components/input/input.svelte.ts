import type { InputVariants } from "@heroui/styles";
import { getContext, hasContext } from "svelte";
import type { Attachment } from "svelte/attachments";
import type { HTMLInputAttributes } from "svelte/elements";

export type InputOpts = {
  disabled?: boolean,
  required?: boolean,
  invalid?: boolean,
  name?: string,
  mode?: "change" | "input"
  value?: string,
  checked?: boolean,
} & InputVariants

export default class InputState {
  node = $state<HTMLInputElement>()

  static get() {
    return getContext<InputState>("input-state")
  }

  static getOr(opts: InputOpts) {
    if (hasContext("input-state")) return InputState.get();
    return new InputState(opts)
  }

  constructor(public opts: InputOpts) {
    $effect(() => {
      if (!this.node) return;
      const value = this.opts.value
      const checked = this.opts.checked
      this.node.value = value ?? ""
      this.node.checked = checked ?? false
    })
  }

  attach(): Attachment<HTMLInputElement> {
    const mode = this.opts.mode ?? "change"
    return node => {
      this.node = node
      node.addEventListener(mode, this.update)
      node.addEventListener("invalid", this.update)
      return () => {
        this.node = undefined
        node.removeEventListener(mode, this.update)
        node.removeEventListener("invalid", this.update)
      }
    }
  }

  update = () => {
    this.opts.invalid = this.node?.validity.valid === false
    this.opts.value = this.node?.value
    this.opts.checked = this.node?.checked
  }

  get props() {
    return {
      disabled: this.opts.disabled,
      required: this.opts.required,
      "data-invalid": this.opts.invalid,
      name: this.opts.name,
    } satisfies HTMLInputAttributes
  }

  get heroui() {
    return {
      variant: this.opts.variant,
      fullWidth: this.opts.fullWidth
    }
  }

  get empty() {
    return this.opts.value === ""
  }
}
