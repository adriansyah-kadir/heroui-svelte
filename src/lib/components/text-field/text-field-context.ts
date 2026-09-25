import { type InputVariants, type TextFieldVariants } from "@heroui/styles";
import getValueContextOr from "#lib/utils/value-context.ts";

export type TextFieldProps = TextFieldVariants & {
  disabled?: boolean;
  required?: boolean;
  invalid?: boolean;
  variant?: InputVariants["variant"];
  name?: string;
}

export function getTextFieldProps(props: () => TextFieldProps = () => ({})) {
  return getValueContextOr("text-field-props", props)
}
