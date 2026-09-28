<script lang="ts">
  import { searchFieldVariants } from "@heroui/styles";
  import CloseButton from "../close-button/close-button.svelte";
  import type { ComponentProps } from "svelte";
  import InputState from "../input/input.svelte.ts";

  interface Props extends ComponentProps<typeof CloseButton> {}

  const { ...props }: Props = $props();
  const input = InputState.get();

  function onclick(ev: MouseEvent & { currentTarget: HTMLButtonElement }) {
    props.onclick?.(ev);
    input.opts.value = "";
    input.node?.focus();
  }
</script>

<CloseButton
  {...props}
  {onclick}
  disabled={input.empty}
  data-slot="search-field-clear-button"
  class={searchFieldVariants(input.heroui).clearButton({
    class: props.class?.toString(),
  })}
/>
