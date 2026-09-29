<script lang="ts">
  import { autocompleteVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import { ChevronDownIcon, AutocompleteContext } from "#lib";

  interface Props extends HTMLAttributes<HTMLDivElement> {}

  const { children, ...props }: Props = $props();

  const autocomplete = AutocompleteContext.get();
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
