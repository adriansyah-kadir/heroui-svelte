<script lang="ts">
  import { inputGroupVariants } from "@heroui/styles";
  import { getInputProps } from "../input/input-context";
  import Input from "../input/input.svelte";
  import type { ComponentProps } from "svelte";

  const props: ComponentProps<typeof Input> = $props();
  const ctx = getInputProps();
</script>

<Input
  {...props}
  headless
  data-slot="input-group-input"
  class={inputGroupVariants({
    ...ctx.current,
    class: props.class?.toString(),
  }).input()}
/>
