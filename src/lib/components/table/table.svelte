<script lang="ts">
  import { tableVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import TableContext, { type TableOpts } from "./table.svelte.ts";
  import { boxDerived } from "#lib/hooks/boxed.svelte.ts";

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
