import { DialogState } from "#lib/hooks/index.ts";
import { Context } from "#lib/utils/index.ts";
export class ModalContext extends Context {
    #opts;
    get opts() {
        return this.#opts.current;
    }
    dialog = new DialogState();
    constructor(opts) {
        super();
        this.#opts = opts;
    }
    get heroui() {
        return {
            scroll: this.opts.scroll,
            size: this.opts.size,
            variant: this.opts.variant
        };
    }
}
