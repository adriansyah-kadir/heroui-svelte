<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { getModalProps } from "./modal-context.svelte";
  import { modalVariants } from "@heroui/styles";

  const props: HTMLAttributes<HTMLDivElement> = $props();

  const ctx = getModalProps();
</script>

<div
  {...props}
  class={modalVariants(ctx.current).body({ class: props.class?.toString() })}
>
  {@render props.children?.()}
</div>
