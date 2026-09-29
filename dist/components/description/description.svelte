<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { descriptionVariants } from "@heroui/styles";

  interface Props extends HTMLAttributes<HTMLParagraphElement> {}

  const { ...props }: Props = $props();
</script>

<p
  {...props}
  data-slot="description"
  class={descriptionVariants({ class: props.class?.toString() })}
>
  {@render props.children?.()}
</p>
