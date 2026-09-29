<script lang="ts">
  import { autocompleteVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import ChevronDownIcon from "#lib/icons/chevron-down-icon.svelte";
  import AutocompleteState from "./autocomplete.svelte.ts";

  interface Props extends HTMLAttributes<HTMLDivElement> {}

  const { children, ...props }: Props = $props();

  const autocomplete = AutocompleteState.get();
  const popover = autocomplete.popover;
</script>

<div
  {...props}
  data-open={popover.open}
  class={autocompleteVariants(autocomplete.heroui).indicator({
    class: props.class?.toString(),
  })}
>
  <ChevronDownIcon />
</div>
