<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { searchFieldVariants } from "@heroui/styles";
  import { untrack } from "svelte";
  import { type InputOpts, InputContext, boxDerived } from "#lib";

  type Props = Omit<InputOpts, "checked"> &
    HTMLAttributes<HTMLDivElement> & {
      debounce?: number;
      debounced?: string;
      onValue?: (value: string) => any;
    };

  let {
    value = $bindable(),
    invalid,
    disabled,
    required,
    name,
    fullWidth,
    variant,
    onValue,
    debounce = 300,
    debounced = $bindable(),
    ...props
  }: Props = $props();

  const input = new InputContext(
    boxDerived(
      () => ({
        disabled,
        fullWidth,
        invalid,
        name,
        required,
        value,
        variant,
      }),
      (v) => ({ value } = v),
    ),
  );

  $effect(() => {
    const v = value ?? "";
    return untrack(() => {
      return clearTimeout.bind(
        null,
        setTimeout(() => {
          onValue?.(v);
          debounced = v;
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
