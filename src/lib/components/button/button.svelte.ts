import boxedDerived, { type Box } from "#lib/hooks/boxed.svelte.ts";
import PopoverState, { popoverSelector } from "#lib/hooks/popover.svelte.ts";
import { omit, pick } from "#lib/utils/object.svelte.ts";
import type { ButtonVariants } from "@heroui/styles";
import type { HTMLButtonAttributes } from "svelte/elements";

const HEROUI_PROPS =
  [
    "fullWidth",
    "isIconOnly",
    "size",
    "variant",
  ] as const

const STATE_PROPS = [
  "loading"
] as const

export type ButtonProps = {
  fullWidth?: ButtonVariants["fullWidth"];
  isIconOnly?: ButtonVariants["isIconOnly"];
  size?: ButtonVariants["size"];
  variant?: ButtonVariants["variant"];
  loading?: boolean;
} & HTMLButtonAttributes

export default class ButtonState {
  #popover: PopoverState

  #props: Box<ButtonProps>
  get props() {
    return {
      ...omit(this.#props.current, [...HEROUI_PROPS, ...STATE_PROPS]),
      "data-pressed": this.#popover.open,
    } satisfies HTMLButtonAttributes
  }

  heroui: Pick<ButtonProps, (typeof HEROUI_PROPS)[number]>
  states: Pick<ButtonProps, (typeof STATE_PROPS)[number]>

  constructor(props: Box<ButtonProps>) {
    this.#props = props
    this.heroui = boxedDerived(() => pick(this.#props.current, HEROUI_PROPS))
    this.states = boxedDerived(() => pick(this.#props.current, STATE_PROPS))

    const isPopover = $derived(
      "popovertarget" in this.#props ||
      this.#props.current.command?.includes("popover")
    )

    const target = $derived(
      this.#props.current.commandfor ||
      this.#props.current.popovertarget
    )

    this.#popover = popoverSelector(() => isPopover ? `#${target}` : null)
  }
}
