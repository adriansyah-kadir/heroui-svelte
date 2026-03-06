<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import {
    Button,
    TextField as component,
    Input,
    InputGroup,
    InputGroupInput,
    InputGroupPrefix,
    Label,
    Description,
    FieldError,
    InputGroupSuffix,
  } from "$lib";

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

<Story
  name="TextField input group"
  args={{ type: "email", placeholder: "email", mode: "input", required: true }}
>
  <Label>Email</Label>
  <InputGroup>
    <InputGroupPrefix>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
        class="size-4 text-muted"
        ><path
          fill="currentColor"
          fill-rule="evenodd"
          d="M3.5 4h9c.25 0 .485.06.692.169L8.75 7.5a1.25 1.25 0 0 1-1.5 0L2.808 4.169C3.015 4.06 3.251 4 3.5 4M2.001 5.438 2 5.5v5A1.5 1.5 0 0 0 3.5 12h9a1.5 1.5 0 0 0 1.5-1.5v-5l-.001-.062L9.65 8.7a2.75 2.75 0 0 1-3.3 0zM.5 5.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3z"
          clip-rule="evenodd"
        ></path></svg
      >
    </InputGroupPrefix>
    <InputGroupInput />
    <InputGroupSuffix>
      <Button size="sm" variant="ghost">Ok</Button>
    </InputGroupSuffix></InputGroup
  >
  <Description>Lorem ipsum dolor sit amet.</Description>
  <FieldError>Invalid email</FieldError>
</Story>
