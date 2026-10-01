<script lang="ts">
  import { autocompleteVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import {
    boxDerived,
    Popover,
    AutocompleteContext,
    type AutocompleteOpts,
  } from "#lib";
  import { SvelteSet } from "svelte/reactivity";

  type Props = HTMLAttributes<HTMLElement> &
    Partial<AutocompleteOpts> & {
      onSelected?: (keys: string[]) => any;
    };

  let {
    disabled,
    multiple,
    required,
    name,
    selected = new SvelteSet(),
    fullWidth,
    variant,
    invalid,
    onSelected,
    offset = 8,
    placement = "bottom",
    ...props
  }: Props = $props();

  const autocomplete = new AutocompleteContext(
    boxDerived(() => ({
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
    })),
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
