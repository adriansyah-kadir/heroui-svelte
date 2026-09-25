<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import TextField from "#lib/components/text-field/text-field.svelte";
  import Label from "#lib/components/label/label.svelte";
  import Description from "#lib/components/description/description.svelte";
  import FieldError from "#lib/components/field-error/field-error.svelte";
  import Input from "#lib/components/input/input.svelte";

  const { Story } = defineMeta({
    component: TextField,
    tags: ["autodocs"]
  });
</script>

<Story name="TextField">
  <Label>Email</Label>
  <Input type="email" placeholder="Your email" />
  <Description>Lorem ipsum dolor sit.</Description>
  <FieldError>Invalid email</FieldError>
</Story>
