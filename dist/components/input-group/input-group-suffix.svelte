<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { inputGroupVariants } from "@heroui/styles";
  import { InputContext } from "../../index.js";

  type Props = HTMLAttributes<HTMLElement>;

  const props: Props = $props();
  const input = InputContext.get();

  const className = $derived(
    inputGroupVariants(input.heroui).suffix({
      class: props.class?.toString(),
    }),
  );
</script>

<div
  {...props}
  data-slot="input-group-suffix"
  class={className}
>
  {@render props.children?.()}
</div>
