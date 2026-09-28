<script lang="ts">
  import { inputVariants } from "@heroui/styles";
  import type { HTMLInputAttributes } from "svelte/elements";
  import InputState, { type InputOpts } from "./input.svelte.ts";
  import { boxDerivedObj } from "#lib/hooks/boxed.svelte.ts";

  type Props = {
    onValue?: (value: string) => any;
    headless?: boolean;
  } & InputOpts &
    HTMLInputAttributes;

  let {
    value = $bindable(),
    checked = $bindable(),
    invalid = $bindable(),
    fullWidth,
    variant,
    disabled,
    required,
    name,
    mode,
    onValue,
    headless,
    ...props
  }: Props = $props();

  const input = InputState.getOr(
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

<input
  {...props}
  {...input.props}
  {@attach input.attach()}
  class={headless
    ? props.class
    : inputVariants({
        ...input.heroui,
        class: props.class?.toString(),
      })}
/>
