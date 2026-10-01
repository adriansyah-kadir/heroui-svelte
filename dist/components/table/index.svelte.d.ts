import type { Box } from "#lib/hooks/index.js";
import { Context } from "#lib/utils/index.js";
import type { TableVariants } from "@heroui/styles";
export type TableOpts = TableVariants;
export default class TableContext extends Context<TableOpts> {
    constructor(opts: Box<TableOpts>);
    get heroui(): {
        variant: "primary" | "secondary" | undefined;
    };
}
