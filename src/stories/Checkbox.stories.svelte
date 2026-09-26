<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Checkbox from "#lib/components/checkbox/checkbox.svelte";
  import CheckboxContent from "#lib/components/checkbox/checkbox-content.svelte";
  import CheckboxControl from "#lib/components/checkbox/checkbox-control.svelte";
  import CheckboxIndicator from "#lib/components/checkbox/checkbox-indicator.svelte";
  import Label from "#lib/components/label/label.svelte";

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
