<script lang="ts">
  import type { ComponentProps } from "svelte";
  import Button from "../button/button.svelte";
  import PopoverContext from "./index.svelte";

  const props: ComponentProps<typeof Button> = $props();

  const ctx = PopoverContext.get();
</script>

<Button
  {...props}
  command="toggle-popover"
  commandfor={ctx.popover.node?.id}
  pressed={ctx.popover.open}
/>
