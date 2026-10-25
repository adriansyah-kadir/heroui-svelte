import { untrack } from "svelte";
import { box, Context } from "svelte-utils";
export class FilterContext extends Context {
    #opts;
    #query;
    get query() { return this.#query.current; }
    set query(value) { this.#query.current = value; }
    #items = $state([]);
    get total() { return this.#items.length; }
    get visible() { return this.#items.filter(this.matches).length; }
    register = (item) => {
        return untrack(() => {
            this.#items.push(item);
            return () => {
                this.#items.splice(this.#items.indexOf(item), 1);
            };
        });
    };
    matches = (text) => {
        const q = this.#opts.caseSensitive ? this.query : this.query.toLowerCase();
        const t = this.#opts.caseSensitive ? text : text.toLowerCase();
        return this.filter(q, t);
    };
    filter = (query, text) => {
        if (this.#opts.filter)
            return this.#opts.filter(query, text);
        return text.includes(query);
    };
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
