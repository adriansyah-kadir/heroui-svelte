import PopoverState from "#lib/hooks/popover.svelte.ts"
import { isEventTargetInAny } from "#lib/utils/dom.ts"
import { getContext, onMount, setContext } from "svelte"
import ListBoxState, { type ListBoxOpts } from "../list-box/list-box.svelte.ts"
import type { AutocompleteVariants } from "@heroui/styles"

export type AutocompleteOpts = ListBoxOpts & AutocompleteVariants & {
  invalid?: boolean
}

export default class AutocompleteState {
  popover = new PopoverState()
  listBox: ListBoxState

  get empty() {
    return !this.listBox.opts.selected?.size
  }

  clear() {
    this.listBox.opts.selected?.clear()
  }

  static ctx() {
    return getContext<AutocompleteState>("autocomplete-state")
  }

  constructor(public opts: AutocompleteOpts) {
    setContext("autocomplete-state", this)
    this.listBox = new ListBoxState(opts)
    onMount(() => {
      this.autoCloseOnSingleSelect()
      return this.autoCloseOnFocusLost()
    })
  }

  autoCloseOnFocusLost() {
    const handleWindowClick = (ev: MouseEvent) => {
      if (isEventTargetInAny(ev, this.popover.source, this.popover.node)) return;
      ev.preventDefault()
      ev.stopPropagation()
      this.close()
    }

    const handleEscapeKey = (ev: KeyboardEvent) => {
      if (ev.code !== "Escape") return;
      ev.preventDefault()
      ev.stopPropagation()
      this.close()
    }

    window.addEventListener("click", handleWindowClick)
    window.addEventListener("keyup", handleEscapeKey)
    return () => {
      window.removeEventListener("click", handleWindowClick)
      window.removeEventListener("keyup", handleEscapeKey)
    }
  }

  autoCloseOnSingleSelect() {
    $effect(() => {
      if (this.opts.multiple) return;
      this.opts.selected.size;
      this.close()
    })
  }

  close() {
    this.popover.node?.hidePopover()
  }

  open(source?: HTMLElement) {
    this.popover.node?.showPopover({ source })
  }

  toggle(source?: HTMLElement) {
    this.popover.node?.togglePopover({ source })
  }

  get props() {
    return {
      "data-disabled": this.opts.disabled,
      "data-required": this.opts.required,
      "data-invalid": this.opts.invalid
    }
  }

  get heroui() {
    return {
      variant: this.opts.variant,
      fullWidth: this.opts.fullWidth
    }
  }
}
