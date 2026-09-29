<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import PaginationState from "./index.svelte.ts";
  import { paginationVariants } from "@heroui/styles";
  import type { Snippet } from "svelte";

  const {
    children,
    ...props
  }: Omit<HTMLAttributes<HTMLLIElement>, "children"> & {
    children?: Snippet<[PaginationState]>;
  } = $props();
  const pagination = PaginationState.ctx();
</script>

<li
  {...props}
  data-slot="pagination-item"
  class={paginationVariants(pagination.heroui).item({
    class: props.class?.toString(),
  })}
>
  {@render children?.(pagination)}
</li>
