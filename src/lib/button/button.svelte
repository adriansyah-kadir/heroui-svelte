<script lang="ts">
  import { buttonVariants, type ButtonVariants } from "@heroui/styles";
  import type { HTMLButtonAttributes } from "svelte/elements";

  const {
    children,
    variant,
    size,
    isIconOnly,
    fullWidth,
    ...props
  }: HTMLButtonAttributes & ButtonVariants = $props();
  const theme = $derived({ variant, size, isIconOnly, fullWidth });
</script>

<button
  {...props}
  class={[buttonVariants(theme), "focus-visible:status-focused", props.class]}
  >{@render children?.()}</button
>
