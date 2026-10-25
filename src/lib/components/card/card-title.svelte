<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { cardVariants } from "@heroui/styles";
  import { CardContext } from "./context.svelte";

  type Props = HTMLAttributes<HTMLElement>;

  const props: Props = $props();

  const ctx = CardContext.get();
</script>

<h3
  {...props}
  data-slot="card-title"
  class={cardVariants().title({ ...ctx.opts, class: props.class?.toString() })}
>
  {@render props.children?.()}
</h3>
