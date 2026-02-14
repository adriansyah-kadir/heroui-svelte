<script lang="ts">
  import { writable } from "svelte/store";
  import { CardContext } from "./utils.svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { cardVariants, type CardVariants } from "@heroui/styles";
  import { watch } from "runed";

  const {
    variant,
    children,
    ...props
  }: HTMLAttributes<HTMLDivElement> & CardVariants = $props();

  // svelte-ignore state_referenced_locally
  const c = CardContext.set(writable({ variant }));

  watch(
    () => variant,
    (v) => {
      $c.variant = v;
    },
  );
</script>

<div {...props} class={[cardVariants($c).base(), props.class]}>
  {@render children?.()}
</div>
