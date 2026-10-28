import type { InputVariants } from "@heroui/styles";
import { box, coalesce, Context, type Box, type Getter } from "@adriansyah/svelte-utils";
import type { HTMLInputAttributes } from "svelte/elements";

export type InputValue = string | number | undefined;

export type InputOpts = InputVariants & {
  disabled?: boolean;
  required?: boolean;
  invalid?: boolean;
  name?: string;
  indeterminate?: boolean;
};

export class InputContext extends Context {
  readonly opts: InputOpts;
  #value: Box<InputValue>;
  #checked: Box<boolean>;

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

  constructor(
    opts: Getter<InputOpts>,
    value: Box<InputValue> = box<InputValue>(""),
    checked: Box<boolean> = box(false),
  ) {
    const parent = InputContext.getOr()
    super();
    this.opts = $derived.by(() => coalesce(parent?.opts, opts()));
    this.#value = value;
    this.#checked = checked;

    if (!parent) return;
    box.link(parent.#value, value)
    box.link(parent.#checked, checked)
  }

  get props() {
    return {
      indeterminate: this.opts.indeterminate,
      disabled: this.opts.disabled,
      required: this.opts.required,
      "data-invalid": this.opts.invalid,
      "data-empty": this.empty,
      name: this.opts.name,
    } satisfies Partial<HTMLInputAttributes> & Record<string, unknown>;
  }

  get heroui() {
    return {
      variant: this.opts.variant,
      fullWidth: this.opts.fullWidth,
    } satisfies InputVariants;
  }

  get empty() {
    return this.value === undefined || this.value === "";
  }
}
