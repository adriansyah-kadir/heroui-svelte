import { Context } from "svelte-utils";
export class CardContext extends Context {
    opts;
    constructor(opts) {
        super();
        this.opts = $derived.by(opts);
    }
}
