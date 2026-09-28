<script lang="ts">
  import { searchFieldVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import InputState from "../input/input.svelte.ts";

  type Props = HTMLAttributes<HTMLDivElement>;

  const { children, ...props }: Props = $props();

  const input = InputState.get();
</script>

<div
  {...props}
  data-slot="search-field-group"
  data-disabled={input.opts.disabled}
  data-required={input.opts.required}
  data-invalid={input.opts.invalid}
  class={searchFieldVariants(input.heroui).group({
    class: props.class?.toString(),
  })}
>
  {@render children?.()}
</div>
