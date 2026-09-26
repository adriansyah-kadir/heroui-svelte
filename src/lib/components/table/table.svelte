<script lang="ts">
  import { tableVariants, type TableVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import { setTableProps, setTableCombobox } from "./table-context.svelte";

  interface Props extends HTMLAttributes<HTMLDivElement> {
    variant?: TableVariants["variant"];
    selection?: "single" | "multiple";
    onselected?: (values: [string, unknown][]) => any;
  }

  const { children, variant, selection, onselected, ...props }: Props =
    $props();

  const ctx = setTableProps(() => ({ variant, selection }));
  const combobox = setTableCombobox(() => ctx.current);

  $effect(() => {
    onselected?.(combobox.selected);
  });
</script>

<div
  {...props}
  data-empty={combobox.items.length === 0}
  class={tableVariants().base({ variant, class: props.class?.toString() })}
>
  {@render children?.()}
</div>
