import type { ValueState } from "#lib/hooks/value.svelte.ts";
import valueState from "#lib/hooks/value.svelte.ts";
import { setValueContext } from "#lib/utils/value-context.ts";
import type { TableVariants } from "@heroui/styles";
import { getContext, setContext } from "svelte";
import ComboboxState from "#lib/hooks/combobox.svelte.ts"

export type TableProps = {
  variant?: TableVariants["variant"],
  selection?: "single" | "multiple"
}


export function setTableProps(props: () => TableProps) {
  return setValueContext("table-props", props)
}

export function getTableProps() {
  return getContext<ValueState<TableProps>>("table-props")
}

export function setTableCombobox(props: () => TableProps) {
  const multiple = $derived(props().selection === "multiple")
  return setContext("table-combobox", valueState(() => new ComboboxState(multiple)))
}

export function getTableCombobox() {
  return getContext<ValueState<ComboboxState<unknown>>>("table-combobox")
}
