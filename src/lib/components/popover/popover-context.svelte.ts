import { type PopoverVariants } from "@heroui/styles";
import getValueContextOr from "#lib/utils/value-context.ts";
import PopoverState from "#lib/hooks/popover.svelte.ts";
import { getContext, hasContext, setContext } from "svelte";

export type PopoverPlacement = "top" | "bottom" | "left" | "right"

export type PopoverProps = PopoverVariants & {
  placement?: PopoverPlacement;
}

export function getPopoverProps(props: () => PopoverProps = () => ({})) {
  return getValueContextOr("popover-props", props)
}

export function getPopoverState() {
  if (hasContext("popover-state")) return getContext<PopoverState>("popover-state");
  return setContext("popover-state", new PopoverState())
}
