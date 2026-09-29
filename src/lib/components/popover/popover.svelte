<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import type { PopoverOpts } from "./index.svelte";
  import PopoverContext from "./index.svelte";
  import { boxDerived } from "#lib/hooks/index.ts";

  type Props = HTMLAttributes<HTMLDivElement> & PopoverOpts;
  const {
    placement = "bottom",
    offset = 8,
    ...props
  }: Partial<Props> = $props();

  new PopoverContext(boxDerived(() => ({ placement, offset })));
</script>

<div {...props}>
  {@render props.children?.()}
</div>
