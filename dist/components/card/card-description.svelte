<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { cardVariants } from "@heroui/styles";
  import { CardContext } from "./context.svelte";

  type Props = HTMLAttributes<HTMLDivElement>;

  const props: Props = $props();

  const ctx = CardContext.get();
</script>

<p
  {...props}
  data-slot="card-description"
  class={cardVariants().description({ ...ctx.opts, class: props.class?.toString() })}
>
  {@render props.children?.()}
</p>
