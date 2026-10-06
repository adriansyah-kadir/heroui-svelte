import type { HTMLAttributes } from "svelte/elements";
import type { PopoverOpts } from "./index.svelte";
import PopoverContext from "./index.svelte";
declare const Popover: import("svelte").Component<Partial<HTMLAttributes<HTMLDivElement> & PopoverOpts & {
    open?: boolean;
    anchor?: HTMLElement;
}>, {
    context: PopoverContext;
}, "open">;
type Popover = ReturnType<typeof Popover>;
export default Popover;
