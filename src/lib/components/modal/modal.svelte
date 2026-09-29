<script lang="ts">
  import type { HTMLDialogAttributes } from "svelte/elements";
  import {
    ModalBackdrop,
    ModalBase,
    ModalContainer,
    ModalDialog,
    ModalCloseTrigger,
    ModalContext,
    type ModalOpts,
    boxDerived,
  } from "#lib";

  type Props = HTMLDialogAttributes &
    ModalOpts & {
      closeButton?: boolean;
    };

  const {
    children,
    closeButton,
    placement,
    scroll,
    size,
    variant,
    ...props
  }: Props = $props();

  new ModalContext(boxDerived(() => ({ placement, scroll, size, variant })));
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
