<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { modalVariants } from "@heroui/styles";
  import { ModalContext } from "#lib";

  const props: HTMLAttributes<HTMLParagraphElement> = $props();

  const ctx = ModalContext.get();
</script>

<p
  {...props}
  class={modalVariants(ctx.heroui).heading({
    class: [props.class?.toString()],
  })}
>
  {@render props.children?.()}
</p>
