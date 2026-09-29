<script lang="ts">
  import { popoverVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";

  const props: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
  {...props}
  class={popoverVariants().dialog({ class: props.class?.toString() })}
>
  {@render props.children?.()}
</div>
