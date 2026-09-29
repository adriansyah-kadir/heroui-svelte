<script lang="ts">
  import CloseIcon from "#lib/icons/close-icon.svelte";
  import CloseButton from "../close-button/close-button.svelte";
  import { autocompleteVariants } from "@heroui/styles";
  import type { ComponentProps } from "svelte";
  import AutocompleteState from "./autocomplete.svelte.ts";

  const props: ComponentProps<typeof CloseButton> = $props();
  const autocomplete = AutocompleteState.get();
  const combobox = autocomplete.listBox;
</script>

<button
  {...props}
  disabled={autocomplete.empty}
  data-empty={autocomplete.empty}
  onclick={(ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    props.onclick?.(ev);
    combobox.itemsToggle(false);
  }}
  class={autocompleteVariants().clearButton({ class: props.class?.toString() })}
>
  <CloseIcon />
</button>
