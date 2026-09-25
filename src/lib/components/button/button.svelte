<script lang="ts">
  import { buttonVariants, type ButtonVariants } from "@heroui/styles";
  import type { HTMLButtonAttributes } from "svelte/elements";
  import Spinner from "../spinner/spinner.svelte";
  import { popoverSelector } from "#lib/hooks/popover.svelte.ts";

  interface Props extends HTMLButtonAttributes {
    fullWidth?: ButtonVariants["fullWidth"];
    isIconOnly?: ButtonVariants["isIconOnly"];
    size?: ButtonVariants["size"];
    variant?: ButtonVariants["variant"];
    loading?: boolean;
  }

  const { variant, size, isIconOnly, fullWidth, loading, ...props }: Props =
    $props();

  const isPopoverCommand = $derived(props["command"]?.includes("popover"));
  const popover = popoverSelector(() =>
    isPopoverCommand ? `#${props["commandfor"]}` : null,
  );
</script>

<button
  {...props}
  data-pressed={popover.open}
  disabled={props.disabled || loading}
  class={buttonVariants({
    variant,
    size,
    isIconOnly,
    fullWidth,
    class: props.class?.toString(),
  })}
>
  {#if loading}
    <Spinner color="current" size="sm" />
  {/if}
  {@render props.children?.()}
</button>
