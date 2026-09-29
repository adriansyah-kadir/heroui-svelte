import { getContext, hasContext, setContext } from "svelte";
export class Context {
    static get() {
        return getContext(this);
    }
    static getOr(...args) {
        if (hasContext(this)) {
            return getContext(this);
        }
        if (args.length === 0) {
            return undefined;
        }
        return new this(...args);
    }
    constructor() {
        setContext(this.constructor, this);
    }
}
