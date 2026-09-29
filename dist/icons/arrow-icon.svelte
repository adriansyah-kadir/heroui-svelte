<script lang="ts">
  import type { SVGAttributes } from "svelte/elements";
  const props: SVGAttributes<Element> = $props();
</script>

<svg
  height="12"
  viewBox="0 0 12 12"
  width="12"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
>
  <path d="M0 0C5.48483 8 6.5 8 12 0Z" />
</svg>
