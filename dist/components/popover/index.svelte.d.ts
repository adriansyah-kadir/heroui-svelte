import { PopoverState, type Box } from "#lib/hooks/index.js";
import { Context } from "#lib/utils/index.js";
export type PopoverOpts = {
    placement: "bottom" | "top" | "left" | "right";
    offset: number;
};
export default class PopoverContext extends Context<PopoverOpts> {
    popover: PopoverState;
    area: {
        readonly current: string | undefined;
    };
    constructor(opts: Box<PopoverOpts>);
    get props(): {
        "data-entering": boolean;
        "data-exiting": boolean;
        "data-placement": string;
    };
    get fallbackArea(): string;
    get anchorPoint(): string | undefined;
    get marginOffset(): string | undefined;
}
