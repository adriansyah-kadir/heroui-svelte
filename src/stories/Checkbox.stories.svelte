<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import {
    Checkbox,
    CheckboxContent,
    CheckboxControl,
    CheckboxIndicator,
    Label,
  } from "#lib";

  const { Story } = defineMeta({
    component: Checkbox,
    tags: ["autodocs"],
  });
</script>

<Story name="Checkbox">
  <CheckboxContent>
    <CheckboxControl>
      <CheckboxIndicator />
    </CheckboxControl>
    <Label>Accept terms and conditions</Label>
  </CheckboxContent>
</Story>
