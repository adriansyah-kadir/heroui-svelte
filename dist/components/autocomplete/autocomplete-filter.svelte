<script lang="ts">
  import FilterProvider from "../filter/filter-provider.svelte";
  import { PopoverContext } from "../popover";

  const { children } = $props();
  const popover = PopoverContext.get();
  let query = $state("")

  $effect(() => {
    if (popover.open) return;
    query = ""
  })
</script>

<FilterProvider bind:query {children} />
