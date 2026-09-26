<script lang="ts">
  import { inputVariants, type InputVariants } from "@heroui/styles";
  import type { HTMLInputAttributes } from "svelte/elements";
  import { getInputProps, getInputState } from "./input-context";

  interface Props extends HTMLInputAttributes {
    fullWidth?: InputVariants["fullWidth"];
    variant?: InputVariants["variant"];
    invalid?: boolean;
    onvalue?: (value: string) => any;
  }

  const {
    fullWidth,
    variant,
    disabled,
    required,
    invalid,
    name,
    onvalue,
    onchange,
    ...props
  }: Props = $props();

  const state = getInputState();
  const field = getInputProps();

  function onChange(event: Event & { currentTarget: HTMLInputElement }) {
    onchange?.(event);
    onvalue?.(event.currentTarget.value);
  }
</script>

<input
  {...props}
  {@attach state?.attach()}
  onchange={onChange}
  name={field.name ?? name}
  data-invalid={field.invalid ?? invalid ?? state.invalid}
  disabled={field.disabled ?? disabled}
  required={field.required ?? required}
  class={inputVariants({
    fullWidth: field.fullWidth ?? fullWidth,
    variant: field.variant ?? variant,
    class: props.class?.toString(),
  })}
/>
