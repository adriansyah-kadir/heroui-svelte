<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import { TextField as component, Input, Label } from "$lib";
  import Description from "$lib/description/description.svelte";
  import FieldError from "$lib/field-error/field-error.svelte";

  const { Story } = defineMeta({
    component,
    args: {
      required: false,
      mode: "input",
      type: "text",
      invalid: false,
      readonly: false,
      disabled: false,
    },
  });
</script>

<Story name="TextField" args={{ placeholder: "username" }}>
  <Label>Username</Label>
  <Input />
  <Description>Lorem ipsum dolor sit amet.</Description>
  <FieldError>Invalid username</FieldError>
</Story>

<Story
  name="TextField invalid state"
  args={{ type: "email", placeholder: "email", mode: "input", required: true }}
>
  <Label>Email</Label>
  <Input />
  <Description>Lorem ipsum dolor sit amet.</Description>
  <FieldError>Invalid email</FieldError>
</Story>
