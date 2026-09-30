<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { modalVariants } from "@heroui/styles";
  import { ModalContext } from "#lib";

  type Props = HTMLAttributes<HTMLDivElement>;

  const props: Props = $props();

  const ctx = ModalContext.get();
</script>

<div
  {...props}
  data-entering={ctx.dialog.open}
  data-exiting={ctx.dialog.closed}
  class={modalVariants(ctx.heroui).backdrop({
    class: [
      props.class?.toString(),
      "data-[entering=true]:duration-500",
      "data-[entering=true]:ease-[cubic-bezier(0.25,1,0.5,1)]",
      "data-[exiting=true]:duration-200",
      "data-[exiting=true]:ease-[cubic-bezier(0.5,0,0.75,0)]",
    ],
  })}
>
  {@render props.children?.()}
</div>
