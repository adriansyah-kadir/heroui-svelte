<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import PaginationState from "./index.svelte.ts";
  import { paginationVariants } from "@heroui/styles";
  import type { Snippet } from "svelte";

  const {
    children,
    ...props
  }: Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
    children?: Snippet<[PaginationState]>;
  } = $props();
  const pagination = PaginationState.ctx();
</script>

<div
  {...props}
  class={paginationVariants(pagination.heroui).summary({
    class: props.class?.toString(),
  })}
>
  {@render children?.(pagination)}
</div>
