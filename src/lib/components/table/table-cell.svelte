<script lang="ts">
  import { tableVariants } from "@heroui/styles";
  import type { HTMLTdAttributes } from "svelte/elements";
  import TableState from "./table.svelte.ts";

  type Props = HTMLTdAttributes;

  const { children, ...props }: Props = $props();

  const table = TableState.get();
</script>

<td
  {...props}
  data-slot="table-cell"
  class={tableVariants(table.heroui).cell({
    class: props.class?.toString(),
  })}
>
  {@render children?.()}
</td>
