<script lang="ts">
  import { inputGroupVariants } from "@heroui/styles";
  import type { ComponentProps } from "svelte";
  import { Input, InputContext } from "#lib";

  let {
    value = $bindable(),
    ...props
  }: ComponentProps<typeof Input> = $props();
  const input = InputContext.get();
</script>

<Input
  {...props}
  bind:value
  headless
  data-slot="input-group-input"
  class={inputGroupVariants(input.heroui).input({
    class: props.class?.toString(),
  })}
/>
