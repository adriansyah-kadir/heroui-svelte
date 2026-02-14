<script lang="ts">
  import {
    descriptionVariants,
    type DescriptionVariants,
  } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";

  let {
    children,
    ...props
  }: HTMLAttributes<HTMLSpanElement> & DescriptionVariants = $props();
</script>

<span
  {...props}
  data-slot="description"
  class={[descriptionVariants(), props.class]}
>
  {@render children?.()}
</span>
