<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import {
    listboxItemVariants,
    type ListBoxItemVariants,
  } from "@heroui/styles";
  import { ListBoxItemContext } from "./utils";

  const {
    variant,
    children,
    selected,
    ...props
  }: HTMLAttributes<HTMLSpanElement> &
    ListBoxItemVariants & { selected?: boolean } = $props();

  const ctx = ListBoxItemContext.getOr(undefined);
</script>

<span
  {...props}
  data-visible={selected ?? $ctx?.selected}
  aria-hidden="true"
  data-slot="list-box-item-indicator"
  class={[listboxItemVariants({}).indicator()]}
  ><svg
    aria-hidden="true"
    data-slot="list-box-item-indicator--checkmark"
    fill="none"
    role="presentation"
    stroke="currentColor"
    stroke-dasharray="22"
    stroke-dashoffset={(selected ?? $ctx?.selected) ? "44" : "66"}
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    viewBox="0 0 17 18"><polyline points="1 9 7 14 15 4"></polyline></svg
  ></span
>
