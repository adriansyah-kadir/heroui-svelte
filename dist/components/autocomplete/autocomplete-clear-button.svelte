<script lang="ts">
  import { CloseIcon, CloseButton, AutocompleteContext } from "../../index.js";
  import { autocompleteVariants } from "@heroui/styles";
  import type { ComponentProps } from "svelte";

  const props: ComponentProps<typeof CloseButton> = $props();
  const autocomplete = AutocompleteContext.get();
  const list = autocomplete.listboxCtx;
</script>

<button
  {...props}
  disabled={list.noSelected}
  data-empty={list.noSelected}
  onclick={(ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    props.onclick?.(ev);
    list.selected = [];
  }}
  class={autocompleteVariants().clearButton({ class: props.class?.toString() })}
>
  <CloseIcon />
</button>
