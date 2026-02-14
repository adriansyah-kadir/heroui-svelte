<script lang="ts">
  import { AlertDialog, type AlertDialogContentProps } from "bits-ui";
  import {
    alertDialogVariants,
    type AlertDialogVariants,
  } from "@heroui/styles";
  import { AlertDialogContext } from "./utils";

  const {
    size,
    status,
    variant,
    ...props
  }: AlertDialogContentProps & AlertDialogVariants = $props();
  const ctx = AlertDialogContext.get();
  const theme = $derived({ size, status, variant });
  const styles = alertDialogVariants($ctx.theme);
</script>

<AlertDialog.Content
  {...props}
  class={[
    styles.container(theme),
    "data-[state=open]:animate-in",
    "data-[state=open]:fade-in-0",
    "data-[state=open]:zoom-in-105",
    "data-[state=open]:slide-in-from-bottom-4",
    "data-[state=open]:ease-[cubic-bezier(0.25,1,0.5,1)]",
    "data-[state=closed]:animate-out",
    "data-[state=closed]:zoom-out-95",
    "data-[state=closed]:fade-out-0",
    "data-[state=closed]:slide-out-to-bottom-2",
    "data-[state=closed]:ease-[cubic-bezier(0.5,0,0.75,0)]",
    props.class,
  ]}
/>
