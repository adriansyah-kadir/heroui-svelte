<script lang="ts">
  import { checkboxVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import InputState from "../input/input.svelte.ts";

  type Props = HTMLAttributes<HTMLSpanElement>;

  const props: Props = $props();

  const input = InputState.get();
</script>

<span
  {...props}
  data-slot="checkbox-control"
  class={checkboxVariants().control({
    variant: input.heroui.variant,
    class: props.class?.toString(),
  })}
>
  {@render props.children?.()}
</span>
