<script lang="ts">
  import { inputGroupVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import { type InputOpts, InputContext, boxDerived } from "#lib";

  type Props = InputOpts & HTMLAttributes<HTMLDivElement>;

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

  const input = InputContext.getOr(
    boxDerived(
      () => ({
        checked,
        disabled,
        fullWidth,
        invalid,
        name,
        required,
        value,
        variant,
      }),
      (v) => ({ value, checked } = v),
    ),
  );
</script>

<div
  {...props}
  data-disabled={disabled}
  data-required={required}
  data-invalid={invalid}
  class={inputGroupVariants(input.heroui).base({
    class: props.class?.toString(),
  })}
>
  {@render props.children?.()}
</div>
