import getValueContextOr from "#lib/utils/value-context.ts";
import ComboboxState from "#lib/hooks/combobox.svelte.ts";

export type ListBoxProps = {
  multiple?: boolean;
}

export function getListBoxProps(props: () => ListBoxProps = () => ({})) {
  return getValueContextOr("list-box-props", props)
}

export function getListBoxCombobox(props: () => ListBoxProps = () => ({})) {
  const multiple = $derived(props().multiple)
  return getValueContextOr("list-box-combobox", () => new ComboboxState(multiple))
}
