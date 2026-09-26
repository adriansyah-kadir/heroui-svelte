<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import SearchField from "#lib/components/search-field/search-field.svelte";
  import SearchFieldGroup from "#lib/components/search-field/search-field-group.svelte";
  import SearchFieldSearchIcon from "#lib/components/search-field/search-field-search-icon.svelte";
  import SearchFieldInput from "#lib/components/search-field/search-field-input.svelte";
  import Label from "#lib/components/label/label.svelte";
  import SearchFieldClearButton from "#lib/components/search-field/search-field-clear-button.svelte";
  import Description from "#lib/components/description/description.svelte";

  const { Story } = defineMeta({
    component: SearchField,
    tags: ["autodocs"],
  });

  let search = $state("");
</script>

<Story
  name="SearchField"
  args={{ class: "max-w-xs", onvalue: (v) => (search = v) }}
>
  <Label>Search</Label>
  <SearchFieldGroup>
    <SearchFieldSearchIcon />
    <SearchFieldInput placeholder="Search..." />
    <SearchFieldClearButton />
  </SearchFieldGroup>
  <Description>Searched: {search}</Description>
</Story>
