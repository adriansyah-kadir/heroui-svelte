<script lang="ts">
  import { autocompleteVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import AutocompleteState, {
    type AutocompleteOpts,
  } from "./autocomplete.svelte.ts";
  import { boxDerived } from "#lib/hooks/boxed.svelte.ts";
  import Popover from "../popover/popover.svelte";

  type Props = HTMLAttributes<HTMLElement> &
    AutocompleteOpts & {
      onSelected?: (keys: string[]) => any;
    };

  let {
    disabled,
    multiple,
    required,
    name,
    selected = $bindable([]),
    fullWidth,
    variant,
    invalid,
    onSelected,
    offset,
    placement,
    ...props
  }: Props = $props();

  const autocomplete = new AutocompleteState(
    boxDerived(
      () => ({
        offset,
        placement,
        selected,
        disabled,
        fullWidth,
        invalid,
        multiple,
        name,
        required,
        variant,
      }),
      (v) => ({ selected } = v),
    ),
  );
</script>

<Popover
  {...props}
  {...autocomplete.props}
  {offset}
  {placement}
  class={autocompleteVariants(autocomplete.heroui).base({
    class: props.class?.toString(),
  })}
>
  {@render props.children?.()}
</Popover>
