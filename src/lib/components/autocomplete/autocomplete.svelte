<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { Popover, AutocompleteContext, type AutocompleteOpts } from "#lib";
  import { box } from "svelte-utils";
  import { autocompleteVariants } from "@heroui/styles";

  type Props = HTMLAttributes<HTMLElement> &
    Partial<AutocompleteOpts> & {
      onSelected?: (keys: string[]) => any;
      selected?: string[];
    };

  let {
    selected = $bindable(),
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
      () => selected ?? [],
      (v) => (selected = v),
    ),
  );
</script>

<Popover {offset} {placement}>
  <div
    {...props}
    class={autocompleteVariants().base({
      fullWidth,
      variant,
      class: props.class?.toString(),
    })}
  >
    {@render props.children?.()}
  </div>
</Popover>
