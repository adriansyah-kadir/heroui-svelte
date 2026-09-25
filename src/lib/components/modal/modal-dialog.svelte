<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { getModalProps } from "./modal-context.svelte";
  import { modalVariants } from "@heroui/styles";

  const props: HTMLAttributes<HTMLDivElement> = $props();

  const ctx = getModalProps();
</script>

<div
  {...props}
  data-placement={ctx.current.placement}
  class={modalVariants(ctx.current).dialog({ class: props.class?.toString() })}
>
  {@render props.children?.()}
</div>
