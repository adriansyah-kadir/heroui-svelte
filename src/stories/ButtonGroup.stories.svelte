<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Button from "#lib/components/button/button.svelte";
  import ButtonGroup from "#lib/components/button-group/button-group.svelte";
  import ButtonGroupSeparator from "#lib/components/button-group/button-group-separator.svelte";

  const { Story } = defineMeta({
    component: ButtonGroup,
    tags: ["autodocs"],
  });
</script>

<Story name="Button group">
  <Button>Yes</Button>
  <Button>
    <ButtonGroupSeparator />
    No
  </Button>
  <Button>
    <ButtonGroupSeparator />
    Un
  </Button>
</Story>
