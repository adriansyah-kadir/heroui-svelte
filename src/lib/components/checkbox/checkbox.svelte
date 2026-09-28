<script lang="ts">
  import { checkboxVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import InputState, { type InputOpts } from "../input/input.svelte.ts";
  import { boxDerivedObj } from "#lib/hooks/boxed.svelte.ts";

  type Props = InputOpts & HTMLAttributes<HTMLDivElement>;

  let {
    invalid = $bindable(),
    value = $bindable(),
    checked = $bindable(),
    indeterminate,
    disabled,
    required,
    name,
    mode,
    fullWidth,
    variant,
    ...props
  }: Props = $props();

  InputState.getOr(
    boxDerivedObj(
      () => ({
        checked,
        disabled,
        fullWidth,
        invalid,
        mode,
        name,
        required,
        value,
        variant,
        indeterminate,
      }),
      (v) => ({ invalid, value, checked } = v),
    ),
  );
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
