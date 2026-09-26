<script lang="ts">
  import { searchFieldVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import { getInputProps, getInputState } from "../input/input-context";

  interface Props extends HTMLAttributes<HTMLDivElement> {}

  const { children, ...props }: Props = $props();

  const input = getInputState();
  const ctx = getInputProps();
</script>

<div
  {...props}
  data-slot="search-field-group"
  data-disabled={ctx.disabled}
  data-required={ctx.required}
  data-invalid={ctx.invalid ?? input.invalid}
  class={searchFieldVariants().group({
    ...ctx.current,
    class: props.class?.toString(),
  })}
>
  {@render children?.()}
</div>
