<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { surfaceVariants, type SurfaceVariants } from "@heroui/styles";

  const {
    variant,
    children,
    ...props
  }: HTMLAttributes<HTMLDivElement> & SurfaceVariants = $props();
</script>

<div {...props} class={[surfaceVariants({ variant }), props.class]}>
  {@render children?.()}
</div>
