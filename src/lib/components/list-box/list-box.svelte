<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { listboxVariants } from "@heroui/styles";
  import ListBoxState, { type ListBoxOpts } from "./list-box.svelte.ts";
  import { boxDerived } from "#lib/hooks/boxed.svelte.ts";

  type Props = HTMLAttributes<HTMLDivElement> & Partial<ListBoxOpts>;

  let {
    multiple,
    name,
    disabled,
    selected = $bindable([]),
    required,
    ...props
  }: Props = $props();

  export const ctx = new ListBoxState(
    boxDerived(
      () => ({ selected, disabled, multiple, name, required }),
      (v) => ({ selected } = v),
    ),
  );
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
