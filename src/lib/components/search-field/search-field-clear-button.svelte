<script lang="ts">
  import { searchFieldVariants } from "@heroui/styles";
  import type { ComponentProps } from "svelte";
  import { InputContext, CloseButton } from "#lib";

  interface Props extends ComponentProps<typeof CloseButton> {}

  const { ...props }: Props = $props();
  const input = InputContext.get();

  function onclick(ev: MouseEvent & { currentTarget: HTMLButtonElement }) {
    props.onclick?.(ev);
    input.value = "";
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
