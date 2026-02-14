<script lang="ts">
  import { AlertDialog, type DialogCloseProps } from "bits-ui";
  import { closeButtonVariants, modalVariants } from "@heroui/styles";
  import { DialogContext } from "./utils.svelte";

  const { children, ...props }: DialogCloseProps = $props();
  const ctx = DialogContext.get();
  const variants = ctx.variants;
  const styles = $derived(modalVariants($variants));
</script>

{#snippet CloseIcon()}
  <svg
    aria-hidden="true"
    aria-label="Close icon"
    fill="none"
    height={16}
    role="presentation"
    viewBox="0 0 16 16"
    width={16}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      clip-rule="evenodd"
      d="M3.47 3.47a.75.75 0 0 1 1.06 0L8 6.94l3.47-3.47a.75.75 0 1 1 1.06 1.06L9.06 8l3.47 3.47a.75.75 0 1 1-1.06 1.06L8 9.06l-3.47 3.47a.75.75 0 0 1-1.06-1.06L6.94 8 3.47 4.53a.75.75 0 0 1 0-1.06Z"
      fill="currentColor"
      fill-rule="evenodd"
    />
  </svg>{/snippet}

<AlertDialog.Cancel
  {...props}
  class={[styles.closeTrigger(), closeButtonVariants(), props.class]}
  children={children ?? CloseIcon}
/>
