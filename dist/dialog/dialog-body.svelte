<script lang="ts">
  import { modalVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import { DialogContext } from "./utils.svelte";

  const { children, ...props }: HTMLAttributes<HTMLDivElement> = $props();

  const { variants } = DialogContext.get();
  const styles = $derived(modalVariants($variants));
</script>

<div {...props} class={[styles.body(), props.class]}>
  {@render children?.()}
</div>
