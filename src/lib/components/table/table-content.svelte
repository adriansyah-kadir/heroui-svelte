<script lang="ts">
  import { tableVariants } from "@heroui/styles";
  import type { HTMLTableAttributes } from "svelte/elements";

  import TableState from "./index.svelte";

  interface Props extends HTMLTableAttributes {}

  const { children, ...props }: Props = $props();

  const table = TableState.get();
</script>

<table
  {...props}
  class={tableVariants(table.heroui).content({
    class: props.class?.toString(),
  })}
>
  {@render children?.()}
</table>
