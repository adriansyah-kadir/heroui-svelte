<script lang="ts">
  import { checkboxVariants } from "@heroui/styles";
  import type { HTMLLabelAttributes } from "svelte/elements";
  import { getCheckboxProps } from "./checkbox-context";
  import { getInputState } from "../input/input-context";

  interface Props extends HTMLLabelAttributes {}

  const { ...props }: Props = $props();

  const { selected, required, disabled, name, variant } =
    $derived(getCheckboxProps());
  const input = getInputState();

  $effect(() => {
    input.checked = selected;
  });
</script>

<label
  {...props}
  data-slot="checkbox-content"
  class={checkboxVariants().content({
    variant: variant,
    class: props.class?.toString(),
  })}
>
  <input
    {required}
    {name}
    {disabled}
    {@attach input.attach()}
    hidden
    type="checkbox"
  />
  {@render props.children?.()}
</label>
