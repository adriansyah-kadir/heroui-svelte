import type { PaginationProps } from "./index.svelte";
import type { HTMLAttributes } from "svelte/elements";
import PaginationState from "./index.svelte";
type $$ComponentProps = PaginationProps & HTMLAttributes<HTMLDivElement>;
declare const Pagination: import("svelte").Component<$$ComponentProps, {
    pagination: PaginationState;
}, "page">;
type Pagination = ReturnType<typeof Pagination>;
export default Pagination;
