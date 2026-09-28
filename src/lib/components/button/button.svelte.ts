import PopoverState, { popoverSelector } from "#lib/hooks/popover.svelte.ts";
import type { ButtonVariants } from "@heroui/styles";
import type { HTMLButtonAttributes } from "svelte/elements";

export type ButtonProps = {
  fullWidth?: ButtonVariants["fullWidth"];
  isIconOnly?: ButtonVariants["isIconOnly"];
  size?: ButtonVariants["size"];
  variant?: ButtonVariants["variant"];
  loading?: boolean;
} & HTMLButtonAttributes

export default class ButtonState {
  #popover: PopoverState

  get props() {
    return {
      "data-pressed": this.#popover.open,
    } satisfies HTMLButtonAttributes
  }

  get heroui() {
    return {
      fullWidth: this.opts.fullWidth,
      isIconOnly: this.opts.isIconOnly,
      size: this.opts.size,
      variant: this.opts.variant,
    } satisfies ButtonVariants
  }

  constructor(public opts: ButtonProps) {
    const isPopover = $derived(
      "popovertarget" in this.opts ||
      this.opts.command?.includes("popover")
    )

    const target = $derived(
      this.opts.commandfor ||
      this.opts.popovertarget
    )

    this.#popover = popoverSelector(() => isPopover ? `#${target}` : null)
  }
}
