<script lang="ts">
  import { AlertDialog, type AlertDialogOverlayProps } from "bits-ui";
  import {
    alertDialogVariants,
    type AlertDialogVariants,
  } from "@heroui/styles";
  import { AlertDialogContext } from "./utils";

  const {
    status,
    variant,
    size,
    ...props
  }: AlertDialogOverlayProps & AlertDialogVariants = $props();
  const ctx = AlertDialogContext.get();
  const theme = $derived({ status, variant, size });
  const styles = $derived(alertDialogVariants($ctx.theme));
</script>

<AlertDialog.Portal>
  <AlertDialog.Overlay
    {...props}
    class={[
      styles.backdrop(theme),
      "data-[state=open]:animate-in",
      "data-[state=open]:fade-in",
      "data-[state=open]:ease-[cubic-bezier(0.25,1,0.5,1)]",
      "data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out",
      "data-[state=closed]:ease-[cubic-bezier(0.5,0,0.75,0)]",
      props.class,
    ]}
  />
</AlertDialog.Portal>
