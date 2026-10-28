<script lang="ts">
  import { inputGroupVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import { type InputOpts, type InputValue, InputContext } from "#lib";
  import { box } from "@adriansyah/svelte-utils";

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
    indeterminate,
    ...props
  }: Props = $props();

  const input = new InputContext(
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
  );

  const className = $derived(
    inputGroupVariants().base({
      ...input.heroui,
      class: props.class?.toString(),
    }),
  );
</script>

<div
  {...props}
  data-disabled={input.opts.disabled}
  data-required={input.opts.required}
  data-invalid={input.opts.invalid}
  data-empty={input.empty}
  class={className}
>
  {@render props.children?.()}
</div>
