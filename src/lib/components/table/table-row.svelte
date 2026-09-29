<script lang="ts">
  import { tableVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import TableContext from "./table.svelte.ts";

  type Props = HTMLAttributes<HTMLElement> & {
    disabled?: boolean;
    selected?: boolean;
  };

  const { children, disabled, selected, ...props }: Props = $props();

  const table = TableContext.get();
</script>

<tr
  {...props}
  data-slot="table-row"
  data-selected={selected}
  data-disabled={disabled}
  class={tableVariants(table.heroui).row({
    class: props.class?.toString(),
  })}
>
  {@render children?.()}
</tr>
