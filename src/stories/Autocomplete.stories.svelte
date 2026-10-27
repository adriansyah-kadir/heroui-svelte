<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import {
    Autocomplete,
    AutocompleteTrigger,
    AutocompletePopover,
    ListBox,
    ListBoxItem,
    ListBoxItemIndicator,
    Label,
    Description,
  } from "#lib";
  import AutocompleteFilter from "#lib/components/autocomplete/autocomplete-filter.svelte";
  import Collection from "#lib/components/collection/collection.svelte";
  import SearchInput from "#lib/components/search-input/search-input.svelte";
  import EmptyState from "#lib/components/empty-state/empty-state.svelte";
  import FilterEmpty from "#lib/components/filter/filter-not-found.svelte";
  import PopoverArrow from "#lib/components/popover/popover-arrow.svelte";

  const { Story } = defineMeta({
    component: Autocomplete,
    tags: ["autodocs"],
  });
</script>

<Story name="Autocomplete">
  {#snippet template(props)}
    <Autocomplete {...props} bind:selected={props.selected}>
      <Label>Users</Label>
      <AutocompleteTrigger class="w-60" placeholder="Select user" />
      <Description>Picked: {props.selected}</Description>
      <AutocompletePopover>
        <AutocompleteFilter>
          <div data-slot="search-field">
            <SearchInput class="status-focused-field" />
          </div>
          <ListBox>
            <Collection items={["Aldi", "Aldo", "All"]} key={(t) => t}>
              {#snippet child({ key, item })}
                <ListBoxItem value={key}>
                  {item}
                  <ListBoxItemIndicator />
                </ListBoxItem>
              {/snippet}
              {#snippet empty()}
                <EmptyState>Empty</EmptyState>
              {/snippet}
            </Collection>
            <FilterEmpty>
              <EmptyState>Not Found</EmptyState>
            </FilterEmpty>
          </ListBox>
        </AutocompleteFilter>
      </AutocompletePopover>
    </Autocomplete>
  {/snippet}
</Story>

<Story name="Autocomplete custom trigger">
  <Label>Users</Label>
  <AutocompleteTrigger class="w-60" placeholder="Select user">
    {#snippet child({ props })}
      <button {...props} class="list-box-item"> Halo </button>
    {/snippet}
  </AutocompleteTrigger>
  <AutocompletePopover>
    <PopoverArrow />
    <AutocompleteFilter>
      <div data-slot="search-field">
        <SearchInput class="status-focused-field" />
      </div>
      <ListBox>
        <Collection items={["Aldi", "Aldo", "All"]} key={(t) => t}>
          {#snippet child({ key, item })}
            <ListBoxItem value={key}>
              {item}
              <ListBoxItemIndicator />
            </ListBoxItem>
          {/snippet}
          {#snippet empty()}
            <EmptyState>Empty</EmptyState>
          {/snippet}
        </Collection>
        <FilterEmpty>
          <EmptyState>Not Found</EmptyState>
        </FilterEmpty>
      </ListBox>
    </AutocompleteFilter>
  </AutocompletePopover>
</Story>
