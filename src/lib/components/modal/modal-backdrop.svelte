<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import DialogState from "#lib/hooks/dialog.svelte.ts";
  import { getModalProps } from "./modal-context.svelte";
  import { modalVariants } from "@heroui/styles";

  const props: HTMLAttributes<HTMLDivElement> = $props();

  const ctx = getModalProps();
  const dialog = new DialogState();
</script>

<div
  {...props}
  {@attach dialog.attach()}
  data-entering={dialog.open}
  data-exiting={dialog.closed}
  class={modalVariants(ctx.current).backdrop({
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
