<script lang="ts">
  import type { SVGAttributes } from "svelte/elements";
  const {
    selected,
    ...props
  }: SVGAttributes<Element> & { selected?: boolean } = $props();
</script>

<svg
  aria-hidden="true"
  fill="none"
  role="presentation"
  stroke="currentColor"
  stroke-dasharray={22}
  stroke-dashoffset={selected ? 44 : 66}
  stroke-linecap="round"
  stroke-linejoin="round"
  stroke-width={2}
  viewBox="0 0 17 18"
  {...props}
>
  <polyline points="1 9 7 14 15 4" />
</svg>
