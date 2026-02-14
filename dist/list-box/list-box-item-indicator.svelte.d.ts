import type { HTMLAttributes } from "svelte/elements";
import { type ListBoxItemVariants } from "@heroui/styles";
type $$ComponentProps = HTMLAttributes<HTMLSpanElement> & ListBoxItemVariants & {
    selected?: boolean;
};
declare const ListBoxItemIndicator: import("svelte").Component<$$ComponentProps, {}, "">;
type ListBoxItemIndicator = ReturnType<typeof ListBoxItemIndicator>;
export default ListBoxItemIndicator;
