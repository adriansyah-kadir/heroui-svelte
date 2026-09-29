import type { HTMLAttributes } from "svelte/elements";
import PaginationState from "./index.svelte.ts";
import type { Snippet } from "svelte";
type $$ComponentProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
    children?: Snippet<[PaginationState]>;
};
declare const PaginationSummary: import("svelte").Component<$$ComponentProps, {}, "">;
type PaginationSummary = ReturnType<typeof PaginationSummary>;
export default PaginationSummary;
