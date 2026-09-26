<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { textFieldVariants, type InputVariants } from "@heroui/styles";
  import { getInputProps, getInputState } from "../input/input-context";

  interface Props extends HTMLAttributes<HTMLDivElement> {
    fullWidth?: boolean;
    disabled?: boolean;
    required?: boolean;
    invalid?: boolean;
    variant?: InputVariants["variant"];
    name?: string;
  }

  const {
    fullWidth,
    disabled,
    required,
    invalid,
    variant,
    name,
    ...props
  }: Props = $props();

  const input = getInputState();
  getInputProps(() => ({
    fullWidth,
    disabled,
    required,
    invalid,
    variant,
    name,
  }));
</script>

<div
  {...props}
  data-disabled={disabled}
  data-required={required}
  data-invalid={invalid ?? input.invalid}
  class={textFieldVariants({ fullWidth, class: props.class?.toString() })}
>
  {@render props.children?.()}
</div>
