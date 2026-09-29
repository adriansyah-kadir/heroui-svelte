import type { Box } from "#lib/hooks/boxed.svelte.ts";
import { Context } from "#lib";
import type { TableVariants } from "@heroui/styles";
export type TableOpts = TableVariants;
export default class TableContext extends Context {
    #private;
    get opts(): TableVariants;
    constructor(opts: Box<TableOpts>);
    get heroui(): {
        variant: "primary" | "secondary" | undefined;
    };
}
