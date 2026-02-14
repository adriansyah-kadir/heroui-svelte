<script lang="ts">
  import { Dialog, type DialogRootProps } from "bits-ui";
  import { dialogContext, DialogContext } from "./utils.svelte";

  let {
    size = "md",
    scroll = "inside",
    variant = "blur",
    placement = "auto",
    open = $bindable(false),
    ...props
  }: DialogRootProps & DialogContext = $props();

  // svelte-ignore state_referenced_locally
  const ctx = DialogContext.set(
    dialogContext({ size, scroll, variant, placement, open }),
  );

  $effect(() => {
    $ctx = { size, scroll, variant, open, placement };
  });
</script>

<Dialog.Root bind:open {...props} />
