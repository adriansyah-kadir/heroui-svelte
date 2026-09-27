<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import PaginationState from "./pagination.svelte.ts";
  import { paginationVariants } from "@heroui/styles";

  const props: HTMLAttributes<HTMLLIElement> = $props();
  const pagination = PaginationState.ctx();
</script>

<li
  {...props}
  data-slot="pagination-ellipsis"
  class={paginationVariants(pagination.heroui).ellipsis({
    class: props.class?.toString(),
  })}
>
  &hellip;
</li>
