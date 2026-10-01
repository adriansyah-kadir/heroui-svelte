import { isEventTargetInAny, ListBoxContext, PopoverState, } from "#lib";
import { onMount } from "svelte";
import { Context } from "#lib/utils/context.svelte.js";
export class AutocompleteContext extends Context {
    popover = new PopoverState();
    listBox;
    get empty() {
        return this.listBox.opts.selected.length === 0;
    }
    clear() {
        this.listBox.selected = [];
    }
    constructor(opts) {
        super(opts);
        this.listBox = new ListBoxContext(opts);
        onMount(() => {
            this.autoCloseOnSingleSelect();
            return this.autoCloseOnFocusLost();
        });
    }
    autoCloseOnFocusLost() {
        const handleWindowClick = (ev) => {
            if (!this.popover.node?.matches(":popover-open"))
                return;
            if (isEventTargetInAny(ev, this.popover.source, this.popover.node)) {
                return;
            }
            this.close();
        };
        const handleEscapeKey = (ev) => {
            if (ev.code !== "Escape")
                return;
            ev.preventDefault();
            ev.stopPropagation();
            this.close();
        };
        window.addEventListener("click", handleWindowClick);
        window.addEventListener("keyup", handleEscapeKey);
        return () => {
            window.removeEventListener("click", handleWindowClick);
            window.removeEventListener("keyup", handleEscapeKey);
        };
    }
    autoCloseOnSingleSelect() {
        $effect(() => {
            if (this.opts.multiple)
                return;
            this.opts.selected;
            this.close();
        });
    }
    close() {
        this.popover.node?.hidePopover();
    }
    open(source) {
        this.popover.node?.showPopover({ source });
    }
    toggle(source) {
        this.popover.node?.togglePopover({ source });
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
