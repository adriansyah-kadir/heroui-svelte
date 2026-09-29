<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";
  import PaginationState from "./index.svelte";
  import { paginationVariants } from "@heroui/styles";

  const props: HTMLButtonAttributes = $props();
  const pagination = PaginationState.ctx();
</script>

<button
  {...props}
  disabled={props.disabled ?? !pagination.hasNext}
  data-slot="pagination-next"
  onclick={(ev) => {
    props.onclick?.(ev);
    pagination.onNext();
  }}
  class={paginationVariants(pagination.heroui).link({
    class: ["pagination__link--nav"],
  })}
>
  {@render props.children?.()}
</button>
