<script lang="ts">
  import { autocompleteVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import { getInputProps } from "../input/input-context";
  import { getPopoverState } from "../popover/popover-context.svelte";

  interface Props extends HTMLAttributes<HTMLDivElement> {}

  const { children, ...props }: Props = $props();

  const popover = getPopoverState();
  const ctx = getInputProps();

  function isInside(ev: Event) {
    const target = ev.target;

    if (!(target instanceof Node)) return false;

    return popover.source?.contains(target) || popover.node?.contains(target);
  }
</script>

<svelte:window
  onkeyup={(ev) => {
    if (ev.key === "Escape") popover.node?.hidePopover();
  }}
  onclick={(ev) => {
    if (isInside(ev)) return;
    popover.node?.hidePopover();
  }}
/>

<div
  role="button"
  data-disabled={ctx.disabled}
  data-invalid={ctx.invalid}
  tabindex="0"
  {...props}
  onkeydown={(ev) => {
    if (ev.code === "Enter" || ev.code === "Space" && ev.target === ev.currentTarget) {
      ev.preventDefault();
      popover.node?.togglePopover({ source: ev.currentTarget });
    }
  }}
  onclick={(ev) => {
    popover.node?.togglePopover({ source: ev.currentTarget });
  }}
  class={autocompleteVariants().trigger({
    ...ctx.current,
    class: props.class?.toString(),
  })}
>
  {@render children?.()}
</div>
