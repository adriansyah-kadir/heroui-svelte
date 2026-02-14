<script lang="ts">
  import {
    alertDialogVariants,
    type AlertDialogVariants,
  } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import { AlertDialogContext } from "./utils";

  const {
    children,
    size,
    status,
    variant,
    ...props
  }: HTMLAttributes<HTMLDivElement> & AlertDialogVariants = $props();

  const ctx = AlertDialogContext.get();
  const theme = $derived({ size, status, variant });
  const styles = $derived(alertDialogVariants($ctx.theme));
</script>

<div {...props} class={[styles.body(theme), props.class]}>
  {@render children?.()}
</div>
