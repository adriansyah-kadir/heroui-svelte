<script lang="ts">
  import { modalVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import { DialogContext } from "./utils.svelte";

  const { children, ...props }: HTMLAttributes<HTMLDivElement> = $props();
  const ctx = DialogContext.get();
  const variants = ctx.variants
  const heroui = $derived(modalVariants($variants));
</script>

<div {...props} class={[heroui.header(), props.class]}>
  {@render children?.()}
</div>
