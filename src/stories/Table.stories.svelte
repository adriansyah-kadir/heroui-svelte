<script module>
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
  import { getTableCombobox } from "#lib/components/table/table-context.svelte.ts";
  import TableEmptyState from "#lib/components/table/table-empty-state.svelte";
  import SearchField from "#lib/components/search-field/search-field.svelte";
  import SearchFieldGroup from "#lib/components/search-field/search-field-group.svelte";
  import SearchFieldInput from "#lib/components/search-field/search-field-input.svelte";
  import Label from "#lib/components/label/label.svelte";
  import SearchFieldSearchIcon from "#lib/components/search-field/search-field-search-icon.svelte";
  import SearchFieldClearButton from "#lib/components/search-field/search-field-clear-button.svelte";

  const { Story } = defineMeta({
    component: Table,
    tags: ["autodocs"],
    args: {
      selection: "multiple",
    },
  });

  let search = $state("");
  const users = [
    {
      email: "kate@acme.com",
      id: 1,
      name: "Kate Moore",
      role: "CEO",
      status: "Active",
    },
    {
      email: "john@acme.com",
      id: 2,
      name: "John Smith",
      role: "CTO",
      status: "Active",
    },
    {
      email: "sara@acme.com",
      id: 3,
      name: "Sara Johnson",
      role: "CMO",
      status: "On Leave",
    },
    {
      email: "michael@acme.com",
      id: 4,
      name: "Michael Brown",
      role: "CFO",
      status: "Active",
    },
    {
      email: "emily@acme.com",
      id: 5,
      name: "Emily Davis",
      role: "Product Manager",
      status: "Inactive",
    },
    {
      email: "davis@acme.com",
      id: 6,
      name: "Davis Wilson",
      role: "Lead Designer",
      status: "Active",
    },
    {
      email: "olivia@acme.com",
      id: 7,
      name: "Olivia Martinez",
      role: "Frontend Engineer",
      status: "Active",
    },
    {
      email: "james@acme.com",
      id: 8,
      name: "James Taylor",
      role: "Backend Engineer",
      status: "Active",
    },
    {
      email: "sophia@acme.com",
      id: 9,
      name: "Sophia Anderson",
      role: "QA Engineer",
      status: "On Leave",
    },
    {
      email: "liam@acme.com",
      id: 10,
      name: "Liam Thomas",
      role: "DevOps Engineer",
      status: "Active",
    },
    {
      email: "lucas@acme.com",
      id: 11,
      name: "Lucas Martinez",
      role: "Product Manager",
      status: "Active",
    },
    {
      email: "emma@acme.com",
      id: 12,
      name: "Emma Johnson",
      role: "Frontend Engineer",
      status: "Active",
    },
    {
      email: "noah@acme.com",
      id: 13,
      name: "Noah Davis",
      role: "Backend Engineer",
      status: "Active",
    },
    {
      email: "ava@acme.com",
      id: 14,
      name: "Ava Wilson",
      role: "Lead Designer",
      status: "Active",
    },
    {
      email: "oliver@acme.com",
      id: 15,
      name: "Oliver Martinez",
      role: "Frontend Engineer",
      status: "Active",
    },
    {
      email: "isabella@acme.com",
      id: 16,
      name: "Isabella Johnson",
      role: "Backend Engineer",
      status: "Active",
    },
    {
      email: "mia@acme.com",
      id: 17,
      name: "Mia Davis",
      role: "Lead Designer",
      status: "Active",
    },
    {
      email: "william@acme.com",
      id: 18,
      name: "William Wilson",
      role: "Frontend Engineer",
      status: "Active",
    },
  ];
</script>

<SearchField class="mb-4 w-xs" onvalue={(v) => (search = v)}>
  <Label>Search</Label>
  <SearchFieldGroup>
    <SearchFieldSearchIcon />
    <SearchFieldInput placeholder="search name" />
    <SearchFieldClearButton />
  </SearchFieldGroup>
</SearchField>

<Story name="Table" args={{}}>
  {@const combobox = getTableCombobox()}
  <TableScrollContainer
    class="max-h-80 in-data-[empty=true]:min-h-30 overflow-y-auto"
  >
    <TableContent class="in-data-[empty=true]:h-full">
      <TableHeader>
        <TableColumn>
          <Checkbox
            onclick={(ev) => {
              ev.preventDefault();
              ev.stopPropagation();
              combobox.toggleall();
            }}
            selected={combobox.pickedall}
            disabled={!combobox.multiple}
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
        {#each users.filter((e) => e.name
            .toLowerCase()
            .includes(search.toLowerCase())) as user}
          <TableRow value={user} id={user.id.toString()}>
            <TableCell>
              <Checkbox selected={combobox.picked(user.id.toString())}>
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
</Story>
