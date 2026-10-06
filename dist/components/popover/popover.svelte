<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import type { PopoverOpts } from "./index.svelte";
  import PopoverContext from "./index.svelte";
  import { box } from "svelte-utils";
  import { untrack } from "svelte";

  type Props = HTMLAttributes<HTMLDivElement> &
    PopoverOpts & { open?: boolean; anchor?: HTMLElement };

  let {
    open = $bindable(false),
    anchor,
    placement = "bottom",
    offset = 8,
    ...props
  }: Partial<Props> = $props();

  export const context = new PopoverContext(box(() => ({ placement, offset })));
  const popover = context.popover;

  $effect(() => {
    popover.anchor = anchor ?? null;
  });

  $effect(() => {
    open;
    untrack(() => {
      if (open !== popover.open) popover.toggle?.(open);
    });
  });

  $effect(() => {
    popover.open;
    untrack(() => {
      if (open !== popover.open) open = popover.open;
    });
  });
</script>

{@render props.children?.()}
