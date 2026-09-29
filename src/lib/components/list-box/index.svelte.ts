import type { Box } from "#lib/hooks/index.ts";
import { Context } from "#lib/utils/index.ts";
import { untrack } from "svelte";
import { SvelteMap } from "svelte/reactivity";

type Selected = { key: string, val: string }[]

export type ListBoxOpts = {
  disabled?: boolean,
  multiple?: boolean;
  required?: boolean;
  name?: string;
  selected: Selected;
}

export class ListBoxContext extends Context {
  #opts: Box<ListBoxOpts>
  get opts() {
    return this.#opts.current
  }

  items = new SvelteMap<string, string>()

  constructor(opts: Box<ListBoxOpts>) {
    super()
    this.#opts = opts

    const multiple = $derived(this.opts.multiple)
    $effect(() => {
      multiple;
      untrack(() => {
        if (multiple) return;
        this.selected = [];
      })
    })
  }

  get selected() {
    return this.opts.selected
  }

  set selected(selected: Selected) {
    this.#opts.current = {
      ...this.opts,
      selected
    }
  }

  itemAdd(key: string, val: string) {
    this.items.set(key, val)
    return () => {
      this.itemUnpick(key)
      this.items.delete(key)
    }
  }

  itemPick(key: string) {
    const val = this.items.get(key)
    if (val === undefined) return;
    if (!this.opts.multiple) this.opts.selected = [];
    this.selected = [...this.selected, { key, val }]
  }

  itemUnpick(key: string) {
    const i = this.selected.findIndex(e => e.key === key)
    this.selected = this.selected.toSpliced(i, 1)
  }

  itemToggle(key: string, toggle?: boolean) {
    const pick = toggle ?? !this.itemSelected(key)
    if (!pick) this.itemUnpick(key);
    else this.itemPick(key);
    return this.itemSelected(key)
  }

  itemsToggle(toggle?: boolean) {
    const pickAll = toggle ?? !this.itemsSelected()
    if (!pickAll) this.selected = [];
    else this.items.keys().forEach(this.itemPick)
  }

  itemSelected(key: string) {
    return this.selected.some(e => e.key === key)
  }

  itemsSelected() {
    return this.items.keys().every(e => this.itemSelected(e))
  }
}
