<script lang="ts">
  import { checkboxVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import { getCheckboxProps } from "./checkbox-context";

  interface Props extends HTMLAttributes<HTMLSpanElement> {}

  const { ...props }: Props = $props();

  const { variant } = getCheckboxProps();
</script>

<span
  {...props}
  data-slot="checkbox-control"
  class={checkboxVariants().control({
    variant,
    class: props.class?.toString(),
  })}
>
  {@render props.children?.()}
</span>
