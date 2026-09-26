<script lang="ts">
  import { autocompleteVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import { getInputProps } from "../input/input-context";
  import { getPopoverState } from "../popover/popover-context.svelte";
  import ChevronDownIcon from "#lib/icons/chevron-down-icon.svelte";

  interface Props extends HTMLAttributes<HTMLDivElement> {}

  const { children, ...props }: Props = $props();

  const popover = getPopoverState();
  const ctx = getInputProps();
</script>

<div
  {...props}
  data-open={popover.open}
  class={autocompleteVariants().indicator({
    ...ctx.current,
    class: props.class?.toString(),
  })}
>
  <ChevronDownIcon />
</div>
