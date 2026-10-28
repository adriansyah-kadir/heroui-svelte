import type { ButtonVariants } from "@heroui/styles";
import { coalesce, Context, type Getter } from "@adriansyah/svelte-utils";
import { ButtonGroupContext } from "../button-group/context.svelte";

export type ButtonOpts = {
  focused?: boolean,
  hovered?: boolean,
  pending?: boolean,
  pressed?: boolean,
  disabled?: boolean,
} & ButtonVariants

export class ButtonContext extends Context {
  readonly opts: ButtonOpts

  constructor(opts: Getter<ButtonOpts>) {
    super()
    const group = ButtonGroupContext.getOr()
    this.opts = $derived.by(() => coalesce(group?.opts, opts()))
  }

  get props() {
    return {
      "data-disabled": this.opts.disabled,
      "data-focused": this.opts.focused,
      "data-pressed": this.opts.pressed,
      "data-focus-visible": this.opts.focused,
      "data-hovered": this.opts.hovered,
      ...(this.opts.pending ? { "data-pending": true } : {})
    }
  }

  get heroui() {
    return {
      fullWidth: this.opts.fullWidth,
      isIconOnly: this.opts.isIconOnly,
      size: this.opts.size,
      variant: this.opts.variant
    }
  }
}
