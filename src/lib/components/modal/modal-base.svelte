<script lang="ts">
  import type { HTMLDialogAttributes } from "svelte/elements";
  import { modalVariants, type ModalVariants } from "@heroui/styles";
  import { getViewport, ModalContext } from "#lib";

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

  const ctx = ModalContext.get();
  const viewport = getViewport();
</script>

<dialog
  {...props}
  {@attach ctx.dialog.attach()}
  style:--visual-viewport-height={viewport.height + "px"}
  class={modalVariants(ctx.heroui).base({
    class: [
      props.class?.toString(),
      "transition-discrete duration-200 transition-[display]",
    ],
  })}
>
  {@render props.children?.()}
</dialog>
