<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { fieldErrorVariants } from "@heroui/styles";
  import { getInputProps, getInputState } from "../input/input-context";

  interface Props extends HTMLAttributes<HTMLDivElement> {}

  const { ...props }: Props = $props();
  const input = getInputState();
  const ctx = getInputProps();
  const invalid = $derived(ctx.invalid ?? input.invalid);
</script>

<div
  {...props}
  {...invalid
    ? {
        "data-visible": true,
      }
    : {}}
  data-slot="field-error"
  class={fieldErrorVariants({ class: ["duration-0", props.class?.toString()] })}
>
  {@render props.children?.()}
</div>
