<script lang="ts">
  import { FilterContext } from "./index.svelte";

  const ctx = FilterContext.get();

  const { children } = $props();
</script>

{#if ctx.visible === 0 && ctx.total > 0}
  {@render children?.()}
{/if}
