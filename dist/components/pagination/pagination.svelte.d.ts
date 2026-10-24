import type { PaginationProps } from "./index.svelte";
import type { HTMLAttributes } from "svelte/elements";
type $$ComponentProps = PaginationProps & HTMLAttributes<HTMLDivElement> & {
    page?: number;
};
declare const Pagination: import("svelte").Component<$$ComponentProps, {}, "page">;
type Pagination = ReturnType<typeof Pagination>;
export default Pagination;
