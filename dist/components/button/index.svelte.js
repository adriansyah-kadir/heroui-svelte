import { Context } from "#lib/utils/index.js";
export class ButtonContext extends Context {
    constructor(opts) {
        super(opts);
        this.opts = opts.current;
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
