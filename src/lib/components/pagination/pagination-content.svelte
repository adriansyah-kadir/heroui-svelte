<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import PaginationState from "./index.svelte";
  import { paginationVariants } from "@heroui/styles";
  import PaginationItem from "./pagination-item.svelte";
  import PaginationPrevious from "./pagination-previous.svelte";
  import PaginationNext from "./pagination-next.svelte";
  import PaginationLink from "./pagination-link.svelte";

  const props: HTMLAttributes<HTMLUListElement> = $props();
  const pagination = PaginationState.get();
</script>

<ul
  {...props}
  class={paginationVariants(pagination.heroui).content({
    class: props.class?.toString(),
  })}
>
  {#if props.children}
    {@render props.children()}
  {:else}
    <PaginationItem>
      <PaginationPrevious />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink disabled={pagination.total === 0} page={pagination.page} />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext />
    </PaginationItem>
  {/if}
</ul>
