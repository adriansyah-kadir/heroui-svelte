<script lang="ts">
  import type { ComponentProps } from "svelte";
  import ModalBackdrop from "./modal-backdrop.svelte";
  import ModalContainer from "./modal-container.svelte";
  import ModalContent from "./modal-content.svelte";
  import ModalDialog from "./modal-dialog.svelte";

  const props: ComponentProps<typeof ModalContent> = $props();
</script>

<ModalContent {...props}>
  <ModalBackdrop>
    <ModalContainer>
      <ModalDialog>
        {@render props.children?.()}
      </ModalDialog>
    </ModalContainer>
  </ModalBackdrop>
</ModalContent>
