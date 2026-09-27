<script lang="ts">
  import type { SVGAttributes } from "svelte/elements";
  const props: SVGAttributes<Element> = $props();
</script>

<svg
  aria-hidden="true"
  fill="none"
  height={16}
  role="presentation"
  viewBox="0 0 16 16"
  width={16}
  xmlns="http://www.w3.org/2000/svg"
  {...props}
>
  <path
    clip-rule="evenodd"
    d="M10.53 2.97a.75.75 0 0 1 0 1.06L6.56 8l3.97 3.97a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 0"
    fill="currentColor"
    fill-rule="evenodd"
  />
</svg>
