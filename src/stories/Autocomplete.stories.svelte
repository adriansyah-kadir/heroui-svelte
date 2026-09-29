<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Autocomplete from "#lib/components/autocomplete/autocomplete.svelte";
  import AutocompleteTrigger from "#lib/components/autocomplete/autocomplete-trigger.svelte";
  import AutocompletePopover from "#lib/components/autocomplete/autocomplete-popover.svelte";
  import SearchField from "#lib/components/search-field/search-field.svelte";
  import SearchFieldGroup from "#lib/components/search-field/search-field-group.svelte";
  import SearchFieldSearchIcon from "#lib/components/search-field/search-field-search-icon.svelte";
  import SearchFieldInput from "#lib/components/search-field/search-field-input.svelte";
  import SearchFieldClearButton from "#lib/components/search-field/search-field-clear-button.svelte";
  import ListBox from "#lib/components/list-box/list-box.svelte";
  import ListBoxItem from "#lib/components/list-box/list-box-item.svelte";
  import ListBoxItemIndicator from "#lib/components/list-box/list-box-item-indicator.svelte";
  import AutocompleteValue from "#lib/components/autocomplete/autocomplete-value.svelte";
  import AutocompleteIndicator from "#lib/components/autocomplete/autocomplete-indicator.svelte";
  import AutocompleteClearButton from "#lib/components/autocomplete/autocomplete-clear-button.svelte";
  import Label from "#lib/components/label/label.svelte";
  import Description from "#lib/components/description/description.svelte";
  import EmptyState from "#lib/components/empty-state/empty-state.svelte";
  import ListBoxState from "#lib/components/list-box/list-box.svelte.ts";

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
  {@const list = ListBoxState.get()}
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
