<script lang="ts">
  import type { ComponentProps } from "svelte";
  import FilterProvider from "../filter/filter-provider.svelte";
  import { PopoverContext } from "../popover";

  let { query = $bindable(""), ...props }: ComponentProps<typeof FilterProvider> =
    $props();
  const popover = PopoverContext.get();

  $effect(() => {
    if (popover.open) return;
    query = "";
  });
</script>

<FilterProvider bind:query {...props} />
