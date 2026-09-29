<script lang="ts">
  import { boxDerived } from "#lib/hooks/boxed.svelte.ts";
  import { paginationVariants } from "@heroui/styles";
  import type { PaginationProps } from "./index.svelte.ts";
  import PaginationState from "./index.svelte.ts";
  import type { HTMLAttributes } from "svelte/elements";

  let {
    page = $bindable(1),
    total,
    pageSize = 10,
    disabled,
    size,
    ...props
  }: PaginationProps & HTMLAttributes<HTMLDivElement> = $props();

  export const pagination = new PaginationState(
    boxDerived(
      () => ({
        page,
        total,
        pageSize,
        disabled,
        size,
      }),
      (v) => ({ page } = v),
    ),
  );
</script>

<div
  {...props}
  class={paginationVariants(pagination.heroui).base({
    class: props.class?.toString(),
  })}
>
  {@render props.children?.()}
</div>
