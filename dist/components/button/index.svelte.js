import { Context } from "./utils/index.js";
export class ButtonContext extends Context {
    opts;
    constructor(opts) {
        super();
        this.opts = opts.current;
    }
    get props() {
        return {
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
