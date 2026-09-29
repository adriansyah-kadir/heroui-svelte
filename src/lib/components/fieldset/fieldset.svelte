<script lang="ts">
  import { fieldsetVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";

  type Props = HTMLAttributes<HTMLFieldSetElement>;

  const props: Props = $props();
</script>

<fieldset
  {...props}
  data-slot="fieldset"
  class={fieldsetVariants().base({ class: props.class?.toString() })}
>
  {@render props.children?.()}
</fieldset>
