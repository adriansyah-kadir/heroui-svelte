<script lang="ts">
  import { checkboxVariants } from "@heroui/styles";
  import type { HTMLLabelAttributes } from "svelte/elements";
  import InputState from "../input/input.svelte.ts";
  import Input from "../input/input.svelte";

  type Props = HTMLLabelAttributes;

  const props: Props = $props();

  const input = InputState.get();
</script>

<label
  {...props}
  data-slot="checkbox-content"
  class={checkboxVariants().content({
    variant: input.heroui.variant,
    class: props.class?.toString(),
  })}
>
  <Input headless hidden type="checkbox" />
  {@render props.children?.()}
</label>
