import type { HTMLAttributes } from "svelte/elements";
import { type ListBoxOpts, ListBoxContext } from "#lib";
type Props = HTMLAttributes<HTMLDivElement> & Partial<ListBoxOpts>;
declare const ListBox: import("svelte").Component<Props, {
    ctx: ListBoxContext;
}, "">;
type ListBox = ReturnType<typeof ListBox>;
export default ListBox;
