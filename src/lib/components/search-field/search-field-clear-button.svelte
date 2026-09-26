<script lang="ts">
  import { searchFieldVariants } from "@heroui/styles";
  import { getInputProps, getInputState } from "../input/input-context";
  import CloseButton from "../close-button/close-button.svelte";
  import type { ComponentProps } from "svelte";

  interface Props extends ComponentProps<typeof CloseButton> {}

  const { ...props }: Props = $props();
  const input = getInputState();
  const ctx = getInputProps();

  function onclick(ev: MouseEvent & { currentTarget: HTMLButtonElement }) {
    props.onclick?.(ev);
    input.value = "";
    input.node?.focus();
  }
</script>

<CloseButton
  {...props}
  {onclick}
  disabled={input.empty}
  data-slot="search-field-clear-button"
  class={searchFieldVariants().clearButton({
    ...ctx.current,
    class: props.class?.toString(),
  })}
/>
