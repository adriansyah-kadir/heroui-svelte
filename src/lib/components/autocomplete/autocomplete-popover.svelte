<script lang="ts">
  import { autocompleteVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import AutocompleteState from "./autocomplete.svelte.ts";
  import PopoverContent from "../popover/popover-content.svelte";

  const props: HTMLAttributes<HTMLDivElement> = $props();
  const autocomplete = AutocompleteState.get();
  const popover = autocomplete.popover;
  let triggerWidth = $state("auto");

  $effect(() => {
    if (popover.source) triggerWidth = `${popover.source.clientWidth}px`;
  });
</script>

<PopoverContent popover="manual" {@attach popover.attach()}>
  <div
    {...props}
    style:--trigger-width={triggerWidth}
    class={autocompleteVariants(autocomplete.heroui).popover({
      class: props.class?.toString(),
    })}
  >
    {@render props.children?.()}
  </div>
</PopoverContent>
