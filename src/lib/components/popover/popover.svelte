<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import type { PopoverContextOpts } from "./index.svelte";
  import PopoverContext from "./index.svelte";
  import { box } from "svelte-utils";

  type Props = HTMLAttributes<HTMLDivElement> &
    Omit<PopoverContextOpts, "open" | "fallbackAnchor"> & {
      open?: boolean;
      fallbackAnchor?: HTMLElement;
    };

  let {
    open = $bindable(false),
    fallbackAnchor,
    placement = "bottom",
    offset = 8,
    ...props
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

{@render props.children?.()}
