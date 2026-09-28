<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { listboxVariants } from "@heroui/styles";
  import ListBoxState, { type ListBoxOpts } from "./list-box.svelte.ts";
  import { boxDerivedObj } from "#lib/hooks/boxed.svelte.ts";
  import { SvelteSet } from "svelte/reactivity";

  type Props = {
    onSelected?: (keys: string[]) => any;
  } & HTMLAttributes<HTMLDivElement> &
    ListBoxOpts;

  let {
    multiple,
    name,
    onSelected,
    disabled,
    selected = new SvelteSet<string>(),
    ...props
  }: Props = $props();

  ListBoxState.getOr(
    boxDerivedObj(() => ({ multiple, name, selected, disabled })),
  );

  $effect(() => {
    onSelected?.(selected?.values().toArray() ?? []);
  });
</script>

<div
  {...props}
  role="listbox"
  aria-multiselectable={multiple}
  data-slot="list-box"
  class={listboxVariants({ class: props.class?.toString() })}
>
  {@render props.children?.()}
</div>
