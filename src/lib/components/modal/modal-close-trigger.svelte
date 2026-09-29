<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";
  import { modalVariants } from "@heroui/styles";
  import { ModalContext, CloseButton } from "#lib";

  const props: HTMLButtonAttributes = $props();

  const ctx = ModalContext.get();
  const dialog = ctx.dialog;
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
    class={modalVariants(ctx.heroui).closeTrigger({
      class: props.class?.toString(),
    })}
  >
    {@render props.children()}
  </button>
{:else}
  <CloseButton
    {@attach dialog.attach()}
    onclick={onClick}
    class={modalVariants(ctx.heroui).closeTrigger({
      class: props.class?.toString(),
    })}
  />
{/if}
