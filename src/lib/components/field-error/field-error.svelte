<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { fieldErrorVariants } from "@heroui/styles";
  import { getTextFieldProps } from "../text-field/text-field-context";

  interface Props extends HTMLAttributes<HTMLDivElement> {}

  const { ...props }: Props = $props();
  const field = getTextFieldProps();
</script>

<div
  {...props}
  {...field.invalid
    ? {
        "data-visible": field.invalid,
      }
    : {}}
  data-slot="field-error"
  class={fieldErrorVariants({ class: ["duration-0", props.class?.toString()] })}
>
  {@render props.children?.()}
</div>
