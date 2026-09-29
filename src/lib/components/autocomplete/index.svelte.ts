import {
  type ListBoxOpts,
  type PopoverOpts,
  type Box,
  isEventTargetInAny,
  ListBoxContext,
  PopoverState
} from "#lib"
import { onMount } from "svelte"
import type { AutocompleteVariants } from "@heroui/styles"
import { Context } from "#lib/utils/context.js"

export type AutocompleteOpts = ListBoxOpts & AutocompleteVariants & {
  invalid?: boolean
} & PopoverOpts

export class AutocompleteContext extends Context {
  #opts: Box<AutocompleteOpts>
  get opts() { return this.#opts.current }

  popover = new PopoverState()
  listBox: ListBoxContext

  get empty() {
    return this.listBox.opts.selected.length === 0
  }

  clear() {
    this.listBox.selected = []
  }

  constructor(opts: Box<AutocompleteOpts>) {
    super()
    this.listBox = new ListBoxContext(opts)
    this.#opts = opts
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
      this.opts.selected;
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
