import type { AvatarVariants } from "@heroui/styles";
import { Context, type Getter } from "svelte-utils";

export type AvatarOpts = AvatarVariants

export class AvatarContext extends Context {
  readonly opts: AvatarOpts

  constructor(opts: Getter<AvatarOpts>) {
    super()
    this.opts = $derived.by(opts)
  }
}
