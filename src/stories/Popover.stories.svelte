<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Popover from "#lib/components/popover/popover.svelte";
  import PopoverDialog from "#lib/components/popover/popover-dialog.svelte";
  import PopoverHeading from "#lib/components/popover/popover-heading.svelte";
  import PopoverArrow from "#lib/components/popover/popover-arrow.svelte";
  import PopoverContent from "#lib/components/popover/popover-content.svelte";
  import PopoverTrigger from "#lib/components/popover/popover-trigger.svelte";
  import Modal from "#lib/components/modal/modal.svelte";
  import { ModalContentTemplate, ModalTrigger } from "#lib";
  import ModalBody from "#lib/components/modal/modal-body.svelte";
  import Autocomplete from "#lib/components/autocomplete/autocomplete.svelte";
  import AutocompleteTrigger from "#lib/components/autocomplete/autocomplete-trigger.svelte";
  import AutocompleteIndicator from "#lib/components/autocomplete/autocomplete-indicator.svelte";
  import AutocompletePopover from "#lib/components/autocomplete/autocomplete-popover.svelte";

  const { Story } = defineMeta({
    component: Popover,
    tags: ["autodocs"],
  });
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

<Story name="Popover in modal">
  <Modal scroll="outside">
    <ModalTrigger>Show modal</ModalTrigger>
    <ModalContentTemplate>
      <ModalBody>
        <Autocomplete>
          <AutocompleteTrigger>
            <AutocompleteIndicator />
          </AutocompleteTrigger>
          <AutocompletePopover></AutocompletePopover>
        </Autocomplete>
      </ModalBody>
    </ModalContentTemplate>
  </Modal>
</Story>
