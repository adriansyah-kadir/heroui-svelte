<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Fieldset from "#lib/components/fieldset/fieldset.svelte";
  import FieldsetLegend from "#lib/components/fieldset/fieldset-legend.svelte";
  import Description from "#lib/components/description/description.svelte";
  import FieldsetGroup from "#lib/components/fieldset/fieldset-group.svelte";
  import TextField from "#lib/components/text-field/text-field.svelte";
  import Input from "#lib/components/input/input.svelte";
  import Label from "#lib/components/label/label.svelte";
    import FieldsetActions from "#lib/components/fieldset/fieldset-actions.svelte";
    import Button from "#lib/components/button/button.svelte";

  const { Story } = defineMeta({
    component: Fieldset,
    tags: ["autodocs"],
  });
</script>

<Story name="Fieldset" args={{style: "min-width: 320px"}}>
  <FieldsetLegend>Profile Settings</FieldsetLegend>
  <Description>Update your profile information.</Description>
  <FieldsetGroup>
    <TextField required>
      <Label>Name</Label>
      <Input placeholder="John doe"/>
    </TextField>
    <TextField required>
      <Label>Email</Label>
      <Input placeholder="john@example.com"/>
    </TextField>
    <TextField required>
      <Label>Bio</Label>
      <Input />
      <Description>Mininum 10 characters</Description>
    </TextField>
  </FieldsetGroup>
  <FieldsetActions>
    <Button>Save changes</Button>
    <Button variant="tertiary">Cancel</Button>
  </FieldsetActions>
</Story>
