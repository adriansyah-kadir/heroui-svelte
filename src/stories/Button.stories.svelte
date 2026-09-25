<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Button from "#lib/components/button/button.svelte";

  const { Story } = defineMeta({
    component: Button,
    tags: ["autodocs"],
  });
</script>

<Story name="Button">
  Click me
</Story>
