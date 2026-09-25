<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { getModalProps } from "./modal-context.svelte";
  import { modalVariants } from "@heroui/styles";

  const props: HTMLAttributes<HTMLParagraphElement> = $props();

  const ctx = getModalProps();
</script>

<p
  {...props}
  class={modalVariants(ctx.current).heading({
    class: [props.class?.toString()],
  })}
>
  {@render props.children?.()}
</p>
