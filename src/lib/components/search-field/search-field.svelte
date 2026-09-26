<script lang="ts">
  import { searchFieldVariants, type InputVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import { getInputProps, getInputState } from "../input/input-context";

  interface Props extends HTMLAttributes<HTMLDivElement> {
    disabled?: boolean;
    required?: boolean;
    invalid?: boolean;
    name?: string;
    variant?: InputVariants["variant"];
    fullWidth?: boolean;
    onvalue?: (search: string) => any;
    debounce?: number;
  }

  const {
    disabled,
    required,
    invalid,
    name,
    variant,
    fullWidth,
    children,
    onvalue,
    debounce = 300,
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

  $effect(() => {
    const value = input.value;
    const i = setTimeout(() => {
      onvalue?.(value);
    }, debounce);
    return () => {
      clearTimeout(i);
    };
  });
</script>

<div
  {...props}
  data-slot="search-field"
  data-empty={input.empty}
  data-disabled={disabled}
  data-required={required}
  data-invalid={invalid ?? input.invalid}
  class={searchFieldVariants().base({
    variant,
    fullWidth,
    class: props.class?.toString(),
  })}
>
  {@render children?.()}
</div>
