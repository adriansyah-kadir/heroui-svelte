<script lang="ts">
  import { getModalProps } from "./modal-context.svelte";
  import type { HTMLButtonAttributes } from "svelte/elements";
  import CloseButton from "../close-button/close-button.svelte";
  import DialogState from "#lib/hooks/dialog.svelte.ts";
  import { modalVariants } from "@heroui/styles";

  const props: HTMLButtonAttributes = $props();

  const ctx = getModalProps();
  const dialog = new DialogState();
  const onClick = (ev: MouseEvent & { currentTarget: HTMLButtonElement }) => {
    dialog.close?.();
    props.onclick?.(ev);
  };
</script>

{#if props.children}
  <button
    {...props}
    {@attach dialog.attach()}
    onclick={onClick}
    class={modalVariants(ctx.current).closeTrigger({
      class: props.class?.toString(),
    })}
  >
    {@render props.children()}
  </button>
{:else}
  <CloseButton
    {@attach dialog.attach()}
    onclick={onClick}
    class={modalVariants(ctx.current).closeTrigger({
      class: props.class?.toString(),
    })}
  />
{/if}
