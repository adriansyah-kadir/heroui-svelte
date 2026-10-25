<script lang="ts">
  import { separatorVariants, type SeparatorVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";

  type Props = HTMLAttributes<HTMLHRElement> & SeparatorVariants;
  const props: Props = $props();
</script>

<hr {...props} class={separatorVariants({ ...props, class: props.class?.toString() })} />
