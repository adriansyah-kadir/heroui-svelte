<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { listboxVariants } from "@heroui/styles";
  import ListBoxState, { type ListBoxOpts } from "./list-box.svelte.ts";
  import { boxDerivedObj } from "#lib/hooks/boxed.svelte.ts";

  type Props = {
    onvalue?: (values: [string, string][]) => any;
  } & HTMLAttributes<HTMLDivElement> &
    ListBoxOpts;

  let {
    multiple,
    name,
    onvalue,
    disabled,
    selected = $bindable(),
    ...props
  }: Props = $props();

  const listBox = ListBoxState.getOr(
    boxDerivedObj(
      () => ({ multiple, name, selected, disabled }),
      (v) => ({ selected } = v),
    ),
  );

  $effect(() => {
    onvalue?.(selected ?? []);
  });
</script>

<div
  {...props}
  role="listbox"
  aria-multiselectable={listBox.combobox.multiple}
  data-slot="list-box"
  class={listboxVariants({ class: props.class?.toString() })}
>
  {@render props.children?.()}
</div>
