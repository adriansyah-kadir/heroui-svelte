<script lang="ts">
  import Button from "../button/button.svelte";
  import { ModalContext } from "./index.svelte";
  import type { ComponentProps } from "svelte";

  const {
    action = "show",
    ...props
  }: ComponentProps<typeof Button> & {
    action?: "show" | "close";
  } = $props();

  const ctx = ModalContext.get();
</script>

<Button
  {...props}
  type="button"
  command={action === "show" ? "show-modal" : "close"}
  commandfor={ctx.dialog.nodeId}
>
  {@render props.children?.()}
</Button>
