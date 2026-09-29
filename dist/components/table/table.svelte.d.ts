import type { HTMLAttributes } from "svelte/elements";
import TableContext, { type TableOpts } from "./index.svelte";
type Props = HTMLAttributes<HTMLDivElement> & TableOpts;
declare const Table: import("svelte").Component<Props, {
    state: TableContext;
}, "">;
type Table = ReturnType<typeof Table>;
export default Table;
