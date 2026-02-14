<script lang="ts">
  import { modalVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import { DialogContext } from "./utils.svelte";

  const {
    children,
    ...props
  }: HTMLAttributes<HTMLDivElement> = $props();
  const ctx = DialogContext.get();
  const variants = ctx.variants;
  const styles = $derived(modalVariants($variants));
</script>

<div
  {...props}
  data-placement={$ctx.placement ?? "auto"}
  class={[styles.dialog(), props.class]}
>
  {@render children?.()}
</div>

<style>
  :global(.modal__dialog--full), :global(.modal__dialog--cover) {
    height: fit-content !important;
  }
</style>
