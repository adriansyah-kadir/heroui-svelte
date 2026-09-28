<script lang="ts">
  import { autocompleteVariants } from "@heroui/styles";
  import Popover from "../popover/popover.svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import AutocompleteState from "./autocomplete.svelte.ts";

  const props: HTMLAttributes<HTMLDivElement> = $props();
  const autocomplete = AutocompleteState.ctx();
  const popover = autocomplete.popover;
  let triggerWidth = $state("auto");

  $effect(() => {
    if (popover.source) triggerWidth = `${popover.source.clientWidth}px`;
  });
</script>

<Popover {@attach popover.attach()} popover="manual">
  <div
    {...props}
    style:--trigger-width={triggerWidth}
    class={autocompleteVariants(autocomplete.heroui).popover({
      class: props.class?.toString(),
    })}
  >
    {@render props.children?.()}
  </div>
</Popover>
