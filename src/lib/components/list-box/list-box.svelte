<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import {
    getListBoxCombobox,
    getListBoxProps,
  } from "./list-box-context.svelte";
  import { listboxVariants } from "@heroui/styles";

  interface Props extends HTMLAttributes<HTMLDivElement> {
    multiple?: boolean;
    name?: string;
    onvalue?: (values: [string, string][]) => any;
  }

  const { multiple, name, onvalue, ...props }: Props = $props();

  const ctx = getListBoxProps(() => ({ multiple, name }));
  const combobox = getListBoxCombobox(() => ctx.current);

  $effect(() => {
    onvalue?.(combobox.selected);
  });
</script>

<div
  {...props}
  aria-multiselectable={combobox.multiple}
  data-slot="list-box"
  class={listboxVariants({ class: props.class?.toString() })}
>
  {@render props.children?.()}
</div>
