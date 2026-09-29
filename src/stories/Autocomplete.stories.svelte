<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import {
    Autocomplete,
    AutocompleteTrigger,
    AutocompletePopover,
    SearchField,
    SearchFieldGroup,
    SearchFieldSearchIcon,
    SearchFieldInput,
    SearchFieldClearButton,
    ListBox,
    ListBoxItem,
    ListBoxItemIndicator,
    AutocompleteValue,
    AutocompleteIndicator,
    AutocompleteClearButton,
    Label,
    Description,
    EmptyState,
    ListBoxContext,
  } from "#lib";

  const { Story } = defineMeta({
    component: Autocomplete,
    tags: ["autodocs"],
  });
</script>

<Story
  name="Autocomplete"
  args={{
    class: "min-w-60",
    name: "aldo",
  }}
>
  <Label>Users</Label>
  <AutocompleteTrigger>
    <AutocompleteValue placeholder="Select user" />
    <AutocompleteIndicator />
    <AutocompleteClearButton />
  </AutocompleteTrigger>
  {@const list = ListBoxContext.get()}
  <Description>Picked: {list.selected.map((e) => e.val).join(", ")}</Description
  >
  <AutocompletePopover>
    <SearchField>
      <SearchFieldGroup data-focus-within={true}>
        <SearchFieldSearchIcon />
        <SearchFieldInput placeholder="Search..." />
        <SearchFieldClearButton />
      </SearchFieldGroup>
    </SearchField>
    <ListBox>
      {#each ["Aldi", "Aldo", "All"] as name}
        <ListBoxItem>
          {name}
          <ListBoxItemIndicator />
        </ListBoxItem>
      {:else}
        <EmptyState>Empty</EmptyState>
      {/each}
    </ListBox>
  </AutocompletePopover>
</Story>
