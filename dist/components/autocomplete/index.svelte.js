import { Context, isEventTargetInAny } from "svelte-utils";
import { ListBoxContext, PopoverContext } from "#lib";
export class AutocompleteContext extends Context {
    opts;
    popoverCtx;
    listboxCtx;
    constructor(opts, selected) {
        super();
        this.opts = $derived.by(opts);
        this.popoverCtx = new PopoverContext(opts);
        this.listboxCtx = new ListBoxContext(opts, selected);
    }
    autoCloseOnFocusLost() {
        const handleWindowClick = (ev) => {
            if (!this.popoverCtx.popover.node?.matches(":popover-open"))
                return;
            if (isEventTargetInAny(ev, this.popoverCtx.popover.anchor, this.popoverCtx.popover.node)) {
                return;
            }
            this.close();
        };
        const handleEscapeKey = (ev) => {
            const focused = this.popoverCtx.popover.node?.matches(":focus-within") || this.popoverCtx.popover.anchor?.matches(":focus-within");
            if (ev.code !== "Escape" || !focused)
                return;
            ev.preventDefault();
            ev.stopImmediatePropagation();
            this.close();
            this.popoverCtx.popover.anchor?.focus();
        };
        window.addEventListener("click", handleWindowClick);
        window.addEventListener("keydown", handleEscapeKey);
        return () => {
            window.removeEventListener("click", handleWindowClick);
            window.removeEventListener("keydown", handleEscapeKey);
        };
    }
    autoCloseOnSingleSelect() {
        $effect(() => {
            if (this.opts.multiple)
                return;
            this.listboxCtx.selected;
            this.close();
        });
    }
    close() {
        this.popoverCtx.popover.node?.hidePopover();
    }
    open(source) {
        this.popoverCtx.popover.node?.showPopover({ source });
    }
    toggle(source) {
        this.popoverCtx.popover.node?.togglePopover({ source });
    }
    get props() {
        return {
            "data-disabled": this.opts.disabled,
            "data-required": this.opts.required,
            "data-invalid": this.opts.invalid
        };
    }
    get heroui() {
        return {
            variant: this.opts.variant,
            fullWidth: this.opts.fullWidth
        };
    }
}
