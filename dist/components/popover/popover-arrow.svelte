<script lang="ts">
  import ArrowIcon from "#lib/icons/arrow-icon.svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import PopoverContext from "./index.svelte.ts";

  const props: HTMLAttributes<HTMLDivElement> = $props();

  const ctx = PopoverContext.get();
</script>

<div
  {...props}
  {...ctx.props}
  data-slot="popover-overlay-arrow-group"
  class={[
    "absolute",

    "data-[placement=bottom]:top-0",
    "data-[placement=bottom]:left-1/2",
    "data-[placement=bottom]:-translate-x-1/2",
    "data-[placement=bottom]:-translate-y-full",

    "data-[placement=top]:bottom-0",
    "data-[placement=top]:left-1/2",
    "data-[placement=top]:-translate-x-1/2",
    "data-[placement=top]:translate-y-full",

    "data-[placement=right]:top-1/2",
    "data-[placement=right]:left-0",
    "data-[placement=right]:-translate-y-1/2",
    "data-[placement=right]:-translate-x-full",

    "data-[placement=left]:top-1/2",
    "data-[placement=left]:right-0",
    "data-[placement=left]:-translate-y-1/2",
    "data-[placement=left]:translate-x-full",

    props.class,
  ]}
>
  <ArrowIcon data-slot="popover-overlay-arrow" />
</div>
