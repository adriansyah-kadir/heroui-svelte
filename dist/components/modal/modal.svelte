<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { ModalContext, type ModalOpts } from "../../index.js";
  import { modalVariants } from "@heroui/styles";

  type Props = HTMLAttributes<HTMLDivElement> & ModalOpts;

  const {
    placement = "auto",
    scroll,
    size,
    variant = "blur",
    ...props
  }: Props = $props();

  new ModalContext(() => ({ placement, scroll, size, variant }));
</script>

<div {...props} class={modalVariants().base()}>
  {@render props.children?.()}
</div>
