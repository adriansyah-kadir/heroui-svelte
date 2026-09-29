<script lang="ts">
  import { tableVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import TableState from "./index.svelte.ts";

  interface Props extends HTMLAttributes<HTMLElement> {}

  const { children, ...props }: Props = $props();

  const table = TableState.get();
</script>

<thead
  {...props}
  data-slot="table-header"
  class={tableVariants(table.heroui).header({
    class: props.class?.toString(),
  })}
>
  <tr>
    {@render children?.()}
  </tr>
</thead>
