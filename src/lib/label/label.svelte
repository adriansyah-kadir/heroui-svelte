<script lang="ts">
  import { labelVariants, type LabelVariants } from "@heroui/styles";
  import type { HTMLLabelAttributes } from "svelte/elements";
  import { TextFieldContext } from "$lib/text-field/utils.svelte";

  let {
    isDisabled,
    isInvalid,
    isRequired,
    children,
    ...props
  }: HTMLLabelAttributes & LabelVariants = $props();
  const tf = TextFieldContext.getOr(undefined);
  const theme = $derived({
    isDisabled,
    isInvalid,
    isRequired,
  });
</script>

<label
  {...props}
  for={props.for ?? $tf?.id}
  class={[labelVariants(theme), props.class]}>{@render children?.()}</label
>
