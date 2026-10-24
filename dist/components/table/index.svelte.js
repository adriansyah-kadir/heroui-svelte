import { Context } from "svelte-utils";
export default class TableContext extends Context {
    opts;
    constructor(opts) {
        super();
        this.opts = $derived.by(opts);
    }
    get heroui() {
        return {
            variant: this.opts.variant
        };
    }
}
