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
  {@attach dialog.attach()}
  data-placement={modal.opts.placement}
  data-entering={dialog.open}
  data-exiting={!dialog.open}
  class={modalVariants(modal.heroui).container({
    class: [
      "data-[entering=true]:animate-in",
      "data-[entering=true]:fade-in-0",
      "data-[entering=true]:slide-in-from-bottom-4",
      "data-[entering=true]:duration-500",
      "data-[entering=true]:ease-[cubic-bezier(0.25,1,0.5,1)]",
      "data-[exiting=true]:animate-out",
      "data-[exiting=true]:fade-out-0",
      "data-[exiting=true]:slide-out-to-bottom-2",
      "data-[exiting=true]:duration-200",
      "data-[exiting=true]:ease-[cubic-bezier(0.5,0,0.75,0)]",
      props.class?.toString(),
    ],
  })}
>
  {@render props.children?.()}
</div>
