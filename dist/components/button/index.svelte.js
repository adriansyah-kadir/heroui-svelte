import { coalesce, Context } from "svelte-utils";
import { ButtonGroupContext } from "../button-group/context.svelte";
export class ButtonContext extends Context {
    opts;
    constructor(opts) {
        super();
        const group = ButtonGroupContext.getOr();
        this.opts = $derived.by(() => coalesce(group?.opts, opts()));
    }
    get props() {
        return {
            "data-disabled": this.opts.disabled,
            "data-focused": this.opts.focused,
            "data-pressed": this.opts.pressed,
            "data-focus-visible": this.opts.focused,
            "data-hovered": this.opts.hovered,
            ...(this.opts.pending ? { "data-pending": true } : {})
        };
    }
    get heroui() {
        return {
            fullWidth: this.opts.fullWidth,
            isIconOnly: this.opts.isIconOnly,
            size: this.opts.size,
            variant: this.opts.variant
        };
    }
}
