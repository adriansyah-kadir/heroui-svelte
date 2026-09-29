<script lang="ts">
  import { fieldsetVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";

  type Props = HTMLAttributes<HTMLElement>;

  const props: Props = $props();
</script>

<legend
  {...props}
  data-slot="fieldset-legend"
  class={fieldsetVariants().legend({ class: props.class?.toString() })}
>
  {@render props.children?.()}
</legend>
