import { getContext, hasContext, setContext, untrack } from "svelte";
import { SvelteMap, SvelteSet } from "svelte/reactivity";

export type ListBoxOpts = {
  disabled?: boolean,
  multiple?: boolean;
  required?: boolean;
  name?: string;
  selected: SvelteSet<string>;
}

export default class ListBoxState {
  items = new SvelteMap<string, string>()

  static getOr(opts: ListBoxOpts) {
    if (hasContext("list-box-state")) return ListBoxState.get();
    return new ListBoxState(opts)
  }

  static get() {
    return getContext<ListBoxState>("list-box-state")
  }

  constructor(public opts: ListBoxOpts) {
    setContext("list-box-state", this)

    $effect(() => {
      const multiple = opts.multiple
      untrack(() => {
        if (!multiple) opts.selected.clear();
      })
    })
  }

  itemAdd(key: string, val: string) {
    this.items.set(key, val)
    return () => this.items.delete(key)
  }

  itemPick(key: string) {
    if (!this.items.has(key)) return;
    if (!this.opts.multiple) this.opts.selected?.clear();
    this.opts.selected.add(key)
  }

  itemUnpick(key: string) {
    this.opts.selected.delete(key)
  }

  itemToggle(key: string, toggle?: boolean) {
    const pick = toggle ?? !this.itemSelected(key)
    if (!pick) this.itemUnpick(key);
    else this.itemPick(key);
  }

  itemsToggle(toggle?: boolean) {
    const pickAll = toggle ?? !this.itemsSelected()
    if (!pickAll) this.opts.selected.clear();
    else this.items.keys().forEach(this.itemPick)
  }

  itemSelected(key: string) {
    return this.opts.selected.has(key)
  }

  itemsSelected() {
    return this.items.keys().every(e => this.itemSelected(e))
  }
}
