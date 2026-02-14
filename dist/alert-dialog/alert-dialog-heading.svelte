<script lang="ts">
  import {
    alertDialogVariants,
    type AlertDialogVariants,
  } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import { AlertDialogContext } from "./utils";

  const {
    children,
    heading = "h3",
    size,
    status,
    variant,
    ...props
  }: HTMLAttributes<HTMLHeadingElement> & {
    heading?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  } & AlertDialogVariants = $props();

  const ctx = AlertDialogContext.get();
  const theme = $derived({ size, status, variant });
  const styles = $derived(alertDialogVariants($ctx.theme));
</script>

<svelte:element
  this={heading}
  {...props}
  class={[styles.heading(theme), props.class]}
>
  {@render children?.()}
</svelte:element>
