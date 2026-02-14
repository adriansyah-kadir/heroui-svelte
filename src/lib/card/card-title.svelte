<script lang="ts">
  import { CardContext } from "./utils.svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { cardVariants, type CardVariants } from "@heroui/styles";

  const {
    children,
    ...props
  }: HTMLAttributes<HTMLHeadingElement> &
    CardVariants & {
      this?: "h1";
    } = $props();

  const c = CardContext.get();
</script>

<svelte:element
  this={props.this ?? "h3"}
  {...props}
  class={[cardVariants($c).header(), props.class]}
>
  {@render children?.()}
</svelte:element>
