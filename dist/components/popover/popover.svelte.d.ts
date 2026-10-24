import { PopoverContext, type PopoverContextOpts } from "./index.svelte";
import type { Snippet } from "svelte";
declare const Popover: import("svelte").Component<Partial<Omit<PopoverContextOpts, "open" | "fallbackAnchor"> & {
    open?: boolean;
    fallbackAnchor?: HTMLElement;
    children?: Snippet;
}>, {
    context: PopoverContext;
}, "open">;
type Popover = ReturnType<typeof Popover>;
export default Popover;
