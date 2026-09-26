<script lang="ts">
  import { tableVariants } from "@heroui/styles";
  import type { HTMLThAttributes } from "svelte/elements";
  import { getTableProps } from "./table-context.svelte";

  interface Props extends HTMLThAttributes {}

  const { children, ...props }: Props = $props();

  const { variant } = getTableProps();
</script>

<th
  {...props}
  data-slot="table-column"
  role="columnheader"
  class={tableVariants().column({
    variant,
    class: props.class?.toString(),
  })}
>
  {@render children?.()}
</th>
