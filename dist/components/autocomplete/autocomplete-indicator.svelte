<script lang="ts">
  import { autocompleteVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import { ChevronDownIcon } from "#lib";

  type Props = HTMLAttributes<HTMLDivElement> & {
    open?: boolean;
  };

  const { children, open, ...props }: Props = $props();
</script>

<div
  {...props}
  data-open={open}
  class={autocompleteVariants().indicator({
    class: props.class?.toString(),
  })}
>
  <ChevronDownIcon />
</div>
