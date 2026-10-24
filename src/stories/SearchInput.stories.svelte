<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import SearchInput from "#lib/components/search-input/search-input.svelte";

  const { Story } = defineMeta({
    component: SearchInput,
    tags: ["autodocs"],
    args: {
      variant: "primary"
    }
  });
</script>

<Story name="SearchInput" />
