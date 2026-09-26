<script lang="ts">
  import { tableVariants } from "@heroui/styles";
  import type { HTMLTableAttributes } from "svelte/elements";
  import { getTableProps } from "./table-context.svelte";

  interface Props extends HTMLTableAttributes {}

  const { children, ...props }: Props = $props();

  const { variant } = getTableProps();
</script>

<table
  {...props}
  class={tableVariants().content({
    variant,
    class: props.class?.toString(),
  })}
>
  {@render children?.()}
</table>
