import type { ModalVariants } from "@heroui/styles";
import { Context, DialogState, type Getter } from "@adriansyah/svelte-utils";

export type ModalOpts = ModalVariants & {
  placement?: "top" | "bottom" | "center" | "auto";
}

export class ModalContext extends Context {
  readonly opts: ModalOpts
  dialog = new DialogState()

  constructor(opts: Getter<ModalOpts>) {
    super()
    this.opts = $derived.by(opts)
  }

  get heroui() {
    return {
      scroll: this.opts.scroll,
      size: this.opts.size,
      variant: this.opts.variant
    } satisfies ModalVariants
  }
}
