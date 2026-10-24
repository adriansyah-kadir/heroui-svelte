import { Context, DialogState } from "svelte-utils";
export class ModalContext extends Context {
    opts;
    dialog = new DialogState();
    constructor(opts) {
        super();
        this.opts = $derived.by(opts);
    }
    get heroui() {
        return {
            scroll: this.opts.scroll,
            size: this.opts.size,
            variant: this.opts.variant
        };
    }
}
