import type { HTMLAttributes } from "svelte/elements";
type Props = HTMLAttributes<HTMLElement> & {
    disabled?: boolean;
    selected?: boolean;
};
declare const TableRow: import("svelte").Component<Props, {}, "">;
type TableRow = ReturnType<typeof TableRow>;
export default TableRow;
