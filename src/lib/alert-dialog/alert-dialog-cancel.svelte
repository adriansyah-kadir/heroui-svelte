<script lang="ts">
  import { AlertDialog, type AlertDialogCancelProps } from "bits-ui";
  import { buttonVariants, type ButtonVariants } from "@heroui/styles";

  const {
    variant,
    size,
    fullWidth,
    isIconOnly,
    ...props
  }: AlertDialogCancelProps & ButtonVariants = $props();
  const theme = $derived({
    variant: variant ?? "tertiary",
    size,
    fullWidth,
    isIconOnly,
  });
</script>

<AlertDialog.Cancel
  {...props}
  class={[buttonVariants(theme), "focus-visible:status-focused", , props.class]}
/>
