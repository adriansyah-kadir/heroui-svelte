<script lang="ts">
  import { modalVariants } from "@heroui/styles";
  import { DialogContext } from "./utils.svelte";
  import { Dialog, type DialogContentProps } from "bits-ui";

  const { children, ...props }: DialogContentProps = $props();
  const ctx = DialogContext.get();
  const variants = ctx.variants;
  const styles = $derived(modalVariants($variants));
</script>

<Dialog.Content
  {...props}
  data-placement={$ctx.placement ?? "auto"}
  class={[
    styles.dialog(),
    "data-[state=open]:animate-in",
    "data-[state=open]:fade-in-0",
    "data-[state=open]:zoom-in-105",
    "data-[state=open]:slide-in-from-bottom-10",
    "data-[state=open]:ease-[cubic-bezier(0.25,1,0.5,1)]",
    "data-[state=closed]:animate-out",
    "data-[state=closed]:zoom-out-105",
    "data-[state=closed]:fade-out-0",
    "data-[state=closed]:slide-out-to-bottom-10",
    "data-[state=closed]:e2ase-[cubic-bezier(0.5,0,0.75,0)]",
    "data-nested-open:opacity-0",
    props.class,
  ]}
>
  {@render children?.()}
</Dialog.Content>

<style>
  :global(.modal__dialog--full),
  :global(.modal__dialog--cover) {
    height: fit-content !important;
  }
</style>
