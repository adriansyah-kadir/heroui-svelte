<script lang="ts">
  import type { SVGAttributes } from "svelte/elements";
  const props: SVGAttributes<Element> = $props();
</script>

<svg
  aria-hidden="true"
  data-slot="menu-item-indicator--dot"
  fill="currentColor"
  fill-rule="evenodd"
  role="presentation"
  viewBox="0 0 16 16"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
>
  <path
    clip-rule="evenodd"
    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14"
    fill-rule="evenodd"
  />
</svg>
