import type { Attachment } from "svelte/attachments"

type Toggle = (toggle?: boolean) => void

function toggler(dialog: HTMLDialogElement): Toggle {
  return function(this: DialogState, toggle) {
    const show = toggle ?? !this.open
    if (show) dialog.showModal();
    else dialog.close()
  }
}

export class DialogState {
  open = $state(false)
  closed = $derived(!this.open)

  node = $state<HTMLDialogElement>()
  toggle = $derived(this.node ? toggler(this.node) : undefined)
  close = $derived(this.toggle?.bind(this, false))
  show = $derived(this.toggle?.bind(this, true))

  attach(): Attachment {
    return (node) => {
      const dialog = node.closest("dialog")
      if (!dialog) return;
      return this.#setup(dialog)
    }
  }

  #setup(dialog: HTMLDialogElement) {
    this.node = dialog
    dialog.addEventListener("beforetoggle", this.#onToggle)
    return () => {
      this.node = undefined
      dialog.removeEventListener("beforetoggle", this.#onToggle)
    }
  }

  #onToggle = (event: ToggleEvent) => {
    this.open = event.newState === "open"
  }
}
