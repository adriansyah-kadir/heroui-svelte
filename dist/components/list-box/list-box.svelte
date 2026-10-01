<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { listboxVariants } from "@heroui/styles";
  import { type ListBoxOpts, ListBoxContext, boxDerived } from "#lib";
  import { SvelteSet } from "svelte/reactivity";

  type Props = HTMLAttributes<HTMLDivElement> & Partial<ListBoxOpts>;

  let {
    multiple,
    name,
    disabled,
    selected = new SvelteSet(),
    required,
    ...props
  }: Props = $props();

  export const ctx = ListBoxContext.getOr(
    boxDerived(() => ({ selected, disabled, multiple, name, required })),
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
