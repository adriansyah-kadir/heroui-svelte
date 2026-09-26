<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import InputGroup from "#lib/components/input-group/input-group.svelte";
  import InputGroupInput from "#lib/components/input-group/input-group-input.svelte";
  import InputGroupPrefix from "#lib/components/input-group/input-group-prefix.svelte";
  import SearchIcon from "#lib/icons/search-icon.svelte";
  import InputGroupSuffix from "#lib/components/input-group/input-group-suffix.svelte";
  import CloseButton from "#lib/components/close-button/close-button.svelte";

  const { Story } = defineMeta({
    component: InputGroup,
    tags: ["autodocs"],
  });
</script>

<Story name="InputGroup">
  <InputGroupPrefix>
    <SearchIcon />
  </InputGroupPrefix>
  <InputGroupInput placeholder="Username" />
  <InputGroupSuffix>
    <CloseButton />
  </InputGroupSuffix>
</Story>
