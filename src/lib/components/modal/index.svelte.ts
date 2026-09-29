import { Context, DialogState, type Box } from "#lib";
import type { ModalVariants } from "@heroui/styles";

export type ModalOpts = ModalVariants & {
  placement?: "top" | "bottom" | "center" | "auto";
}

export class ModalContext extends Context {
  #opts: Box<ModalOpts>
  get opts() {
    return this.#opts.current
  }

  dialog = new DialogState()

  constructor(opts: Box<ModalOpts>) {
    super()
    this.#opts = opts
  }

  get heroui() {
    return {
      scroll: this.opts.scroll,
      size: this.opts.size,
      variant: this.opts.variant
    } satisfies ModalVariants
  }
}
