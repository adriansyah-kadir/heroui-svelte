<script lang="ts">
  import { CardContext } from "./utils.svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { cardVariants } from "@heroui/styles";

  const { children, ...props }: HTMLAttributes<HTMLDivElement> = $props();

  const c = CardContext.get();
</script>

<div {...props} class={[cardVariants($c).footer(), props.class]}>
  {@render children?.()}
</div>
