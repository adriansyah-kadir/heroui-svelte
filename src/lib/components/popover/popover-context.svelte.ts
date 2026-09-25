import { type PopoverVariants } from "@heroui/styles";
import getValueContextOr from "#lib/utils/value-context.ts";

export type PopoverPlacement = "top" | "bottom" | "left" | "right"

export type PopoverProps = PopoverVariants & {
  placement?: PopoverPlacement;
}

export function getPopoverProps(props: () => PopoverProps = () => ({})) {
  return getValueContextOr("popover-props", props)
}
