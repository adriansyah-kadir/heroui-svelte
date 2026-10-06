import { Context, PopoverState, type Box, type Getter } from "svelte-utils";
export type PopoverContextOpts = {
    placement?: "bottom" | "top" | "left" | "right";
    offset?: number;
    fallbackAnchor?: HTMLElement;
};
export default class PopoverContext extends Context {
    get open(): boolean;
    set open(open: boolean);
    popover: PopoverState;
    placement: "bottom" | "top" | "left" | "right";
    position: string;
    offset: number;
    constructor(opts: Getter<PopoverContextOpts>, open?: Box<boolean>);
    get props(): {
        "data-entering": boolean;
        "data-exiting": boolean;
        "data-placement": "bottom" | "top" | "left" | "right";
    };
    get fallbackArea(): string | undefined;
    get anchorPoint(): string | undefined;
    get marginOffset(): string | undefined;
}
