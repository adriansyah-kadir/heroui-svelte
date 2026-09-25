<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { getListBoxCombobox } from "./list-box-context.svelte";
  import { listboxItemVariants } from "@heroui/styles";

  const {
    selected,
    ...props
  }: HTMLAttributes<HTMLDivElement> & {
    selected?: boolean;
  } = $props();

  let node = $state<HTMLElement>();
  const combobox = getListBoxCombobox();
  const parent = $derived(node?.closest(".list-box-item"));
  const parentId = $derived(parent?.id);
  const picked = $derived(parentId ? combobox.picked(parentId) : false);
</script>

<div
  {...props}
  bind:this={node}
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
