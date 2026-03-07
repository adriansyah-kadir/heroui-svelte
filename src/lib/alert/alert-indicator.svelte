<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { cn, type WithElementRef } from "$lib/utils.js";
  import { alertVariants } from "@heroui/styles";
  import { InfoIcon } from "@lucide/svelte";

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
  const icon = $derived(children ?? DefaultIcon);
</script>

<div
  bind:this={ref}
  data-slot="alert-indicator"
  class={cn(alertVariants().indicator(), className)}
  {...restProps}
>
  {@render icon()}
</div>

{#snippet DefaultIcon()}
  <InfoIcon />
{/snippet}
