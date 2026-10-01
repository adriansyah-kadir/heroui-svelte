import { Context } from "#lib/utils/index.js";
export default class TableContext extends Context {
    constructor(opts) {
        super(opts);
    }
    get heroui() {
        return {
            variant: this.opts.variant
        };
    }
}
