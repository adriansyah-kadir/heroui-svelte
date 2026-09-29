<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import type { PopoverOpts } from "./index.svelte.ts";
  import PopoverContext from "./index.svelte.ts";
  import { boxDerived } from "#lib/hooks/boxed.svelte.ts";

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
