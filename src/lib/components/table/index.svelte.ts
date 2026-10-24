import type { TableVariants } from "@heroui/styles";
import { Context, type Getter } from "svelte-utils";

export type TableOpts = TableVariants

export default class TableContext extends Context {
  readonly opts:TableOpts

  constructor(opts: Getter<TableOpts>) {
    super()
    this.opts = $derived.by(opts)
  }

  get heroui() {
    return {
      variant: this.opts.variant
    }
  }
}
