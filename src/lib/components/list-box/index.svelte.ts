import type { Box } from "#lib/hooks/index.js";
import { Context } from "#lib/utils/index.js";
import { untrack } from "svelte";
import { SvelteSet } from "svelte/reactivity";


export type ListBoxOpts = {
  disabled?: boolean,
  multiple?: boolean;
  required?: boolean;
  name?: string;
  selected: SvelteSet<string>;
}

export class ListBoxContext extends Context<ListBoxOpts> {
  get selected() { return this.opts.selected }
  get multiple() { return this.opts.multiple }

  items = new SvelteSet<string>()

  constructor(opts: Box<ListBoxOpts>) {
    super(opts)

    const multiple = $derived(this.opts.multiple)
    $effect(() => {
      multiple;
      untrack(() => {
        if (multiple) return;
        this.selected.clear();
      })
    })
  }

  itemAdd(val: string) {
    this.items.add(val)
    return () => {
      const s = this.itemSelected(val)
      this.itemUnpick(val)
      if (s) {
        console.log("removing", val, this.itemSelected(val))
      }
      this.items.delete(val)
    }
  }

  itemPick(val: string) {
    if (!this.items.has(val) || this.itemSelected(val)) return;
    if (!this.multiple) this.selected.clear();
    this.selected.add(val)
  }

  itemUnpick(val: string) {
    if (!this.itemSelected(val)) return;
    this.selected.delete(val)
  }

  itemToggle(val: string, toggle?: boolean) {
    const pick = toggle ?? !this.itemSelected(val)
    if (!pick) this.itemUnpick(val);
    else this.itemPick(val);
    return this.itemSelected(val)
  }

  itemsToggle(toggle?: boolean) {
    const pickAll = toggle ?? !this.itemsSelected();
    if (pickAll) this.items.forEach(e => this.itemPick(e));
    else this.selected.clear();
  }

  itemSelected(val: string) {
    return this.selected.has(val)
  }

  itemsSelected() {
    return this.items.keys().every(e => this.itemSelected(e))
  }
}
