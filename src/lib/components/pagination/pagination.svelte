<script lang="ts">
  import { paginationVariants } from "@heroui/styles";
  import type { PaginationProps } from "./index.svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import PaginationState from "./index.svelte";
  import { box } from "svelte-utils";
  import PaginationSummary from "./pagination-summary.svelte";
  import PaginationContent from "./pagination-content.svelte";

  let {
    page = $bindable(1),
    total,
    pageSize = 10,
    disabled,
    size,
    ...props
  }: PaginationProps &
    HTMLAttributes<HTMLDivElement> & { page?: number } = $props();

  const ctx = new PaginationState(
    () => ({
      page,
      total,
      pageSize,
      disabled,
      size,
    }),
    box(
      () => page,
      (v) => (page = v),
    ),
  );
</script>

<div
  {...props}
  class={paginationVariants(ctx.heroui).base({
    class: props.class?.toString(),
  })}
>
  {#if props.children}
    {@render props.children()}
  {:else}
    <PaginationSummary />
    <PaginationContent />
  {/if}
</div>
