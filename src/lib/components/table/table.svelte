<script lang="ts">
  import { tableVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import TableContext, { type TableOpts } from "./index.svelte";
  import { boxDerived } from "#lib/hooks/index.ts";

  type Props = HTMLAttributes<HTMLDivElement> & TableOpts;

  const { children, variant, ...props }: Props = $props();

  export const state = new TableContext(boxDerived(() => ({ variant })));
</script>

<div
  {...props}
  class={tableVariants().base({ variant, class: props.class?.toString() })}
>
  {@render children?.()}
</div>
