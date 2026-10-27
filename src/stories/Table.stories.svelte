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
  import TableEmptyState from "#lib/components/table/table-empty-state.svelte";
  import Label from "#lib/components/label/label.svelte";
  import TableFooter from "#lib/components/table/table-footer.svelte";
  import Pagination from "#lib/components/pagination/pagination.svelte";
  import Input from "#lib/components/input/input.svelte";
  import TextField from "#lib/components/text-field/text-field.svelte";
  import { PaginationState, Selectable } from "svelte-utils";

  const { Story } = defineMeta({
    component: Table as any,
    tags: ["autodocs"],
    args: {
      selection: "multiple",
    },
  });

  let search = $state("");
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
  let page = new PaginationState({
    total: () => users.length,
    pageSize: () => pageSize,
  });

  const filtered = $derived(
    users.filter((user) =>
      user.name.trim().toLowerCase().includes(search.trim().toLowerCase()),
    ),
  );

  const paginated = $derived(filtered.slice(page.start - 1, page.end));
</script>

<script>
  import SearchInput from "#lib/components/search-input/search-input.svelte";

  const list = new Selectable({
    initialOptions: users.map((e) => [e.id.toString(), e] as const),
    multiple: () => true,
  });
</script>

<div class="flex items-end gap-2">
  <TextField class="mb-4 w-xs">
    <Label>Search</Label>
    <SearchInput bind:debounced={search} />
  </TextField>
  <TextField bind:value={pageSize}>
    <Label>Page size</Label>
    <Input class="mb-4" placeholder="Page size" type="number" />
  </TextField>
</div>

<Story name="Table">
  <TableScrollContainer
    class="max-h-80 in-data-[empty=true]:min-h-30 overflow-y-auto"
  >
    <TableContent class="in-data-[empty=true]:h-full relative">
      <TableHeader class="sticky top-0 z-999">
        <TableColumn>
          <Checkbox
            checked={list.isAllSelected}
            onclick={(ev) => {
              ev.preventDefault();
              ev.stopPropagation();
              list.toggleAll();
            }}
            disabled={!list.multiple}
          />
        </TableColumn>
        {#each ["ID", "Name", "Email", "Role", "Status"] as col}
          <TableColumn>{col}</TableColumn>
        {/each}
      </TableHeader>
      <TableBody>
        {#each paginated as user}
          {@const id = user.id.toString()}
          <TableRow
            onclick={() => list.toggle(id)}
            selected={list.isSelected(id)}
          >
            <TableCell>
              <Checkbox checked={list.isSelected(id)} />
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
    <Pagination
      bind:page={page.page}
      pageSize={page.pageSize}
      total={page.total}
    />
  </TableFooter>
</Story>
