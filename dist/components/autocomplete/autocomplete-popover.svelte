<script lang="ts">
  import { autocompleteVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import { PopoverContent, AutocompleteContext } from "#lib";

  const props: HTMLAttributes<HTMLDivElement> = $props();
  const autocomplete = AutocompleteContext.get();
</script>

<PopoverContent popover="manual">
  <div
    {...props}
    class={autocompleteVariants(autocomplete.heroui).popover({
      class: props.class?.toString(),
    })}
  >
    {@render props.children?.()}
  </div>
</PopoverContent>
