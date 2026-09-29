<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { headerVariants } from "@heroui/styles";

  interface Props extends HTMLAttributes<HTMLElement> {}

  const { ...props }: Props = $props();
</script>

<header
  {...props}
  data-slot="label"
  class={headerVariants({ class: props.class?.toString() })}
>
  {@render props.children?.()}
</header>
