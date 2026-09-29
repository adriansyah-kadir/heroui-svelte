<script lang="ts">
  import { CloseIcon, CloseButton, AutocompleteContext } from "#lib";
  import { autocompleteVariants } from "@heroui/styles";
  import type { ComponentProps } from "svelte";

  const props: ComponentProps<typeof CloseButton> = $props();
  const autocomplete = AutocompleteContext.get();
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
