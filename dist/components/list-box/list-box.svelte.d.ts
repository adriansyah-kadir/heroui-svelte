import type { HTMLAttributes } from "svelte/elements";
import { type ListBoxOpts } from "#lib";
type Props = HTMLAttributes<HTMLDivElement> & Partial<ListBoxOpts> & {
    selected?: string[];
};
declare const ListBox: import("svelte").Component<Props, {}, "selected">;
type ListBox = ReturnType<typeof ListBox>;
export default ListBox;
