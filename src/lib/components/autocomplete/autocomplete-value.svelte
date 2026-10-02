<script lang="ts">
  import { autocompleteVariants, tagVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import { CloseIcon, ListBoxContext, AutocompleteContext } from "#lib";
  import type { Snippet } from "svelte";

  const {
    children,
    placeholder,
    ...props
  }: Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
    children?: Snippet<[AutocompleteContext]>;
    placeholder?: string;
  } = $props();
  const autocomplete = AutocompleteContext.get();
  const listBox = ListBoxContext.get();
  const first = $derived(listBox.opts.selected.values().next().value);
  const tag = $derived(
    tagVariants({
      size: "sm",
      variant:
        autocomplete.heroui.variant === "secondary" ? "surface" : "default",
    }),
  );
</script>

<div
  class={autocompleteVariants().value({
    class: props.class?.toString(),
  })}
>
  {#if children}
    {@render children(autocomplete)}
  {:else}
    {@render DefaultChildren()}
  {/if}
</div>

{#snippet DefaultChildren()}
  {#if listBox.opts.multiple && first !== undefined}
    <div class="tag-group">
      <ul class="tag-group__list">
        {#each listBox.opts.selected?.values().toArray() as value}
          <span class={tag.base()}>
            {value}
            <button
              class={tag.removeButton()}
              onclick={(ev) => {
                ev.preventDefault();
                ev.stopPropagation();
                listBox.itemUnpick(value);
              }}
            >
              <CloseIcon />
            </button>
          </span>
        {/each}
      </ul>
    </div>
  {:else if first}
    {first}
  {:else}
    {placeholder ?? "-"}
  {/if}
{/snippet}
