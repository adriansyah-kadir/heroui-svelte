import { getPopoverArea, PopoverState } from "#lib/hooks/index.ts";
import { Context } from "#lib/utils/index.ts";
export default class PopoverContext extends Context {
    #opts;
    get opts() { return this.#opts.current; }
    popover = new PopoverState();
    area = getPopoverArea(this.popover);
    constructor(opts) {
        super();
        this.#opts = opts;
    }
    get props() {
        return {
            "data-entering": this.popover.open,
            "data-exiting": this.popover.closed,
            "data-placement": this.area.current ?? this.opts.placement
        };
    }
    get fallbackArea() {
        return {
            top: "bottom, right, left",
            bottom: "top, right, left",
            left: "right, left, bottom, top",
            right: "left, right, bottom, top",
        }[this.opts.placement];
    }
    get anchorPoint() {
        return {
            top: "bottom",
            bottom: "top",
            left: "right",
            right: "left",
        }[this.area.current ?? this.opts.placement];
    }
    get marginOffset() {
        const offset = this.opts.offset;
        return {
            top: `${offset}px 0`,
            bottom: `${offset}px 0`,
            left: `0 ${offset}px`,
            right: `0 ${offset}px`,
        }[this.area.current ?? this.opts.placement];
    }
}
