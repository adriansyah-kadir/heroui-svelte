<script lang="ts">
  import { fieldsetVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";

  type Props = HTMLAttributes<HTMLDivElement>;

  const props: Props = $props();
</script>

<div
  {...props}
  data-slot="fieldset-field-group"
  class={fieldsetVariants().fieldGroup({ class: props.class?.toString() })}
>
  {@render props.children?.()}
</div>
