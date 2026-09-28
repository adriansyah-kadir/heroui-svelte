<script lang="ts">
  import { inputGroupVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import InputState, { type InputOpts } from "../input/input.svelte.ts";
  import { boxDerived } from "#lib/hooks/boxed.svelte.ts";

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

  InputState.getOr(
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
  class={inputGroupVariants({
    variant,
    fullWidth,
    class: props.class?.toString(),
  }).base()}
>
  {@render props.children?.()}
</div>
