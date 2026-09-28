import type { Box } from "#lib/hooks/boxed.svelte.ts"
import PopoverState, { getPopoverArea } from "#lib/hooks/popover.svelte.ts"
import Context from "#lib/utils/context.ts"

export type PopoverOpts = {
  placement: "bottom" | "top" | "left" | "right",
  offset: number
}

export default class PopoverContext extends Context {
  #opts: Box<PopoverOpts>
  get opts() { return this.#opts.current }

  popover = new PopoverState()
  area = getPopoverArea(this.popover);

  constructor(opts: Box<PopoverOpts>) {
    super()
    this.#opts = opts
  }

  get props() {
    return {
      "data-entering": this.popover.open,
      "data-exiting": this.popover.closed,
      "data-placement": this.area.current ?? this.opts.placement
    }
  }

  get fallbackArea() {
    return {
      top: "bottom, right, left",
      bottom: "top, right, left",
      left: "right, left, bottom, top",
      right: "left, right, bottom, top",
    }[this.opts.placement]
  }

  get anchorPoint() {
    return {
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left",
    }[this.area.current ?? this.opts.placement]
  }

  get marginOffset() {
    const offset = this.opts.offset
    return {
      top: `${offset}px 0`,
      bottom: `${offset}px 0`,
      left: `0 ${offset}px`,
      right: `0 ${offset}px`,
    }[this.area.current ?? this.opts.placement]
  }
}
