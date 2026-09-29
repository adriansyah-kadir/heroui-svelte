import { getContext, hasContext, setContext } from "svelte";
export class Context {
    static get() {
        return getContext(this.getKey());
    }
    static getOr(...args) {
        const key = this.getKey();
        if (hasContext(key)) {
            return getContext(key);
        }
        if (args.length === 0) {
            return undefined;
        }
        return new this(...args);
    }
    static getKey() {
        return Symbol.for(`heroui-svelte:context:${this.name}`);
    }
    constructor() {
        setContext(this.constructor.getKey(), this);
    }
}
