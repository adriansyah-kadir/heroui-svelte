<script lang="ts">
  import { inputVariants, type InputVariants } from "@heroui/styles";
  import type { HTMLInputAttributes } from "svelte/elements";
  import { getTextFieldProps } from "../text-field/text-field-context";
  import InputState from "#lib/hooks/input.svelte.ts";
  import { untrack } from "svelte";

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

  const state = new InputState();
  const field = getTextFieldProps();

  $effect(() => {
    const stateInvalid = state.invalid;
    untrack(() => {
      if (stateInvalid === undefined) return;
      field.invalid = stateInvalid;
    });
  });

  function onChange(event: Event & { currentTarget: HTMLInputElement }) {
    onchange?.(event);
    onvalue?.(event.currentTarget.value);
  }
</script>

<input
  {...props}
  {@attach state.attach()}
  onchange={onChange}
  name={field.name ?? name}
  data-invalid={field.invalid ?? invalid}
  disabled={field.disabled ?? disabled}
  required={field.required ?? required}
  class={inputVariants({
    fullWidth: field.fullWidth ?? fullWidth,
    variant: field.variant ?? variant,
    class: props.class?.toString(),
  })}
/>
