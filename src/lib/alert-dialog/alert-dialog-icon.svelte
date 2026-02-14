<script lang="ts">
  import DangerIcon from "$lib/icons/danger-icon.svelte";
  import InfoIcon from "$lib/icons/info-icon.svelte";
  import SuccessIcon from "$lib/icons/success-icon.svelte";
  import WarningIcon from "$lib/icons/warning-icon.svelte";
  import { alertDialogVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import { AlertDialogContext } from "./utils";

  const { children = DefaultIcon, ...props }: HTMLAttributes<HTMLDivElement> =
    $props();

  const ctx = AlertDialogContext.get();
  const styles = $derived(alertDialogVariants($ctx.theme));
</script>

<div
  {...props}
  class={[styles.icon(), props.class]}
  data-slot="alert-dialog-icon"
>
  {@render children?.()}
</div>

{#snippet DefaultIcon()}
  {#if $ctx.theme?.status === "default"}
    <InfoIcon data-slot="alert-dialog-default-icon" />
  {:else if $ctx.theme?.status === "accent"}
    <InfoIcon data-slot="alert-dialog-default-icon" />
  {:else if $ctx.theme?.status === "success"}
    <SuccessIcon data-slot="alert-dialog-default-icon" />
  {:else if $ctx.theme?.status === "warning"}
    <WarningIcon data-slot="alert-dialog-default-icon" />
  {:else if $ctx.theme?.status === "danger"}
    <DangerIcon data-slot="alert-dialog-default-icon" />
  {:else}
    <InfoIcon data-slot="alert-dialog-default-icon" />
  {/if}
{/snippet}
