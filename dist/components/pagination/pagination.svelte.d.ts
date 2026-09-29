import type { PaginationProps } from "./index.svelte.ts";
import PaginationState from "./index.svelte.ts";
import type { HTMLAttributes } from "svelte/elements";
type $$ComponentProps = PaginationProps & HTMLAttributes<HTMLDivElement>;
declare const Pagination: import("svelte").Component<$$ComponentProps, {
    pagination: PaginationState;
}, "page">;
type Pagination = ReturnType<typeof Pagination>;
export default Pagination;
