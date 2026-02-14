<script lang="ts">
  import { AlertDialog, type AlertDialogActionProps } from "bits-ui";
  import { buttonVariants, type ButtonVariants } from "@heroui/styles";
  import { AlertDialogContext } from "./utils";

  const {
    size,
    variant,
    isIconOnly,
    fullWidth,
    ...props
  }: AlertDialogActionProps & ButtonVariants = $props();
  const ctx = AlertDialogContext.get();
  const theme = $derived({
    variant:
      variant ?? ($ctx.theme?.status === "danger" ? "danger" : "primary"),
    size,
    fullWidth,
    isIconOnly,
  });
</script>

<AlertDialog.Action
  {...props}
  class={[buttonVariants(theme), "focus-visible:status-focused", props.class]}
/>
