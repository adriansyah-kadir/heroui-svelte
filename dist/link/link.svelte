<script lang="ts">
  import type { HTMLAnchorAttributes } from "svelte/elements";
  import { linkVariants } from "@heroui/styles";

  const { children, ...props }: HTMLAnchorAttributes = $props();
</script>

<a {...props} class={[linkVariants().base(), props.class]}>
  {@render children?.()}
</a>
