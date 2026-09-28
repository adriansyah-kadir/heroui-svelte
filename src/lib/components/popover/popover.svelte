<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import type { PopoverOpts } from "./popover.svelte.ts";
  import PopoverContext from "./popover.svelte.ts";
  import { boxDerived } from "#lib/hooks/boxed.svelte.ts";

  type Props = HTMLAttributes<HTMLDivElement> & PopoverOpts;
  const { placement = "bottom", offset = 8, ...props }: Props = $props();

  new PopoverContext(boxDerived(() => ({ placement, offset })));
</script>

<div {...props}>
  {@render props.children?.()}
</div>
