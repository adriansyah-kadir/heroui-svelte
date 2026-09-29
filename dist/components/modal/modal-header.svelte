<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { modalVariants } from "@heroui/styles";
  import { ModalContext } from "./index.svelte";

  const props: HTMLAttributes<HTMLDivElement> = $props();

  const ctx = ModalContext.get();
</script>

<div
  {...props}
  class={modalVariants(ctx.heroui).header({
    class: [props.class?.toString()],
  })}
>
  {@render props.children?.()}
</div>
