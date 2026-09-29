<script lang="ts">
  import { checkboxVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import { InputContext } from "#lib";

  type Props = HTMLAttributes<HTMLSpanElement>;

  const { ...props }: Props = $props();
  const input = InputContext.get();
</script>

<span
  {...props}
  data-slot="checkbox-indicator"
  class={checkboxVariants().indicator({
    variant: input.heroui.variant,
    class: props.class?.toString(),
  })}
>
  {#if input.opts.indeterminate}
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
      stroke-dashoffset={input.checked ? 44 : 66}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width={2}
      viewBox="0 0 17 18"
    >
      <polyline points="1 9 7 14 15 4" />
    </svg>
  {/if}
</span>
