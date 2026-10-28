import { box, Context, type Box, type Getter } from "@adriansyah/svelte-utils";
import { FilterContext } from "../filter";
import { onDestroy } from "svelte";
import type { HTMLAttributes } from "svelte/elements";


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
  get selected() { return box.array(this.#selected) }
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

export type ListBoxItemOpts = {
  value: string,
  disabled?: boolean,
}

export class ListBoxItemContext extends Context {
  readonly listbox: ListBoxContext
  readonly opts: ListBoxItemOpts
  readonly filter?: FilterContext

  #selected: Box<boolean>
  get selected() { return this.#selected.current }
  set selected(value) { this.#selected.current = value }

  get value() { return this.opts.value }

  constructor(opts: Getter<ListBoxItemOpts>, selected = box(false)) {
    super()
    this.listbox = ListBoxContext.get()
    this.filter = FilterContext.getOr()
    this.opts = $derived.by(opts)
    this.#selected = selected

    $effect(() => this.filter?.register(this.value))

    onDestroy(() => {
      this.listbox.setSelected(this.value, false)
    })

    box.link(box(
      () => this.listbox.isSelected(this.value),
      v => this.listbox.setSelected(this.value, v)
    ), selected)
  }

  toggle = () => {
    this.selected = !this.selected
  }

  get visible() {
    return this.filter === undefined || this.filter.matches(this.value)
  }

  get disabled() {
    return this.opts.disabled || this.listbox.opts.disabled
  }

  props = (props?: HTMLAttributes<HTMLDivElement>): HTMLAttributes<HTMLDivElement> => {
    return {
      onkeydown: ev => {
        this.#onKeyDown(ev)
        props?.onkeydown?.(ev)
      },
      onclick: ev => {
        this.toggle()
        props?.onclick?.(ev)
      },
      "data-disabled": this.disabled,
      "aria-disabled": this.disabled,
      tabindex: 0,
      role: "checkbox"
    }
  }

  #onKeyDown(ev: KeyboardEvent) {
    if (
      ev.code === "Space" ||
      (ev.code === "Enter" && ev.target === ev.currentTarget)
    ) {
      this.toggle();
    }
  }
}
