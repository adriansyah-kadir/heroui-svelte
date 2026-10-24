<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { listboxVariants } from "@heroui/styles";
  import { type ListBoxOpts, ListBoxContext } from "../../index.js";
  import { box } from "svelte-utils";

  type Props = HTMLAttributes<HTMLDivElement> &
    Partial<ListBoxOpts> & {
      selected?: string[];
    };

  const id = $props.id();
  let {
    multiple,
    selected = $bindable([]),
    name = id,
    disabled,
    required,
    ...props
  }: Props = $props();

  ListBoxContext.getOr([
    () => ({ disabled, multiple, name, required }),
    box(
      () => selected,
      (v) => (selected = v),
    ),
  ]);
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
