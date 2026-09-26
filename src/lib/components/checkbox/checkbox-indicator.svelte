<script lang="ts">
  import { checkboxVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import { getCheckboxProps } from "./checkbox-context";
  import { getInputState } from "../input/input-context";

  interface Props extends HTMLAttributes<HTMLSpanElement> {}

  const { ...props }: Props = $props();

  const { variant, indeterminate, selected } = $derived(getCheckboxProps());
  const input = getInputState();
</script>

<span
  {...props}
  data-slot="checkbox-indicator"
  class={checkboxVariants().indicator({
    variant,
    class: props.class?.toString(),
  })}
>
  {#if indeterminate}
    <svg
      aria-hidden="true"
      data-slot="checkbox-default-indicator--indeterminate"
      fill="none"
      role="presentation"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-width={3}
      viewBox="0 0 24 24"
    >
      <line x1="21" x2="3" y1="12" y2="12" />
    </svg>
  {:else}
    <svg
      aria-hidden="true"
      data-slot="checkbox-default-indicator--checkmark"
      fill="none"
      role="presentation"
      stroke="currentColor"
      stroke-dasharray={22}
      stroke-dashoffset={(selected ?? input.checked) ? 44 : 66}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width={2}
      viewBox="0 0 17 18"
    >
      <polyline points="1 9 7 14 15 4" />
    </svg>
  {/if}
</span>
