<script lang="ts">
  import type { HTMLDialogAttributes } from "svelte/elements";
  import { modalVariants } from "@heroui/styles";
  import { getViewport, ModalContext } from "#lib";

  type Props = HTMLDialogAttributes;

  const props: Props = $props();

  const ctx = ModalContext.get();

  const viewport = getViewport();
</script>

<dialog
  {...props}
  {@attach ctx.dialog.attach()}
  style:--visual-viewport-height={viewport.height + "px"}
  data-entering={ctx.dialog.open}
  data-exiting={ctx.dialog.closed}
  class={modalVariants(ctx.heroui).base({
    class: [
      props.class?.toString(),
      "transition-discrete duration-200 transition-[display]",
    ],
  })}
>
  {@render props.children?.()}
</dialog>
