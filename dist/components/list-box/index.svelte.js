import { box, boxArray, Context } from "svelte-utils";
export class ListBoxContext extends Context {
    #opts;
    get opts() { return this.#opts; }
    #selected;
    get selected() { return boxArray(this.#selected); }
    set selected(values) { this.#selected.current = values; }
    get noSelected() { return this.selected.length === 0; }
    isSelected(value) {
        return this.#selected.current.some(e => e === value);
    }
    setSelected(value, checked) {
        if (this.isSelected(value) === checked)
            return;
        if (checked)
            this.#selected.current = this.opts.multiple ? [...this.#selected.current, value] : [value];
        else
            this.#selected.current = this.#selected.current.toSpliced(this.#selected.current.indexOf(value), 1);
    }
    constructor(opts, selected = box([])) {
        super();
        this.#opts = $derived.by(opts);
        this.#selected = selected;
    }
}
