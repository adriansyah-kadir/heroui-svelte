import type { ButtonVariants } from "@heroui/styles";
import { Context, type Getter } from "@adriansyah/svelte-utils";

export type ButtonGroupOpts = ButtonVariants

export class ButtonGroupContext extends Context {
  readonly opts: ButtonGroupOpts

  constructor(opts: Getter<ButtonGroupOpts>) {
    super()
    this.opts = $derived.by(opts)
  }
}
