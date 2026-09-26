<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { inputGroupVariants } from "@heroui/styles";
  import { getInputProps } from "../input/input-context";

  interface Props extends HTMLAttributes<HTMLElement> {}

  const { ...props }: Props = $props();
  const ctx = getInputProps();
</script>

<div
  {...props}
  data-slot="input-group-suffix"
  class={inputGroupVariants({
    ...ctx.current,
    class: props.class?.toString(),
  }).suffix()}
>
  {@render props.children?.()}
</div>
