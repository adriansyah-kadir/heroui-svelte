import type { AutocompleteVariants } from "@heroui/styles"
import { Context, type Box, type Getter, isEventTargetInAny, watch } from "svelte-utils"
import { ListBoxContext, PopoverContext, type ListBoxOpts, type PopoverContextOpts } from "#lib"

export type AutocompleteOpts = ListBoxOpts & AutocompleteVariants & PopoverContextOpts & {
  invalid?: boolean
}

export class AutocompleteContext extends Context {
  opts: AutocompleteOpts
  popoverCtx: PopoverContext
  listboxCtx: ListBoxContext

  constructor(opts: Getter<AutocompleteOpts>, selected: Box<string[]>) {
    super()
    this.opts = $derived.by(opts)
    this.popoverCtx = new PopoverContext(opts)
    this.listboxCtx = new ListBoxContext(opts, selected)
    this.autoCloseOnFocusLost()
    this.autoCloseOnSingleSelect()
  }

  autoCloseOnFocusLost() {
    const handleWindowClick = (ev: MouseEvent) => {
      if (!this.popoverCtx.popover.node?.matches(":popover-open")) return;

      if (isEventTargetInAny(ev, this.popoverCtx.popover.anchor, this.popoverCtx.popover.node)) {
        return;
      }

      this.close();
    };

    const handleEscapeKey = (ev: KeyboardEvent) => {
      const focused = this.popoverCtx.popover.node?.matches(":focus-within") || this.popoverCtx.popover.anchor?.matches(":focus-within")
      if (ev.code !== "Escape" || !focused) return;
      ev.preventDefault()
      ev.stopImmediatePropagation()
      this.close()
      this.popoverCtx.popover.anchor?.focus()
    }

    window.addEventListener("click", handleWindowClick)
    window.addEventListener("keydown", handleEscapeKey)
    return () => {
      window.removeEventListener("click", handleWindowClick)
      window.removeEventListener("keydown", handleEscapeKey)
    }
  }

  autoCloseOnSingleSelect() {
    watch(() => this.listboxCtx.selected, () => {
      if (this.opts.multiple) return;
      this.close()
    })
  }

  close() {
    this.popoverCtx.popover.hide()
  }

  open(source?: HTMLElement) {
    this.popoverCtx.popover.node?.showPopover({ source })
  }

  toggle(source?: HTMLElement) {
    this.popoverCtx.popover.node?.togglePopover({ source })
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
