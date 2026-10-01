import { getContext, hasContext, setContext } from "svelte";
export class Context {
    #opts;
    get opts() { return this.#opts.current; }
    set opts(value) {
        this.#opts.current = value;
    }
    static get() {
        // @ts-expect-error
        return getContext(this.getKey());
    }
    static getOr(...args) {
        // @ts-expect-error
        const key = this.getKey();
        const opts = args[0];
        if (hasContext(key)) {
            const ctx = getContext(key);
            if (opts) {
                $effect(() => {
                    opts.current = ctx.opts;
                });
            }
            return ctx;
        }
        if (args.length === 0) {
            return undefined;
        }
        return new this(...args);
    }
    static getKey() {
        return Symbol.for(`heroui-svelte:context:${this.name}`);
    }
    constructor(opts) {
        this.#opts = opts;
        setContext(this.constructor.getKey(), this);
    }
}
