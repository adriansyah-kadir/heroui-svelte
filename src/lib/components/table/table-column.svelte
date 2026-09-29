<script lang="ts">
  import { tableVariants } from "@heroui/styles";
  import type { HTMLThAttributes } from "svelte/elements";
  import TableState from "./table.svelte.ts";

  interface Props extends HTMLThAttributes {}

  const { children, ...props }: Props = $props();

  const table = TableState.get();
</script>

<th
  {...props}
  data-slot="table-column"
  role="columnheader"
  class={tableVariants(table.heroui).column({
    class: props.class?.toString(),
  })}
>
  {@render children?.()}
</th>
