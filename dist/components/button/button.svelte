<script lang="ts">
  import { buttonVariants } from "@heroui/styles";
  import type { HTMLButtonAttributes } from "svelte/elements";
  import { type ButtonOpts, ButtonContext, Spinner, boxDerived } from "#lib";
  import Ripples, {
    createRipple,
    releaseRipples,
    type RippleItem,
  } from "../ripples.svelte";

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

  let ripples = $state<RippleItem[]>([]);
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
  onpointerdown={(ev) => {
    ripples.push(createRipple(ev));
  }}
  onpointerup={() => {
    releaseRipples(ripples);
  }}
  disabled={disabled ?? pending}
  class={buttonVariants({ ...btn.heroui, class: [props.class?.toString(), "overflow-hidden"] })}
>
  {@render Children()}
  <Ripples bind:items={ripples} />
</button>

{#snippet Children()}
  {#if pending}
    <Spinner color="current" size="sm" />
  {/if}
  {@render props.children?.()}
{/snippet}
