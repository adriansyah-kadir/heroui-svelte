<script lang="ts">
  import type { DialogPortalProps } from "bits-ui";
  import type { DialogOverlayProps } from "bits-ui";
  import { Dialog } from "bits-ui";
  import { DialogContext } from "./utils.svelte";
  import { modalVariants } from "@heroui/styles";
  const {
    to,
    disabled,
    ...props
  }: DialogOverlayProps &
    DialogPortalProps = $props();
  const ctx = DialogContext.get();
  const theme = ctx.variants
  const heroui = $derived(modalVariants($theme));
</script>

<Dialog.Portal {to} {disabled}>
  <Dialog.Overlay
    {...props}
    class={[
      heroui.backdrop(),
      "data-[state=open]:animate-in",
      "data-[state=open]:fade-in",
      "data-[state=open]:ease-[cubic-bezier(0.25,1,0.5,1)]",
      "data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out",
      "data-[state=closed]:ease-[cubic-bezier(0.5,0,0.75,0)]",
      props.class,
    ]}
  />
</Dialog.Portal>
