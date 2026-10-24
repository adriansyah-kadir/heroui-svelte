<script lang="ts">
  import { PopoverContext, type PopoverContextOpts } from "./index.svelte";
  import { box } from "svelte-utils";
  import type { Snippet } from "svelte";

  type Props = Omit<PopoverContextOpts, "open" | "fallbackAnchor"> & {
    open?: boolean;
    fallbackAnchor?: HTMLElement;
    children?: Snippet;
  };

  let {
    open = $bindable(false),
    fallbackAnchor,
    placement = "bottom",
    offset = 8,
    children,
  }: Partial<Props> = $props();

  export const context = new PopoverContext(
    () => ({
      fallbackAnchor,
      offset,
      placement,
    }),
    box(
      () => open,
      (v) => (open = v),
    ),
  );
</script>

{@render children?.()}
