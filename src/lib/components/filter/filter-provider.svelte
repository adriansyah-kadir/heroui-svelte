<script lang="ts">
  import type { Snippet } from "svelte";
  import { FilterContext, type FilterOpts } from "./index.svelte";
  import { box } from "@adriansyah/svelte-utils";

  type Props = {
    children?: Snippet;
    query?: string;
  } & FilterOpts;

  let { children, query = $bindable(""), ...props }: Props = $props();

  new FilterContext(
    () => props,
    box(
      () => query,
      (v) => (query = v),
    ),
  );
</script>

{@render children?.()}
