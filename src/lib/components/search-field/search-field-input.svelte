<script lang="ts">
  import { searchFieldVariants } from "@heroui/styles";
  import { getInputProps } from "../input/input-context";
  import Input from "../input/input.svelte";
  import type { ComponentProps } from "svelte";

  const props: ComponentProps<typeof Input> = $props();
  const ctx = getInputProps();
</script>

<Input
  {...props}
  headless
  data-slot="search-field-input"
  class={searchFieldVariants().input({
    ...ctx.current,
    class: props.class?.toString(),
  })}
/>
