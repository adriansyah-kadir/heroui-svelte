<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { searchFieldVariants } from "@heroui/styles";
  import InputState, { type InputOpts } from "../input/input.svelte.ts";
  import { boxDerivedObj } from "#lib/hooks/boxed.svelte.ts";
  import { untrack } from "svelte";

  type Props = InputOpts &
    HTMLAttributes<HTMLDivElement> & {
      debounce?: number;
      onValue?: (value: string) => any;
    };

  let {
    invalid = $bindable(),
    value = $bindable(),
    checked = $bindable(),
    disabled,
    required,
    name,
    mode = "input",
    fullWidth,
    variant,
    onValue,
    debounce = 300,
    ...props
  }: Props = $props();

  const input = new InputState(
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

  $effect(() => {
    const v = value ?? "";
    return untrack(() => {
      return clearTimeout.bind(
        null,
        setTimeout(() => {
          onValue?.(v);
        }, debounce),
      );
    });
  });
</script>

<div
  {...props}
  data-slot="search-field"
  data-disabled={disabled}
  data-required={required}
  data-invalid={invalid}
  data-empty={input.empty}
  class={searchFieldVariants(input.heroui).base({
    class: props.class?.toString(),
  })}
>
  {@render props.children?.()}
</div>
