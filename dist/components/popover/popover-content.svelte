<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { popoverVariants } from "@heroui/styles";
  import PopoverContext from "./index.svelte";

  type Props = HTMLAttributes<HTMLDivElement>;

  const props: Props = $props();

  const ctx = PopoverContext.get();

  $inspect(ctx.opts.placement);
</script>

<div
  {...props}
  {...ctx.props}
  popover={props.popover ?? ""}
  {@attach ctx.popover.attach()}
  style:position-area={ctx.opts.placement}
  style:position-try-fallbacks={ctx.fallbackArea}
  style:--trigger-anchor-point={ctx.anchorPoint}
  style:margin={ctx.marginOffset}
  class={popoverVariants().base({
    class: [
      "overflow-visible",
      "transition-discrete transition-[display,overlay]",
      props.class?.toString(),
    ],
  })}
>
  {@render props.children?.()}
</div>
