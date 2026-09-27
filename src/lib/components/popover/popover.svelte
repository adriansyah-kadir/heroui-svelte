<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { getPopoverArea } from "#lib/hooks/popover.svelte.ts";
  import { popoverVariants } from "@heroui/styles";
  import {
    getPopoverProps,
    getPopoverState,
    type PopoverPlacement,
  } from "./popover-context.svelte";

  interface Props extends HTMLAttributes<HTMLDivElement> {
    placement?: PopoverPlacement;
    offset?: number;
  }

  const {
    placement = "bottom",
    offset = 8,
    popover = "",
    ...props
  }: Props = $props();

  const state = getPopoverState();
  const area = getPopoverArea(state);
  const ctx = getPopoverProps(() => ({
    placement: (area.current as PopoverPlacement) ?? placement,
  }));

  const fallbackArea = $derived(
    {
      top: "bottom, right, left",
      bottom: "top, right, left",
      left: "right, left, bottom, top",
      right: "left, right, bottom, top",
    }[placement],
  );

  const anchorPoint = $derived(
    {
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left",
    }[area.current ?? placement],
  );

  const margin = $derived(
    {
      top: `${offset}px 0`,
      bottom: `${offset}px 0`,
      left: `0 ${offset}px`,
      right: `0 ${offset}px`,
    }[area.current ?? placement],
  );
</script>

<div
  {...props}
  {popover}
  {@attach state.attach()}
  data-entering={state.open}
  data-exiting={state.closed}
  data-placement={area.current ?? placement}
  style:position-area={placement}
  style:position-try-fallbacks={fallbackArea}
  style:--trigger-anchor-point={anchorPoint}
  style:margin
  class={popoverVariants(ctx.current).base({
    class: [
      "overflow-visible",
      "transition-discrete transition-[display,overlay]",
      props.class?.toString(),
    ],
  })}
>
  {@render props.children?.()}
</div>
