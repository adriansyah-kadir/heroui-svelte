<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { searchFieldVariants } from "@heroui/styles";
  import SearchIcon from "#lib/icons/search-icon.svelte";
  import { InputContext } from "#lib";

  interface Props extends HTMLAttributes<HTMLElement> {}

  const { ...props }: Props = $props();
  const input = InputContext.get();
</script>

<div
  {...props}
  data-slot="search-field-search-icon"
  class={searchFieldVariants(input.heroui).searchIcon({
    class: props.class?.toString(),
  })}
>
  <SearchIcon />
</div>
