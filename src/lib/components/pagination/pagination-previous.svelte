<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";
  import PaginationState from "./index.svelte";
  import { paginationVariants } from "@heroui/styles";
  import PaginationPreviousIcon from "./pagination-previous-icon.svelte";

  const props: HTMLButtonAttributes = $props();
  const pagination = PaginationState.get();
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
  {#if props.children}
    {@render props.children()}
  {:else}
    <PaginationPreviousIcon />
    Prev
  {/if}
</button>
