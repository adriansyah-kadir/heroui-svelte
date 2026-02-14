<script lang="ts">
  import { modalVariants } from "@heroui/styles";
  import { Dialog, type DialogContentProps } from "bits-ui";
  import { DialogContext } from "./utils.svelte";

  const props: DialogContentProps = $props();
  const ctx = DialogContext.get();
  const theme = ctx.variants
  const heroui = $derived(modalVariants($theme));
</script>

<Dialog.Content
  {...props}
  class={[
    heroui.container(),
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
