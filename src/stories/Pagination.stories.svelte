<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Pagination from "#lib/components/pagination/pagination.svelte";
  import PaginationContent from "#lib/components/pagination/pagination-content.svelte";
  import PaginationItem from "#lib/components/pagination/pagination-item.svelte";
  import PaginationLink from "#lib/components/pagination/pagination-link.svelte";
  import PaginationPrevious from "#lib/components/pagination/pagination-previous.svelte";
  import PaginationNext from "#lib/components/pagination/pagination-next.svelte";
  import PaginationEllipsis from "#lib/components/pagination/pagination-ellipsis.svelte";
  import PaginationPreviousIcon from "#lib/components/pagination/pagination-previous-icon.svelte";
  import PaginationNextIcon from "#lib/components/pagination/pagination-next-icon.svelte";
  import PaginationSummary from "#lib/components/pagination/pagination-summary.svelte";

  const { Story } = defineMeta({
    component: Pagination,
    tags: ["autodocs"],
  });
</script>

<Story name="Pagination" args={{ class: "w-full", total: 95, pageSize: 10 }}>
  <PaginationSummary>
    {#snippet children(p)}
      Showing {p.start}-{p.end} of {p.total} results
    {/snippet}
  </PaginationSummary>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious>
        <PaginationPreviousIcon />
        Prev
      </PaginationPrevious>
    </PaginationItem>
    <PaginationItem>
      {#snippet children(p)}
        {@const n = Math.max(p.page - 1, 1)}
        <PaginationLink page={n}>{n}</PaginationLink>
      {/snippet}
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      {#snippet children(p)}
        {@const n = Math.min(p.page + 1, p.pageCount)}
        <PaginationLink page={n}>{n}</PaginationLink>
      {/snippet}
    </PaginationItem>
    <PaginationItem>
      <PaginationNext>
        Next
        <PaginationNextIcon />
      </PaginationNext>
    </PaginationItem>
  </PaginationContent>
</Story>
