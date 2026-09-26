<script lang="ts">
  import { autocompleteVariants, type InputVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import { getInputProps } from "../input/input-context";
  import { getListBoxCombobox } from "../list-box/list-box-context.svelte";
  import { getPopoverState } from "../popover/popover-context.svelte";

  interface Props extends HTMLAttributes<HTMLElement> {
    disabled?: boolean;
    required?: boolean;
    invalid?: boolean;
    name?: string;
    variant?: InputVariants["variant"];
    fullWidth?: boolean;
    multiple?: boolean;
  }

  const {
    children,
    disabled,
    required,
    invalid,
    name,
    variant,
    fullWidth,
    multiple,
    ...props
  }: Props = $props();

  getPopoverState();
  getListBoxCombobox(() => ({ multiple }));
  const ctx = getInputProps(() => ({
    disabled,
    required,
    invalid,
    name,
    variant,
    fullWidth,
  }));

  // TODO: handle same context with search-field in popover getting invalid if this invalid
</script>

<div
  {...props}
  data-invalid={ctx.invalid}
  data-disabled={ctx.disabled}
  data-required={ctx.required}
  class={autocompleteVariants().base({
    ...ctx.current,
    class: props.class?.toString(),
  })}
>
  {@render children?.()}
</div>
