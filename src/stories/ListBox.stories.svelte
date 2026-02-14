<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import { Description, Label, ListBox, ListBoxItem } from "$lib";
  import ListBoxItemIndicator from "$lib/list-box/list-box-item-indicator.svelte";

  const { Story } = defineMeta({
    component: ListBox,
    args: {
      class: "max-w-80 bg-surface rounded-3xl shadow-surface",
      variant: "danger"
    }
  });
</script>

<Story name="Default">
  <ListBoxItem value="1">
    <Label>Bob</Label>
    <Description>bob@heroui.com</Description>
    <ListBoxItemIndicator />
  </ListBoxItem>
  <ListBoxItem value="2">
    <Label>Bob</Label>
    <Description>bob@heroui.com</Description>
    <ListBoxItemIndicator />
  </ListBoxItem>
</Story>
