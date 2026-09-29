<script lang="ts">
  import { tableVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import TableState from "./index.svelte";

  type Props = HTMLAttributes<HTMLElement>;

  const { children, ...props }: Props = $props();

  const table = TableState.get();
</script>

<div
  {...props}
  data-slot="table-footer"
  class={tableVariants(table.heroui).footer({
    class: props.class?.toString(),
  })}
>
  {@render children?.()}
</div>
