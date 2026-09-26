<script lang="ts">
  import { tableVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import { getTableProps } from "./table-context.svelte";

  interface Props extends HTMLAttributes<HTMLElement> {}

  const { children, ...props }: Props = $props();

  const { variant } = getTableProps();
</script>

<tbody
  {...props}
  class={tableVariants().body({
    variant,
    class: props.class?.toString(),
  })}
>
  {@render children?.()}
</tbody>
