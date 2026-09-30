<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { boxDerived, ModalContext, type ModalOpts } from "#lib";
  import { modalVariants } from "@heroui/styles";

  type Props = HTMLAttributes<HTMLDivElement> & ModalOpts;

  const {
    placement = "auto",
    scroll,
    size,
    variant = "blur",
    ...props
  }: Props = $props();

  new ModalContext(boxDerived(() => ({ placement, scroll, size, variant })));
</script>

<div {...props} class={modalVariants().base()}>
  {@render props.children?.()}
</div>
