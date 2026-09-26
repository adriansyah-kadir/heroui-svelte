<script lang="ts">
  import { inputGroupVariants, type InputVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import { getInputProps, getInputState } from "../input/input-context";

  interface Props extends HTMLAttributes<HTMLDivElement> {
    disabled?: boolean;
    required?: boolean;
    invalid?: boolean;
    name?: string;
    variant?: InputVariants["variant"];
    fullWidth?: boolean;
  }

  const {
    disabled,
    required,
    invalid,
    name,
    variant,
    fullWidth,
    children,
    ...props
  }: Props = $props();

  const input = getInputState();
  getInputProps(() => ({
    disabled,
    required,
    invalid,
    variant,
    fullWidth,
    name,
  }));
</script>

<div
  {...props}
  data-disabled={disabled}
  data-required={required}
  data-invalid={invalid ?? input.invalid}
  class={inputGroupVariants({
    variant,
    fullWidth,
    class: props.class?.toString(),
  }).base()}
>
  {@render children?.()}
</div>
