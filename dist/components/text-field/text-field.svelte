<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { textFieldVariants } from "@heroui/styles";
  import { type InputOpts, type InputValue, InputContext } from "../../index.js";
  import { box } from "svelte-utils";

  type Props = InputOpts &
    HTMLAttributes<HTMLDivElement> & {
      value?: InputValue;
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

  const input = new InputContext(
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

  const className = $derived(
    textFieldVariants({
      fullWidth: input.opts.fullWidth,
      class: props.class?.toString(),
    }),
  );
</script>

<div
  {...props}
  data-disabled={input.opts.disabled}
  data-required={input.opts.required}
  data-invalid={input.opts.invalid}
  class={className}
>
  {@render props.children?.()}
</div>
