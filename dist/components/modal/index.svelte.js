import { DialogState } from "#lib/hooks/index.js";
import { Context } from "#lib/utils/index.js";
export class ModalContext extends Context {
    dialog = new DialogState();
    constructor(opts) {
        super(opts);
    }
    get heroui() {
        return {
            scroll: this.opts.scroll,
            size: this.opts.size,
            variant: this.opts.variant
        };
    }
}
