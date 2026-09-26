<script lang="ts">
  import { tableVariants } from "@heroui/styles";
  import type { HTMLTdAttributes } from "svelte/elements";
  import { getTableProps } from "./table-context.svelte";

  interface Props extends HTMLTdAttributes {}

  const { children, ...props }: Props = $props();

  const { variant } = getTableProps();
</script>

<td
  {...props}
  data-slot="table-cell"
  class={tableVariants().cell({
    variant,
    class: props.class?.toString(),
  })}
>
  {@render children?.()}
</td>
