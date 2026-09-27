<script lang="ts">
  import ChevronRightIcon from "#lib/icons/chevron-right-icon.svelte";
  import type { HTMLAttributes } from "svelte/elements";

  const props: HTMLAttributes<HTMLSpanElement> = $props();
</script>

<span {...props} data-slot="pagination-next-icon">
  <ChevronRightIcon />
</span>
