import type { Box } from "#lib/hooks/index.ts";
import { Context } from "#lib/utils/index.ts";
import type { InputVariants } from "@heroui/styles";
import type { HTMLInputAttributes } from "svelte/elements";

export type InputOpts = {
  disabled?: boolean,
  required?: boolean,
  invalid?: boolean,
  name?: string,
  value?: any,
  checked?: boolean,
  indeterminate?: boolean
} & InputVariants

export class InputContext extends Context {
  #opts: Box<InputOpts>
  get opts() { return this.#opts.current }

  get value() {
    return this.opts.value
  }

  set value(value: any) {
    this.#opts.current = {
      ...this.opts,
      value
    }
  }

  get checked() {
    return this.opts.checked
  }

  set checked(checked: boolean | undefined) {
    this.#opts.current = {
      ...this.opts,
      checked
    }
  }

  constructor(opts: Box<InputOpts>) {
    super()
    this.#opts = opts
  }

  get props() {
    return {
      indeterminate: this.opts.indeterminate,
      disabled: this.opts.disabled,
      required: this.opts.required,
      "data-invalid": this.opts.invalid,
      "data-empty": this.empty,
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
    return this.opts.value === undefined || this.opts.value === ""
  }
}
