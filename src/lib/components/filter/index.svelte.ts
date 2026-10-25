import { untrack } from "svelte";
import { box, Context, type Box, type Fn, type Getter } from "svelte-utils";

export type FilterOpts = {
  caseSensitive?: boolean;
  filter?: Fn<boolean, [string, string]>
}

export class FilterContext extends Context {
  #opts: FilterOpts

  #query: Box<string>
  get query() { return this.#query.current }
  set query(value: string) { this.#query.current = value }

  #items = $state<string[]>([])
  get total() { return this.#items.length }
  get visible() { return this.#items.filter(this.matches).length }

  register = (item: string) => {
    return untrack(() => {
      this.#items.push(item)
      return () => {
        this.#items.splice(this.#items.indexOf(item), 1)
      }
    })
  }

  matches = (text: string) => {
    const q = this.#opts.caseSensitive ? this.query : this.query.toLowerCase()
    const t = this.#opts.caseSensitive ? text : text.toLowerCase()
    return this.filter(q, t)
  }

  filter = (query: string, text: string): boolean => {
    if (this.#opts.filter) return this.#opts.filter(query, text);
    return text.includes(query)
  }

  constructor(opts: Getter<FilterOpts>, query = box("")) {
    super()
    this.#opts = $derived.by(opts)
    this.#query = query
  }

  sync(box: Box<string>) {
    $effect(() => {
      box.current
      untrack(() => {
        if (box.current === this.query) return;
        this.query = box.current
      })
    })
    $effect(() => {
      this.query
      untrack(() => {
        if (box.current === this.query) return;
        box.current = this.query
      })
    })
  }
}
