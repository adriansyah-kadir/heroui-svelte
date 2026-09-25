<script lang="ts">
  import ModalBackdrop from "./modal-backdrop.svelte";
  import ModalBase from "./modal-base.svelte";
  import ModalContainer from "./modal-container.svelte";
  import ModalDialog from "./modal-dialog.svelte";
  import ModalCloseTrigger from "./modal-close-trigger.svelte";
  import type { ModalVariants } from "@heroui/styles";
  import type { HTMLDialogAttributes } from "svelte/elements";

  interface Props extends HTMLDialogAttributes {
    placement?: "top" | "bottom" | "center" | "auto";
    scroll?: ModalVariants["scroll"];
    size?: ModalVariants["size"];
    variant?: ModalVariants["variant"];
    closeButton?: boolean;
  }

  const { children, closeButton, ...props }: Props = $props();
</script>

<ModalBase {...props} class="">
  <ModalBackdrop>
    <ModalContainer>
      <ModalDialog class={props.class}>
        {#if closeButton}
          <ModalCloseTrigger />
        {/if}
        {@render children?.()}
      </ModalDialog>
    </ModalContainer>
  </ModalBackdrop>
</ModalBase>
