<script lang="ts">
  import { tableVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import TableState from "./table.svelte.ts";

  interface Props extends HTMLAttributes<HTMLDivElement> {}

  const { children, ...props }: Props = $props();

  const table = TableState.get();
</script>

<div
  {...props}
  class={tableVariants(table.heroui).scrollContainer({
    class: props.class?.toString(),
  })}
>
  {@render children?.()}
</div>
