<script lang="ts">
  import { inputGroupVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import { type InputOpts, InputContext } from "#lib";
  import { box } from "svelte-utils";

  type Props = InputOpts &
    HTMLAttributes<HTMLDivElement> & {
      value?: any;
      checked?: boolean;
    };

  let {
    value = $bindable(),
    checked = $bindable(),
    invalid,
    disabled,
    required,
    name,
    fullWidth,
    variant,
    indeterminate,
    ...props
  }: Props = $props();

  const input = InputContext.getOr([
    () => ({
      disabled,
      fullWidth,
      indeterminate,
      invalid,
      name,
      required,
      variant,
    }),
    box(
      () => value,
      (v) => (value = v),
    ),
    box(
      () => !!checked,
      (v) => (checked = v),
    ),
  ]);
</script>

<div
  {...props}
  data-disabled={disabled}
  data-required={required}
  data-invalid={invalid}
  class={inputGroupVariants().base({
    ...input.heroui,
    class: props.class?.toString(),
  })}
>
  {@render props.children?.()}
</div>
