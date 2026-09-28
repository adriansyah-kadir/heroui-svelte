<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { inputGroupVariants } from "@heroui/styles";
  import InputState from "../input/input.svelte.ts";

  type Props = HTMLAttributes<HTMLElement>;

  const props: Props = $props();
  const input = InputState.get();
</script>

<div
  {...props}
  data-slot="input-group-suffix"
  class={inputGroupVariants(input.heroui).suffix({
    class: props.class?.toString(),
  })}
>
  {@render props.children?.()}
</div>
