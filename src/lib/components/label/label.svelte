<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { labelVariants } from "@heroui/styles";

  interface Props extends HTMLAttributes<HTMLParagraphElement> {
    disabled?: boolean;
    required?: boolean;
    invalid?: boolean;
  }

  const { disabled, required, invalid, ...props }: Props = $props();
</script>

<p
  {...props}
  data-slot="label"
  class={labelVariants({
    isDisabled: disabled,
    isRequired: required,
    isInvalid: invalid,
    class: props.class?.toString(),
  })}
>
  {@render props.children?.()}
</p>
