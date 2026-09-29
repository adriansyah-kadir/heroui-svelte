<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import PaginationState from "./index.svelte.ts";
  import { paginationVariants } from "@heroui/styles";

  const props: HTMLAttributes<HTMLUListElement> = $props();
  const pagination = PaginationState.ctx();
</script>

<ul
  {...props}
  class={paginationVariants(pagination.heroui).content({
    class: props.class?.toString(),
  })}
>
  {@render props.children?.()}
</ul>
