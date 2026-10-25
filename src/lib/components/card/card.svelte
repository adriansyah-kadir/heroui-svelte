<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import {
    cardVariants,
    type CardVariants,
  } from "@heroui/styles";
  import { CardContext } from "./context.svelte";

  type Props = HTMLAttributes<HTMLDivElement> & CardVariants;

  const props: Props = $props();

  new CardContext(() => props);
</script>

<div
  {...props}
  data-slot="label"
  class={cardVariants().base({ ...props, class: props.class?.toString() })}
>
  {@render props.children?.()}
</div>
