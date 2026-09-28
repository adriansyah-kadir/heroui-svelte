<script lang="ts">
  import { searchFieldVariants } from "@heroui/styles";
  import Input from "../input/input.svelte";
  import type { ComponentProps } from "svelte";
  import InputState from "../input/input.svelte.ts";

  const props: ComponentProps<typeof Input> = $props();
  const input = InputState.get();
</script>

<Input
  {...props}
  headless
  data-slot="search-field-input"
  class={searchFieldVariants(input.heroui).input({
    class: ["min-w-0", props.class?.toString()],
  })}
/>
