import type { HTMLAttributes } from "svelte/elements";
import type { PopoverContextOpts } from "./index.svelte";
import PopoverContext from "./index.svelte";
declare const Popover: import("svelte").Component<Partial<HTMLAttributes<HTMLDivElement> & Omit<PopoverContextOpts, "open" | "fallbackAnchor"> & {
    open?: boolean;
    fallbackAnchor?: HTMLElement;
}>, {
    context: PopoverContext;
}, "open">;
type Popover = ReturnType<typeof Popover>;
export default Popover;
