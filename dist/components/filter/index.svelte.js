import { untrack } from "svelte";
import { box, Context } from "svelte-utils";
export class FilterContext extends Context {
    #opts;
    #query;
    get query() { return this.#query.current; }
    set query(value) { this.#query.current = value; }
    matches(text) {
        const q = this.#opts.caseSensitive ? this.query : this.query.toLowerCase();
        const t = this.#opts.caseSensitive ? text : text.toLowerCase();
        return this.filter(q, t);
    }
    filter(query, text) {
        if (this.#opts.filter)
            return this.#opts.filter(query, text);
        return text.includes(query);
    }
    constructor(opts, query = box("")) {
        super();
        this.#opts = $derived.by(opts);
        this.#query = query;
    }
    sync(box) {
        $effect(() => {
            box.current;
            untrack(() => {
                if (box.current === this.query)
                    return;
                this.query = box.current;
            });
        });
        $effect(() => {
            this.query;
            untrack(() => {
                if (box.current === this.query)
                    return;
                box.current = this.query;
            });
        });
    }
}
