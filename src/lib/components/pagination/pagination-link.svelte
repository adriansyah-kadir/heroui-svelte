<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";
  import PaginationState from "./index.svelte";
  import { paginationVariants } from "@heroui/styles";

  const {
    page,
    ...props
  }: HTMLButtonAttributes & {
    page?: number;
  } = $props();
  const pagination = PaginationState.ctx();
</script>

<button
  {...props}
  onclick={(ev) => {
    props.onclick?.(ev);
    if (page) pagination.page = page;
  }}
  class={paginationVariants(pagination.heroui).link({
    class: props.class?.toString(),
  })}
>
  {@render props.children?.()}
</button>
