<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { PopoverContext } from "#lib";
  import { autocompleteVariants } from "@heroui/styles";

  interface Props extends HTMLAttributes<HTMLDivElement> {}

  const { children, ...props }: Props = $props();
  const { popover } = PopoverContext.get();
</script>

<div
  {...props}
  role="button"
  tabindex="0"
  data-slot="autocomplete-trigger"
  data-open={popover.open}
  data-popover={popover.node?.popover}
  class={autocompleteVariants().trigger({
    class: [
      props?.class?.toString(),
      "data-[open=true]:[[data-popover=''],[data-popover='auto']]:pointer-events-none",
    ],
  })}
  onclick={(ev) => popover.toggle(undefined, ev.currentTarget)}
>
  {@render children?.()}
</div>
