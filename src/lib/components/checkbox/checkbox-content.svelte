<script lang="ts">
  import { checkboxVariants } from "@heroui/styles";
  import type { HTMLLabelAttributes } from "svelte/elements";
  import { getCheckboxProps } from "./checkbox-context";
  import { getInputState } from "../input/input-context";

  interface Props extends HTMLLabelAttributes {}

  const { ...props }: Props = $props();

  const ctx = getCheckboxProps();
  const input = getInputState();
</script>

<label
  {...props}
  data-slot="checkbox-content"
  class={checkboxVariants().content({
    variant: ctx.variant,
    class: props.class?.toString(),
  })}
>
  <input
    checked={ctx.selected}
    required={ctx.required}
    name={ctx.name}
    disabled={ctx.disabled}
    {@attach input.attach()}
    hidden
    type="checkbox"
  />
  {@render props.children?.()}
</label>
