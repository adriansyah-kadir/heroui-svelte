<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { listboxItemVariants } from "@heroui/styles";
  import { ListBoxContext } from "#lib";

  const {
    selected,
    ...props
  }: HTMLAttributes<HTMLDivElement> & {
    selected?: boolean;
  } = $props();

  let node = $state<HTMLElement>();
  const listBox = ListBoxContext.get();
  const parent = $derived<HTMLElement | null | undefined>(
    node?.closest(".list-box-item"),
  );
  const parentId = $derived(parent?.dataset.value);
  const picked = $derived(parentId ? listBox.itemSelected(parentId) : false);
</script>

<div
  {...props}
  bind:this={node}
  data-slot="list-box-item-indicator"
  class={listboxItemVariants().indicator({ class: props.class?.toString() })}
>
  <svg
    aria-hidden="true"
    data-slot="list-box-item-indicator--checkmark"
    fill="none"
    role="presentation"
    stroke="currentColor"
    stroke-dasharray={22}
    stroke-dashoffset={picked ? 44 : 66}
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width={2}
    viewBox="0 0 17 18"
  >
    <polyline points="1 9 7 14 15 4" />
  </svg>
</div>
