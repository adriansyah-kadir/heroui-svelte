<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import {
    Select,
  } from "$lib";

  const { Story } = defineMeta({
    component: Select,
    args: {
      type: "single"
    }
  });
</script>

<Story name="Default"></Story>
