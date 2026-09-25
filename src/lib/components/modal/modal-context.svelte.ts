import { type ModalVariants } from "@heroui/styles";
import getValueContextOr from "#lib/utils/value-context.ts";

export type ModalProps = ModalVariants & {
  placement?: "top" | "bottom" | "center" | "auto";
}

export function getModalProps(props: () => ModalProps = () => ({})) {
  return getValueContextOr("modal-props", props)
}
