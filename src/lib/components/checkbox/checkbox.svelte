<script lang="ts">
  import { checkboxVariants, type CheckboxVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import { setCheckboxProps } from "./checkbox-context";
  import { setInputState } from "../input/input-context";
  import { untrack } from "svelte";

  interface Props extends HTMLAttributes<HTMLDivElement> {
    variant?: CheckboxVariants["variant"];
    selected?: boolean;
    indeterminate?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    name?: string;
    required?: boolean;
    oncheck?: (checked: boolean) => any;
  }

  const {
    variant,
    selected,
    indeterminate,
    disabled,
    invalid,
    required,
    name,
    oncheck,
    ...props
  }: Props = $props();

  const input = setInputState();
  setCheckboxProps(() => ({
    name,
    variant,
    required,
    selected,
    indeterminate,
    disabled,
    invalid,
  }));

  $effect(() => {
    if (input.checked === undefined) return;
    untrack(() => {
      oncheck?.(!!input.checked);
    });
  });
</script>

<div
  {...props}
  data-slot="checkbox"
  data-selected={selected ?? input.checked}
  data-invalid={invalid ?? input.invalid}
  data-disabled={disabled}
  data-required={required}
  data-indeterminate={indeterminate}
  class={checkboxVariants().base({ variant, class: props.class?.toString() })}
>
  {@render props.children?.()}
</div>
