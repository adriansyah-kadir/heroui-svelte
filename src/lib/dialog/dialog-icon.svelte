<script lang="ts">
  import InfoIcon from "$lib/icons/info-icon.svelte";
  import { modalVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import { DialogContext } from "./utils.svelte";

  const { children = DefaultIcon, ...props }: HTMLAttributes<HTMLDivElement> =
    $props();

  const { variants } = DialogContext.get();
  const styles = $derived(modalVariants($variants));
</script>

<div
  {...props}
  class={[styles.icon(), "bg-background-tertiary text-foreground", props.class]}
  data-slot="alert-dialog-icon"
>
  {@render children?.()}
</div>

{#snippet DefaultIcon()}
  <InfoIcon data-slot="alert-dialog-default-icon" class="size-5" />
{/snippet}
