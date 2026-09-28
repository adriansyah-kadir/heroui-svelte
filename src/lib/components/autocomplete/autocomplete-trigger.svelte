<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import AutocompleteState from "./autocomplete.svelte.ts";
  import { autocompleteVariants } from "@heroui/styles";

  interface Props extends HTMLAttributes<HTMLDivElement> {}

  const { children, ...props }: Props = $props();

  const autocomplete = AutocompleteState.ctx();
</script>

<div
  {...props}
  {...autocomplete.props}
  role="button"
  tabindex="0"
  class={autocompleteVariants(autocomplete.heroui).trigger({
    class: props?.class?.toString(),
  })}
  onkeyup={(ev) => {
    if (ev.code !== "Enter" && ev.code !== "Space") return;
    if (ev.target !== ev.currentTarget) return;
    props?.onkeyup?.(ev);
    autocomplete.toggle(ev.currentTarget);
  }}
  onclick={(ev) => {
    props?.onclick?.(ev);
    autocomplete.toggle(ev.currentTarget);
  }}
>
  {@render children?.()}
</div>
