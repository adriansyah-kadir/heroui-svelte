<script lang="ts">
  import { inputGroupVariants } from "@heroui/styles";
  import Input from "../input/input.svelte";
  import type { ComponentProps } from "svelte";
  import InputState from "../input/input.svelte.ts";

  const props: ComponentProps<typeof Input> = $props();
  const input = InputState.get();
</script>

<Input
  {...props}
  headless
  data-slot="input-group-input"
  class={inputGroupVariants(input.heroui).input({
    class: props.class?.toString(),
  })}
/>
