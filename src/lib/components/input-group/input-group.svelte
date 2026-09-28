<script lang="ts">
  import { inputGroupVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import InputState, { type InputOpts } from "../input/input.svelte.ts";
  import { boxDerivedObj } from "#lib/hooks/boxed.svelte.ts";

  type Props = InputOpts & HTMLAttributes<HTMLDivElement>;

  let {
    invalid = $bindable(),
    value = $bindable(),
    checked = $bindable(),
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
      }),
      (v) => ({ invalid, value, checked } = v),
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
