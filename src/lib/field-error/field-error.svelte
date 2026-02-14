<script lang="ts">
  import {
    fieldErrorVariants,
    type FieldErrorVariants,
  } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import { TextFieldContext } from "$lib/text-field/utils.svelte";

  let {
    children,
    ...props
  }: HTMLAttributes<HTMLSpanElement> & FieldErrorVariants = $props();
  const tf = TextFieldContext.getOr(undefined);
</script>

<span
  {...props}
  data-visible={$tf?.invalid}
  class={[fieldErrorVariants(), "transition-none! hidden data-[visible=true]:block", props.class]}>{@render children?.()}</span
>
