<script lang="ts">
  import { CardContext } from "./utils.svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { cardVariants, type CardVariants } from "@heroui/styles";
  
  const {
    children,
    ...props
  }: HTMLAttributes<HTMLDivElement> & CardVariants = $props();

  const c = CardContext.get();
</script>

<div {...props} class={[cardVariants($c).header(), props.class]}>
  {@render children?.()}
</div>
