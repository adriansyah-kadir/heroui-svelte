import type { HTMLAttributes } from "svelte/elements";
import PaginationState from "./index.svelte";
import type { Snippet } from "svelte";
type $$ComponentProps = Omit<HTMLAttributes<HTMLLIElement>, "children"> & {
    children?: Snippet<[PaginationState]>;
};
declare const PaginationItem: import("svelte").Component<$$ComponentProps, {}, "">;
type PaginationItem = ReturnType<typeof PaginationItem>;
export default PaginationItem;
