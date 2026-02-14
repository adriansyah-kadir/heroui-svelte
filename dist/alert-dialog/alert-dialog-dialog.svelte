<script lang="ts">
  import { alertDialogVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import { AlertDialogContext } from "./utils";

  const {
    children,
    placement = "auto",
    ...props
  }: HTMLAttributes<HTMLDivElement> & {
    placement?: "auto" | "top" | "center" | "bottom";
  } = $props();
  const ctx = AlertDialogContext.get();
  const styles = alertDialogVariants($ctx.theme);
</script>

<div
  {...props}
  data-placement={placement}
  class={[styles.dialog(), props.class]}
>
  {@render children?.()}
</div>
