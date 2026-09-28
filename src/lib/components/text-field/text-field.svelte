<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { textFieldVariants } from "@heroui/styles";
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

  new InputState(
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
  class={textFieldVariants({ fullWidth, class: props.class?.toString() })}
>
  {@render props.children?.()}
</div>
