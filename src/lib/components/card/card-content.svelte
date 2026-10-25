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
  data-slot="card-content"
  class={cardVariants().content({ ...ctx.opts, class: props.class?.toString() })}
>
  {@render props.children?.()}
</div>
