<script lang="ts">
  import { buttonVariants } from "@heroui/styles";
  import type { HTMLButtonAttributes } from "svelte/elements";
  import { type ButtonOpts, ButtonContext, Spinner, boxDerived } from "#lib";

  const {
    focused,
    hovered,
    pending,
    pressed,
    disabled,
    isIconOnly,
    fullWidth,
    size,
    variant,
    ...props
  }: ButtonOpts & HTMLButtonAttributes = $props();

  const btn = new ButtonContext(
    boxDerived(() => ({
      disabled,
      focused,
      fullWidth,
      hovered,
      isIconOnly,
      pending,
      pressed,
      size,
      variant,
    })),
  );
</script>

<button
  {...props}
  {...btn.props}
  {disabled}
  class={buttonVariants({ ...btn.heroui, class: props.class?.toString() })}
>
  {@render Children()}
</button>

{#snippet Children()}
  {#if pending}
    <Spinner color="current" size="sm" />
  {/if}
  {@render props.children?.()}
{/snippet}
