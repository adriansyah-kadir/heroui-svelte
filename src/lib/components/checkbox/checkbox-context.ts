import type { ValueState } from "#lib/hooks/value.svelte.ts"
import { setValueContext } from "#lib/utils/value-context.ts"
import type { CheckboxVariants } from "@heroui/styles"
import { getContext } from "svelte"

export type CheckboxProps = {
  variant?: CheckboxVariants["variant"];
  selected?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  required?: boolean;
  name?: string;
}

export function setCheckboxProps(props: () => CheckboxProps) {
  return setValueContext("checkbox-props", props)
}

export function getCheckboxProps() {
  return getContext<ValueState<CheckboxProps>>("checkbox-props")
}
