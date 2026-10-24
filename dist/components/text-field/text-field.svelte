<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { textFieldVariants } from "@heroui/styles";
  import { type InputOpts, InputContext } from "../../index.js";
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
    ...props
  }: Props = $props();

  new InputContext(
    () => ({
      disabled,
      fullWidth,
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
  );
</script>

<div
  {...props}
  data-disabled={disabled}
  data-required={required}
  data-invalid={invalid}
  class={textFieldVariants({ fullWidth, class: props.class?.toString() })}
>
  {@render props.children?.()}
</div>
