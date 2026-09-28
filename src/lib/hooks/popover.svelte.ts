import type { Attachment } from "svelte/attachments"
import querySelector from "./query-selector.svelte"
import { untrack } from "svelte"

export default class PopoverState {
  #node = $state<HTMLElement | null>(null)
  get node() { return this.#node }

  #source = $state<HTMLElement | null>(null)
  get source() { return this.#source }

  #open = $state(false)
  get open() { return this.#open }
  get closed() { return !this.#open }

  constructor() {
    $effect(() => {
      const node = this.#node;
      if (!node || node.id !== '') return;
      node.id = crypto.randomUUID()
    })
  }

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
  let query = $state<ReturnType<typeof querySelector>>()

  $effect(() => {
    const s = selector()
    return untrack(() => {
      if (!s) return;
      query = querySelector(s)
      const detach = query.attach()(document)
      return () => {
        detach?.()
        query = undefined
      }
    })
  })

  $effect(() => {
    const node = query?.element
    if (!node) return
    return popover.attach()(node)
  })

  return popover
}
