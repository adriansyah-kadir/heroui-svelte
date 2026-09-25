<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { getTextFieldProps } from "./text-field-context";
  import { textFieldVariants, type InputVariants } from "@heroui/styles";

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

  const ctx = getTextFieldProps(() => ({
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
  data-disabled={ctx.disabled}
  data-required={ctx.required}
  data-invalid={ctx.invalid}
  class={textFieldVariants({ ...ctx.current, class: props.class?.toString() })}
>
  {@render props.children?.()}
</div>
