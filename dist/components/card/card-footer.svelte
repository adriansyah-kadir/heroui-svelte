<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { cardVariants } from "@heroui/styles";
  import { CardContext } from "./context.svelte";

  type Props = HTMLAttributes<HTMLDivElement>;

  const props: Props = $props();

  const ctx = CardContext.get();
</script>

<div
  {...props}
  data-slot="card-footer"
  class={cardVariants().footer({ ...ctx.opts, class: props.class?.toString() })}
>
  {@render props.children?.()}
</div>
