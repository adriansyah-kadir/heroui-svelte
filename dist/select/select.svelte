<script lang="ts">
  import { Label, ListBoxItem } from "..";
  import ListBoxItemIndicator from "../list-box/list-box-item-indicator.svelte";
  import {
    listboxItemVariants,
    listboxVariants,
    selectVariants,
  } from "@heroui/styles";
  import { Select, type SelectRootProps } from "bits-ui";

  const props: SelectRootProps = $props();

  const values = [1, 2, 3];
  const styles = selectVariants();
</script>

<div class={styles.base()}>
  <Select.Root {...props}>
    <Label>State</Label>
    <Select.Trigger class={styles.trigger()}>Ok</Select.Trigger>
    <Select.Portal>
      <Select.Content
        sideOffset={5}
        class={[
          listboxVariants(),
          "bg-surface rounded-3xl shadow-overlay min-w-(--bits-select-anchor-width) ",
          "data-[state=open]:animate-in",
          "data-[state=open]:fade-in-0",
          "data-[state=open]:slide-in-from-bottom-4",
          "data-[state=open]:ease-[cubic-bezier(0.25,1,0.5,1)]",
          "data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0",
          "data-[state=closed]:slide-out-to-bottom-2",
          "data-[state=closed]:ease-[cubic-bezier(0.5,0,0.75,0)]",
        ]}
      >
        <Select.ScrollUpButton />
        <Select.Viewport>
          {#each values as v}
            <Select.Item
              value={v.toString()}
              label={v.toString()}
              class={listboxItemVariants().item()}
            >
              {#snippet children({ selected })}
                {v}
                <ListBoxItemIndicator {selected} />
              {/snippet}
            </Select.Item>
          {/each}
        </Select.Viewport>
        <Select.ScrollDownButton />
      </Select.Content>
    </Select.Portal>
  </Select.Root>
</div>
