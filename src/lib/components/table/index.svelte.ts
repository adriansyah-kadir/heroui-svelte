import type { Box } from "#lib/hooks/index.ts";
import { Context } from "#lib/utils/index.ts";
import type { TableVariants } from "@heroui/styles";

export type TableOpts = TableVariants

export default class TableContext extends Context {
  #opts: Box<TableOpts>
  get opts() { return this.#opts.current }

  constructor(opts: Box<TableOpts>) {
    super()
    this.#opts = opts
  }

  get heroui() {
    return {
      variant: this.opts.variant
    }
  }
}
