<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import {
    Popover,
    AutocompleteContext,
    type AutocompleteOpts,
  } from "../../index.js";
  import { box } from "svelte-utils";

  type Props = HTMLAttributes<HTMLElement> &
    Partial<AutocompleteOpts> & {
      onSelected?: (keys: string[]) => any;
      selected?: string[];
    };

  let {
    selected = $bindable([]),
    disabled,
    multiple,
    required,
    name,
    fullWidth,
    variant,
    invalid,
    onSelected,
    offset = 8,
    placement = "bottom",
    ...props
  }: Props = $props();

  new AutocompleteContext(
    () => ({
      offset,
      placement,
      disabled,
      fullWidth,
      invalid,
      multiple,
      name,
      required,
      variant,
    }),
    box(
      () => selected,
      (v) => (selected = v),
    ),
  );
</script>

<Popover {offset} {placement}>
  {@render props.children?.()}
</Popover>
