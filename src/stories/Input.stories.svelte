<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Input from "#lib/components/input/input.svelte";

  const { Story } = defineMeta({
    component: Input,
    tags: ["autodocs"],
    args: {
      placeholder: "Email",
      type: "email"
    },
  });
</script>

<Story name="Input" />
