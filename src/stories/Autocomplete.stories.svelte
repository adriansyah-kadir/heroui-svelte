<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import {
    Autocomplete,
    AutocompleteTrigger,
    AutocompletePopover,
    ListBox,
    ListBoxItem,
    ListBoxItemIndicator,
    AutocompleteValue,
    AutocompleteIndicator,
    AutocompleteClearButton,
    Label,
    Description,
  } from "#lib";
  import { box, Selectable } from "svelte-utils";
  import AutocompleteFilter from "#lib/components/autocomplete/autocomplete-filter.svelte";
  import Collection from "#lib/components/collection/collection.svelte";
  import SearchInput from "#lib/components/search-input/search-input.svelte";

  const { Story } = defineMeta({
    component: Autocomplete,
    tags: ["autodocs"],
  });
</script>

<script lang="ts">
</script>

<Story name="Autocomplete">
  {#snippet template(props)}
    {@const selectable = new Selectable<string>({
      initialOptions: ["Aldi", "Aldo", "All"].map(
        (e, i) => [i.toString(), e] as const,
      ),
      multiple: () => !!props.multiple,
    })}
    <Autocomplete {...props}>
      <Label>Users</Label>
      <AutocompleteTrigger class="w-60">
        <AutocompleteValue placeholder="Select user" />
        <AutocompleteIndicator />
        <AutocompleteClearButton />
      </AutocompleteTrigger>
      <Description
        >Picked: {selectable.selected.map(([, v]) => v).join(", ")}</Description
      >
      <AutocompletePopover>
        <AutocompleteFilter>
          <div data-slot="search-field">
            <SearchInput />
          </div>
          <ListBox>
            <Collection items={selectable.all} key={(t) => t[0]}>
              {#snippet child({ key, item })}
                <ListBoxItem
                  bind:selected={
                    () => selectable.isSelected(key),
                    (v) => selectable.toggle(key, v)
                  }
                  value={key}
                >
                  {item[1]}
                  <ListBoxItemIndicator />
                </ListBoxItem>
              {/snippet}
            </Collection>
          </ListBox>
        </AutocompleteFilter>
      </AutocompletePopover>
    </Autocomplete>
  {/snippet}
</Story>
