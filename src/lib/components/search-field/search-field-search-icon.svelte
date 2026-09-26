<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { searchFieldVariants } from "@heroui/styles";
  import { getInputProps } from "../input/input-context";
  import SearchIcon from "#lib/icons/search-icon.svelte";

  interface Props extends HTMLAttributes<HTMLElement> {}

  const { ...props }: Props = $props();
  const ctx = getInputProps();
</script>

<div
  {...props}
  data-slot="search-field-search-icon"
  class={searchFieldVariants().searchIcon({
    ...ctx.current,
    class: props.class?.toString(),
  })}
>
  <SearchIcon />
</div>
