import { Context, getPopoverArea, PopoverState } from "svelte-utils";
export default class PopoverContext extends Context {
    get open() { return this.popover.open; }
    set open(open) { this.popover.open = open; }
    popover;
    placement;
    position;
    offset;
    constructor(opts, open) {
        super();
        const { fallbackAnchor, offset, placement } = $derived.by(opts);
        const popover = new PopoverState({ fallbackAnchor: () => fallbackAnchor, open });
        const area = getPopoverArea(popover);
        this.popover = popover;
        this.placement = $derived(placement ?? "bottom");
        this.position = $derived(area.current ?? this.placement ?? "bottom");
        this.offset = $derived(offset ?? 5);
    }
    get props() {
        return {
            "data-entering": this.popover.open,
            "data-exiting": !this.popover.open,
            "data-placement": this.placement
        };
    }
    get fallbackArea() {
        return {
            top: "bottom, right, left",
            bottom: "top, right, left",
            left: "right, left, bottom, top",
            right: "left, right, bottom, top",
        }[this.position];
    }
    get anchorPoint() {
        return {
            top: "bottom",
            bottom: "top",
            left: "right",
            right: "left",
        }[this.position];
    }
    get marginOffset() {
        const offset = this.offset;
        return {
            top: `${offset}px 0`,
            bottom: `${offset}px 0`,
            left: `0 ${offset}px`,
            right: `0 ${offset}px`,
        }[this.position];
    }
}
