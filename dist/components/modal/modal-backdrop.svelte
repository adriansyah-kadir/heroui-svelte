<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { modalVariants } from "@heroui/styles";
  import { ModalContext } from "#lib";

  const props: HTMLAttributes<HTMLDivElement> = $props();

  const modal = ModalContext.get();
  const dialog = modal.dialog;
</script>

<div
  {...props}
  data-entering={dialog.open}
  data-exiting={dialog.closed}
  class={modalVariants(modal.heroui).backdrop({
    class: [
      "data-[entering=true]:duration-500",
      "data-[entering=true]:ease-[cubic-bezier(0.25,1,0.5,1)]",
      "data-[exiting=true]:duration-200",
      "data-[exiting=true]:ease-[cubic-bezier(0.5,0,0.75,0)]",
      props.class?.toString(),
    ],
  })}
>
  {@render props.children?.()}
</div>
