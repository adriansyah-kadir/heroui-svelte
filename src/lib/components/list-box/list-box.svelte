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
  }

  const { multiple, name, ...props }: Props = $props();

  const ctx = getListBoxProps(() => ({ multiple, name }));
  getListBoxCombobox(() => ctx.current);
</script>

<div
  {...props}
  data-slot="list-box"
  class={listboxVariants({ class: props.class?.toString() })}
>
  {@render props.children?.()}
</div>
