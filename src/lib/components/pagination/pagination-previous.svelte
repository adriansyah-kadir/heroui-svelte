<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";
  import PaginationState from "./pagination.svelte.ts";
  import { paginationVariants } from "@heroui/styles";

  const props: HTMLButtonAttributes = $props();
  const pagination = PaginationState.ctx();
</script>

<button
  {...props}
  data-slot="pagination-previous"
  disabled={props.disabled ?? !pagination.hasPrev}
  onclick={(ev) => {
    props.onclick?.(ev);
    pagination.onPrev();
  }}
  class={paginationVariants(pagination.heroui).link({
    class: ["pagination__link--nav"],
  })}
>
  {@render props.children?.()}
</button>
