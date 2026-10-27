<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { listboxItemVariants } from "@heroui/styles";
  import { ListBoxItemContext } from "./index.svelte";

  let { ...props }: HTMLAttributes<HTMLDivElement> = $props();

  const ctx = ListBoxItemContext.get();
</script>

<div
  {...props}
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
    stroke-dashoffset={ctx.selected ? 44 : 66}
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width={2}
    viewBox="0 0 17 18"
  >
    <polyline points="1 9 7 14 15 4" />
  </svg>
</div>
