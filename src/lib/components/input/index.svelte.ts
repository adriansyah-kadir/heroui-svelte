import type { InputVariants } from "@heroui/styles";
import { box, Context, type Box, type Getter } from "svelte-utils";
import type { HTMLInputAttributes } from "svelte/elements";

export type InputOpts = {
  disabled?: boolean,
  required?: boolean,
  invalid?: boolean,
  name?: string,
  indeterminate?: boolean
} & InputVariants

export class InputContext extends Context {
  readonly opts: InputOpts
  #value: Box<string | number | undefined>
  #checked: Box<boolean>

  get value() {
    return this.#value.current
  }

  set value(value: string | number | undefined) {
    this.#value.current = value
  }

  get checked() {
    return this.#checked.current
  }

  set checked(checked: boolean) {
    this.#checked.current = checked
  }

  constructor(opts: Getter<InputOpts>, value = box<string | number>(""), checked = box(false)) {
    super()
    this.opts = $derived.by(opts)
    this.#value = value
    this.#checked = checked
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
    return this.value === undefined || this.value === ""
  }
}
