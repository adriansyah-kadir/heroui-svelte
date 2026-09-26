<script lang="ts">
  import CloseIcon from "#lib/icons/close-icon.svelte";
  import CloseButton from "../close-button/close-button.svelte";
  import { autocompleteVariants } from "@heroui/styles";
  import type { ComponentProps } from "svelte";
  import { getListBoxCombobox } from "../list-box/list-box-context.svelte";

  const props: ComponentProps<typeof CloseButton> = $props();
  const combobox = getListBoxCombobox();
</script>

<button
  {...props}
  disabled={combobox.selected.length === 0}
  data-empty={combobox.selected.length === 0}
  onclick={(ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    props.onclick?.(ev);
    combobox.toggleall(false);
  }}
  class={autocompleteVariants().clearButton({ class: props.class?.toString() })}
>
  <CloseIcon />
</button>
