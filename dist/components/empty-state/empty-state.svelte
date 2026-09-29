<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { emptyStateVariants } from "@heroui/styles";

  interface Props extends HTMLAttributes<HTMLElement> {}

  const { ...props }: Props = $props();
</script>

<div
  {...props}
  data-slot="empty-state"
  class={emptyStateVariants({ class: props.class?.toString() })}
>
  {@render props.children?.()}
</div>
