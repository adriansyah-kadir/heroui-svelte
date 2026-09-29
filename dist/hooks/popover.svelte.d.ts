import type { Attachment } from "svelte/attachments";
export declare class PopoverState {
    #private;
    get node(): HTMLElement | null;
    get source(): HTMLElement | null;
    get open(): boolean;
    get closed(): boolean;
    constructor();
    attach(): Attachment<HTMLElement>;
}
export declare function getPopoverArea(popover: PopoverState): {
    readonly current: string | undefined;
};
export declare function popoverSelector(selector: () => string | undefined | null): PopoverState;
