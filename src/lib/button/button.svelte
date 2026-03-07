<script lang="ts">
  import { buttonVariants, type ButtonVariants } from "@heroui/styles";
  import type { HTMLButtonAttributes } from "svelte/elements";
  import { Spinner } from "$lib";

  const {
    children,
    variant,
    size,
    isIconOnly,
    fullWidth,
    loading,
    ...props
  }: HTMLButtonAttributes &
    ButtonVariants & {
      loading?: boolean;
    } = $props();
  const theme = $derived({ variant, size, isIconOnly, fullWidth });
</script>

<button
  {...props}
  class={[buttonVariants(theme), "focus-visible:status-focused", props.class]}
>
  {#if loading}
    <Spinner color="current" />
  {/if}
  {@render children?.()}</button
>
