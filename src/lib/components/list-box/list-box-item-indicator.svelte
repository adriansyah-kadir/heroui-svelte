<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { listboxItemVariants } from "@heroui/styles";
  import { ListBoxContext } from "./index.svelte";

  let { ...props }: HTMLAttributes<HTMLDivElement> = $props();

  let node = $state<HTMLElement>();
  const ctx = ListBoxContext.get();
  const input = $derived(
    node?.closest(".list-box-item")?.querySelector("input"),
  );
  const selected = $derived(input && ctx.isSelected(input.value));
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
    stroke-dashoffset={selected ? 44 : 66}
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width={2}
    viewBox="0 0 17 18"
  >
    <polyline points="1 9 7 14 15 4" />
  </svg>
</div>
