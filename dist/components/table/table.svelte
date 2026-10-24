<script lang="ts">
  import { tableVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import TableContext, { type TableOpts } from "./index.svelte";

  type Props = HTMLAttributes<HTMLDivElement> & TableOpts;

  const { children, variant, ...props }: Props = $props();

  export const state = new TableContext(() => ({ variant }));
</script>

<div
  {...props}
  class={tableVariants().base({ variant, class: props.class?.toString() })}
>
  {@render children?.()}
</div>
