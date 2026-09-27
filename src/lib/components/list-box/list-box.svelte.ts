import { boxDerivedObj } from "#lib/hooks/boxed.svelte.ts";
import ComboboxState from "#lib/hooks/combobox.svelte.ts";
import { getContext, hasContext, setContext, untrack } from "svelte";

export type ListBoxOpts = {
  disabled?: boolean,
  multiple?: boolean;
  name?: string;
  selected?: [string, string][]
}

export default class ListBoxState {
  combobox: ComboboxState<string>

  static getOrCreate(opts: ListBoxOpts) {
    if (hasContext("list-box-state")) return ListBoxState.get()
    return new ListBoxState(opts)
  }

  static get() {
    return getContext<ListBoxState>("list-box-state")
  }

  constructor(public opts: ListBoxOpts) {
    setContext("list-box-state", this)

    const multiple = $derived(opts.multiple)
    this.combobox = boxDerivedObj(() => new ComboboxState<string>(multiple))

    $effect(() => {
      const selected = this.combobox.selected
      untrack(() => {
        opts.selected = selected
      })
    })
  }
}
