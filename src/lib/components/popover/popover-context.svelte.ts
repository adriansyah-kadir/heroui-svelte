import { type PopoverVariants } from "@heroui/styles";
import getValueContextOr from "#lib/utils/value-context.ts";
import { getContextOr } from "#lib/utils/context.ts";
import PopoverState from "#lib/hooks/popover.svelte.ts";

export type PopoverPlacement = "top" | "bottom" | "left" | "right"

export type PopoverProps = PopoverVariants & {
  placement?: PopoverPlacement;
}

export function getPopoverProps(props: () => PopoverProps = () => ({})) {
  return getValueContextOr("popover-props", props)
}

export function getPopoverState() {
  return getContextOr("popover-state", new PopoverState())
}
