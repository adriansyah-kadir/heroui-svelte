<script lang="ts">
  import { checkboxVariants } from "@heroui/styles";
  import type { HTMLLabelAttributes } from "svelte/elements";
  import { InputContext, Input } from "#lib";
  import CheckboxControl from "./checkbox-control.svelte";

  type Props = HTMLLabelAttributes;

  const props: Props = $props();

  const input = InputContext.get();
  const contentClass = $derived(
    checkboxVariants().content({
      variant: input.heroui.variant,
      class: props.class?.toString(),
    }),
  );
</script>

<label {...props} data-slot="checkbox-content" class={contentClass}>
  <Input headless hidden type="checkbox" />
  {#if props.children}
    {@render props.children()}
  {:else}
    <CheckboxControl />
  {/if}
</label>
