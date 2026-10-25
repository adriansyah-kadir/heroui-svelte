<script lang="ts">
  import { checkboxVariants } from "@heroui/styles";
  import type { HTMLLabelAttributes } from "svelte/elements";
  import { InputContext, Input } from "../../index.js";

  type Props = HTMLLabelAttributes;

  const props: Props = $props();

  const input = InputContext.get();
  const contentClass = $derived(
    checkboxVariants().content({
      variant: input.heroui.variant,
      class: props.class?.toString(),
    }),
  );
</script>

<label
  {...props}
  data-slot="checkbox-content"
  class={contentClass}
>
  <Input headless hidden type="checkbox" />
  {@render props.children?.()}
</label>
