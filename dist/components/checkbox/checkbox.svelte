<script lang="ts">
  import { checkboxVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import { type InputOpts, InputContext } from "../../index.js";
  import { box } from "svelte-utils";

  type Props = InputOpts &
    HTMLAttributes<HTMLDivElement> & {
      checked?: boolean;
    };

  let {
    checked = $bindable(false),
    indeterminate,
    invalid,
    disabled,
    required,
    name,
    fullWidth,
    variant,
    ...props
  }: Props = $props();

  InputContext.getOr([
    () => ({
      disabled,
      fullWidth,
      invalid,
      name,
      required,
      variant,
      indeterminate,
    }),
    undefined,
    box(
      () => checked,
      (v) => (checked = v),
    ),
  ]);
</script>

<div
  {...props}
  data-slot="checkbox"
  data-selected={checked}
  data-invalid={invalid}
  data-disabled={disabled}
  data-required={required}
  data-indeterminate={indeterminate}
  class={checkboxVariants().base({ variant, class: props.class?.toString() })}
>
  {@render props.children?.()}
</div>
