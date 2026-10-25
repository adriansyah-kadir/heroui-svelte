<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { ButtonGroupContext, type ButtonGroupOpts } from "./context.svelte";
  import { buttonGroupVariants } from "@heroui/styles";

  type Props = ButtonGroupOpts & HTMLAttributes<HTMLDivElement>;
  const props: Props = $props();

  const ctx = new ButtonGroupContext(() => props);
</script>

<div
  {...props}
  class={buttonGroupVariants().base({
    ...ctx.opts,
    class: props.class?.toString(),
  })}
>
  {@render props.children?.()}
</div>
