import type { HTMLAttributes } from "svelte/elements";
type $$ComponentProps = HTMLAttributes<HTMLLabelElement> & {
    id?: string;
    value?: string;
    selected?: boolean;
    disabled?: boolean;
};
declare const ListBoxItem: import("svelte").Component<$$ComponentProps, {}, "selected">;
type ListBoxItem = ReturnType<typeof ListBoxItem>;
export default ListBoxItem;
