<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Spinner from "#lib/components/spinner/spinner.svelte";

  const { Story } = defineMeta({
    component: Spinner,
    tags: ["autodocs"]
  });
</script>

<Story name="Spinner" />
