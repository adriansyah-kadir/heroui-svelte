<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Popover from "#lib/components/popover/popover.svelte";
  import Button from "#lib/components/button/button.svelte";
  import PopoverDialog from "#lib/components/popover/popover-dialog.svelte";
  import PopoverHeading from "#lib/components/popover/popover-heading.svelte";
  import PopoverArrow from "#lib/components/popover/popover-arrow.svelte";

  const id = "popover_id";
  const { Story } = defineMeta({
    component: Popover,
    tags: ["autodocs"],
    parameters: {
      layout: "centered"
    },
    args: {
      class: "max-w-xs",
      id
    }
  });
</script>

<Button command="toggle-popover" commandfor={id}>Show popover</Button>

<Story name="Popover">
  <PopoverArrow />
  <PopoverDialog>
    <PopoverHeading>Popover Title</PopoverHeading>
    <p class="mt-2 text-sm text-muted">
      This is the popover content. You can put any content here.
    </p>
  </PopoverDialog>
</Story>
