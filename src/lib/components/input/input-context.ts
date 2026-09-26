import { type InputVariants } from "@heroui/styles";
import getValueContextOr, { setValueContext } from "#lib/utils/value-context.ts";
import { getContextOr } from "#lib/utils/context.ts";
import InputState from "#lib/hooks/input.svelte.ts";

export type InputProps = InputVariants & {
  disabled?: boolean;
  required?: boolean;
  invalid?: boolean;
  name?: string;
}

export function getInputProps(props: () => InputProps = () => ({})) {
  return getValueContextOr("input-props", props)
}

export function setInputProps(props: () => InputProps = () => ({})) {
  return setValueContext("input-props", props)
}

export function getInputState() {
  return getContextOr("input-state", new InputState())
}
