<script lang="ts">
  import { checkboxVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import InputState, { type InputOpts } from "../input/input.svelte.ts";
  import { boxDerived } from "#lib/hooks/boxed.svelte.ts";

  type Props = InputOpts & HTMLAttributes<HTMLDivElement>;

  let {
    checked = $bindable(),
    indeterminate,
    invalid,
    disabled,
    required,
    name,
    fullWidth,
    variant,
    ...props
  }: Props = $props();

  InputState.getOr(
    boxDerived(
      () => ({
        checked,
        disabled,
        fullWidth,
        invalid,
        name,
        required,
        variant,
        indeterminate,
      }),
      (v) => ({ checked } = v),
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
