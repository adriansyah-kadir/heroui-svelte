<script lang="ts">
  import { autocompleteVariants } from "@heroui/styles";
  import Popover from "../popover/popover.svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { getPopoverState } from "../popover/popover-context.svelte";

  const props: HTMLAttributes<HTMLDivElement> = $props();
  const popover = getPopoverState();
  let triggerWidth = $state("auto");

  $effect(() => {
    if (popover.source) triggerWidth = `${popover.source.clientWidth}px`;
  });
</script>

<Popover popover="manual">
  <div
    {...props}
    style:--trigger-width={triggerWidth}
    class={autocompleteVariants().popover({ class: props.class?.toString() })}
  >
    {@render props.children?.()}
  </div>
</Popover>
