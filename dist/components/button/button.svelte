<script lang="ts">
  import { buttonVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import { type ButtonOpts, ButtonContext, Spinner, boxDerived } from "#lib";

  const {
    href,
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
  }: ButtonOpts &
    HTMLAttributes<HTMLElement> & {
      href?: string;
    } = $props();

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

{#if typeof href === "string"}
  <a
    {...props}
    {...btn.props}
    {href}
    class={buttonVariants({ ...btn.heroui, class: props.class?.toString() })}
  >
    {@render Children()}
  </a>
{:else}
  <button
    {...props}
    {...btn.props}
    {disabled}
    class={buttonVariants({ ...btn.heroui, class: props.class?.toString() })}
  >
    {@render Children()}
  </button>
{/if}

{#snippet Children()}
  ok
  {#if pending}
    <Spinner color="current" size="sm" />
  {/if}
  {@render props.children?.()}
{/snippet}
