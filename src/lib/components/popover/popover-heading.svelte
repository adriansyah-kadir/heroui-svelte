<script lang="ts">
  import { popoverVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";

  const props: HTMLAttributes<HTMLParagraphElement> = $props();
</script>

<p
  {...props}
  class={popoverVariants().heading({
    class: [props.class?.toString()],
  })}
>
  {@render props.children?.()}
</p>
