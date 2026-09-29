<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { textFieldVariants } from "@heroui/styles";
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

  new InputState(
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
  class={textFieldVariants({ fullWidth, class: props.class?.toString() })}
>
  {@render props.children?.()}
</div>
