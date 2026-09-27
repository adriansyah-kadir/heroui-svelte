<script lang="ts">
  import ChevronLeftIcon from "#lib/icons/chevron-left-icon.svelte";
  import type { HTMLAttributes } from "svelte/elements";

  const props: HTMLAttributes<HTMLSpanElement> = $props();
</script>

<span {...props} data-slot="pagination-previous-icon">
  <ChevronLeftIcon />
</span>
