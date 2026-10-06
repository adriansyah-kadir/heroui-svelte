<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Popover from "#lib/components/popover/popover.svelte";
  import PopoverDialog from "#lib/components/popover/popover-dialog.svelte";
  import PopoverHeading from "#lib/components/popover/popover-heading.svelte";
  import PopoverArrow from "#lib/components/popover/popover-arrow.svelte";
  import PopoverContent from "#lib/components/popover/popover-content.svelte";

  const { Story } = defineMeta({
    component: Popover,
    tags: ["autodocs"],
  });
</script>

<script lang="ts">
  import PopoverTrigger from "#lib/components/popover/popover-trigger.svelte";
  import { PopoverContext } from "#lib";

  let anchor = $state<HTMLElement>();
  let open = $state(false);
</script>

<Story name="Popover">
  <PopoverTrigger>Show popover</PopoverTrigger>
  <PopoverContent>
    <PopoverDialog>
      <PopoverHeading>Popover Title</PopoverHeading>
      <p class="mt-2 text-sm text-muted">
        This is the popover content. You can put any content here.
      </p>
    </PopoverDialog>
    <PopoverArrow />
  </PopoverContent>
</Story>

<Story name="Manual anchor">
  {#snippet template(props)}
    <Popover {...props} bind:open fallbackAnchor={anchor}>
      <input
        class="input input--default"
        bind:this={anchor}
        onfocus={() => (open = true)}
        onfocusout={() => (open = false)}
      />
      <PopoverContent popover="manual">
        <PopoverDialog>
          <PopoverHeading>Popover Title</PopoverHeading>
          <p class="mt-2 text-sm text-muted">
            This is the popover content. You can put any content here.
          </p>
        </PopoverDialog>
        <PopoverArrow />
      </PopoverContent>
    </Popover>
  {/snippet}
</Story>
