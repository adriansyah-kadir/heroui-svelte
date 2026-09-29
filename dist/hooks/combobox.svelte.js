import { SvelteMap, SvelteSet } from "svelte/reactivity";
export default class ComboboxState {
    #items;
    #picks = new SvelteSet();
    multiple;
    constructor(props) {
        this.multiple = props?.multiple ?? false;
        this.#items = new SvelteMap(props?.initial ?? []);
    }
    get items() { return this.#items.entries().toArray(); }
    get selected() { return this.items.filter(([k]) => this.picked(k)); }
    get unselected() { return this.items.filter(([k]) => !this.picked(k)); }
    clearSelected() {
        this.#picks.clear();
    }
    add(key, value) {
        this.#items.set(key, value);
        return () => this.del(key);
    }
    del(key) {
        this.#items.delete(key);
        this.#picks.delete(key);
    }
    picked(key) {
        return this.#picks.has(key);
    }
    get pickedall() {
        for (const key of this.#items.keys()) {
            if (!this.picked(key))
                return false;
        }
        return this.#picks.size > 0;
    }
    pick = (key) => {
        if (this.picked(key) || !this.#items.has(key))
            return false;
        if (!this.multiple && this.#picks.size > 0) {
            this.#picks.clear();
        }
        ;
        this.#picks.add(key);
        return true;
    };
    unpick = (key) => {
        return this.#picks.delete(key);
    };
    toggle = (key, toggle) => {
        const unpick = this.picked(key) || toggle === false;
        if (unpick)
            this.unpick(key);
        else
            this.pick(key);
        return this.picked(key);
    };
    toggleall = (toggle) => {
        const clear = this.pickedall || toggle === false;
        if (clear)
            this.#picks.clear();
        else
            this.#items.keys().forEach(k => this.#picks.add(k));
    };
}
