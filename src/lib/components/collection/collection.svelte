<script lang="ts" generics="T">
  import type { Snippet } from "svelte";
  import {
    observeIntersection,
    useAction,
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
    loadMore?: Fn<[{ offset: number }], MaybePromise<T[]>>;
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
  const more = useAction(async () => {
    if (!loadMore || more.loading) return;
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
    loadMore: more.run,
    loadingMore: more.loading,
    index,
    key: key(item),
  })}
{:else}
  {@render empty?.()}
{/each}

{#if hasMore && loadMore}
  {@render sentinel?.({
    loadMore: more.run,
    loadingMore: more.loading,
    attach: observeIntersection(({ isIntersecting }) => {
      if (
        isIntersecting &&
        !more.loading &&
        loadMore !== undefined &&
        hasMore &&
        !more.failed()
      ) more.run();
    }),
  })}
{/if}
