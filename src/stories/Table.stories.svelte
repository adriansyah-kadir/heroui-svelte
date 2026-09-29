<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Table from "#lib/components/table/table.svelte";
  import TableScrollContainer from "#lib/components/table/table-scroll-container.svelte";
  import TableHeader from "#lib/components/table/table-header.svelte";
  import TableContent from "#lib/components/table/table-content.svelte";
  import TableColumn from "#lib/components/table/table-column.svelte";
  import TableBody from "#lib/components/table/table-body.svelte";
  import TableRow from "#lib/components/table/table-row.svelte";
  import TableCell from "#lib/components/table/table-cell.svelte";
  import Checkbox from "#lib/components/checkbox/checkbox.svelte";
  import CheckboxContent from "#lib/components/checkbox/checkbox-content.svelte";
  import CheckboxControl from "#lib/components/checkbox/checkbox-control.svelte";
  import CheckboxIndicator from "#lib/components/checkbox/checkbox-indicator.svelte";
  import TableEmptyState from "#lib/components/table/table-empty-state.svelte";
  import SearchField from "#lib/components/search-field/search-field.svelte";
  import SearchFieldGroup from "#lib/components/search-field/search-field-group.svelte";
  import SearchFieldInput from "#lib/components/search-field/search-field-input.svelte";
  import Label from "#lib/components/label/label.svelte";
  import SearchFieldSearchIcon from "#lib/components/search-field/search-field-search-icon.svelte";
  import SearchFieldClearButton from "#lib/components/search-field/search-field-clear-button.svelte";
  import TableFooter from "#lib/components/table/table-footer.svelte";
  import Pagination from "#lib/components/pagination/pagination.svelte";
  import PaginationContent from "#lib/components/pagination/pagination-content.svelte";
  import PaginationItem from "#lib/components/pagination/pagination-item.svelte";
  import PaginationPrevious from "#lib/components/pagination/pagination-previous.svelte";
  import PaginationNext from "#lib/components/pagination/pagination-next.svelte";
  import PaginationPreviousIcon from "#lib/components/pagination/pagination-previous-icon.svelte";
  import PaginationNextIcon from "#lib/components/pagination/pagination-next-icon.svelte";
  import PaginationSummary from "#lib/components/pagination/pagination-summary.svelte";
  import Input from "#lib/components/input/input.svelte";
  import TextField from "#lib/components/text-field/text-field.svelte";
  import PaginationLink from "#lib/components/pagination/pagination-link.svelte";
  import ComboboxState from "#lib/hooks/combobox.svelte.ts";

  const { Story } = defineMeta({
    component: Table as any,
    tags: ["autodocs"],
    args: {
      selection: "multiple",
    },
  });

  let search = $state("");
  let page = $state<Pagination>();
  let pageSize = $state(10);
  const users = Array(100)
    .fill(0)
    .map((e, i) => ({
      id: i,
      name: crypto.randomUUID().slice(0, 5),
      email: crypto.randomUUID().slice(0, 6),
      role: crypto.randomUUID().slice(0, 3),
      status: crypto.randomUUID().slice(0, 5),
    }));

  const filtered = $derived(
    users.filter((user) =>
      user.name.trim().toLowerCase().includes(search.trim().toLowerCase()),
    ),
  );

  const paginated = $derived(
    filtered.slice((page?.pagination.start ?? 1) - 1, page?.pagination.end),
  );

  const list = $derived(
    new ComboboxState({
      initial: users.map((e) => [e.id.toString(), e] as const),
      multiple: true
    }),
  );
</script>

<div class="flex items-end gap-2">
  <SearchField class="mb-4 w-xs" bind:debounced={search}>
    <Label>Search</Label>
    <SearchFieldGroup>
      <SearchFieldSearchIcon />
      <SearchFieldInput placeholder="search name" />
      <SearchFieldClearButton />
    </SearchFieldGroup>
  </SearchField>
  <TextField bind:value={pageSize}>
    <Label>Page size</Label>
    <Input class="mb-4" placeholder="Page size" type="number" />
  </TextField>
</div>

<Story name="Table" args={{}}>
  <TableScrollContainer
    class="max-h-80 in-data-[empty=true]:min-h-30 overflow-y-auto"
  >
    <TableContent class="in-data-[empty=true]:h-full">
      <TableHeader>
        <TableColumn>
          <Checkbox
            checked={list.pickedall}
            onclick={(ev) => {
              ev.preventDefault();
              ev.stopPropagation();
              list.toggleall();
            }}
            disabled={!list.multiple}
          >
            <CheckboxContent>
              <CheckboxControl>
                <CheckboxIndicator />
              </CheckboxControl>
            </CheckboxContent>
          </Checkbox>
        </TableColumn>
        {#each ["ID", "Name", "Email", "Role", "Status"] as col}
          <TableColumn>{col}</TableColumn>
        {/each}
      </TableHeader>
      <TableBody>
        {#each paginated as user}
          {@const id = user.id.toString()}
          <TableRow onclick={() => list.toggle(id)} selected={list.picked(id)}>
            <TableCell>
              <Checkbox checked={list.picked(id)}>
                <CheckboxContent>
                  <CheckboxControl>
                    <CheckboxIndicator />
                  </CheckboxControl>
                </CheckboxContent>
              </Checkbox>
            </TableCell>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.status}</TableCell>
          </TableRow>
        {:else}
          <TableEmptyState />
        {/each}
      </TableBody>
    </TableContent>
  </TableScrollContainer>
  <TableFooter>
    <Pagination bind:this={page} {pageSize} total={filtered.length}>
      <PaginationSummary>
        Showing {page?.pagination.start}-{page?.pagination.end} of {page
          ?.pagination.total} results
      </PaginationSummary>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious>
            <PaginationPreviousIcon />
            Prev
          </PaginationPrevious>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>
            {page?.pagination.page}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext>
            Next
            <PaginationNextIcon />
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  </TableFooter>
</Story>
