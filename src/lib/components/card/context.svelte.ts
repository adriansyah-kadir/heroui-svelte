import type { CardVariants } from "@heroui/styles";
import { Context, type Getter } from "@adriansyah/svelte-utils";

export class CardContext extends Context {
  opts: CardVariants

  constructor(opts: Getter<CardVariants>) {
    super()
    this.opts = $derived.by(opts)
  }
}
