<script lang="ts">
  import { AlertDialog, type AlertDialogTriggerProps } from "bits-ui";
  import {
    alertDialogVariants,
    buttonVariants,
    type ButtonVariants,
  } from "@heroui/styles";
  import { AlertDialogContext } from "./utils";

  const {
    fullWidth,
    isIconOnly,
    variant,
    size,
    ...props
  }: AlertDialogTriggerProps & ButtonVariants = $props();

  const ctx = AlertDialogContext.get();
  const styles = $derived(alertDialogVariants($ctx.theme));
  const theme = $derived({
    fullWidth,
    isIconOnly,
    variant,
    size,
  });
</script>

<AlertDialog.Trigger
  {...props}
  class={[
    styles.trigger(),
    buttonVariants(theme),
    "focus-visible:status-focused",
    {
      "bg-accent-soft text-accent-soft-foreground":
        ($ctx.theme?.status ?? "default") === "accent",
      "bg-success-soft text-success-soft-foreground":
        ($ctx.theme?.status ?? "default") === "success",
      "bg-warning-soft text-warning-soft-foreground":
        ($ctx.theme?.status ?? "default") === "warning",
      "bg-danger-soft text-danger-soft-foreground":
        ($ctx.theme?.status ?? "default") === "danger",
    },
    props.class,
  ]}
/>
