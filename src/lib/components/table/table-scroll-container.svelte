<script lang="ts">
  import { tableVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import { getTableProps } from "./table-context.svelte";

  interface Props extends HTMLAttributes<HTMLDivElement> {}

  const { children, ...props }: Props = $props();

  const { variant } = getTableProps();
</script>

<div
  {...props}
  class={tableVariants().scrollContainer({
    variant,
    class: props.class?.toString(),
  })}
>
  {@render children?.()}
</div>
