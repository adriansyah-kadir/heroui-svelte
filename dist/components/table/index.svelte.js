import { Context } from "#lib";
export default class TableContext extends Context {
    #opts;
    get opts() { return this.#opts.current; }
    constructor(opts) {
        super();
        this.#opts = opts;
    }
    get heroui() {
        return {
            variant: this.opts.variant
        };
    }
}
