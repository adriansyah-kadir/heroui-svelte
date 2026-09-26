import { type InputGroupVariants } from "@heroui/styles";
import getValueContextOr from "#lib/utils/value-context.ts";

export type InputGroupProps = InputGroupVariants

export function getInputGroupProps(props: () => InputGroupProps = () => ({})) {
  return getValueContextOr("input-group-props", props)
}
