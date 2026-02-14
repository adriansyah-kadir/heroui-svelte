<script lang="ts">
  import { modalVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import { DialogContext } from "./utils.svelte";

  const {
    children,
    heading = "h3",
    ...props
  }: HTMLAttributes<HTMLHeadingElement> & {
    heading?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  } = $props();

  const { variants } = DialogContext.get();
  const styles = $derived(modalVariants($variants));
</script>

<svelte:element
  this={heading}
  {...props}
  class={[styles.heading(), props.class]}
>
  {@render children?.()}
</svelte:element>
