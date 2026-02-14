<!-- svelte-ignore state_referenced_locally -->
<script lang="ts">
  import { AlertDialog } from "bits-ui";
  import { type AlertDialogVariants } from "@heroui/styles";
  import { writable } from "svelte/store";
  import { AlertDialogContext } from "./utils";

  type Props = AlertDialog.RootProps & AlertDialogVariants;

  let {
    size,
    status = "default",
    variant = "blur",
    open = $bindable(false),
    ...props
  }: Props = $props();
  const theme = $derived({ size, status, variant });
  const ctx = AlertDialogContext.set(writable({ theme }));

  $effect(() => {
    $ctx.theme = theme;
  });
</script>

<AlertDialog.Root {...props} bind:open />
