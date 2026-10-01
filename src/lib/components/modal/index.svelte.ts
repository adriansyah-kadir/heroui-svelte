import { DialogState, type Box } from "#lib/hooks/index.js";
import { Context } from "#lib/utils/index.js";
import type { ModalVariants } from "@heroui/styles";

export type ModalOpts = ModalVariants & {
  placement?: "top" | "bottom" | "center" | "auto";
}

export class ModalContext extends Context<ModalOpts> {
  dialog = new DialogState()

  constructor(opts: Box<ModalOpts>) {
    super(opts)
  }

  get heroui() {
    return {
      scroll: this.opts.scroll,
      size: this.opts.size,
      variant: this.opts.variant
    } satisfies ModalVariants
  }
}
