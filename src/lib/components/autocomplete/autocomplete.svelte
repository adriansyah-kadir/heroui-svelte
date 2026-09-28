<script lang="ts">
  import { autocompleteVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import AutocompleteState, {
    type AutocompleteOpts,
  } from "./autocomplete.svelte.ts";
  import { boxDerivedObj } from "#lib/hooks/boxed.svelte.ts";
  import { SvelteSet } from "svelte/reactivity";

  type Props = HTMLAttributes<HTMLElement> &
    AutocompleteOpts & {
      onSelected?: (keys: string[]) => any;
    };

  let {
    disabled,
    multiple,
    required,
    name,
    selected = new SvelteSet<string>(),
    fullWidth,
    variant,
    invalid,
    onSelected,
    ...props
  }: Props = $props();

  const autocomplete = new AutocompleteState(
    boxDerivedObj(() => ({
      disabled,
      fullWidth,
      invalid,
      multiple,
      required,
      variant,
      selected,
    })),
  );

  $effect(() => {
    onSelected?.(selected.values().toArray());
  });
</script>

<div
  {...props}
  {...autocomplete.props}
  class={autocompleteVariants(autocomplete.heroui).base({
    class: props.class?.toString(),
  })}
>
  {@render props.children?.()}
</div>
