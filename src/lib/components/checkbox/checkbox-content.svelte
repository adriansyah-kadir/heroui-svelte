<script lang="ts">
  import { checkboxVariants } from "@heroui/styles";
  import type { HTMLLabelAttributes } from "svelte/elements";
  import { InputContext, Input } from "#lib";

  type Props = HTMLLabelAttributes;

  const props: Props = $props();

  const input = InputContext.get();
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
