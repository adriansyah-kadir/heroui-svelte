import {
  type ListBoxOpts,
  type PopoverOpts,
  type Box,
  isEventTargetInAny,
  ListBoxContext,
  PopoverState,
} from "#lib"
import { onMount } from "svelte"
import type { AutocompleteVariants } from "@heroui/styles"
import { Context } from "#lib/utils/context.svelte.js"

export type AutocompleteOpts = ListBoxOpts & AutocompleteVariants & {
  invalid?: boolean
} & PopoverOpts

export class AutocompleteContext extends Context<AutocompleteOpts> {
  popover = new PopoverState()
  listBox: ListBoxContext

  get empty() {
    return this.listBox.opts.selected.size === 0
  }

  clear() {
    this.listBox.selected.clear()
  }

  constructor(opts: Box<AutocompleteOpts>) {
    super(opts)
    this.listBox = new ListBoxContext(opts)
    onMount(() => {
      this.autoCloseOnSingleSelect()
      return this.autoCloseOnFocusLost()
    })
  }

  autoCloseOnFocusLost() {
    const handleWindowClick = (ev: MouseEvent) => {
      if (!this.popover.node?.matches(":popover-open")) return;

      if (isEventTargetInAny(ev, this.popover.source, this.popover.node)) {
        return;
      }

      this.close();
    };

    const handleEscapeKey = (ev: KeyboardEvent) => {
      const focused = this.popover.node?.matches(":focus-within") || this.popover.source?.matches(":focus-within")
      if (ev.code !== "Escape" || !focused) return;
      ev.preventDefault()
      ev.stopImmediatePropagation()
      this.close()
      this.popover.source?.focus()
    }

    window.addEventListener("click", handleWindowClick)
    window.addEventListener("keydown", handleEscapeKey)
    return () => {
      window.removeEventListener("click", handleWindowClick)
      window.removeEventListener("keydown", handleEscapeKey)
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
