import type { Attachment } from "svelte/attachments"
import querySelector from "./query-selector.svelte"

export default class PopoverState {
  #node = $state<HTMLElement | null>(null)
  get node() { return this.#node }

  #source = $state<HTMLElement | null>(null)
  get source() { return this.#source }

  #open = $state(false)
  get open() { return this.#open }
  get closed() { return !this.#open }

  attach(): Attachment<HTMLElement> {
    return node => {
      const popover = node.closest("*[popover]") as HTMLElement | null
      if (!popover) return

      this.#node = popover
      popover.addEventListener("beforetoggle", this.#onToggle)
      return () => {
        this.#node = null
        popover.removeEventListener("beforetoggle", this.#onToggle)
      }
    }
  }

  #onToggle = (ev: ToggleEvent) => {
    this.#source = ev.source as HTMLElement | null
    this.#open = ev.newState === "open"
  }
}

export function getPopoverArea(popover: PopoverState) {
  let area = $state<string>()
  let frame = 0

  function update(node: HTMLElement) {
    if (!popover.open) {
      cancelAnimationFrame(frame)
      return
    };

    area = getComputedStyle(node).positionArea
    requestAnimationFrame(update.bind(null, node))
  }

  $effect(() => {
    const node = popover.node
    const open = popover.open
    if (!node || !open) { return };
    frame = requestAnimationFrame(update.bind(null, node))
  })

  return {
    get current() { return area }
  }
}

export function popoverSelector(selector: () => string | undefined | null) {
  const popover = new PopoverState()
  const query = querySelector<HTMLElement>(`#${selector()}`)

  $effect(() => {
    if (typeof selector() !== "string") return;
    query.attach()(document)
  })

  $effect(() => {
    const node = query.element
    if (!node) return
    return popover.attach()(node)
  })

  return popover
}
