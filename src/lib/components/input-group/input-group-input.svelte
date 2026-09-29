<script lang="ts">
  import { inputGroupVariants } from "@heroui/styles";
  import type { ComponentProps } from "svelte";
  import { Input, InputContext } from "#lib";

  const props: ComponentProps<typeof Input> = $props();
  const input = InputContext.get();
</script>

<Input
  {...props}
  headless
  data-slot="input-group-input"
  class={inputGroupVariants(input.heroui).input({
    class: props.class?.toString(),
  })}
/>
