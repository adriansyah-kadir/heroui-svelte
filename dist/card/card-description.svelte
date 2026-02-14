<script lang="ts">
  import { CardContext } from "./utils.svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { cardVariants } from "@heroui/styles";

  const { children, ...props }: HTMLAttributes<HTMLParagraphElement> = $props();

  // svelte-ignore state_referenced_locally
  const c = CardContext.get();
</script>

<p {...props} class={[cardVariants($c).description(), props.class]}>
  {@render children?.()}
</p>
