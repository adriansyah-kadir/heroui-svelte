import { box, boxArray, Context, type Box, type Getter } from "svelte-utils";


export type ListBoxOpts = {
  disabled?: boolean,
  multiple?: boolean;
  required?: boolean;
  name?: string;
}

export class ListBoxContext extends Context {
  #opts: ListBoxOpts
  get opts() { return this.#opts }

  #selected: Box<string[]>
  get selected() { return boxArray(this.#selected) }
  set selected(values: string[]) { this.#selected.current = values }

  get noSelected() { return this.selected.length === 0 }

  isSelected(value: string) {
    return this.#selected.current.some(e => e === value)
  }

  setSelected(value: string, checked: boolean) {
    if (this.isSelected(value) === checked) return;
    if (checked) this.#selected.current = this.opts.multiple ? [...this.#selected.current, value] : [value];
    else this.#selected.current = this.#selected.current.toSpliced(this.#selected.current.indexOf(value), 1)
  }

  constructor(opts: Getter<ListBoxOpts>, selected: Box<string[]> = box([])) {
    super()
    this.#opts = $derived.by(opts)
    this.#selected = selected
  }
}
