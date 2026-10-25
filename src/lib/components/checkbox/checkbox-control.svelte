<script lang="ts">
  import { checkboxVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import { InputContext } from "#lib";

  type Props = HTMLAttributes<HTMLSpanElement>;

  const props: Props = $props();

  const input = InputContext.get();
  const controlClass = $derived(
    checkboxVariants().control({
      variant: input.heroui.variant,
      class: props.class?.toString(),
    }),
  );
</script>

<span
  {...props}
  data-slot="checkbox-control"
  class={controlClass}
>
  {@render props.children?.()}
</span>
