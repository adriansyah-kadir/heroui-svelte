import { Context } from "#lib/utils/index.js";
import { untrack } from "svelte";
import { SvelteMap } from "svelte/reactivity";
export class ListBoxContext extends Context {
    #opts;
    get opts() {
        return this.#opts.current;
    }
    items = new SvelteMap();
    constructor(opts) {
        super();
        this.#opts = opts;
        const multiple = $derived(this.opts.multiple);
        $effect(() => {
            multiple;
            untrack(() => {
                if (multiple)
                    return;
                this.selected = [];
            });
        });
    }
    get selected() {
        return this.opts.selected;
    }
    set selected(selected) {
        this.#opts.current = {
            ...this.opts,
            selected
        };
    }
    itemAdd(key, val) {
        this.items.set(key, val);
        return () => {
            this.itemUnpick(key);
            this.items.delete(key);
        };
    }
    itemPick(key) {
        const val = this.items.get(key);
        if (val === undefined)
            return;
        if (!this.opts.multiple)
            this.opts.selected = [];
        this.selected = [...this.selected, { key, val }];
    }
    itemUnpick(key) {
        const i = this.selected.findIndex(e => e.key === key);
        this.selected = this.selected.toSpliced(i, 1);
    }
    itemToggle(key, toggle) {
        const pick = toggle ?? !this.itemSelected(key);
        if (!pick)
            this.itemUnpick(key);
        else
            this.itemPick(key);
        return this.itemSelected(key);
    }
    itemsToggle(toggle) {
        const pickAll = toggle ?? !this.itemsSelected();
        if (!pickAll)
            this.selected = [];
        else
            this.items.keys().forEach(this.itemPick);
    }
    itemSelected(key) {
        return this.selected.some(e => e.key === key);
    }
    itemsSelected() {
        return this.items.keys().every(e => this.itemSelected(e));
    }
}
