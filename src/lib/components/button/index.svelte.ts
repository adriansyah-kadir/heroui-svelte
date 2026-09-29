import type { Box } from "#lib/hooks/index.js";
import { Context } from "#lib/utils/index.js";
import type { ButtonVariants } from "@heroui/styles";

export type ButtonOpts = {
  focused?: boolean,
  hovered?: boolean,
  pending?: boolean,
  pressed?: boolean,
} & ButtonVariants

export class ButtonContext extends Context {
  opts: ButtonOpts

  constructor(opts: Box<ButtonOpts>) {
    super()
    this.opts = opts.current
  }

  get props() {
    return {
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
