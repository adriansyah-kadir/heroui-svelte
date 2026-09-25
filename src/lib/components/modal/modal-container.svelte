<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { getModalProps } from "./modal-context.svelte";
  import DialogState from "#lib/hooks/dialog.svelte.ts";
  import { modalVariants } from "@heroui/styles";

  const props: HTMLAttributes<HTMLDivElement> = $props();

  const ctx = getModalProps();
  const dialog = new DialogState();
</script>

<div
  {...props}
  {@attach dialog.attach()}
  data-placement={ctx.current.placement}
  data-entering={dialog.open}
  data-exiting={!dialog.open}
  class={modalVariants(ctx.current).container({
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
