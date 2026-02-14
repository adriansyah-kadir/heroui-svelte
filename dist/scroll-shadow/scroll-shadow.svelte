<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import {
    scrollShadowVariants,
    type ScrollShadowVariants,
  } from "@heroui/styles";

  const {
    hideScrollBar = false,
    orientation = "vertical",
    variant = "fade",
    children,
    ...props
  }: HTMLAttributes<HTMLDivElement> & ScrollShadowVariants = $props();
  const { base } = $derived(
    scrollShadowVariants({
      variant,
      hideScrollBar,
      orientation,
    }),
  );
</script>

<div {...props} data-orientation={orientation} class={[base(), props.class]}>
  {@render children?.()}
</div>
