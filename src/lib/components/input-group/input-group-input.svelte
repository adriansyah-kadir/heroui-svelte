<script lang="ts">
  import { inputGroupVariants } from "@heroui/styles";
  import type { ComponentProps } from "svelte";
  import { Input, InputContext } from "#lib";

  let {
    value = $bindable(),
    ...props
  }: ComponentProps<typeof Input> = $props();
  const input = InputContext.get();

  const className = $derived(
    inputGroupVariants(input.heroui).input({
      class: props.class?.toString(),
    }),
  );
</script>

<Input
  {...props}
  bind:value
  headless
  data-slot="input-group-input"
  class={className}
/>
