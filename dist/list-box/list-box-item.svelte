<script lang="ts">
  import {
    listboxItemVariants,
    type ListBoxItemVariants,
  } from "@heroui/styles";
  import {
    ListBoxContext,
    listBoxItemContext,
    ListBoxItemContext,
  } from "./utils";
  import { ToggleGroup, type ToggleGroupItemProps } from "bits-ui";

  const { variant, ...props }: ToggleGroupItemProps & ListBoxItemVariants =
    $props();

  const lb = ListBoxContext.get();
  // svelte-ignore state_referenced_locally
  const lbi = ListBoxItemContext.set(
    listBoxItemContext({ selected: false, variant: variant ?? $lb.variant }),
  );

  $effect(() => {
    $lbi.variant = variant ?? $lb.variant;
    $lbi.selected =
      $lb.type === "single"
        ? props.value === $lb.value
        : ($lb.value?.includes(props.value) ?? false);
  });
</script>

<ToggleGroup.Item
  {...props}
  data-selected={$lbi.selected}
  data-disable={props.disabled}
  class={[listboxItemVariants().item(), "focus-visible:status-focused", props.class]}
/>
