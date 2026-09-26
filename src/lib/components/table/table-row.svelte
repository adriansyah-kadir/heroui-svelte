<script lang="ts">
  import { tableVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import { getTableCombobox, getTableProps } from "./table-context.svelte";

  interface Props extends HTMLAttributes<HTMLElement> {
    value?: unknown;
    id?: string;
    disabled?: boolean;
  }

  const {
    id = crypto.randomUUID(),
    value,
    children,
    disabled,
    ...props
  }: Props = $props();

  const { variant, selection } = $derived(getTableProps());
  const combobox = getTableCombobox();

  $effect(() => {
    return combobox.add(id, value);
  });
</script>

<tr
  {...props}
  data-slot="table-row"
  onclick={(ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    props.onclick?.(ev);
    if (disabled || selection === undefined) return;
    combobox.toggle(id);
  }}
  data-selected={combobox.picked(id)}
  data-disabled={disabled}
  class={tableVariants().row({
    variant,
    class: props.class?.toString(),
  })}
>
  {@render children?.()}
</tr>
