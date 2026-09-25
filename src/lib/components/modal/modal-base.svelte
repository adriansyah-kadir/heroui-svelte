<script lang="ts">
  import type { HTMLDialogAttributes } from "svelte/elements";
  import { modalVariants, type ModalVariants } from "@heroui/styles";
  import getViewport from "#lib/hooks/get-viewport.svelte.ts";
  import { getModalProps } from "./modal-context.svelte";

  interface Props extends HTMLDialogAttributes {
    placement?: "top" | "bottom" | "center" | "auto";
    scroll?: ModalVariants["scroll"];
    size?: ModalVariants["size"];
    variant?: ModalVariants["variant"];
  }

  const {
    scroll,
    size,
    variant = "blur",
    placement = "auto",
    ...props
  }: Props = $props();

  const ctx = getModalProps(() => ({ scroll, size, placement, variant }));
  const viewport = getViewport();
</script>

<dialog
  {...props}
  style:--visual-viewport-height={viewport.height + "px"}
  class={modalVariants(ctx.current).base({
    class: [
      props.class?.toString(),
      "transition-discrete duration-200 transition-[display]",
    ],
  })}
>
  {@render props.children?.()}
</dialog>
