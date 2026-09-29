<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { inputGroupVariants } from "@heroui/styles";
  import { InputContext } from "#lib";

  interface Props extends HTMLAttributes<HTMLElement> {}

  const { ...props }: Props = $props();
  const input = InputContext.get();
</script>

<div
  {...props}
  data-slot="input-group-prefix"
  class={inputGroupVariants(input.heroui).prefix({
    class: props.class?.toString(),
  })}
>
  {@render props.children?.()}
</div>
