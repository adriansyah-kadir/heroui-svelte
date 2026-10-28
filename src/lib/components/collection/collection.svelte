<script lang="ts" generics="T">
  import type { Snippet } from "svelte";
  import {
    onView,
    useResource,
    type Fn,
    type MaybePromise,
  } from "@adriansyah/svelte-utils";
  import type { Attachment } from "svelte/attachments";

  type ChildProps = {
    item: T;
    isLast: boolean;
    loadMore: Fn;
    loadingMore: boolean;
    index: number;
    key: string;
  };

  type LoaderProps = {
    attach: Attachment<HTMLElement>;
    loadingMore: boolean;
    loadMore: Fn;
  };

  type Props = {
    items: T[];
    key?: (item: T) => string;
    loadMore?: Fn<MaybePromise<T[]>, [{ offset: number }]>;
    child: Snippet<[ChildProps]>;
    sentinel?: Snippet<[LoaderProps]>;
    empty?: Snippet;
  };

  let {
    items = $bindable(),
    key = String,
    loadMore,
    child,
    sentinel,
    empty,
  }: Props = $props();

  let hasMore = $state(true);
  const more = useResource(async () => {
    if (!loadMore || more.fetching) return;
    const offset = items.length;
    const values = await loadMore({ offset });
    hasMore = values.length > 0;
    items = [...items, ...values];
  });
</script>

{#each items as item, index (key(item))}
  {@const isLast = index === items.length - 1}
  {@render child({
    item,
    isLast,
    loadMore: more.refetch,
    loadingMore: more.fetching,
    index,
    key: key(item),
  })}
{:else}
  {@render empty?.()}
{/each}

{#if hasMore && loadMore}
  {@render sentinel?.({
    loadMore: more.refetch,
    loadingMore: more.fetching,
    attach: onView(({ isIntersecting }) => isIntersecting && more.refetch(), {
      enabled:
        !more.fetching && loadMore !== undefined && hasMore && !more.failed(),
    }),
  })}
{/if}
