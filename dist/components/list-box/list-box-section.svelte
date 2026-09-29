<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { listboxSectionVariants } from "@heroui/styles";

  const props: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div {...props} class={listboxSectionVariants()}>
  {@render props.children?.()}
</div>
