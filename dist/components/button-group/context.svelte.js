import { Context } from "svelte-utils";
export class ButtonGroupContext extends Context {
    opts;
    constructor(opts) {
        super();
        this.opts = $derived.by(opts);
    }
}
