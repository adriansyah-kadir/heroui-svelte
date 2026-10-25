import { Context } from "svelte-utils";
export class AvatarContext extends Context {
    opts;
    constructor(opts) {
        super();
        this.opts = $derived.by(opts);
    }
}
