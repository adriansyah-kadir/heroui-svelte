<script lang="ts">
  import { surfaceVariants, type SurfaceVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";

  type Props = SurfaceVariants & HTMLAttributes<HTMLDivElement>;

  const { variant, ...props }: Props = $props();
</script>

<div
  {...props}
  class={surfaceVariants({ variant, class: props.class?.toString() })}
>
  {@render props.children?.()}
</div>
