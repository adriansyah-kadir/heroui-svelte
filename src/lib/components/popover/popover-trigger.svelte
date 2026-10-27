<script lang="ts">
  import type { ComponentProps, Snippet } from "svelte";
  import Button from "../button/button.svelte";
  import { PopoverContext } from "./index.svelte";
  import type { PopoverState } from "@adriansyah/svelte-utils";

  type Props = ComponentProps<typeof Button> & {
    child?: Snippet<
      [{ props: ComponentProps<typeof Button>; popover: PopoverState }]
    >;
  };

  const { child, ...props }: Props = $props();

  const ctx = PopoverContext.get();
  const merged: ComponentProps<typeof Button> = $derived({
    ...props,
    ...{
      type: "button",
      command: "toggle-popover",
      commandfor: ctx.popover.nodeId,
      pressed: ctx.popover.open,
    },
  });
</script>

{#if child}
  {@render child({
    props: merged,
    popover: ctx.popover,
  })}
{:else}
  <Button {...merged} />
{/if}
